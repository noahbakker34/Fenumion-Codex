// Public artwork only: keeper-only records remain outside this collection.
window.fenumionArtRecords = function() {
  const records = [], seen = new Set();
  const mapImages = new Set(interactiveMaps.map(map => map.image));
  const add = (image, title, caption, article) => {
    if (!image || image.startsWith('data:') || seen.has(image) || isRestrictedArticle(article) || !byId.has(article)) return;
    seen.add(image);
    const kind = mapImages.has(image) || /map|sigil|timeline|\bplan\b|diagram/i.test(`${image} ${title}`) ? 'Maps & plans' : 'Locations';
    records.push({image, title, caption: caption || title, article, kind});
  };
  for (const article of articles) {
    if (isRestrictedArticle(article.id) || !isLocationArticle(article)) continue;
    add(article.image, article.title, article.imageCaption, article.id);
    for (const item of article.gallery || []) add(item.image, item.title || article.title, item.caption, article.id);
    for (const scene of article.scenes || []) add(scene.poster, scene.title, scene.caption, article.id);
  }
  return [...records.filter(entry => entry.kind === 'Locations'), ...records.filter(entry => entry.kind === 'Maps & plans')];
};
// A slow, native horizontal opening lets readers pause, swipe and follow a place.
window.setupFenumionLocationScroll = function(root, entries) {
  const mapImages = new Set(interactiveMaps.map(map => map.image));
  const groups = new Map();
  for (const entry of entries) {
    if (entry.kind !== 'Locations' || mapImages.has(entry.image) || /map|sigil|timeline|\bplan\b|diagram/i.test(`${entry.image} ${entry.title}`)) continue;
    if (!groups.has(entry.article)) groups.set(entry.article, []);
    groups.get(entry.article).push(entry);
  }
  const places = [];
  // Give different places a turn before showing another view of the same location.
  for (let round = 0; places.length < 16; round++) {
    let added = false;
    for (const group of groups.values()) if (group[round] && places.length < 16) { places.push(group[round]); added = true; }
    if (!added) break;
  }
  if (!places.length) return;
  const opening = document.createElement('section');
  opening.className = 'art-location-opening';
  opening.setAttribute('aria-label', 'Locations of Fenumion');
  const tile = (entry, duplicate = false) => `<a class="art-location-tile"${duplicate ? ' tabindex="-1"' : ''} href="#${escapeHtml(entry.article)}"><img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" loading="lazy" decoding="async"><span>${escapeHtml(entry.title)}</span></a>`;
  opening.innerHTML = `<div class="art-location-heading"><p class="eyebrow">Locations of Fenumion</p><button type="button" data-location-scroll-pause aria-pressed="false">Pause scroll</button></div><div class="art-location-viewport" tabindex="0" aria-label="Location artwork; scroll sideways to explore"><div class="art-location-track"><div class="art-location-group">${places.map(entry => tile(entry)).join('')}</div><div class="art-location-group" aria-hidden="true">${places.map(entry => tile(entry, true)).join('')}</div></div></div>`;
  root.prepend(opening);
  const viewport = opening.querySelector('.art-location-viewport');
  const group = opening.querySelector('.art-location-group');
  const pause = opening.querySelector('[data-location-scroll-pause]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let manualPause = motion.matches, hovering = false, focused = false, visible = false;
  let frame = 0, lastTime = 0, position = 0;
  const canMove = () => !manualPause && !hovering && !focused && visible && !document.hidden && opening.isConnected;
  function tick(time) {
    frame = 0;
    if (!canMove()) { lastTime = 0; return; }
    if (!lastTime) position = viewport.scrollLeft;
    const elapsed = lastTime ? Math.min(time - lastTime, 100) : 0;
    lastTime = time;
    position += elapsed * .024;
    if (position >= group.offsetWidth) position -= group.offsetWidth;
    viewport.scrollLeft = position;
    frame = requestAnimationFrame(tick);
  }
  function refresh() {
    pause.textContent = manualPause ? 'Resume scroll' : 'Pause scroll';
    pause.setAttribute('aria-pressed', String(manualPause));
    if (canMove() && !frame) { lastTime = 0; frame = requestAnimationFrame(tick); }
    else if (!canMove() && frame) { cancelAnimationFrame(frame); frame = 0; lastTime = 0; }
  }
  pause.addEventListener('click', () => { manualPause = !manualPause; refresh(); });
  viewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovering = true; refresh(); } });
  viewport.addEventListener('pointerleave', () => { hovering = false; refresh(); });
  viewport.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') { manualPause = true; refresh(); } });
  viewport.addEventListener('wheel', event => { if (Math.abs(event.deltaX) > 0 || event.shiftKey) { manualPause = true; refresh(); } }, {passive: true});
  viewport.addEventListener('focusin', () => { focused = true; refresh(); });
  viewport.addEventListener('focusout', event => { focused = viewport.contains(event.relatedTarget); refresh(); });
  const changeMotion = event => { manualPause = event.matches; refresh(); };
  motion.addEventListener('change', changeMotion);
  document.addEventListener('visibilitychange', refresh);
  const observer = new IntersectionObserver(entries => { visible = entries.some(entry => entry.isIntersecting); refresh(); });
  observer.observe(opening);
  refresh();
  window.cleanupFenumionArt = () => {
    cancelAnimationFrame(frame); frame = 0;
    observer.disconnect();
    motion.removeEventListener('change', changeMotion);
    document.removeEventListener('visibilitychange', refresh);
    window.cleanupFenumionArt = null;
  };
};

window.setupFenumionArt = function(root) {
  const shell = root.querySelector('[data-art-gallery]');
  if (!shell) return;
  const entries = window.fenumionArtRecords();
  window.setupFenumionLocationScroll(root, entries);
  const query = shell.querySelector('[data-art-query]');
  const grid = shell.querySelector('[data-art-grid]'), count = shell.querySelector('[data-art-count]');
  const previous = shell.querySelector('[data-art-previous]'), next = shell.querySelector('[data-art-next]');
  const pageLabel = shell.querySelector('[data-art-page]');
  const normalize = text => normalizeSearchName(text);
  const texts = new Map(entries.map(entry => [entry, normalize(`${entry.title} ${entry.caption}`)]));
  let page = 0, timer;
  const pageSize = 12;
  function render() {
    const terms = normalize(query.value).split(' ').filter(Boolean);
    const found = entries.filter(entry => terms.every(term => texts.get(entry).includes(term)));
    const pages = Math.max(1, Math.ceil(found.length / pageSize)); page = Math.min(page, pages - 1);
    count.textContent = `${found.length} location images`;
    grid.innerHTML = found.slice(page * pageSize, (page + 1) * pageSize).map(entry => `<figure class="fenumion-art-card"><a href="${escapeHtml(entry.image)}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(entry.title)} at full size"><img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" loading="lazy" decoding="async"></a><figcaption><small>${escapeHtml(entry.kind)}</small><h3>${escapeHtml(entry.title)}</h3>${entry.caption !== entry.title ? `<p>${escapeHtml(entry.caption)}</p>` : ''}<a href="#${escapeHtml(entry.article)}">Read the story →</a></figcaption></figure>`).join('') || '<p>No artwork matches your search.</p>';
    previous.disabled = page === 0; next.disabled = page >= pages - 1;
    pageLabel.textContent = `Page ${page + 1} of ${pages}`;
    window.FenumionCalendar.render(shell);
  }
  query.addEventListener('input', () => {clearTimeout(timer); timer = setTimeout(() => {page = 0; if(shell.isConnected) render();}, 120);});
  previous.addEventListener('click', () => {page--; render(); grid.focus({preventScroll:true});});
  next.addEventListener('click', () => {page++; render(); grid.focus({preventScroll:true});});
  render();
};

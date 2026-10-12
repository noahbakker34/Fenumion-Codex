// Public artwork only: keeper-only records remain outside this collection.
window.fenumionArtRecords = function() {
  const records = [], seen = new Set();
  const add = (image, title, caption, article, kind) => {
    if (!image || image.startsWith('data:') || seen.has(image) || isRestrictedArticle(article) || !byId.has(article)) return;
    seen.add(image); records.push({image, title, caption: caption || title, article, kind});
  };
  for (const person of [...archiveIndex.characters, ...archiveIndex.npcs]) {
    const article = byId.get(person.article);
    if (!article || isRestrictedArticle(person.article)) continue;
    add(person.image || article.image, person.title, person.imageCaption || article.imageCaption, article.id, 'Characters');
  }
  for (const article of articles) {
    if (isRestrictedArticle(article.id)) continue;
    const kind = isLocationArticle(article) ? 'Places & maps' : 'Characters';
    if (isLocationArticle(article)) add(article.image, article.title, article.imageCaption, article.id, kind);
    for (const item of article.gallery || []) add(item.image, item.title || article.title, item.caption, article.id, kind);
    for (const scene of article.scenes || []) add(scene.poster, scene.title, scene.caption, article.id, 'Scenes');
  }
  for (const item of communityCharacterArt) add(item.image, item.title, 'Character artwork by Ececilia.', item.article, 'Community art');
  return records;
};
window.setupFenumionArt = function(root) {
  const shell = root.querySelector('[data-art-gallery]');
  if (!shell) return;
  const entries = window.fenumionArtRecords();
  const query = shell.querySelector('[data-art-query]'), category = shell.querySelector('[data-art-kind]');
  const grid = shell.querySelector('[data-art-grid]'), count = shell.querySelector('[data-art-count]');
  const previous = shell.querySelector('[data-art-previous]'), next = shell.querySelector('[data-art-next]');
  const pageLabel = shell.querySelector('[data-art-page]');
  const normalize = text => normalizeSearchName(text);
  const texts = new Map(entries.map(entry => [entry, normalize(`${entry.title} ${entry.caption}`)]));
  let page = 0, timer;
  const pageSize = 24;
  function render() {
    const terms = normalize(query.value).split(' ').filter(Boolean);
    const found = entries.filter(entry => (!category.value || entry.kind === category.value) && terms.every(term => texts.get(entry).includes(term)));
    const pages = Math.max(1, Math.ceil(found.length / pageSize)); page = Math.min(page, pages - 1);
    count.textContent = `${found.length} works of art`;
    grid.innerHTML = found.slice(page * pageSize, (page + 1) * pageSize).map(entry => `<figure class="fenumion-art-card"><a href="${escapeHtml(entry.image)}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(entry.title)} at full size"><img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" loading="lazy" decoding="async"></a><figcaption><small>${escapeHtml(entry.kind)}</small><h3>${escapeHtml(entry.title)}</h3>${entry.caption !== entry.title ? `<p>${escapeHtml(entry.caption)}</p>` : ''}<a href="#${escapeHtml(entry.article)}">Read the story →</a></figcaption></figure>`).join('') || '<p>No artwork matches your search.</p>';
    previous.disabled = page === 0; next.disabled = page >= pages - 1;
    pageLabel.textContent = `Page ${page + 1} of ${pages}`;
  }
  query.addEventListener('input', () => {clearTimeout(timer); timer = setTimeout(() => {page = 0; if(shell.isConnected) render();}, 120);});
  category.addEventListener('change', () => {page = 0; render();});
  previous.addEventListener('click', () => {page--; render(); grid.focus({preventScroll:true});});
  next.addEventListener('click', () => {page++; render(); grid.focus({preventScroll:true});});
  render();
};

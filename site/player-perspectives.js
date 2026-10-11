/* Browse the supplied index without turning testimony into an event chronicle. */
window.setupPlayerPerspectives = function(root) {
  const entries = window.FENUMION_PLAYER_PERSPECTIVES?.entries || [];
  const shell = root.querySelector('[data-player-perspectives]');
  if (!shell) return;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  const query = shell.querySelector('[data-notes-query]');
  const year = shell.querySelector('[data-notes-year]');
  const region = shell.querySelector('[data-notes-region]');
  const form = shell.querySelector('[data-notes-form]');
  const sort = shell.querySelector('[data-notes-sort]');
  const results = shell.querySelector('[data-notes-results]');
  const count = shell.querySelector('[data-notes-count]');
  const previous = shell.querySelector('[data-notes-previous]');
  const next = shell.querySelector('[data-notes-next]');
  const pageLabel = shell.querySelector('[data-notes-page]');
  const forms = {
    'Player-authored research / commentary': 'Research & commentary',
    'External-link pointer / incomplete source': 'External pointer · incomplete',
    'Player-authored story note / testimony': 'Story note & testimony',
    'In-character journal / testimony': 'Journal & testimony',
    'Player-authored after-action summary': 'After-action summary',
    'In-world institutional document': 'Institutional document',
    'In-world public argument / polemic': 'Public argument'
  };
  const populate = (select, values, labels={}) => values.forEach(value => {
    const option = document.createElement('option');
    option.value = value; option.textContent = labels[value] || value; select.append(option);
  });
  populate(year, [...new Set(entries.map(entry => entry.posted.slice(0,4)))].sort().reverse());
  populate(region, [...new Set(entries.flatMap(entry => entry.regions))].sort());
  populate(form, [...new Set(entries.map(entry => entry.form))].sort(), forms);
  const searchable = new Map(entries.map(entry => [entry.id, normalize([entry.author, entry.excerpt, entry.posted, entry.form, ...entry.regions, ...entry.topics].join(' '))]));
  let page = 0;
  const perPage = 18;
  function render() {
    const terms = normalize(query.value.trim()).split(/\s+/).filter(Boolean);
    const matches = entries.filter(entry =>
      (!year.value || entry.posted.startsWith(year.value)) &&
      (!region.value || entry.regions.includes(region.value)) &&
      (!form.value || entry.form === form.value) &&
      terms.every(term => searchable.get(entry.id).includes(term))
    ).sort((a,b) => sort.value === 'oldest' ? a.posted.localeCompare(b.posted) || a.id.localeCompare(b.id) : b.posted.localeCompare(a.posted) || b.id.localeCompare(a.id));
    const pages = Math.max(1, Math.ceil(matches.length / perPage));
    page = Math.min(page, pages - 1);
    const first = page * perPage;
    const shown = matches.slice(first, first + perPage);
    count.textContent = matches.length ? `${matches.length} of ${entries.length} indexed posts · showing ${first + 1}–${first + shown.length}` : `No matching posts in the ${entries.length}-entry index.`;
    results.innerHTML = shown.map(entry => `<article class="perspective-card" aria-label="Note by ${escape(entry.author)}, posted ${entry.posted}">
      <div class="perspective-meta"><span>${escape(forms[entry.form] || entry.form)}</span><span>Posted <time datetime="${entry.posted}">${escape(new Date(entry.posted+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}))}</time></span></div>
      <h3>${escape(entry.author)}</h3>
      <p class="perspective-excerpt-label">Index excerpt</p><p class="perspective-excerpt">${escape(entry.excerpt)}</p>
      <div class="perspective-tags" aria-label="Index topic labels">${[...entry.regions, ...entry.topics].map(tag => `<span>${escape(tag)}</span>`).join('')}</div>
      ${entry.incomplete ? '<p class="perspective-incomplete">Linked or attached content is not included in this index.</p>' : ''}
      <a class="perspective-source" href="${escape(entry.url)}" target="_blank" rel="noopener noreferrer">Read source message on Discord ↗<span class="sr-only"> · ${escape(entry.author)}, posted ${entry.posted}</span></a>
    </article>`).join('') || '<p class="perspective-empty">Try another name, topic or year, or clear the filters.</p>';
    previous.disabled = page === 0; next.disabled = page === pages - 1;
    pageLabel.textContent = `Page ${page + 1} of ${pages}`;
  }
  const resetPage = () => { page = 0; render(); };
  query.addEventListener('input', resetPage);
  [year, region, form, sort].forEach(select => select.addEventListener('change', resetPage));
  shell.querySelector('[data-notes-clear]').addEventListener('click', () => {
    query.value = ''; year.value = ''; region.value = ''; form.value = ''; sort.value = 'newest'; resetPage(); query.focus();
  });
  const changePage = step => {
    page += step; render();
    results.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    results.focus({preventScroll:true});
  };
  previous.addEventListener('click', () => changePage(-1));
  next.addEventListener('click', () => changePage(1));
  render();
};

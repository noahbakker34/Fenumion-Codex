/* A separate Codex runtime: no Fenumion records, authentication or private data. */
(() => {
  'use strict';
  const data = window.GedankinData;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sections = [
    {id:'people-directory', key:'characters', title:'Characters', glyph:'♙', description:'The people who shape this world', empty:'Gedankin’s characters will appear here as their stories are added.'},
    {id:'living-timeline', key:'events', title:'Timeline', glyph:'⌛', description:'Events and their consequences', empty:'Gedankin’s history will take shape here as events are recorded.'},
    {id:'location-directory', key:'locations', title:'Locations', glyph:'⌖', description:'Places, settlements and maps', empty:'Gedankin’s places and maps will appear here as they are added.'},
    {id:'factions', key:'factions', title:'Factions', glyph:'⚑', description:'Alliances, orders and rivalries', empty:'Gedankin’s factions will appear here as their records are added.'},
    {id:'memorable-quotes', key:'quotes', title:'Quotes', glyph:'❞', description:'Words the world remembers', empty:'Memorable words from Gedankin will be collected here with their speakers.'},
    {id:'rules-2024', title:'Rules', glyph:'◇', description:'The 2024 ruleset'}
  ];
  const articles = [...data.articles];
  for (const section of sections.filter(s => s.key)) {
    for (const record of data[section.key]) {
      if (section.key !== 'quotes') articles.push({...record, category:section.title, type:record.type || section.title, tags:record.tags || [], facts:record.facts || {}, body:record.body || `<p>${esc(record.summary)}</p>`});
    }
    articles.push({id:section.id,title:section.title,category:'World index',type:'Gedankin · '+section.title,dek:section.description,tags:['Gedankin','2024 ruleset'],facts:{World:'Gedankin',Records:String(data[section.key].length)}, section});
  }
  const byId = new Map(articles.map(a => [a.id,a]));
  const content = document.querySelector('#article-content');
  const sidebar = document.querySelector('#sidebar');
  const menu = document.querySelector('#menu-button');
  const search = document.querySelector('#search');
  const panel = document.querySelector('#search-panel');
  const worldSearch = document.querySelector('#world-search');
  const scrim = document.querySelector('#scrim');
  let filter = 'all';
  const filterKeys = {character:'characters',location:'locations',timeline:'events',quote:'quotes'};
  document.querySelector('#navigation').innerHTML = sections.map(s => `<section class="nav-region"><button class="nav-region-link" type="button" data-article="${s.id}" data-label="${s.title}" aria-label="${s.title}"><span class="nav-region-glyph" aria-hidden="true">${s.glyph}</span><strong>${s.title}</strong><span>›</span></button></section>`).join('');
  const empty = section => `<div class="gedankin-empty"><strong>No ${esc(section.title.toLowerCase())} recorded yet</strong><p>${esc(section.empty)}</p></div>`;
  const cards = records => `<div class="gedankin-records">${records.map(r => `<a class="gedankin-record" href="#${esc(r.id)}"><strong>${esc(r.title)}</strong>${r.meta ? `<small> · ${esc(r.meta)}</small>` : ''}<p>${esc(r.summary || r.dek || '')}</p></a>`).join('')}</div>`;
  function quoteCards(records) {
    return [...new Set(records.map(q=>q.group || 'Memorable words'))].map(group => `<h2>${esc(group)}</h2><div class="quote-gallery">${records.filter(q=>(q.group || 'Memorable words')===group).map(q=>`<div class="quote-card"><blockquote>“${esc(q.text)}”</blockquote><cite>${esc(q.speaker)}</cite>${q.article && byId.has(q.article) ? `<a href="#${esc(q.article)}">Read their story →</a>` : ''}${q.audio ? `<audio controls preload="none" src="${esc(q.audio)}"></audio>` : ''}</div>`).join('')}</div>`).join('');
  }
  function home() {
    return `<div class="article-body"><section class="gateway-hero"><div class="gateway-hero-inner"><div class="gateway-sigil"><img src="sigil.svg" alt=""></div><p class="gateway-overline">A connected world · 2024 ruleset</p><h1>Gedankin</h1><p>Another world. A connected chronicle.<br>Discover its people, places and the history they leave behind.</p><label class="gateway-search"><span aria-hidden="true">⌕</span><span class="sr-only">Search Gedankin</span><input id="gateway-search" type="search" placeholder="Search Gedankin…" autocomplete="off"><kbd>/</kbd></label></div></section><section class="gateway-categories" aria-label="Explore Gedankin">${sections.map(s=>`<button class="gateway-tile" type="button" data-article="${s.id}"><span>${s.title}</span><small>${s.description}</small></button>`).join('')}</section><div class="gateway-section-title"><span></span><h2>A world of its own</h2><span></span></div><section class="gateway-featured" aria-label="Begin in Gedankin"><button class="feature-card gedankin-feature" type="button" data-article="oasis"><small>A refuge</small><strong>Cala’s Oasis</strong><p>The gathering place from which the company ventures into the desert.</p></button><button class="feature-card gedankin-feature" type="button" data-article="khars-madar"><small>The city</small><strong>Khars Madar</strong><p>Three rival houses, a dangerous arena and lives rebuilt in the Free Quarter.</p></button><button class="feature-card gedankin-feature" type="button" data-article="living-timeline"><small>The chronicle</small><strong>From shore to mountain</strong><p>Follow the company’s arrival, costly battles and the rescue of the kobolds.</p></button></section><p class="gateway-index-intro">Part of a connected world. <a href="/#world-index">Visit Fenumion →</a></p></div>`;
  }
  function closePanels() {
    sidebar.classList.remove('open'); panel.hidden=true; scrim.hidden=true;
    document.body.classList.remove('panels-open','search-open'); menu.setAttribute('aria-expanded','false');
  }
  function render() {
    closePanels();
    document.querySelectorAll('audio, video').forEach(media=>media.pause());
    const id=location.hash.slice(1) || 'world-index';
    const article=byId.get(id);
    const isHome=id==='world-index';
    document.body.classList.toggle('home-view',isHome);
    document.title=`${isHome ? 'World index' : article?.title || 'Record not found'} — The Gedankin Codex`;
    document.querySelector('#breadcrumbs').textContent=isHome ? '' : 'Gedankin · '+(article?.category || 'Archive');
    document.querySelectorAll('#navigation [data-article]').forEach(link=>{const active=link.dataset.article===id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
    if(isHome) content.innerHTML=home();
    else if(!article) content.innerHTML='<header class="article-header"><h1>Record not found</h1><p class="dek">This record is not in the Gedankin Codex.</p></header><div class="article-body"><p><a href="#world-index">Return to the world index →</a></p></div>';
    else {
      let body=article.body || '';
      if(article.section) {const records=data[article.section.key];body=records.length ? (article.section.key==='quotes' ? quoteCards(records) : cards([...records].sort((a,b)=>article.section.key==='events' ? String(a.sort || '').localeCompare(String(b.sort || '')) : a.title.localeCompare(b.title)))) : empty(article.section);}
      if (!article.section && article.category !== 'Timeline') {
        const names = [article.title, ...(article.tags || [])].map(name=>name.toLocaleLowerCase());
        const related = data.events.filter(event=>[...(event.people || []),event.location || ''].some(name=>names.includes(name.toLocaleLowerCase())));
        if (related.length) body += '<h2>In the chronicle</h2>'+cards(related);
      }
      if (article.section?.key === 'events') body = '<p class="gedankin-date-note">Dates below are UTC message posting dates. In-world dates have not been established. This chronicle covers selected reviewed scenes; it is not a complete account of every session.</p>'+body;
      const facts=Object.entries(article.facts || {}).map(([k,v])=>`<div class="fact"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
      content.innerHTML=`<header class="article-header"><p class="article-kicker">${esc(article.type)}</p><h1>${esc(article.title)}</h1><p class="dek">${esc(article.dek || '')}</p><div class="article-meta">${(article.tags || []).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></header>${article.video ? `<figure class="article-hero ${esc(article.imageLayout || '')}"><video controls muted loop playsinline preload="metadata" ${matchMedia('(prefers-reduced-motion: reduce)').matches ? '' : 'autoplay'} poster="${esc(article.poster || '')}" aria-label="${esc(article.imageAlt || article.title)}"><source src="${esc(article.video)}" type="video/mp4">Your browser does not support this video. <a href="${esc(article.video)}">Watch ${esc(article.title)}</a></video>${article.imageCaption ? `<figcaption>${esc(article.imageCaption)}</figcaption>` : ''}</figure>` : article.image ? `<figure class="article-hero ${esc(article.imageLayout || "")}"><img src="${esc(article.image)}" alt="${esc(article.imageAlt || article.title)}">${article.imageCaption ? `<figcaption>${esc(article.imageCaption)}</figcaption>` : ''}</figure>` : ''}<div class="lead-grid"><div class="article-body">${body}${article.sources?.length ? `<details class="gedankin-sources"><summary>Sources</summary><ul>${article.sources.map(source=>`<li>${esc(source)}</li>`).join('')}</ul></details>` : ''}</div><dl class="infobox"><h2 class="infobox-title">At a glance</h2>${facts}</dl></div>`;
    }
    const headings=[...content.querySelectorAll('.article-body h2, .article-body h3')].filter(e=>!e.closest('.gateway-section-title'));
    const toc=headings.map((h,i)=>{if(!h.id)h.id='section-'+i;return `<a href="#${esc(id)}" data-section="${esc(h.id)}">${esc(h.textContent)}</a>`;}).join('');
    document.querySelector('#contents').innerHTML=toc;
    document.querySelector('#mobile-contents-links').innerHTML=toc;
    document.querySelector('#mobile-contents').hidden=isHome || !headings.length;
    window.scrollTo({top:0,behavior:'instant'});
  }
  function runSearch(query='') {
    search.value=query; worldSearch.value=query;
    sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');
    document.body.classList.add('search-open','panels-open');panel.hidden=false;scrim.hidden=false;
    const needle=query.trim().toLocaleLowerCase();
    let pool=filter==='all' ? articles : data[filterKeys[filter]];
    if(filter==='all') pool=[...pool,...data.quotes.map(q=>({...q,title:q.speaker,summary:q.text,id:q.article || 'memorable-quotes',category:'Quotes'}))];
    const results=pool.filter(a=>`${a.title || a.speaker} ${a.summary || ''} ${a.dek || ''} ${(a.tags || []).join(' ')} ${String(a.body || '').replace(/<[^>]*>/g,' ')} ${a.text || ''} ${a.group || ''} ${a.meta || ''} ${a.location || ''} ${(a.people || []).join(' ')} ${Object.values(a.facts || {}).join(' ')}`.toLocaleLowerCase().includes(needle));
    document.querySelector('#search-count').textContent=`${results.length} ${results.length===1?'result':'results'} in Gedankin`;
    document.querySelector('#search-results').innerHTML=results.length ? results.map(a=>`<button type="button" class="search-result" data-article="${esc(a.id || a.article || 'memorable-quotes')}"><small>${esc(a.category || 'Gedankin')}</small><strong>${esc(a.title || a.speaker)}</strong><p>${esc(a.summary || a.dek || a.text || '')}</p></button>`).join('') : '<p class="gedankin-empty">No matching records in Gedankin yet.</p>';
  }
  document.addEventListener('click',event=>{
    const article=event.target.closest('[data-article]');if(article){const hash='#'+article.dataset.article;if(location.hash===hash)render();else location.hash=hash;return;}
    const section=event.target.closest('[data-section]');if(section){event.preventDefault();document.getElementById(section.dataset.section)?.scrollIntoView({behavior:'smooth'});return;}
    const choice=event.target.closest('[data-search-filter]');if(choice){filter=choice.dataset.searchFilter;document.querySelectorAll('[data-search-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===choice)));runSearch(search.value);}
  });
  document.addEventListener('input',event=>{if(event.target===search || event.target===worldSearch || event.target.id==='gateway-search'){runSearch(event.target.value);if(event.target.id==='gateway-search')worldSearch.focus();}});
  document.querySelector('#search-toggle').addEventListener('click',()=>{runSearch();worldSearch.focus();});
  document.querySelector('#close-search').addEventListener('click',closePanels);
  scrim.addEventListener('click',closePanels);
  menu.addEventListener('click',()=>{const open=!sidebar.classList.contains('open');closePanels();sidebar.classList.toggle('open',open);scrim.hidden=!open;document.body.classList.toggle('panels-open',open);menu.setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closePanels();if(event.key==='/' && !event.ctrlKey && !event.metaKey && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();runSearch();worldSearch.focus();}});
  matchMedia('(max-width: 760px)').addEventListener('change',closePanels);
  window.addEventListener('hashchange',render);
  render();
})();

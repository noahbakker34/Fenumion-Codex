/* A separate Codex runtime: no Fenumion records, authentication or private data. */
(() => {
  'use strict';
  const data = window.GedankinData;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const background = document.querySelector('#world-background');
  const backgroundToggle = document.querySelector('#background-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let animateBackground = !reducedMotion.matches;
  let backgroundAsset = '';
  function selectBackground(id) {
    const characters = id === 'people-directory' || data.characters.some(record=>record.id === id);
    const timeline = id === 'living-timeline' || data.events.some(record=>record.id === id);
    const locations = id === 'location-directory' || id === 'world-map' || id === 'geography-of-gedankin' || data.locations.some(record=>record.id === id);
    const quotes = id === 'memorable-quotes';
    const overview = id === 'about-gedankin';
    const factions = id === 'factions' || data.factions.some(record=>record.id === id);
    const asset = factions ? 'gedankin-factions' : overview ? 'gedankin-overview' : quotes ? 'gedankin-quotes' : locations ? 'gedankin-locations' : timeline ? 'gedankin-timeline' : characters ? 'gedankin-characters' : 'gedankin-night-sky';
    document.body.classList.toggle('characters-background', characters);
    document.body.classList.toggle('timeline-background', timeline);
    document.body.classList.toggle('locations-background', locations);
    document.body.classList.toggle('quotes-background', quotes);
    document.body.classList.toggle('overview-background', overview);
    document.body.classList.toggle('factions-background', factions);
    if (backgroundAsset === asset) return;
    backgroundAsset = asset;
    background.pause();
    background.removeAttribute('src');
    background.poster = 'assets/'+asset+'.jpg';
    background.parentElement.style.backgroundImage = 'url("assets/'+asset+'.jpg")';
    background.load();
    updateBackground();
  }
  function updateBackground() {
    if (animateBackground && !document.hidden) {
      if (!background.getAttribute('src')) background.src = 'assets/'+backgroundAsset+'.mp4';
      background.play().catch(error=>{ if(error.name !== 'AbortError') { animateBackground=false; updateBackground(); } });
    } else background.pause();
    const playing = animateBackground && !background.paused;
    backgroundToggle.textContent = playing ? 'Pause motion' : 'Play motion';
    backgroundToggle.setAttribute('aria-label', playing ? 'Pause background animation' : 'Play background animation');
  }
  background.addEventListener('playing', updateBackgroundLabel);
  background.addEventListener('pause', updateBackgroundLabel);
  function updateBackgroundLabel() {
    const playing = !background.paused;
    backgroundToggle.textContent = playing ? 'Pause motion' : 'Play motion';
    backgroundToggle.setAttribute('aria-label', playing ? 'Pause background animation' : 'Play background animation');
  }
  backgroundToggle.addEventListener('click',()=>{animateBackground=!animateBackground;updateBackground();});
  reducedMotion.addEventListener('change',()=>{animateBackground=!reducedMotion.matches;updateBackground();});
  document.addEventListener('visibilitychange',updateBackground);
  const sections = [
    {id:'people-directory', key:'characters', title:'Characters', glyph:'♙', description:'The people who shape this world', empty:'Gedankin’s characters will appear here as their stories are added.'},
    {id:'living-timeline', key:'events', title:'Timeline', glyph:'◷', description:'Events and their consequences', empty:'Gedankin’s history will take shape here as events are recorded.'},
    {id:'location-directory', key:'locations', title:'Locations', glyph:'⌖', description:'Places, settlements and maps', empty:'Gedankin’s places and maps will appear here as they are added.'},
    {id:'factions', key:'factions', title:'Factions', glyph:'⚑', description:'Alliances, orders and rivalries', empty:'Gedankin’s factions will appear here as their records are added.'},
    {id:'memorable-quotes', key:'quotes', title:'Quotes', glyph:'❞', description:'Words the world remembers', empty:'Memorable words from Gedankin will be collected here with their speakers.'},
    {id:'about-gedankin', title:'Guide', glyph:'◇', description:'World, play and the chronicle'}
  ];
  for (const key of ["articles", "characters", "locations", "events", "factions"]) data[key].forEach(window.cleanCodexRecord);
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
  const filterKeys = {character:'characters',location:'locations',timeline:'events',quote:'quotes',faction:'factions'};
  // Index visible text once, including aliases, facts and the complete story.
  const normalizeSearch = value => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase().replace(/['’]/g,'').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
  const textOnly = html => {const node=document.createElement('div');node.innerHTML=String(html || '').replace(/<\/(?:p|h[1-6]|li|div|blockquote|td|tr)>/gi,'$& ');return node.textContent.replace(/\s+/g,' ').trim();};
  const searchEntries = new Map();
  function searchEntry(record) {
    if(searchEntries.has(record)) return searchEntries.get(record);
    const title=record.title || record.speaker || '';
    const summary=record.text || record.summary || record.dek || '';
    const body=textOnly(record.body);
    const entry={record,title,summary,body,names:[title,...(record.aliases || [])].map(normalizeSearch),details:normalizeSearch([summary,record.dek,record.type,record.group,record.meta,record.location,...(record.tags || []),...(record.people || []),...Object.values(record.facts || {})].join(' ')),story:normalizeSearch(body)};
    entry.all=[...entry.names,entry.details,entry.story].join(' ');
    searchEntries.set(record,entry);return entry;
  }
  const quoteEntries=data.quotes.map(q=>({...q,id:byId.has(q.article)?q.article:'memorable-quotes',title:q.speaker,category:'Quotes',isQuote:true}));
  const searchPool=[...articles,...quoteEntries].map(searchEntry);
  function matchingEntries(entries,query) {
    const phrase=normalizeSearch(query),terms=phrase.split(' ').filter(Boolean);
    return entries.filter(entry=>terms.every(term=>entry.all.includes(term))).map(entry=>({entry,score:Math.max(0,...entry.names.map(name=>name===phrase?1000:name.startsWith(phrase)?700:terms.every(term=>name.includes(term))?500+100*terms.length/name.split(' ').length:terms.reduce((score,term)=>score+(name.includes(term)?60:0),0)))+terms.reduce((score,term)=>score+(entry.details.includes(term)?15:0),0)})).sort((a,b)=>b.score-a.score || a.entry.title.localeCompare(b.entry.title)).map(result=>result.entry);
  }
  function searchExcerpt(entry,query) {
    if(entry.record.isQuote) return '“'+entry.summary+'”';
    const terms=normalizeSearch(query).split(' ').filter(Boolean);
    const sentences=(entry.body.match(/[^.!?]+[.!?]*/g) || []);
    const excerpt=terms.length && !terms.every(term=>normalizeSearch(entry.summary).includes(term)) ? sentences.find(sentence=>terms.every(term=>normalizeSearch(sentence).includes(term))) : '';
    const copy=excerpt?.trim() || entry.summary;
    return copy.length>260?copy.slice(0,257).replace(/\s+\S*$/,'')+'…':copy;
  }
  const navGroups = section => {
    if (section.key === 'characters') return ['A–J','K–Z'].map((label,i)=>({label,records:data.characters.filter(record=>(record.title[0].toUpperCase()<'K') === (i===0))}));
    if (section.key === 'events') return [...new Set(data.events.map(record=>(record.sort||'').slice(0,4)))].sort().map(year=>({label:year,records:data.events.filter(record=>(record.sort||'').startsWith(year))}));
    if (section.key === 'locations') return (data.locationGroups || [{title:'Places and settlements',ids:data.locations.map(record=>record.id)}]).map(group=>({label:group.title,records:group.ids.map(id=>data.locations.find(record=>record.id===id)).filter(Boolean)}));
    if (section.key === 'factions') return [{label:'Groups & orders',records:data.factions}];
    if (section.id === 'about-gedankin') return [{label:'Read and explore',records:[{id:'about-gedankin',title:'About Gedankin'},{id:'rules-2024',title:'The 2024 ruleset'},{id:'world-map',title:'World map'},{id:'geography-of-gedankin',title:'Geography of Gedankin'}]}];
    return [];
  };
  document.querySelector('#navigation').innerHTML = '<button class="nav-link starter-nav-link" type="button" data-article="about-gedankin" data-label="Start Here · New readers"><span class="starter-nav-icon" aria-hidden="true">♧</span><span class="starter-nav-copy"><strong>Start Here</strong><small>New readers</small></span><span class="starter-nav-arrow" aria-hidden="true">›</span></button>'+sections.map(s => `<section class="nav-region"><button class="nav-region-link" type="button" data-article="${s.id}" data-label="${s.title}" aria-label="${s.title}"><span class="nav-region-glyph" aria-hidden="true">${s.glyph}</span><strong>${s.title}</strong><span>›</span></button><div class="nav-region-tree">${navGroups(s).map(group=>`<details class="nav-branch"><summary>${esc(group.label)}<span>${group.records.length}</span></summary><div>${[...group.records].sort((a,b)=>a.title.localeCompare(b.title)).map(record=>`<button type="button" class="nav-link nav-child" data-article="${esc(record.id)}"><span>${esc(record.title)}</span><span>›</span></button>`).join('')}</div></details>`).join('')}</div></section>`).join('');
  const empty = section => `<div class="gedankin-empty"><strong>No ${esc(section.title.toLowerCase())} recorded yet</strong><p>${esc(section.empty)}</p></div>`;
  const cards = records => `<div class="gedankin-records">${records.map(r => `<a class="gedankin-record" href="#${esc(r.id)}"><strong>${esc(r.title)}</strong>${r.meta ? `<small> · ${esc(r.meta)}</small>` : ''}<p>${esc(r.summary || r.dek || '')}</p></a>`).join('')}</div>`;
  function directory(section) {
    return `<section class="world-directory" data-directory="${section.key}"><div class="world-directory-toolbar"><label class="world-directory-search">Search ${esc(section.title.toLowerCase())}<input id="directory-query" type="search" placeholder="Name, role, place, or story…" autocomplete="off"></label><label>Sort<select id="directory-sort"><option value="default">${section.key==='events'?'Oldest first':'A–Z'}</option><option value="reverse">${section.key==='events'?'Newest first':'Z–A'}</option></select></label></div><p class="browser-summary" id="directory-count" role="status"></p><div id="directory-records"></div></section>`;
  }
  function updateDirectory() {
    const shell=content.querySelector('[data-directory]');
    if (!shell) return;
    const key=shell.dataset.directory, needle=content.querySelector('#directory-query').value;
    let records=matchingEntries(data[key].map(searchEntry),needle).map(entry=>entry.record);
    records=[...records].sort((a,b)=>key==='events'?String(a.sort||'').localeCompare(String(b.sort||'')):key==='quotes'?`${a.group||''} ${a.speaker} ${a.text}`.localeCompare(`${b.group||''} ${b.speaker} ${b.text}`):a.title.localeCompare(b.title));
    if(content.querySelector('#directory-sort').value==='reverse') records.reverse();
    content.querySelector('#directory-count').textContent=`${records.length} of ${data[key].length} records`;
    const html=key==='quotes'?quoteCards(records):`<div class="browser-grid">${records.map(record=>`<button class="index-card" type="button" data-article="${esc(record.id)}">${record.image||record.poster?`<img src="${esc(record.image||record.poster)}" alt="" loading="lazy">`:`<span class="index-glyph" aria-hidden="true">${key==='events'?'◷':key==='locations'?'⌖':key==='factions'?'⚑':'♙'}</span>`}<span class="index-card-copy">${record.meta?`<small>${esc(record.meta)}</small>`:''}<strong>${esc(record.title)}</strong><span>${esc(record.summary||record.dek||'')}</span></span></button>`).join('')}</div>`;
    content.querySelector('#directory-records').innerHTML=records.length?html:'<p>No matching records. Try another search.</p>';
  }
  function quoteCards(records, heading='h2', currentArticle='') {
    return [...new Set(records.map(q=>q.group || 'Memorable words'))].map(group => `<${heading}>${esc(group)}</${heading}><div class="quote-gallery">${records.filter(q=>(q.group || 'Memorable words')===group).map(q=>`<div class="quote-card"><blockquote>“${esc(q.text)}”</blockquote><cite>${esc(q.speaker)}</cite>${q.article && q.article !== currentArticle && byId.has(q.article) ? `<a href="#${esc(q.article)}">Read their story →</a>` : ''}${q.audio ? `<audio controls preload="none" src="${esc(q.audio)}"></audio>` : ''}</div>`).join('')}</div>`).join('');
  }
  function mapView() {
    const map=data.worldMap;
    return `<section class="gedankin-map" aria-label="Interactive Gedankin map"><div class="gedankin-map-controls"><button type="button" data-map-zoom="out" aria-label="Zoom out" disabled>−</button><output id="map-zoom-level" aria-live="polite">100%</output><button type="button" data-map-zoom="in" aria-label="Zoom in">+</button><button type="button" data-map-zoom="reset">Fit map</button><a href="${esc(map.image)}" target="_blank" rel="noopener">Open full image ↗</a></div><div class="gedankin-map-viewport" tabindex="0" aria-label="Map; scroll to pan when zoomed"><div class="gedankin-map-stage"><img src="${esc(map.image)}" alt="${esc(map.alt)}">${map.places.map((place,i)=>`<a class="gedankin-map-pin" href="#${esc(place.id)}" style="left:${place.x}%;top:${place.y}%" aria-label="${esc(place.label)}" title="${esc(place.label)}">${i+1}</a>`).join('')}</div></div><h2>Places on the map</h2><div class="gedankin-map-places">${map.places.map((place,i)=>`<a href="#${esc(place.id)}"><span>${i+1}</span>${esc(place.label)}</a>`).join('')}</div></section>`;
  }
  function home() {
    return `<div class="article-body"><section class="gateway-hero"><div class="gateway-hero-inner"><div class="gateway-sigil"><img src="sigil.svg" alt=""></div><p class="gateway-overline">A connected world · 2024 ruleset</p><h1>Gedankin</h1><p>Another world. A connected chronicle.<br>Discover its people, places and the history they leave behind.</p><label class="gateway-search"><span aria-hidden="true">⌕</span><span class="sr-only">Search Gedankin</span><input id="gateway-search" type="search" placeholder="Search Gedankin…" autocomplete="off"><kbd>/</kbd></label></div></section><section class="gateway-categories" aria-label="Explore Gedankin">${sections.map(s=>`<button class="gateway-tile" type="button" data-article="${s.id}"><span>${s.title}</span><small>${s.description}</small></button>`).join('')}</section><div class="gateway-section-title"><span></span><h2>A world of its own</h2><span></span></div><section class="gateway-featured" aria-label="Begin in Gedankin"><button class="feature-card gedankin-feature" type="button" data-article="oasis"><small>A refuge</small><strong>Cala’s Oasis</strong><p>The gathering place from which the company ventures into the desert.</p></button><button class="feature-card gedankin-feature" type="button" data-article="khars-madar"><small>The city</small><strong>Khars Madar</strong><p>Three rival houses, a dangerous arena and lives rebuilt in the Free Quarter.</p></button><button class="feature-card gedankin-feature" type="button" data-article="strange-shore"><small>The landing area</small><strong>The Shore</strong><p>Meet the guides, follow the arrival stories and find the first route to water.</p></button></section><section class="gedankin-map-preview"><h2>Explore the map</h2><a href="#world-map"><img src="${esc(data.worldMap.image)}" alt="${esc(data.worldMap.alt)}" loading="lazy"><span>Open the map of Gedankin →</span></a></section><p class="gateway-index-intro">Part of a connected world. <a href="/#world-index">Visit Fenumion →</a></p></div>`;
  }
  function closePanels() {
    sidebar.classList.remove('open'); panel.hidden=true; scrim.hidden=true;
    document.body.classList.remove('panels-open','search-open'); menu.setAttribute('aria-expanded','false');
  }
  function render() {
    closePanels();
    content.querySelectorAll('audio, video').forEach(media=>media.pause());
    const id=location.hash.slice(1) || 'world-index';
    selectBackground(id);
    const article=byId.get(id);
    const isHome=id==='world-index';
    document.body.classList.toggle('home-view',isHome);
    const isHub=Boolean(article?.section) || id==='about-gedankin';
    document.body.classList.toggle('hub-view',isHub);
    document.title=`${isHome ? 'World index' : article?.title || 'Record not found'} — The Gedankin Codex`;
    document.querySelector('#breadcrumbs').textContent=isHome ? '' : 'Gedankin · '+(article?.category || 'Archive');
    document.querySelectorAll('#navigation [data-article]').forEach(link=>{const active=link.dataset.article===id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
    if(isHome) content.innerHTML=home();
    else if(!article) content.innerHTML='<header class="article-header"><h1>Record not found</h1><p class="dek">This record is not in the Gedankin Codex.</p></header><div class="article-body"><p><a href="#world-index">Return to the world index →</a></p></div>';
    else {
      let body=article.body || '';
      if(article.map) body+=mapView();
      if(article.section) body=directory(article.section);
      if(article.id === 'location-directory') body='<section class="geography-intro"><h2>Find your way through Gedankin</h2><p>Follow the arrival corridor, explore Khars Madar’s districts, or trace the mountain journeys.</p><p><a href="#geography-of-gedankin">Read the geography guide →</a> <a href="#world-map">Explore the world map →</a></p></section>'+body;
      if (data.characters.some(record=>record.id===id)) {
        const words=data.quotes.filter(quote=>quote.article===id);
        if(words.length) body+='<section class="character-words"><h2>Words the world remembers</h2>'+quoteCards(words,'h3',id)+'</section>';
      }
      if (!article.section && article.category !== 'Timeline') {
        const names = [article.title, ...(article.aliases || [])].map(name=>name.toLocaleLowerCase());
        const related = data.events.filter(event=>(event.relatedRecords || []).includes(article.id) || [...(event.people || []),event.location || ''].some(name=>names.includes(name.toLocaleLowerCase())));
        if (related.length) body += '<h2>In the chronicle</h2>'+cards(related);
      }
      if (article.section?.key === 'events') body = '<p class="gedankin-date-note">Dates track the chronicle; the in-world calendar may differ.</p>'+body;

      const linkedIds=[...new Set([...(article.people||[]).flatMap(name=>data.characters.filter(record=>[record.title,...(record.aliases||[])].includes(name)).map(record=>record.id)),...(article.relatedRecords||[])])];
      const connected=linkedIds.map(id=>byId.get(id)).filter(Boolean);
      const connections=connected.length?`<section class="subchannels"><p class="eyebrow">Related records</p><div>${connected.map(record=>`<button class="subchannel-card" type="button" data-article="${esc(record.id)}"><strong>${esc(record.title)}</strong><span>${esc(record.dek||record.summary||'')}</span><i aria-hidden="true">›</i></button>`).join('')}</div></section>`:'';
      const switcher=isHub?`<nav class="hub-switcher" aria-label="Explore the Codex">${sections.map(section=>`<button type="button" class="gateway-tile${section.id===id?' active':''}" data-article="${section.id}" ${section.id===id?'aria-current="page"':''}><span>${section.title}</span><small>${section.description}</small></button>`).join('')}</nav>`:'';
      const facts=Object.entries(article.facts || {}).map(([k,v])=>`<div class="fact"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
      const heroCaption = article.imageCaption ? `<figcaption${article.imageCaption.length <= 80 && !/[.!?]/.test(article.imageCaption) ? ' class="media-name-caption"' : ''}><span>${esc(article.imageCaption)}</span></figcaption>` : '';
      content.innerHTML=`<header class="article-header"><p class="article-kicker">${esc(article.type)}</p><h1>${esc(article.title)}</h1><p class="dek">${esc(article.dek || '')}</p><div class="article-meta">${(article.tags || []).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></header>${switcher}${article.video ? `<figure class="article-hero ${esc(article.imageLayout || '')}"><video controls muted loop playsinline preload="metadata" ${matchMedia('(prefers-reduced-motion: reduce)').matches ? '' : 'autoplay'} poster="${esc(article.poster || '')}" aria-label="${esc(article.imageAlt || article.title)}"><source src="${esc(article.video)}" type="video/mp4">Your browser does not support this video. <a href="${esc(article.video)}">Watch ${esc(article.title)}</a></video>${heroCaption}</figure>` : article.image ? `<figure class="article-hero ${esc(article.imageLayout || "")}"><img src="${esc(article.image)}" alt="${esc(article.imageAlt || article.title)}">${heroCaption}</figure>` : ''}<div class="lead-grid"><div class="article-body">${body}${connections}</div><dl class="infobox"><h2 class="infobox-title">At a glance</h2>${facts}</dl></div>`;
    }
    updateDirectory();
    document.querySelectorAll('.nav-branch').forEach(branch=>{branch.open=Boolean(branch.querySelector(`[data-article="${id}"]`));});
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
    const needle=normalizeSearch(query);
    const pool=filter==='all'?searchPool:filter==='quote'?quoteEntries.map(searchEntry):data[filterKeys[filter]].map(searchEntry);
    const results=needle?matchingEntries(pool,query):pool.filter(entry=>entry.record.section);
    document.querySelector('#search-count').textContent=needle?`${results.length} ${results.length===1?'result':'results'} in Gedankin`:'Search Gedankin';
    document.querySelector('#search-results').innerHTML=results.length ? results.map(entry=>{const a=entry.record;return `<button type="button" class="search-result" data-article="${esc(a.id)}"><small>${esc(a.isQuote?'Quotes · '+(a.group || 'Memorable words'):a.category || (sections.find(s=>s.key===filterKeys[filter])?.title) || 'Gedankin')}</small><strong>${esc(entry.title)}</strong><p>${esc(searchExcerpt(entry,query))}</p></button>`;}).join('') : needle?'<p class="gedankin-empty">No matches. Try a shorter name, a place, or a few words from the story.</p>':'<p class="gedankin-empty">Search by name, place, event or words from a quote.</p>';
    panel.scrollTop=0;
  }

  document.addEventListener('click',event=>{
    const zoom=event.target.closest('[data-map-zoom]');
    if(zoom){
      const stage=content.querySelector('.gedankin-map-stage'), view=content.querySelector('.gedankin-map-viewport');
      const current=Number(stage.dataset.zoom || 1);
      const next=zoom.dataset.mapZoom==='reset' ? 1 : Math.max(1,Math.min(3,current+(zoom.dataset.mapZoom==='in' ? .5 : -.5)));
      stage.dataset.zoom=next;stage.style.width=(next*100)+'%';
      content.querySelector('#map-zoom-level').textContent=(next*100)+'%';
      content.querySelector('[data-map-zoom="out"]').disabled=next===1;
      content.querySelector('[data-map-zoom="in"]').disabled=next===3;
      if(next===1){view.scrollTop=0;view.scrollLeft=0;}
      return;
    }
    const article=event.target.closest('[data-article]');if(article){const hash='#'+article.dataset.article;if(location.hash===hash)render();else location.hash=hash;return;}
    const section=event.target.closest('[data-section]');if(section){event.preventDefault();document.getElementById(section.dataset.section)?.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});return;}
    const choice=event.target.closest('[data-search-filter]');if(choice){filter=choice.dataset.searchFilter;document.querySelectorAll('[data-search-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===choice)));runSearch(search.value);}
  });
  document.addEventListener('input',event=>{if(event.target.id==='directory-query'){updateDirectory();return;}if(event.target===search || event.target===worldSearch || event.target.id==='gateway-search'){runSearch(event.target.value);if(event.target.id==='gateway-search'){worldSearch.focus();worldSearch.setSelectionRange(worldSearch.value.length,worldSearch.value.length);}}});
  document.addEventListener('change',event=>{if(event.target.id==='directory-sort')updateDirectory();});
  document.querySelector('#search-toggle').addEventListener('click',()=>{runSearch(search.value);worldSearch.focus();});
  document.querySelector('#close-search').addEventListener('click',closePanels);
  scrim.addEventListener('click',closePanels);
  menu.addEventListener('click',()=>{const open=!sidebar.classList.contains('open');closePanels();sidebar.classList.toggle('open',open);scrim.hidden=!open;document.body.classList.toggle('panels-open',open);menu.setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){const wasOpen=!panel.hidden;closePanels();if(wasOpen)(matchMedia('(max-width: 760px)').matches?document.querySelector('#search-toggle'):search).focus();}
    if(!panel.hidden && ['ArrowDown','ArrowUp','Enter'].includes(event.key)) {
      const buttons=[...panel.querySelectorAll('.search-result')],active=document.activeElement;
      if(active===search || active===worldSearch || buttons.includes(active)) {
        if(event.key==='Enter' && !buttons.includes(active)){if(buttons[0]){event.preventDefault();buttons[0].click();}}
        else if(event.key!=='Enter' && buttons.length){event.preventDefault();const index=buttons.indexOf(active),next=index<0?(event.key==='ArrowDown'?0:buttons.length-1):(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;buttons[next].focus();}
      }
    }
    if(event.key==='/' && !event.ctrlKey && !event.metaKey && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();runSearch(search.value);worldSearch.focus();}
  });
  matchMedia('(max-width: 760px)').addEventListener('change',closePanels);
  window.addEventListener('hashchange',render);
  render();
})();

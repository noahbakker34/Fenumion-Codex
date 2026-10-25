/* Visual presentation only: public records remain the source for every label and relationship. */
(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const svg = path => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  const scopes = {
    1:'<circle cx="12" cy="16" r="7"/><circle cx="21" cy="16" r="7"/>',
    2:'<path d="M5 15 16 6l11 9M8 13v14h16V13M13 27V17h6v10"/>',
    3:'<path d="m3 26 10-18 6 10 4-6 7 14H3Z"/><path d="m10 13 3 3 3-3M18 20l3 2 3-2"/>',
    4:'<circle cx="16" cy="16" r="6"/><path d="M16 2v8m0 12v8M2 16h8m12 0h8M5 5l5 5m12 12 5 5M27 5l-5 5M10 22l-5 5"/>',
    5:'<path d="m16 2 3.5 8.5L28 7l-3.5 8.5L30 21l-10 1L16 31l-4-9-10-1 5.5-5.5L4 7l8.5 3.5L16 2Z"/><path d="m16 10 2 5 5 1-5 2-2 6-2-6-5-2 5-1 2-5Z"/>'
  };
  // These are calendar ornaments, not assertions about a patron's canonical insignia.
  const months = [
    '<path d="M16 4v24M7 9h18M8 9l-5 10h10L8 9Zm16 0-5 10h10L24 9ZM9 28h14"/>',
    '<path d="M8 4h16M8 28h16M10 4c0 9 12 15 12 24M22 4c0 9-12 15-12 24M12 23h8"/>',
    '<path d="m7 3 17 22m1-22L8 25M4 22l7 6M21 28l7-6M6 4l1 6 4-3M26 4l-1 6-4-3"/>',
    '<path d="M3 11q6-8 13 0t13 0M3 18q6-8 13 0t13 0M3 25q6-8 13 0t13 0"/>',
    '<path d="M16 29V15M16 20C3 20 3 5 3 5s15 0 13 15Zm0-5C15 3 29 3 29 3s0 14-13 12Z"/>',
    '<path d="M16 28C-5 14 4-1 16 12 28-1 37 14 16 28Z"/><path d="M16 28V15m0 7-5-5m5 2 5-5"/>',
    '<circle cx="16" cy="16" r="7"/><path d="M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M26 6l-3 3M9 23l-3 3"/>',
    '<path d="M5 5h22v22H5ZM10 5v22M16 5v22M22 5v22M5 10h22M5 16h22M5 22h22"/>',
    '<path d="m16 2 3 10 10 4-10 3-3 11-3-11-10-3 10-4 3-10Z"/><circle cx="16" cy="16" r="3"/>',
    '<path d="M23 4A13 13 0 1 0 28 23 11 11 0 0 1 23 4Z"/><path d="m25 6 1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4Z"/>',
    '<path d="M25 8C10-4-5 18 10 27c13 8 25-12 11-17-9-4-16 10-6 13 7 2 11-7 5-9"/>',
    '<path d="M10 10h12v17H10ZM12 10V6a4 4 0 0 1 8 0v4M8 27h16M8 10h16M16 14c-7 8 7 10 0 0ZM4 4l3 3m21-3-3 3"/>'
  ];
  const regions = [
    {id:'prima', name:'Prima', article:'prima-pristinia', color:'#85bfa2', match:/\bprima\b|pristinia|eovar/i},
    {id:'gael', name:'Gael', article:'gael', color:'#c3cd92', match:/\bgael\b/i},
    {id:'fein-uaill', name:'Fein Uaill', article:'fein-uaill', color:'#a3bde4', match:/fein[ -]uaill|zarathis|ciar[aá]nach/i},
    {id:'babel-ashur', name:'Babel-Ashur', article:'babel-ashur', color:'#c2a4dc', match:/babel[ -]ashur|skylight refuge/i},
    {id:'voraketh', name:'Voraketh', article:'voraketh', color:'#9bbec7', match:/voraketh/i},
    {id:'verdelune', name:'Verdelune / Larkhollow', article:'verdelune', color:'#d6b58e', match:/verdelune|larkhollow/i}
  ];
  function sourceRegions(article, context) {
    const direct = regions.find(region => region.article === article.id || region.id === article.id);
    if (direct) return [direct];
    const facts = Object.entries(article.facts || {}).filter(([key]) => /^(region|regions|island|location|home)$/i.test(key)).map(([,value]) => value);
    const place = context.places?.find(place => place.article === article.id && place.title === article.title);
    if (place) facts.push(place.region, place.parent);
    return regions.filter(region => facts.some(value => region.match.test(String(value || ''))));
  }
  function regionBadges(article, context) {
    return sourceRegions(article, context).map(region => `<a class="chronicle-region-badge" href="#${esc(region.article)}" data-region="${region.id}"><span aria-hidden="true">◇</span>${esc(region.name)}</a>`).join('');
  }
  function relationships(article, context) {
    const links = (article.brief?.relationships || []).filter(link => context.allowed(link.id) && !context.byId.get(link.id)?.protected).slice(0,4);
    if (!links.length) return '';
    return `<nav class="chronicle-relationships" aria-label="Documented relationships">${links.map(link => {
      const record = context.byId.get(link.id);
      return `<a href="#${esc(link.id)}">${record?.image ? `<img src="${esc(record.image)}" alt="" loading="lazy">` : '<span class="relationship-monogram" aria-hidden="true">◇</span>'}<span><strong>${esc(link.label)}</strong><small>${esc(link.relation)}</small></span></a>`;
    }).join('')}</nav>`;
  }
  function eventArt(item, context) {
    if (![4,5].includes(item.importance)) return '';
    // A story destination must not inherit unrelated atlas or directory artwork.
    if (item.story) return '';
    const candidates = [context.byId.get(item.article), ...(item.regions || []).map(id => context.byId.get(regions.find(region => region.id === id)?.article))];
    const record = candidates.find(record => record?.image && !/\.gif(?:$|\?)/i.test(record.image) && !record.protected && context.allowed(record.id));
    const image = record?.image || 'assets/archive/narrative-history-background-poster.webp';
    return `<span class="chronicle-event-art"><img src="${esc(image)}" alt="" loading="lazy" decoding="async"><small>From the archive</small></span>`;
  }
  function decorateArticle(root, article, context) {
    delete document.body.dataset.codexRegion;
    root.classList.remove('chronicle-person');
    const known = sourceRegions(article, context);
    if (known.length === 1) document.body.dataset.codexRegion = known[0].id;
    const header = root.querySelector('.article-header');
    if (!header || !context.allowed(article.id)) return;
    const badges = regionBadges(article, context);
    if (badges) header.insertAdjacentHTML('beforeend', `<div class="chronicle-region-badges" aria-label="Regions in this record">${badges}</div>`);
    const person = context.people.find(person => person.article === article.id && (person.title === article.title || person.aliases?.includes(article.title)));
    if (person || article.category === 'People' && article.image) {
      root.classList.add('chronicle-person');
      if (article.image) {
        const original=root.querySelector('.record-visual-rail > .article-hero');
        const originalPortrait=original?.querySelector('img')?.getAttribute('src') || original?.querySelector('video')?.getAttribute('poster');
        if(original && originalPortrait===article.image) {
          original.classList.remove('article-hero','record-topic-art');
          original.classList.add('chronicle-person-portrait');header.prepend(original);
        } else header.insertAdjacentHTML('afterbegin', `<figure class="chronicle-person-portrait"><img src="${esc(article.image)}" alt="Portrait of ${esc(article.title)}" decoding="async"></figure>`);
      }
      const role = person ? context.personLabel(person) : article.brief?.identity || article.type;
      header.querySelector('.article-kicker').textContent = role;
      header.insertAdjacentHTML('beforeend',relationships(article,context));
    }
  }
  function decorateDialog(root, person, article, label, context) {
    root.classList.add('chronicle-character-panel');
    const media = root.querySelector(':scope > .record-dialog-media');
    const header = document.createElement('header'); header.className='chronicle-character-header';
    if (media) header.append(media);
    const copy = document.createElement('div'); copy.className='chronicle-character-heading';
    for(const element of [...root.children]) if (element.matches('.record-dialog-kicker,#record-dialog-title,.record-dialog-dek,.npc-region-label')) copy.append(element);
    copy.insertAdjacentHTML('beforeend', `<div class="chronicle-role-badges"><span>${esc(label)}</span>${article ? regionBadges(article,context) : ''}</div>`);
    header.append(copy); root.prepend(header);
    if (article && context.allowed(article.id)) header.insertAdjacentHTML('afterend',relationships(article,context));
  }
  // Historical days come only from the existing reviewed calendar, never sort keys.
  function historicalDayRecords(context, today) {
    return context.events.flatMap(event => {
      if (event.veiled || event.vaultOnly || !context.allowed(event.article) || context.byId.get(event.article)?.protected || !['canon','recorded'].includes(event.dating?.kind)) return [];
      const date = context.window(event);
      if (!date || date.precision !== 'day' || date.qualifier !== 'on' || date.start !== date.end || date.start > today || !context.point(date.start)) return [];
      return [{event, date:date.start}];
    }).sort((a,b) => a.date.localeCompare(b.date) || b.event.importance-a.event.importance || a.event.title.localeCompare(b.event.title));
  }
  function thisDay(root, context) {
    const anchor = root.querySelector('#chronicle-featured'); if (!anchor) return;
    root.querySelector('.this-day')?.remove();
    const mount = document.createElement('section'); mount.className='this-day'; mount.setAttribute('aria-labelledby','this-day-title'); anchor.before(mount);
    // Keep the campaign's established day boundary consistent for all visitors.
    const currentDate = () => {
      const parts = new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
      const part = name => parts.find(value=>value.type===name).value;
      return `${part('year')}-${part('month')}-${part('day')}`;
    };
    let today=currentDate();
    mount.innerHTML=`<div class="this-day-heading"><div><p class="chronicle-kicker">On this day in years past</p><h2 id="this-day-title">This Day in Fenumion</h2></div></div><div class="this-day-results" aria-live="polite" aria-atomic="true"></div><a class="this-day-history" href="#living-timeline">Explore the full history →</a>`;
    const render = () => {
      const shown=historicalDayRecords(context,today).filter(row=>row.date.slice(5)===today.slice(5) && row.date.slice(0,4)<today.slice(0,4));
      const card = row => `<li><button type="button" data-timeline-title="${esc(row.event.title)}"><small>${esc(context.namedDate(row.event))}</small><strong>${esc(row.event.title)}</strong><span>${esc(row.event.summary)}</span><span class="this-day-read">Open the historical record →</span></button></li>`;
      mount.querySelector('.this-day-results').innerHTML=`${shown.length?`<ol class="this-day-events">${shown.slice(0,3).map(card).join('')}</ol>${shown.length>3?`<details class="this-day-more"><summary>${shown.length-3} more on this day</summary><ol class="this-day-events">${shown.slice(3).map(card).join('')}</ol></details>`:''}`:'<p class="this-day-empty">No precisely dated events are recorded for this day in past years.</p>'}<p class="this-day-note">The same day and month, remembered across earlier years.</p>`;
      window.FenumionCalendar?.render(mount);
    };
    render();
    const timer=setInterval(()=>{
      if(!mount.isConnected){clearInterval(timer);return;}
      const next=currentDate();if(next===today)return;today=next;render();
    },60000);
  }

  function home(root, context) {
    thisDay(root,context);
    const mount = root.querySelector('#chronicle-featured'); if(!mount) return;
    // The gateway supplies the visible page heading; discard the hidden template duplicate.
    root.querySelector(':scope > .article-header')?.remove();
    const eligible = context.events.filter(event => !event.veiled && event.importance === 5 && context.allowed(event.article) && !context.byId.get(event.article)?.protected);
    const event = eligible.sort((a,b)=>context.compare(a,b,'newest'))[0]; if(!event) return;
    const recent = [], seen = new Set([event.article]);
    context.events.filter(event => !event.veiled && context.allowed(event.article) && !context.byId.get(event.article)?.protected && (event.dating?.calendarAdjustment || /quest/i.test(event.meta+' '+event.kind)))
      .sort((a,b)=>context.compare(a,b,'newest')).forEach(item => {if(recent.length<3&&!seen.has(item.article)){seen.add(item.article);recent.push(item);}});
    mount.innerHTML = `<section class="chronicle-home-stories" aria-label="Follow the Final War"><button class="chronicle-turning-point" type="button" data-timeline-title="${esc(event.title)}" data-importance="5"><span class="chronicle-feature-copy"><span class="chronicle-kicker">${svg(scopes[5])}World Changing · The Final War</span><strong>${esc(event.title)}</strong><span class="chronicle-feature-date">${context.date(event)}</span><span>${esc(event.summary)}</span><span class="chronicle-feature-action">Read this turning point <b aria-hidden="true">↗</b></span></span>${eventArt(event,context)}</button><div class="chronicle-recent"><p class="chronicle-kicker">Recent recorded quests</p>${recent.map(item=>`<button type="button" data-timeline-title="${esc(item.title)}"><small>${esc(context.namedDate(item))}</small><strong>${esc(item.title)}</strong><span aria-hidden="true">↗</span></button>`).join('')}<a href="#history-in-consequences">Follow the connected histories →</a></div></section>`;
  }
  function calendarNavigator(explorer, events, context) {
    let mount = explorer.querySelector('.chronicle-calendar');
    if(!mount){mount=document.createElement('nav');mount.className='chronicle-calendar';mount.setAttribute('aria-label','Jump through the Final War calendar');explorer.querySelector('.timeline-results').before(mount);}
    const dates = events.map(event=>({event,point:context.point(context.window(event)?.start)})).filter(row=>row.point&&!row.point.before);
    const years = [...new Set(dates.map(row=>row.point.year))].sort((a,b)=>a-b);
    if(!years.length){mount.hidden=true;return;} mount.hidden=false;
    const previousYear=Number(mount.querySelector('[data-calendar-year]')?.value), previousMonth=Number(mount.querySelector('[data-calendar-month]')?.value);
    const year=years.includes(previousYear)?previousYear:years[0];
    const available = number => dates.filter(row=>row.point.year===number);
    const options = available(year), month = options.some(row=>row.point.monthNumber===previousMonth)?previousMonth:options[0].point.monthNumber;
    const months=window.FENUMION_CATALOG.timelineCalendar.months;
    mount.innerHTML=`<div class="chronicle-calendar-toolbar"><span class="chronicle-kicker">${svg(scopes[4])}Find your place in the war</span><label>Year<select data-calendar-year aria-label="Jump to Final War year">${years.map(number=>`<option value="${number}"${number===year?' selected':''}>Year ${number} of the Final War</option>`).join('')}</select></label><label>Month<select data-calendar-month aria-label="Jump to named month">${months.filter(item=>options.some(row=>row.point.monthNumber===item.number)).map(item=>`<option value="${item.number}"${item.number===month?' selected':''}>${esc(item.name)}</option>`).join('')}</select></label><button type="button" data-calendar-go>Go to date <span aria-hidden="true">↓</span></button></div><div class="chronicle-month-ribbon">${months.map(item=>{const count=options.filter(row=>row.point.monthNumber===item.number).length;return `<button type="button" data-calendar-jump="${item.number}"${count?'':' disabled'} aria-label="Jump to ${esc(item.name)}, Year ${year}" title="${esc(item.name)} · ${count} recorded events">${svg(monthsOrnament(item.number))}<span>${esc(item.name.replace('Month of ',''))}</span></button>`;}).join('')}</div>`;
    const jump = number => {
      const row=available(Number(mount.querySelector('[data-calendar-year]').value)).find(row=>row.point.monthNumber===number);
      const target=row&&[...explorer.querySelectorAll('.event-card')].find(card=>card.dataset.timelineTitle===row.event.title);
      if(target){target.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
    };
    mount.querySelector('[data-calendar-year]').addEventListener('change',()=>{
      calendarNavigator(explorer,events,context);
      mount.querySelector('[data-calendar-year]').focus();
    });
    mount.querySelector('[data-calendar-go]').addEventListener('click',()=>jump(Number(mount.querySelector('[data-calendar-month]').value)));
    mount.querySelectorAll('[data-calendar-jump]').forEach(button=>button.addEventListener('click',()=>jump(Number(button.dataset.calendarJump))));
  }
  function monthsOrnament(number){return months[number-1] || scopes[4];}
  function decorateCards(root, context) {
    root.querySelectorAll('.index-card[data-article]').forEach(card=>{
      delete card.dataset.region;
      const article=context.byId.get(card.dataset.article);
      if(!article || article.protected || !context.allowed(article.id))return;
      const known=sourceRegions(article,context);if(known.length===1)card.dataset.region=known[0].id;
    });
  }
  function dock(){
    if(!document.body.classList.contains('fenumion-world'))return;
    const music=document.querySelector('#music-player'),vault=document.querySelector('#vault-button');if(!music||!vault)return;
    const dock=document.createElement('aside');dock.className='codex-utility-dock';dock.setAttribute('aria-label','Archive controls');
    music.querySelector('.music-toggle').setAttribute('aria-label','Open soundtrack controls');music.querySelector('.music-toggle').title='Soundtrack';vault.title='Spoiler vault';
    dock.append(music,vault);
    const approved=document.querySelector('.home-external-actions .approved-content-link');
    if(approved){approved.innerHTML='<span class="utility-control-label">Approved content</span><span aria-hidden="true">↗</span>';approved.title='Fenumion approved content';dock.append(approved);}
    document.body.append(dock);
  }
  window.CodexVisual={scopeIcon:level=>scopes[level]?svg(scopes[level]):'',monthIcon:number=>months[number-1]?svg(monthsOrnament(number)):'',eventArt,decorateArticle,decorateDialog,relationships,home,calendarNavigator,sourceRegions,decorateCards};
  dock();
})();

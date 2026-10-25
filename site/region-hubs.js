/* Regional landing pages use existing locations, people and dated events. */
(() => {
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function setup(article,root){
    const hub=article.regionHub;root.classList.toggle('region-hub-layout',Boolean(hub));if(!hub)return;
    const body=root.querySelector('.article-body'),summary=root.querySelector('.record-summary');
    const history=document.createElement('details');history.className='region-history';
    history.innerHTML=`<summary><h2 id="${esc(article.id)}-regional-history">Read the regional history</h2><span>Chronology, accounts and sources</span></summary>`;
    const facts=summary?.querySelector('.infobox');
    if(facts){const reference=document.createElement('details');reference.className='region-reference';reference.innerHTML='<summary>Regional reference</summary>';reference.append(facts);history.append(reference);}
    const sequence=summary?.querySelector('.related-sequences');if(sequence)history.append(sequence);
    while(body.firstChild)history.append(body.firstChild);
    const rail=root.querySelector('.record-visual-rail'),art=rail?.querySelector('.article-hero');
    art?.querySelector('.article-map-cta')?.remove();
    if(summary){const intro=document.createElement('div');intro.className='region-hub-intro';summary.before(intro);intro.append(summary);if(art)intro.append(art);}
    rail?.querySelector('.record-visual-links')?.remove();
    if(rail?.children.length){rail.className='region-hub-artwork';history.append(rail);}else rail?.remove();
    const places=archiveIndex.islands.filter(place=>place.region===hub.region&&place.level!=='region'&&isPlayerSafeArticle(place.article));
    const settlements=places.filter(place=>place.level==='settlement').sort((a,b)=>a.title.localeCompare(b.title));
    const landmarks=places.filter(place=>place.level!=='settlement').sort((a,b)=>a.title.localeCompare(b.title));
    const people=hub.people.map(id=>byId.get(id)).filter(record=>record&&isPlayerSafeArticle(record.id));
    const journeys=hub.journeys.map(id=>byId.get(id)).filter(record=>record&&isPlayerSafeArticle(record.id));
    const events=archiveIndex.timeline.filter(event=>event.regions?.includes(hub.timelineRegion)&&!event.vaultOnly&&!isRestrictedTimelineEvent(event)&&isPlayerSafeArticle(event.article)).filter(event=>{const date=timelineCalendarWindow(event);return date&&date.precision!=='year';}).sort((a,b)=>compareTimelineEvents(a,b,'newest')).slice(0,4);
    const prefix=article.id+'-hub-';
    const placeCard=place=>`<button type="button" class="region-place-card" data-location-title="${esc(place.title)}"><small>${esc(hub.region+(place.parent&&place.parent!==hub.region?' › '+place.parent:''))}</small><strong>${esc(place.title)}</strong><span>${esc(place.summary)}</span><em>${esc(place.type||'Location')} · View place</em></button>`;
    const placeGroup=(title,items,initial)=>items.length?`<section class="region-place-group"><h3>${esc(title)}</h3><div class="region-place-grid">${items.slice(0,initial).map(placeCard).join('')}</div>${items.length>initial?`<details class="region-more-places"><summary>More ${esc(title.toLowerCase())} within ${esc(hub.region)} · ${items.length-initial}</summary><div class="region-place-grid">${items.slice(initial).map(placeCard).join('')}</div></details>`:''}</section>`:'';
    const landing=document.createElement('section');landing.className='region-hub';landing.setAttribute('aria-label',hub.region+' regional overview');
    landing.innerHTML=`
      <div class="region-hub-actions"><button type="button" data-open-map="${esc(hub.mapId)}">Explore the ${esc(hub.region)} map <span aria-hidden="true">→</span></button><a href="#living-timeline?region=${esc(hub.timelineRegion)}">All events in ${esc(hub.region)} <span aria-hidden="true">→</span></a></div>
      <nav class="region-hub-navigation" aria-label="Explore ${esc(hub.region)}">${[['places','Places'],['people','People'],['journeys','Quest paths'],['changes','Recent changes']].map(([id,label])=>`<button type="button" data-section="${esc(prefix+id)}">${label}</button>`).join('')}<button type="button" data-section="${esc(article.id)}-regional-history">Regional history</button></nav>
      <section class="region-hub-section" aria-labelledby="${esc(prefix)}places"><p class="eyebrow">Within ${esc(hub.region)}</p><h2 id="${esc(prefix)}places">Places within ${esc(hub.region)}</h2><p>Settlements and landmarks belong to this region. Open a place for its account and connected events.</p>${placeGroup('Settlements',settlements,6)}${placeGroup('Landmarks and wilds',landmarks,4)}</section>
      <section class="region-hub-section" aria-labelledby="${esc(prefix)}people"><h2 id="${esc(prefix)}people">People in these histories</h2><p>Follow their roles in the region’s story.</p><div class="region-people-grid">${people.map(record=>`<a href="#${esc(record.id)}">${record.image?`<img src="${esc(record.image)}" alt="" loading="lazy" decoding="async">`:''}<span><strong>${esc(record.title)}</strong><small>${esc(record.type)}</small></span></a>`).join('')}</div></section>
      <section class="region-hub-section" aria-labelledby="${esc(prefix)}journeys"><h2 id="${esc(prefix)}journeys">Quests and connected histories</h2><div class="region-journey-grid">${journeys.map(record=>`<a href="#${esc(record.id)}"><strong>${esc(record.title)}</strong><span>${esc(record.dek)}</span><small>Follow this history <span aria-hidden="true">→</span></small></a>`).join('')}</div></section>
      <section class="region-hub-section" aria-labelledby="${esc(prefix)}changes"><h2 id="${esc(prefix)}changes">Recent dated changes</h2><div class="region-event-grid">${events.map(event=>`<button type="button" data-timeline-title="${esc(event.title)}"><small>${timelineDateMarkup(event)}</small><strong>${esc(event.title)}</strong><span>${esc(event.summary)}</span></button>`).join('')}</div><a class="region-all-events" href="#living-timeline?region=${esc(hub.timelineRegion)}">Browse the full ${esc(hub.region)} timeline <span aria-hidden="true">→</span></a></section>`;
    const films=history.querySelector('.character-scenes');
    if(films){
      const chapter=films.closest('.record-chapter')||films;
      landing.querySelector('.region-hub-section')?.after(chapter);
      const button=document.createElement('button');button.type='button';button.dataset.section='character-scenes-title';button.textContent='Films';
      const nav=landing.querySelector('.region-hub-navigation');nav.insertBefore(button,nav.lastElementChild);
    }
    body.append(landing,history);
  }
  window.CodexRegions={setup};
})();

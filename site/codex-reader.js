/* Reading, evidence and lazy content. Canonical public records are built from content/. */
(() => {
  const pending=new Map(), searchCache=new Map();
  let searchData=null, searchPromise=null;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function referenceMarkup(value){
    const source=String(value);let result='',start=0;
    const pattern=/https:\/\/[^\s<>]+|#[a-z0-9-]+(?:\?section=[a-z0-9-]+)?|assets\/[a-zA-Z0-9_./-]+\.(?:webp|png|jpg|jpeg)/g;
    for(const match of source.matchAll(pattern)){
      const url=match[0].replace(/[.,;:)]+$/,'');
      result+=esc(source.slice(start,match.index));
      const internal=url.startsWith('#');
      const valid=!internal||isPlayerSafeArticle(url.slice(1).split('?')[0])&&byId.has(url.slice(1).split('?')[0]);
      result+=valid?`<a href="${esc(url)}"${internal?'':' target="_blank" rel="noopener noreferrer"'}>${esc(url)}</a>`:esc(url);
      start=match.index+url.length;
    }
    return result+esc(source.slice(start));
  }
  async function json(url){const response=await fetch(url);if(!response.ok)throw new Error('Could not load this record ('+response.status+').');return response.json();}
  async function load(article){
    if(article.bodyLoaded)return article;
    if(!pending.has(article.id))pending.set(article.id,(async()=>{
      const payload=await json(article.bodyUrl);
      const extra=article.id==='player-perspectives'?'player-perspectives':article.id==='npc-discovery-registry'?'npc-discoveries':null;
      if(extra)Object.assign(window,await json('data/supplements/'+extra+'.json'));
      Object.assign(article,payload,{bodyLoaded:true});
      if(payload.relationshipMap)relationshipMaps[article.id]=payload.relationshipMap;
      return article;
    })().finally(()=>pending.delete(article.id)));
    return pending.get(article.id);
  }
  async function ensureSearch(){
    if(searchData)return;
    if(!searchPromise)searchPromise=json(window.FENUMION_CATALOG.searchUrl).then(data=>{searchData=data;searchCache.clear();}).catch(error=>{searchPromise=null;throw error;});
    return searchPromise;
  }
  function parts(article){
    const signature=article.bodyLoaded?article.body:null;
    const cached=searchCache.get(article.id);
    if(cached?.signature===signature)return cached;
    let sections;
    if(article.bodyLoaded){
      const template=document.createElement('template');template.innerHTML=article.body;
      sections=[{id:'',title:'Overview',text:''}];let current=sections[0];
      [...template.content.childNodes].forEach(node=>{
        if(node.nodeType===1&&node.matches('h2')){current={id:node.id,title:node.textContent,text:''};sections.push(current);}
        else current.text+=' '+node.textContent;
      });
    }else sections=searchData?.[article.id]?.sections||[];
    const normalized=sections.map(section=>({...section,normalized:normalizeSearchName(window.FenumionCalendar.searchText(section.title+' '+section.text))}));
    const result={signature,sections:normalized,text:normalized.map(s=>s.normalized).join(' ')};searchCache.set(article.id,result);return result;
  }
  function matchSection(article,terms){
    const section=parts(article).sections.find(section=>section.id&&terms.every(term=>section.normalized.includes(term)));
    if(!section)return null;
    const text=window.FenumionCalendar.text(section.text).replace(/\s+/g,' ').trim();
    const word=terms.find(term=>text.toLocaleLowerCase().includes(term));const at=word?text.toLocaleLowerCase().indexOf(word):0;
    const start=Math.max(0,at-70), snippet=(start?'…':'')+text.slice(start,start+210)+(text.length>start+210?'…':'');
    return {id:section.id,title:section.title,snippet};
  }
  function eventByTitle(title){const record=findTimelineRecord(title);return record&&!isRestrictedTimelineEvent(record)&&isPlayerSafeArticle(record.article)?record:null;}
  function chains(){return window.FENUMION_CATALOG.consequenceChains.map(chain=>({...chain,steps:chain.steps.map(step=>({...step,record:eventByTitle(step.event)})).filter(step=>step.record)})).filter(chain=>chain.steps.length>1);}
  function chainMarkup(chain,active=''){
    return `<section class="consequence-chain" id="sequence-${esc(chain.id)}"><h3>${esc(chain.title)}</h3><p>${esc(chain.summary)}</p><ol>${chain.steps.map(step=>`<li${step.event===active?' class="current-step" aria-current="step"':''}><button type="button" data-timeline-title="${esc(step.event)}"><small>${window.timelineDateMarkup ? window.timelineDateMarkup(step.record) : esc(step.record.meta)}</small><strong>${esc(step.event)}</strong></button><p>${esc(step.connection)}</p></li>`).join('')}</ol></section>`;
  }
  function eventChains(item){const list=chains().filter(chain=>chain.steps.some(step=>step.event===item.title));return list.length?'<div class="event-sequences"><h3>What connects this event</h3>'+list.map(chain=>chainMarkup(chain,item.title)).join('')+'</div>':'';}
  function articleChains(article){
    if(article.id==='history-in-consequences')return chains();
    const names=[article.title,...(article.aliases||[])];
    return chains().filter(chain=>chain.steps.some(step=>step.record.article===article.id||String(step.record.people||'').split(';').some(n=>names.includes(n.trim()))));
  }
  function briefMarkup(article){
    const brief=article.brief;if(!brief)return '';
    return `<section class="character-brief" aria-label="Character summary"><p class="eyebrow">The person at a glance</p><dl><div><dt>Who they are</dt><dd>${esc(brief.identity)}</dd></div><div><dt>Why they matter</dt><dd>${esc(brief.significance)}</dd></div><div><dt>Last established status</dt><dd>${esc(brief.status)}</dd></div></dl>${brief.actions.length?`<details><summary>${brief.curatedActions?"Choices &amp; consequences":"Selected recorded actions"}</summary><ol>${brief.actions.map(action=>`<li><button type="button" ${action.section?`data-section="${esc(action.section)}"`:`data-timeline-title="${esc(action.event)}"`}><small>${esc(action.date||"")}</small>${esc(action.title)}</button></li>`).join('')}</ol></details>`:''}${brief.relationships.length?`<details><summary>People connected to their history</summary><ul>${brief.relationships.map(person=>`<li><a href="#${esc(person.id)}">${esc(person.label)}</a><span>${esc(person.relation)}</span></li>`).join('')}</ul></details>`:''}</section>`;
  }
  function jump(section){
    const target=document.getElementById(section);if(!target)return;
    if(target.closest('[hidden]')&&document.querySelector('[data-research-browser]')){
      document.querySelector('[data-research-region]').value='';
      const query=document.querySelector('[data-research-query]');query.value='';query.dispatchEvent(new Event('input'));
    }
    window.revealCodexSection?.(target);target.tabIndex=-1;target.focus({preventScroll:true});
    target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }
  function afterRender(article,root){
    // Reserve the original image ratio before decoding so loading artwork does not move the reader.
    for(const img of root.querySelectorAll('img')){
      const dimensions=window.FENUMION_CATALOG.imageDimensions?.[img.getAttribute('src')?.split('?')[0]];
      if(dimensions){img.width=dimensions[0];img.height=dimensions[1];}
    }
    const summary=root.querySelector('.record-summary');
    if(article.brief&&summary)summary.insertAdjacentHTML('afterbegin',briefMarkup(article));
    const chapters=[...root.querySelectorAll('.record-chapter')];
    for(const chapter of chapters){
      const heading=chapter.querySelector(':scope > summary h2');
      const meta=article.sections?.find(section=>section.id===heading?.id);if(!meta)continue;
      const evidence=meta.evidence;
      const sources=[...new Set((evidence.sources||[]).map(source=>typeof source==='number'?article.sources?.[source]:source).filter(Boolean))];
      const panel=document.createElement('details');panel.className='section-evidence';panel.dataset.evidenceKind=evidence.kind;
      panel.innerHTML=`<summary><span class="evidence-dot" aria-hidden="true"></span>${esc(evidence.label)}<span class="evidence-open">Evidence &amp; limits</span></summary><div><p>${esc(evidence.summary)}</p><p class="evidence-scope">${evidence.scope==='section'?'Section evidence':'Article references · individual claims retain their qualifications'}</p>${sources.length?'<ul>'+sources.map(source=>'<li>'+referenceMarkup(source)+'</li>').join('')+'</ul>':'<p>A more precise source reference remains to be added.</p>'}</div>`;
      chapter.querySelector(':scope > summary').after(panel);
    }
    if(chapters.length>3){
      const groups=new Map();for(const meta of article.sections||[]){if(!root.querySelector('[id="'+CSS.escape(meta.id)+'"]'))continue;if(!groups.has(meta.chapter))groups.set(meta.chapter,[]);groups.get(meta.chapter).push(meta);}
      const outline=document.createElement('details');outline.className='chapter-guide';outline.open=chapters.length>12;
      outline.innerHTML='<summary>Choose a chapter</summary><nav aria-label="Reading order">'+[...groups].map(([title,sections])=>'<div><h3>'+esc(title)+'</h3>'+sections.map(section=>`<button type="button" data-section="${esc(section.id)}">${esc(section.title)}</button>`).join('')+'</div>').join('')+'</nav>';
      root.querySelector('.record-reading-controls')?.after(outline);
      const toolbar=root.querySelector('.record-reading-controls');const mode=document.createElement('button');mode.type='button';
      let continuous=false;try{continuous=localStorage.getItem('fenumion-continuous-reading')==='1';}catch{}
      const sync=()=>{mode.textContent=continuous?'Browse sections':'Read continuously';mode.setAttribute('aria-pressed',String(continuous));};
      const apply=()=>{chapters.forEach((chapter,index)=>chapter.open=continuous||index===0);sync();};
      mode.addEventListener('click',()=>{continuous=!continuous;try{localStorage.setItem('fenumion-continuous-reading',continuous?'1':'0');}catch{}apply();});
      toolbar?.append(mode);apply();
    }
    const list=articleChains(article);
    if(list.length){
      const shell=root.querySelector('[data-consequence-browser]');
      if(shell)shell.innerHTML=list.map(chain=>chainMarkup(chain)).join('');
      else if(!['world-index','living-timeline'].includes(article.id)){
        const section=document.createElement('details');section.className='related-sequences';section.innerHTML='<summary>Follow the consequences</summary>'+list.map(chain=>`<a href="#history-in-consequences?section=sequence-${esc(chain.id)}">${esc(chain.title)}</a>`).join('');
        (summary||root.querySelector('.article-body'))?.append(section);
      }
    }
    const sourcePanel=document.createElement('details');sourcePanel.className='article-evidence-ledger';
    sourcePanel.innerHTML='<summary>References &amp; reading limits</summary><p>Quest-established events take precedence over conflicting player recollections. A speaker’s belief remains attributed, including when expressed in a quest. Unreviewed sections use the mixed-account label.</p>'+(article.sources?.length?'<ul>'+article.sources.map(source=>'<li>'+referenceMarkup(source)+'</li>').join('')+'</ul>':'<p>Precise source references remain incomplete for this record.</p>');
    if(!['world-index','art-of-fenumion'].includes(article.id))root.querySelector('.article-body')?.append(sourcePanel);
    const research=root.querySelector('[data-research-browser]');
    if(research){
      const region=research.querySelector('[data-research-region]'),query=research.querySelector('[data-research-query]');
      const cards=[...root.querySelectorAll('.research-card')];
      const update=()=>{
        const terms=normalizeSearchName(window.FenumionCalendar.text(query.value)).split(' ').filter(Boolean);
        for(const card of cards)card.hidden=Boolean(region.value&&card.dataset.researchRegionValue!==region.value)||!terms.every(term=>normalizeSearchName(card.textContent).includes(term));
        for(const chapter of chapters){const questions=[...chapter.querySelectorAll('.research-card')];if(questions.length){chapter.hidden=questions.every(card=>card.hidden);if(region.value||terms.length)chapter.open=!chapter.hidden;}}
        research.querySelector('[data-research-count]').textContent=cards.filter(card=>!card.hidden).length+' of '+cards.length+' questions';
      };
      region.addEventListener('change',update);query.addEventListener('input',update);update();
    }
  }
  function placeEvents(place,until=''){
    const names=[place.title,...(place.aliases||[])].map(normalizePlaceName);
    const specific=byId.get(place.article)?.title===place.title;
    return archiveIndex.timeline.filter(e=>e.title&&e.sort&&!isRestrictedTimelineEvent(e)&&isPlayerSafeArticle(e.article))
      .filter(e=>(specific&&e.article===place.article)||String(e.location||'').split(/[;,/·]|\s+›\s+/).map(normalizePlaceName).some(name=>names.includes(name)))
      .filter(e=>{if(!until)return true;const iso=e.sort.slice(0,10),date=new Date(iso+'T00:00:00Z');const exactLabel=/\b\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i.test(e.meta)||/^\d{4}-\d{2}-\d{2}$/.test(e.meta);return exactLabel&&!/before|after|around|circa|unknown|uncertain|unresolved|\?|\d\s*[–-]\s*\d/i.test(e.meta)&&Number.isFinite(date.getTime())&&date.toISOString().slice(0,10)===iso&&iso<=until;})
      .sort((a,b)=>a.sort.localeCompare(b.sort));
  }
  function placeContext(place,until=''){
    const events=placeEvents(place,until),last=events.at(-1);
    const people=[...new Map(events.flatMap(e=>String(e.people||'').split(';').map(name=>resolvePublicPerson(name.trim())).filter(Boolean)).map(p=>[p.article,p])).values()].slice(0,5);
    return `<div class="place-history-context"><p><strong>Within</strong> ${esc(place.parent||place.region||'Unresolved')}</p><h4>${until?'Last matching record by '+esc(until):'Last matching dated record'}</h4>${last?`<p>${esc(last.meta)} · ${esc(last.summary)}</p>`:'<p>No matching dated event is established for this selection. This does not date the place’s creation or absence.</p>'}${people.length?'<p class="place-people">'+people.map(p=>`<a href="#${esc(p.article)}">${esc(p.title)}</a>`).join(' · ')+'</p>':''}${events.length?'<ol>'+events.slice(-3).map(e=>`<li><button type="button" data-timeline-title="${esc(e.title)}"><small>${esc(e.meta)}</small>${esc(e.title)}</button></li>`).join('')+'</ol>':''}<small>Dates follow the chronicle entries. Partial or uncertain dates are omitted from exact-date selections.</small></div>`;
  }
  window.CodexReader={load,ensureSearch,get searchReady(){return Boolean(searchData);},searchText:article=>parts(article).text,matchSection,afterRender,jump,eventChains,placeContext,placeEvents,referenceMarkup};
})();

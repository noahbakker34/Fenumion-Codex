/* Browse the existing selection. Context and source precision remain explicit. */
(() => {
 const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const normalize=value=>String(value??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’]/g,'').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
 let dialog,activeEpoch=0,returnFocus;
 const hoverEnabled=()=>{try{return localStorage.getItem('fenumion-quote-hover-voice')==='1';}catch{return false;}};
 function close(){activeEpoch++;if(dialog?.open)dialog.close();returnFocus?.isConnected&&returnFocus.focus();}
 function dateIn(label){
  const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const match=label.match(/\b(\d{1,2})\s+([A-Za-z]+)\s+(20\d{2})\b/);if(!match)return '';
  const month=monthNames.findIndex(name=>name.toLowerCase()===match[2].toLowerCase()||name.slice(0,3).toLowerCase()===match[2].toLowerCase())+1;
  const iso=FenumionCalendar.iso(+match[3],month,+match[1]);return FenumionCalendar.point(iso)?iso:'';
 }
 function ensureDialog(){
  if(dialog)return dialog;
  dialog=document.createElement('dialog');dialog.id='quote-dialog';dialog.className='quote-detail-dialog';dialog.setAttribute('aria-labelledby','quote-detail-title');document.body.append(dialog);
  dialog.addEventListener('cancel',()=>{activeEpoch++;});dialog.addEventListener('click',event=>{if(event.target===dialog||event.target.closest('[data-close-quote]'))close();});
  return dialog;
 }
 async function detail(record,context,trigger){
  context.stopVoices();const panel=ensureDialog(),epoch=++activeEpoch;returnFocus=trigger;
  panel.innerHTML=`<article><button type="button" class="quote-detail-close" data-close-quote aria-label="Close quotation">×</button><p class="chronicle-kicker">${esc(record.group)}</p><h2 id="quote-detail-title">Words of ${esc(record.personName)}</h2><blockquote>${esc(record.title)}</blockquote><cite>${esc(record.speaker)}</cite><p class="quote-detail-context">${esc(record.context)}</p><dl class="quote-detail-facts"><div><dt>Recorded date</dt><dd>${record.date?esc(FenumionCalendar.date(record.date))+(/posting date/i.test(record.speaker)?' · posting date':''):'A precise date is not established in this quotation’s attribution.'}</dd></div></dl><p class="quote-source-status" role="status">Finding the connected history…</p><div class="quote-source-detail"></div><nav class="quote-detail-links" aria-label="Read the connected history"></nav></article>`;
  FenumionCalendar.render(panel);
  if(!panel.open)panel.showModal();panel.scrollTop=0;panel.querySelector('[data-close-quote]').focus();
  const links=panel.querySelector('.quote-detail-links');
  const addLink=(label,action)=>{const button=document.createElement('button');button.type='button';button.textContent=FenumionCalendar.text(label);button.addEventListener('click',()=>{close();action();});links.append(button);};
  const person=context.person(record.personName),profile=person&&context.byId.get(person.article),article=context.byId.get(record.article);
  if(profile&&context.allowed(profile.id))addLink('Open '+record.personName+'’s profile',()=>context.openArticle(profile.id));
  if(article&&article.id!==profile?.id)addLink(context.allowed(article.id)?'Open the related history':'Open the associated vault record',()=>context.openArticle(article.id));
  const words=normalize(record.title);
  const events=context.events.filter(item=>normalize(item.summary+' '+context.consequences(item.title)).includes(words));
  if(events.length===1)addLink('Open the event quoting this line',()=>context.openEvent(events[0]));
  const status=panel.querySelector('.quote-source-status'),sourcePanel=panel.querySelector('.quote-source-detail');
  const collectionSources=()=>`<details><summary>Collection references · individual scene locator incomplete</summary><p>These are references for the selected collection. They do not establish a precise source message for every line.</p><ul>${context.sources.map(source=>'<li>'+context.reference(source)+'</li>').join('')}</ul></details>`;
  if(!article||article.protected||!context.allowed(article.id)){
   status.textContent='The quotation and its context belong to the public selection. Its associated dossier retains its access rules.';sourcePanel.innerHTML=collectionSources();FenumionCalendar.render(sourcePanel);return;
  }
  try{
   await context.load(article);if(epoch!==activeEpoch||!panel.open)return;
   const template=document.createElement('template');template.innerHTML=article.body;
   let section='',matchSection='';
   for(const node of template.content.querySelectorAll('h2,blockquote,q,.quote,p,li')){
    if(node.matches('h2')){section=node.id;continue;}
    const text=normalize(node.textContent);
    if(text.includes(words)&&text.length<words.length*3+160){matchSection=section;break;}
   }
   const meta=article.sections?.find(section=>section.id===matchSection);
   if(matchSection){
    status.textContent='This line is present in the related history. Section references retain their recorded scope.';
    addLink('Read the scene · '+(meta?.title||'related section'),()=>context.openArticle(article.id+'?section='+matchSection));
   }else status.textContent='The related history is available; a precise scene reference for this line is not yet linked.';
   const references=[...new Set((meta?.evidence?.sources||[]).map(source=>typeof source==='number'?article.sources?.[source]:source).filter(Boolean))];
   sourcePanel.innerHTML=references.length?`<details><summary>Section evidence &amp; references</summary><p>${esc(meta.evidence.label)} · ${esc(meta.evidence.summary)}</p><ul>${references.map(source=>'<li>'+context.reference(source)+'</li>').join('')}</ul><small>A section reference may cover several claims; it is not automatically the exact message containing this quotation.</small></details>`:collectionSources();
   FenumionCalendar.render(sourcePanel);
  }catch{
   if(epoch!==activeEpoch||!panel.open)return;status.textContent='Source details could not load. You can retry or open the related history.';
   const retry=document.createElement('button');retry.type='button';retry.textContent='Retry source details';retry.addEventListener('click',()=>detail(record,context,trigger));sourcePanel.append(retry);
  }
 }
 function setup(root,context,params){
  close();const body=root.querySelector('.article-body');if(!body)return;
  const records=context.records.map(record=>({...record,context:root.querySelector('#'+CSS.escape(record.quoteId)+' .quote-context')?.textContent||'',personName:record.speaker.split(' · ')[0],date:dateIn(record.speaker),voice:Boolean(context.recording(record.title))}));
  const groups=[...new Map(records.map(record=>[record.groupId,record.group])).entries()],names=[...new Set(records.map(record=>record.personName))].sort((a,b)=>a.localeCompare(b));
  body.querySelectorAll('.quote-jump,.quote-gallery').forEach(node=>node.remove());for(const [id]of groups)body.querySelector('#'+CSS.escape(id))?.remove();
  const shell=document.createElement('section');shell.id='quote-browser';shell.setAttribute('aria-label','Explore memorable quotations');
  shell.innerHTML=`<div class="quote-browser-controls"><label class="quote-search">Find words or a moment<input type="search" data-quote-search placeholder="Try a line, a name, or a Fenumion date…" autocomplete="off"></label><label>Speaker<select data-quote-speaker><option value="">All speakers</option>${names.map(name=>`<option value="${esc(name)}">${esc(name)}</option>`).join('')}</select></label><label>Show<select data-quote-voice><option value="">All quotations</option><option value="recorded">With a voice recording</option></select></label><label>Order<select data-quote-order><option value="theme">By theme</option><option value="speaker">Speaker A–Z</option><option value="newest">Newest dated first</option><option value="oldest">Oldest dated first</option></select></label></div><nav class="quote-theme-filters" aria-label="Filter quotations by theme"><button type="button" data-quote-theme="">All themes <span>${records.length}</span></button>${groups.map(([id,name])=>`<button type="button" data-quote-theme="${id}">${esc(name)} <span>${records.filter(record=>record.groupId===id).length}</span></button>`).join('')}</nav><div class="quote-result-tools"><p data-quote-count role="status" aria-live="polite"></p><button type="button" data-quote-reset>Reset filters</button><label class="quote-hover-setting"><input type="checkbox" data-quote-hover${hoverEnabled()?' checked':''}>Play recorded voices on hover</label></div><div data-quote-results></div>`;
  const ending=body.querySelector('#why-these-lines-remain');if(ending)ending.before(shell);else body.prepend(shell);
  const query=shell.querySelector('[data-quote-search]'),speaker=shell.querySelector('[data-quote-speaker]'),voice=shell.querySelector('[data-quote-voice]'),order=shell.querySelector('[data-quote-order]'),results=shell.querySelector('[data-quote-results]');
  query.value=params.get('quote')||'';speaker.value=names.includes(params.get('speaker'))?params.get('speaker'):'';voice.value=params.get('voice')==='recorded'?'recorded':'';order.value=['theme','speaker','newest','oldest'].includes(params.get('sort'))?params.get('sort'):'theme';let theme=groups.some(([id])=>id===params.get('theme'))?params.get('theme'):'';
  const search=new Map(records.map(record=>[record,normalize(FenumionCalendar.searchText([record.title,record.speaker,record.group,record.context].join(' ')))]));
  function render(updateRoute=false){
   context.stopVoices();const terms=normalize(query.value).split(' ').filter(Boolean);
   const found=records.filter(record=>(!speaker.value||record.personName===speaker.value)&&(!theme||record.groupId===theme)&&(!voice.value||record.voice)&&terms.every(term=>search.get(record).includes(term)));
   found.sort((a,b)=>order.value==='speaker'?a.personName.localeCompare(b.personName):order.value==='newest'||order.value==='oldest'?(!a.date||!b.date?Number(!a.date)-Number(!b.date):(a.date.localeCompare(b.date)*(order.value==='newest'?-1:1))):0);
   const list=order.value==='theme'?groups.map(([id,title])=>({id,title,items:found.filter(record=>record.groupId===id)})).filter(group=>group.items.length):[{id:'quote-results-heading',title:'Selected voices',items:found}];
   results.innerHTML=found.length?list.map(group=>`<section class="quote-result-group"><h2 id="${group.id}">${esc(group.title)}</h2><div class="quote-browser-grid">${group.items.map(record=>{
    const person=context.person(record.personName),article=person&&context.byId.get(person.article),image=article&&!article.protected&&context.allowed(article.id)&&article.image;
    return `<article class="quote-card quote-browser-card" id="${record.quoteId}"><div class="quote-speaker">${image?`<img src="${esc(image)}" alt="" loading="lazy">`:'<span class="quote-speaker-glyph" aria-hidden="true">“</span>'}<div><cite>${esc(record.speaker)}</cite><span>${esc(record.group)}</span></div></div><button type="button" class="quote-open" data-quote-id="${record.quoteId}" aria-label="Read the context of ${esc(record.personName)}’s quotation"><blockquote>${esc(record.title)}</blockquote><span class="quote-context">${esc(record.context)}</span><span class="quote-read-moment">Read the moment <b aria-hidden="true">↗</b></span></button></article>`;
   }).join('')}</div></section>`).join(''):'<div class="timeline-empty"><strong>No quotations match these filters.</strong><span>Try another speaker, theme or phrase.</span></div>';
   shell.querySelector('[data-quote-count]').textContent=`${found.length} of ${records.length} selected quotations${order.value==='newest'||order.value==='oldest'?' · undated lines follow dated quotations':''}`;
   shell.querySelectorAll('[data-quote-theme]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.quoteTheme===theme)));
   context.setupVoices();
   if(updateRoute){const route=new URLSearchParams();if(query.value)route.set('quote',query.value);if(speaker.value)route.set('speaker',speaker.value);if(theme)route.set('theme',theme);if(voice.value)route.set('voice',voice.value);if(order.value!=='theme')route.set('sort',order.value);history.replaceState(null,'','#memorable-quotes'+(route.size?'?'+route:''));root.dataset.route=location.hash;}
   FenumionCalendar.render(shell);
   context.contents();
  }
  query.addEventListener('input',()=>render(true));for(const control of [speaker,voice,order])control.addEventListener('change',()=>render(true));
  shell.addEventListener('click',event=>{
   const group=event.target.closest('[data-quote-theme]');if(group){theme=group.dataset.quoteTheme;render(true);return;}
   const open=event.target.closest('[data-quote-id]');if(open){event.stopPropagation();detail(records.find(record=>record.quoteId===open.dataset.quoteId),context,open);return;}
   if(event.target.closest('[data-quote-reset]')){query.value='';speaker.value='';voice.value='';order.value='theme';theme='';render(true);query.focus();}
  });
  shell.querySelector('[data-quote-hover]').addEventListener('change',event=>{try{localStorage.setItem('fenumion-quote-hover-voice',event.target.checked?'1':'0');}catch{}context.stopVoices();});
  render();
 }
 window.CodexQuotes={setup,close,hoverEnabled};
})();

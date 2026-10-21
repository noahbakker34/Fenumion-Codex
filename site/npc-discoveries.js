// A bounded browser for all supplied discovery labels. Unknown impact stays unrated.
window.setupNpcDiscoveries = function(root) {
  const shell=root.querySelector('[data-npc-discoveries]');
  if (!shell) return;
  const data=window.FENUMION_NPC_DISCOVERIES.entries;
  const query=shell.querySelector('[data-discovery-query]');
  const kind=shell.querySelector('[data-discovery-kind]');
  const island=shell.querySelector('[data-discovery-island]');
  const order=shell.querySelector('[data-discovery-order]');
  const list=shell.querySelector('[data-discovery-list]');
  const count=shell.querySelector('[data-discovery-count]');
  const pageLabel=shell.querySelector('[data-discovery-page]');
  const previous=shell.querySelector('[data-discovery-previous]');
  const next=shell.querySelector('[data-discovery-next]');
  const labels={npc:'NPC',player:'Player character',companion:'Companion',manifestation:'Manifestation',collective:'Collective',encounter:'Encounter',identity:'Archive identity',veiled:'Veiled record'};
  const normalize=text=>String(text).normalize('NFKD').toLocaleLowerCase().replace(/[\u0300-\u036f]/g,'').replace(/[‘’]/g,"'").replace(/\u00a0/g,' ');
  const textByEntry=new Map(data.map(entry=>[entry,normalize(window.FenumionCalendar.searchText([entry.name,entry.canonicalName,entry.role,entry.summary,entry.island].join(' ')))]));
  Object.entries(labels).forEach(([id,label])=>kind.add(new Option(label,id)));
  [...new Set(data.map(entry=>entry.island).filter(Boolean))].sort().forEach(name=>island.add(new Option(name,name)));
  let page=0,timer;
  const pageSize=24;
  function render(){
    const terms=normalize(query.value.trim()).split(/\s+/).filter(Boolean);
    let found=data.filter(entry=>terms.every(term=>textByEntry.get(entry).includes(term))&&(!kind.value||entry.kind===kind.value)&&(!island.value||(island.value==='unplaced'?!entry.island&&entry.kind!=='veiled':entry.island===island.value)));
    found.sort((a,b)=>order.value==='name'?a.name.localeCompare(b.name):order.value==='presence'?(b.presence??-1)-(a.presence??-1)||a.name.localeCompare(b.name):(b.rating?.score??-1)-(a.rating?.score??-1)||a.name.localeCompare(b.name));
    const pages=Math.max(1,Math.ceil(found.length/pageSize));page=Math.min(page,pages-1);
    count.textContent=`${found.length} of ${data.length} archive labels · ${data.filter(e=>e.kind==='veiled').length} protected records retained without identity details`;
    list.innerHTML=found.slice(page*pageSize,(page+1)*pageSize).map(entry=>`<button type="button" class="index-card discovery-card${entry.kind==='veiled'?' locked-record':''}" data-discovery-id="${entry.id}"><span class="index-card-copy"><small>${labels[entry.kind]} · ${entry.island|| (entry.kind==='veiled'?'Protected':'Island unestablished')}</small><strong>${escapeHtml(entry.name)}</strong><span>${escapeHtml(entry.summary)}</span>${entry.kind==='veiled'?'':`<span class="discovery-score">${entry.rating?`Prominence ${entry.rating.score}/100 · ${entry.rating.confidence}`:'Prominence unrated'}${entry.presence!==null?` · Recorded presence ${entry.presence}/20`:''}</span>`}</span></button>`).join('')||'<p>No matching records.</p>';
    previous.disabled=page===0;next.disabled=page>=pages-1;pageLabel.textContent=`Page ${page+1} of ${pages}`;
  }
  query.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{page=0;render();},120)});
  for(const input of [kind,island,order])input.addEventListener('change',()=>{page=0;render()});
  shell.querySelector('[data-discovery-clear]').addEventListener('click',()=>{query.value='';kind.value='';island.value='';order.value='prominence';page=0;render();query.focus()});
  previous.addEventListener('click',()=>{page--;render();list.focus()});next.addEventListener('click',()=>{page++;render();list.focus()});
  list.addEventListener('click',event=>{const button=event.target.closest('[data-discovery-id]');if(button)renderArticle(button.dataset.discoveryId)});
  render();
};

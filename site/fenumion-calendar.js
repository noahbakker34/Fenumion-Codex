/* Reader-facing dates. Original records, source identifiers and sortable ISO values stay intact. */
(() => {
  function createCalendar(calendar) {
    const months=calendar.months,first=calendar.yearNumbering.firstSourceYear,firstYear=calendar.yearNumbering.firstYear;
    const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const numbers=new Map(monthNames.flatMap((name,i)=>[[name.toLowerCase(),i+1],[name.slice(0,3).toLowerCase(),i+1]]));numbers.set('sept',9);
    const M='(?:January|February|March|April|May|June|July|August|September|October|November|December|(?:Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)\\.?)';
    const yearLabel=year=>year<first?`Year ${first-year} before the Final War`:`Year ${year-first+firstYear} of the Final War`;
    const valid=(year,month,day)=>{const d=new Date(Date.UTC(year,month-1,day));return d.getUTCFullYear()===year&&d.getUTCMonth()===month-1&&d.getUTCDate()===day;};
    function point(iso) {
      if(!/^\d{4}-\d{2}-\d{2}$/.test(iso||''))return null;
      const [sourceYear,monthNumber,day]=iso.split('-').map(Number);
      if(!valid(sourceYear,monthNumber,day))return null;
      const before=iso<calendar.originDate,year=sourceYear-first+firstYear;
      const era=sourceYear===first&&before?`Year ${firstYear} · before the Final War`:yearLabel(sourceYear);
      return {day,month:months[monthNumber-1].name,monthNumber,sourceYear,before,year,era};
    }
    const iso=(year,month,day)=>`${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const date=source=>{const p=point(source);return p?`${p.day}, ${p.month} · ${p.era}`:source;};
    const monthNumber=name=>numbers.get(name.toLowerCase().replace(/\.$/,''));
    const monthLabel=(number,year)=>{
      const last=new Date(Date.UTC(year,number,0)).getUTCDate(),p=point(iso(year,number,last));
      return `${months[number-1].name} · ${p.era}`;
    };
    function range(year,month,start,end,endYear=year,endMonth=month) {
      const a=point(iso(year,month,start)),b=point(iso(endYear,endMonth,end));if(!a||!b)return null;
      if(a.era===b.era&&month===endMonth)return `${start}–${end}, ${a.month} · ${a.era}`;
      if(a.era===b.era)return `${start}, ${a.month} – ${end}, ${b.month} · ${a.era}`;
      return `${start}, ${a.month} · ${a.era} – ${end}, ${b.month} · ${b.era}`;
    }
    function text(value) {
      const source=String(value??'');if(!/[0-9]|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/i.test(source))return source;
      const kept=[],hold=value=>`\uE000q${kept.push(value)-1}\uE001`;
      // URLs, source filenames and section identifiers are identities, not date labels.
      let result=source.replace(/https?:\/\/[^\s<>"']+|#[a-z0-9][a-z0-9?=&_./%-]*|\b[\w.-]*\d[\w.-]*\.(?:md|txt|json|csv|tsv|xlsx|mp4|mp3|png|jpe?g|webp|gif)\b/gi,hold);
      result=result.replace(/\b(20\d{2})-(\d{2})-(\d{2})(?:T(\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)(Z|[+-]\d{2}:?\d{2})?)?\b/g,(all,y,m,d,time,zone)=>valid(+y,+m,+d)?hold(date(iso(+y,+m,+d))+(time?` · ${time}${zone==='Z'?' UTC':zone?' '+zone:''}`:'')):hold(all));
      result=result.replace(new RegExp(`\\b(\\d{1,2})\\s+(${M})(?:\\s+(20\\d{2}))?\\s*(?:[–—-]|to|through)\\s*(\\d{1,2})\\s+(${M})\\s+(20\\d{2})\\b`,'gi'),(all,d1,m1,y1,d2,m2,y2)=>hold(range(+(y1||y2),monthNumber(m1),+d1,+d2,+y2,monthNumber(m2))||all));
      result=result.replace(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?(?:\\s*[–—-]\\s*(\\d{1,2}))?\\s+(${M})\\s*,?\\s*(20\\d{2})\\b`,'gi'),(all,d,end,m,y)=>{
        const n=monthNumber(m);return hold(end?range(+y,n,+d,+end)||all:valid(+y,n,+d)?date(iso(+y,n,+d)):all);
      });
      result=result.replace(new RegExp(`\\b(${M})\\s+(\\d{1,2})(?:st|nd|rd|th)?(?:\\s*[–—-]\\s*(\\d{1,2}))?,?\\s+(20\\d{2})\\b`,'gi'),(all,m,d,end,y)=>{
        const n=monthNumber(m);return hold(end?range(+y,n,+d,+end)||all:valid(+y,n,+d)?date(iso(+y,n,+d)):all);
      });
      result=result.replace(new RegExp(`\\b(${M})\\s*[–—/-]\\s*(${M})\\s+(20\\d{2})\\b`,'gi'),(all,a,b,y)=>{
        const first=monthLabel(monthNumber(a),+y),last=monthLabel(monthNumber(b),+y);
        return hold(first.split(' · ').slice(1).join(' · ')===last.split(' · ').slice(1).join(' · ')?`${months[monthNumber(a)-1].name}–${last}`:`${first} – ${last}`);
      });
      result=result.replace(new RegExp(`\\b(${M})\\s+(20\\d{2})\\b`,'gi'),(all,m,y)=>hold(monthLabel(monthNumber(m),+y)));
      result=result.replace(new RegExp(`\\b(\\d{1,2})(?:\\s*[–—-]\\s*(\\d{1,2}))?\\s+(${M})(?![a-z])`,'gi'),(all,d,end,m)=>valid(2000,monthNumber(m),+d)&&(!end||valid(2000,monthNumber(m),+end))?hold(`${d}${end?'–'+end:''}, ${months[monthNumber(m)-1].name}`):all);
      result=result.replace(new RegExp(`\\b(${M})\\s+(\\d{1,2})(?![\\d])`,'gi'),(all,m,d)=>valid(2000,monthNumber(m),+d)?hold(`${d}, ${months[monthNumber(m)-1].name}`):all);
      result=result.replace(/\b(?:Year\s+)?(20\d{2})\b(?!\s+(?:rules(?:et)?|edition))/gi,(all,y)=>hold(yearLabel(+y)));
      result=result.replace(new RegExp(`\\b(${M})(?![a-z])`,'gi'),(all,name,offset)=>{
        const number=monthNumber(name);if(!number)return all;
        if(number===3||number===5){
          if(/^[a-z]/.test(name))return all;
          const before=result.slice(0,offset),after=result.slice(offset+all.length);
          const contextual=/\b(?:in|by|during|until|from|through|since|before|after|early|mid|late|later|opening|first|second|last|next|this|that|the|another|a|an|checked)\s+(?:(?:early|mid|late|later)\s+)?$/i.test(before)||/^\s+(?:expedition|retreat|hunt|outing|scene|entry|entries|post|posts|record|records|civic|institution[- ]|dialogue|battle|journey|meeting|gathering)\b/i.test(after);
          const heading=/^\s*$/.test(before)&&/^\s*(?:$|[·:–—/-])/.test(after);
          if(!contextual&&!heading)return all;
        }
        return hold(months[number-1].name);
      });
      return result.replace(/\uE000q(\d+)\uE001/g,(_,index)=>kept[+index]);
    }
    return {text,point,date,yearLabel,monthLabel,valid,iso,searchText:value=>String(value??'')+' '+text(value)};
  }
  if(typeof module!=='undefined'&&module.exports){module.exports=createCalendar;return;}
  if(!document.body.classList.contains('codex-world'))return;
  const api=createCalendar(window.FENUMION_CATALOG?.timelineCalendar||window.FENUMION_CALENDAR);window.FenumionCalendar=api;
  api.dateControl=input=>{
    if(!input||input.dataset.fenumionPicker)return;
    input.dataset.fenumionPicker='1';input.type='hidden';
    const shell=document.createElement('fieldset');shell.className='fenumion-date-picker';
    const first=window.FENUMION_CATALOG.timelineCalendar.yearNumbering.firstSourceYear;
    const recorded=window.FENUMION_CATALOG.archiveIndex.timeline.map(event=>Number(event.sort?.slice(0,4))).filter(year=>year>=first);
    const last=Math.max(first,...recorded),selected=api.point(input.value);
    if(selected&&!recorded.includes(selected.sourceYear))recorded.push(selected.sourceYear);
    const years=[...new Set([...Array.from({length:last-first+1},(_,index)=>first+index),...(selected?[selected.sourceYear]:[])])].sort((a,b)=>a-b);
    shell.innerHTML=`<legend>Records through · Fenumion date</legend><label>Day<select data-fenumion-day aria-label="Day of the month"><option value="">Day</option></select></label><label>Month<select data-fenumion-month aria-label="Fenumion month"><option value="">Month</option>${window.FENUMION_CATALOG.timelineCalendar.months.map(month=>`<option value="${month.number}">${month.name}</option>`).join('')}</select></label><label>Year<select data-fenumion-year aria-label="Fenumion year"><option value="">Year</option>${years.map(year=>`<option value="${year}">${api.yearLabel(year)}</option>`).join('')}</select></label>`;
    const parent=input.closest('label');if(parent){parent.before(shell);shell.after(input);parent.remove();}else input.before(shell);
    const day=shell.querySelector('[data-fenumion-day]'),month=shell.querySelector('[data-fenumion-month]'),year=shell.querySelector('[data-fenumion-year]');
    const days=()=>{
      const previous=day.value,count=month.value?new Date(Date.UTC(Number(year.value)||2000,Number(month.value),0)).getUTCDate():31;
      day.innerHTML='<option value="">Day</option>'+Array.from({length:count},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join('');
      if(Number(previous)<=count)day.value=previous;
    };
    if(selected){year.value=String(selected.sourceYear);month.value=String(selected.monthNumber);days();day.value=String(selected.day);}else days();
    shell.addEventListener('change',event=>{
      if(event.target!==day)days();
      if(!day.value||!month.value||!year.value)return;
      input.value=api.iso(Number(year.value),Number(month.value),Number(day.value));input.dispatchEvent(new Event('change',{bubbles:true}));
    });
  };
  const excluded='script,style,code,pre,textarea,input,[contenteditable="true"],[data-calendar-source]';
  const attributes=['aria-label','title','alt','placeholder'];
  function element(el){
    if(el.matches(excluded)||el.closest(excluded))return;
    for(const key of attributes){const value=el.getAttribute(key);if(value){const next=api.text(value);if(next!==value)el.setAttribute(key,next);}}
  }
  function render(root){
    if(root.nodeType===3){if(!root.parentElement?.closest(excluded)){const next=api.text(root.data);if(next!==root.data)root.data=next;}return;}
    if(root.nodeType!==1||root.closest(excluded))return;
    element(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:node=>node.nodeType===1&&node.matches(excluded)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
    let node;while(node=walker.nextNode()){if(node.nodeType===1)element(node);else{const next=api.text(node.data);if(next!==node.data)node.data=next;}}
  }
  api.render=render;
  // A single observer covers lazy articles, dialogs, paginated indexes, search and authenticated records.
  const observer=new MutationObserver(records=>{
    const roots=new Set();
    for(const record of records){
      if(record.type==='childList')for(const node of record.addedNodes)roots.add(node);
      else if(record.type==='characterData')roots.add(record.target);
      else element(record.target);
    }
    for(const root of roots)if(root.isConnected)render(root);
  });
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});render(document.body);
})();

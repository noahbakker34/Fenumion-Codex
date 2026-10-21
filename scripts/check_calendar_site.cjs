// Exercise Fenumion dates across reader surfaces; private data is a synthetic fixture only.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
const output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-calendar-site';
(async()=>{
 fs.mkdirSync(output,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try {
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));let authorized=false;
  const fixture={articles:[{id:'cala',title:'Synthetic calendar dossier',category:'Test',type:'Synthetic fixture',tags:[],facts:{Recorded:'2026-10-18'},body:'<p>A synthetic claim is recorded on 18 October 2026.</p><h2 id="synthetic-calendar">12 June 2024</h2><p>The missing day in May 2025 remains unknown.</p>',sections:[],sources:['Synthetic reference · 2026-10-18 UTC · https://example.test/2026-10-18']}]};
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',route=>route.fulfill({status:authorized?200:401,contentType:'application/json',body:authorized?(route.request().url().includes('/vault/data')?JSON.stringify(fixture):'{"signedIn":true}'):'{"error":"signin"}'}));
  const go=async id=>{await page.goto(base+'#'+id);await page.waitForFunction(id=>byId.get(id.split('?')[0])?.bodyLoaded&&document.querySelector('#article-content').dataset.route?.split('?')[0]==='#'+id.split('?')[0],id).catch(async error=>{console.error({id,errors,state:await page.evaluate(()=>({hash:location.hash,rendered:document.querySelector('#article-content').dataset.route}))});throw error;});};
  const audit=async label=>{
   const leftovers=await page.evaluate(()=>{
    const root=document.querySelector('#article-content'),clean=root.textContent.replace(/https?:\/\/[^\s<>]+|\S+\.(?:md|json|txt)/g,'').replace(/\b20\d{2}\s+(?:rules(?:et)?|edition)\b/gi,'');
    return [...clean.matchAll(/\b20\d{2}\b|\b(?:January|February|April|June|July|August|September|October|November|December)\b/g)].map(match=>clean.slice(Math.max(0,match.index-30),match.index+70)).slice(0,6);
   });assert.deepEqual(leftovers,[],label+' has no Gregorian date labels');
  };
  await go('living-timeline');const events=await page.evaluate(()=>JSON.stringify(archiveIndex.timeline));
  assert.equal(await page.locator('.event-card').count(),343);await audit('timeline');
  assert.equal(await page.locator('.timeline-era-header h3').filter({hasText:'Year 3 of the Final War'}).count(),1);
  assert((await page.locator('[data-era]').allTextContents()).some(value=>value.includes('Year 1')));
  await page.locator('.event-card[data-timeline-title="The harpy cave is collapsed after a final prayer"]').click();
  assert((await page.locator('#record-dialog-content').innerText()).includes('19, Month of Nuru · Year 3'));
  assert((await page.locator('#record-dialog-content').innerText()).includes('26–27, Month of Nuru · Year 3'),'posting window remains distinct from adjusted quest date');
  assert(!/\b2026\b/.test(await page.locator('#record-dialog-content').innerText()));
  await page.keyboard.press('Escape');
  for(const id of ['world-index','memorable-quotes','nienna','fenwick','mark-of-the-wild','history-in-consequences','claims-receipts','open-questions','discovery-001','quest-record']){if(await page.evaluate(id=>byId.has(id),id)){await go(id);await audit(id);}}
  await go('memorable-quotes');
  assert((await page.locator('cite').allTextContents()).includes('Swift Foot · 6, Month of Moirah · Year 1 of the Final War'));
  await page.locator('.quote-card').filter({hasText:'Swift Foot · 6,'}).scrollIntoViewIfNeeded();await page.screenshot({path:output+'/quotes-desktop.png'});
  await go('nienna');assert((await page.locator('#nienna-july-loss').textContent()).includes('Month of Cala · Year 1'));
  assert((await page.locator('.article-evidence-ledger').textContent()).includes('Month of Death'));
  assert(await page.evaluate(()=>byId.get('nienna').sources.some(source=>source.includes('2026'))),'source references remain unmodified in memory');
  await page.evaluate(async()=>{search.value='Month of Cala Year 1';await runSearch(search.value);});
  assert(await page.locator('.search-result[data-article="nienna"]').count(),'named-date article search');
  await page.keyboard.press('Escape');
  await go('player-perspectives');await audit('player notes');
  assert((await page.locator('[data-notes-year] option').allTextContents()).some(value=>value.includes('Year 1')));
  assert((await page.locator('.perspective-meta time').first().innerText()).includes('Month of'));
  assert(/^20\d{2}-\d{2}-\d{2}$/.test(await page.locator('.perspective-meta time').first().getAttribute('datetime')),'machine-readable datetime retained');
  const first=await page.evaluate(()=>FENUMION_PLAYER_PERSPECTIVES.entries.slice().sort((a,b)=>b.posted.localeCompare(a.posted))[0]);
  await page.locator('[data-notes-query]').fill(await page.evaluate(value=>FenumionCalendar.date(value),first.posted));
  assert(await page.locator('.perspective-card').count(),'named-date notes search');
  await go('visual-archive?map=pristinia&place=Pristinia');
  const year=page.getByLabel('Fenumion year',{exact:true}),month=page.getByLabel('Fenumion month',{exact:true}),day=page.getByLabel('Day of the month',{exact:true});
  await year.selectOption('2024');await month.selectOption('2');await day.selectOption('29');
  assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2024-02-29');
  await year.selectOption('2025');assert.equal(await day.locator('option[value="29"]').count(),0,'non-leap year removes invalid day');
  await day.selectOption('28');assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2025-02-28');
  await year.selectOption('2024');await month.selectOption('4');await day.selectOption('30');
  assert((await page.locator('.map-detail').textContent()).includes("30, Month of Namo'o · Year 1"));
  assert((await page.evaluate(()=>location.hash)).includes('date=2024-04-30'),'existing ISO route preserved');
  await page.reload();await year.waitFor();assert.equal(await year.inputValue(),'2024');assert.equal(await month.inputValue(),'4');assert.equal(await day.inputValue(),'30');
  await audit('atlas');await page.locator('.fenumion-date-picker').scrollIntoViewIfNeeded();await page.screenshot({path:output+'/atlas-desktop.png'});
  for(const width of [390,320]){
   await page.setViewportSize({width,height:844});
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'atlas fits '+width);
   for(const control of [year,month,day])assert(await control.evaluate(el=>el.getBoundingClientRect().height>=44&&parseFloat(getComputedStyle(el).fontSize)>=16),'named date control is usable');
   for(const control of [year,month,day])assert(await control.evaluate(el=>{const box=el.getBoundingClientRect(),parent=el.closest('fieldset').getBoundingClientRect();return box.left>=parent.left&&box.right<=parent.right;}),'date selector stays within its fieldset at '+width);
   await page.locator('.fenumion-date-picker').scrollIntoViewIfNeeded();
   if(width===390)await page.screenshot({path:output+'/atlas-mobile.png'});
   for(const id of ['memorable-quotes','nienna','living-timeline?importance=5']){await go(id);await audit(id+' mobile');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+' fits '+width);}
   await go('visual-archive?map=pristinia&place=Pristinia&date=2024-04-30');
  }
  await page.locator('[data-atlas-current]').click();assert.equal(await page.locator('[data-atlas-date]').inputValue(),'');assert.equal(await year.inputValue(),'');
  await go('trade-builder');assert((await page.locator('.article-body').textContent()).includes('May build'),'modal May is not a calendar month');
  if(!process.env.CODEX_LIVE){
   await page.goto(base+'#cala');await page.locator('.vault-gate').waitFor();authorized=true;await page.locator('[data-open-vault]').click();
   await page.locator('#synthetic-calendar').waitFor();assert.equal(await page.locator('#synthetic-calendar').textContent(),'12, Month of Rebirth · Year 1 of the Final War');
   assert((await page.locator('.article-body').textContent()).includes('18, Month of Death · Year 3'));await audit('synthetic unlocked article');
   await page.locator('#vault-button').click();await page.locator('.vault-gate').waitFor();assert.equal(await page.locator('#synthetic-calendar').count(),0);assert(await page.evaluate(()=>!vaultUnlocked&&!isPlayerSafeArticle('cala')),'locked content remains gated');
  }
  authorized=false;await page.reload();await go('living-timeline');assert.equal(await page.evaluate(()=>JSON.stringify(archiveIndex.timeline)),events,'display never mutates event dates, metadata or chronology');
  assert.deepEqual(await page.evaluate(()=>articles.filter(article=>isRestrictedArticle(article.id)&&(article.body||article.brief)).map(article=>article.id)),[]);
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+'gedankin/#strange-shore');await page.locator('.article-header h1').filter({hasText:'The Shore'}).waitFor();await audit('Gedankin sources');
  assert(await page.evaluate(()=>GedankinData.locations.find(item=>item.id==='strange-shore').sources.some(source=>source.includes('2024-09-25–2026-09-22'))),'Gedankin source timestamps remain original');
  assert(await page.evaluate(()=>GedankinData.locations.find(item=>item.id==='strange-shore').sources.some(source=>source.includes('not established in-world dates'))),'posting sources keep their original qualification');
  await page.goto(base+'gedankin/#living-timeline');await page.locator('.gedankin-date-note').waitFor();await audit('Gedankin timeline');
  assert((await page.locator('.gedankin-date-note').innerText()).includes('in-world calendar may differ'));
  const dated=await page.evaluate(()=>GedankinData.events.find(item=>/20\d{2}/.test(item.meta||'')));
  if(dated){
   await page.goto(base+'gedankin/#'+dated.id);await page.locator('.article-header h1').filter({hasText:dated.title}).waitFor();await audit('Gedankin event');
   const named=await page.evaluate(meta=>FenumionCalendar.text(meta),dated.meta);await page.locator('#search').fill(named);
   await page.locator('#search-results .search-result').filter({hasText:dated.title}).waitFor();
  }
  await page.goto(base+'gedankin/#rules-2024');await page.locator('.article-header h1').filter({hasText:'The 2024 ruleset'}).waitFor();
  assert.equal(await page.locator('.infobox .fact').filter({hasText:'Ruleset'}).locator('dd').innerText(),'2024','edition identifiers remain editions');
  assert((await page.locator('.article-meta .tag').allTextContents()).includes('2024'));
  await page.setViewportSize({width:320,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Gedankin still fits mobile');
  assert.deepEqual(errors,[]);console.log('PASS site-wide named dates in timelines/dialogs/prose/quotes/sources/notes/indexes/search and Gedankin; preserved ISO sorting/routes/source data/edition identifiers; leap-aware atlas picker/reload/reset; mobile layouts; synthetic unlock/lock and public boundaries');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});

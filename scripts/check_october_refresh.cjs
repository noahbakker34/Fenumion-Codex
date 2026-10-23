// Verify the refreshed outcomes, qualified unknowns, identity continuity and new reading routes.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const read=name=>JSON.parse(fs.readFileSync(path.join(__dirname,'../content',name+'.json'),'utf8'));
const review=read('reference/refresh-review-2026-10-23'),world=read('reference/world');
const fresh=['library-of-nuru','vey-vaa','lirael','ditrillio','felicity','lucien-fenlas','alesteir','saoirse','velkyn-kthonia','clive-dragoon'];
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/',out=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-october-refresh';
(async()=>{
 assert.equal(review.newQuestMessages+review.newLibraryMessages,1591);assert.equal(review.changedOverlapTexts,0);
 assert.equal(new Set(review.receipts.map(r=>r.message)).size,255);
 assert(review.receipts.every(r=>r.url.endsWith('/'+r.message)&&/^202\d-\d\d-\d\d$/.test(r.date)));
 fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async route=>{await page.goto(base+'#'+route);await page.waitForFunction(id=>byId.get(id)?.bodyLoaded&&document.querySelector('#article-content').dataset.route===location.hash,route.split('?')[0]);};
  const picture=async name=>{await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));await page.screenshot({path:path.join(out,name)});};
  for(const id of fresh){
   const record=read('records/'+id);await go(id);
   assert.equal(await page.locator('.article-header h1').innerText(),record.title);
   assert.equal(await page.locator('.section-evidence').count(),record.sections.length);
   assert.deepEqual(await page.evaluate(id=>byId.get(id).sources,id),record.sources);
   for(const section of record.sections)assert.equal(await page.locator('[id="'+section.id+'"]').count(),1);
   if(!record.image)assert(await page.locator('.article-header').evaluate(el=>parseFloat(getComputedStyle(el).paddingLeft)<64),'portrait-free header has no empty portrait gutter');
   if(record.image){await page.locator('#article-content img[src="'+record.image+'"]').first().evaluate(image=>image.decode());}
   for(const width of [1440,900,390,320]){await page.setViewportSize({width,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+' fits '+width);}
   await page.setViewportSize({width:1440,height:1000});
   if(id==='library-of-nuru'||id==='felicity')await picture(id+'-desktop.png');
  }
  await go('people-directory');await page.locator('[data-people-kind="player"]').click();
  for(const [name,id] of [['Di’Trillio','ditrillio'],['Felicity','felicity'],['Lucien Fenlas','lucien-fenlas'],['Alesteir','alesteir'],['Saoirse','saoirse'],['Velkyn Kthonia','velkyn-kthonia'],['Clive L. Dragoon','clive-dragoon'],['Vel’kaen Heizor','discovery-320'],['Pin','pelegia']]){
   await page.locator('#people-gallery-query').fill(name);await page.locator('#people-gallery .player-record[data-article="'+id+'"]').waitFor();assert.equal(await page.locator('#people-gallery .player-record[data-article="'+id+'"]').count(),1,name+' has one player identity');
   assert.equal(world.archiveIndex.npcs.filter(p=>p.article===id).length,0,name+' is not an NPC');
  }
  assert.equal(world.archiveIndex.npcs.filter(p=>p.article==='vey-vaa').length,1);assert.equal(world.archiveIndex.npcs.filter(p=>p.article==='lirael').length,1);
  assert(world.npcIslandGroups.find(g=>g.id==='prima').people.some(p=>p.name==='Vey and Vaa'));
  assert(world.npcIslandGroups.find(g=>g.id==='verdelune').people.some(p=>p.name==='Lirael'));
  await go('gael');const library=page.locator('.region-place-card').filter({has:page.getByText('The Library of Nuru',{exact:true})});
  const more=page.locator('.region-more-places').filter({has:page.getByText('The Library of Nuru',{exact:true})});if(await more.count())await more.locator(':scope > summary').click();await library.click();
  assert((await page.locator('#record-dialog-content').innerText()).includes('Parent · Tower of Gael'));
  await page.locator('#record-dialog [data-record-article="library-of-nuru"]').click();await page.waitForFunction(()=>byId.get('library-of-nuru')?.bodyLoaded&&location.hash==='#library-of-nuru');
  await go('dasa-appeal?section=dasa-found-seers');assert(await page.locator('#dasa-found-seers').evaluate(el=>el.closest('details').open));
  assert((await page.locator('.article-body').innerText()).includes('Finding the siblings is a completed outcome.'));
  assert((await page.locator('.article-body').innerText()).includes('A civic alliance'));
  await page.reload();await page.locator('#dasa-found-seers').waitFor();assert.equal(await page.evaluate(()=>document.activeElement.id),'dasa-found-seers');
  await go('living-timeline');
  for(const title of review.newEvents){const card=page.locator('.event-card').filter({has:page.getByText(title,{exact:true})});assert.equal(await card.count(),1,title);assert((await card.locator('.timeline-calendar-date').innerText()).includes('Month of Death'));}
  const found='The company finds Vey and Vaa at the Dasa refuge',event=world.archiveIndex.timeline.find(e=>e.title===found);
  assert.equal(event.dating.calendarAdjustment.date,'2026-10-18');assert.equal(event.dating.postingWindow.start,'2026-10-20');
  await page.locator('.event-card[data-timeline-title="'+found+'"]').click();const text=await page.locator('#record-dialog-content').innerText();
  assert(text.includes('18, Month of Death'));assert(text.includes('20–21, Month of Death'));assert(text.includes('alliance'));
  await page.keyboard.press('Escape');
  await go('claim-review');assert.equal(await page.locator('#claim-pin-seven-years').count(),1);assert.equal(await page.locator('#claim-fenwick-dual-affiliation').count(),1);
  await go('open-questions');await page.locator('[data-research-region]').selectOption('Verdelune');assert.equal(await page.locator('.research-card:visible').count(),2);
  await page.setViewportSize({width:390,height:844});await go('library-of-nuru?section=nuru-library-veilguard');await page.locator('#nuru-library-veilguard').scrollIntoViewIfNeeded();await picture('library-welcome-mobile.png');
  await go('dasa-appeal?section=dasa-found-seers');await page.locator('#dasa-found-seers').scrollIntoViewIfNeeded();await picture('dasa-refuge-mobile.png');
  assert.deepEqual(await page.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id)),[]);assert.deepEqual(errors,[]);
  console.log('PASS refreshed source receipts; ten new reading routes; player/NPC identity continuity; nested library/artwork; completed search and qualified outcomes; continuation calendar/source windows; research limits; desktop/mobile and protected boundaries');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});

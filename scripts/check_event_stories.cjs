// Major milestones must lead to actual, continuous event narratives.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const review=require('../content/reference/event-chronicles.json');
const expected=require('./public_expectations.cjs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
const output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-event-stories';
(async()=>{
 fs.mkdirSync(output,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',route=>route.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async route=>{await page.goto(base+'#'+route);await page.waitForFunction(id=>byId.get(id)?.bodyLoaded&&document.querySelector('#article-content').dataset.route===location.hash,route.split('?')[0]);};
  const fits=async()=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'story fits viewport');
  const picture=async name=>{await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:output+'/'+name+'.png'});};
  await go('living-timeline?importance=4');
  const destinations=await page.evaluate(()=>archiveIndex.timeline.filter(e=>e.importance>=4&&!isRestrictedTimelineEvent(e)).map(e=>({title:e.title,story:timelineStory(e)?.id,context:e.article})));
  assert.equal(destinations.length,expected.importance[4]+expected.importance[5]);
  assert(destinations.every(e=>e.story&&!['visual-archive','people-directory','living-timeline'].includes(e.story)));
  assert.equal(await page.locator('.event-card[href^="#"][data-event-story]').count(),destinations.length);
  assert.equal(await page.locator('.event-card .event-expand').filter({hasText:'Read the full story'}).count(),destinations.length);
  for(const item of review.stories){
   const record=JSON.parse(fs.readFileSync(__dirname+'/../content/records/'+item.article+'.json'));
   await go(item.article);assert.equal(await page.locator('h1').innerText(),record.title);
   assert.equal(await page.locator('.chronicle-chapter').count(),record.sections.length,item.article+' retains every narrative section');
   assert.equal(await page.locator('.record-reading-controls,.chapter-guide,.record-chapter').count(),0,'story is continuous on first opening');
   assert.equal(await page.locator('.section-evidence').count(),record.sections.length,'evidence remains available');
   assert.equal(await page.locator('.record-summary .fact').count(),Object.keys(record.facts).length,'full event overview');
   assert.equal(await page.locator('#contents .toc-link').count(),record.sections.length,'all story chapters in contents');
   assert(await page.locator('.chronicle-chapter').evaluateAll(nodes=>nodes.every(el=>el.getBoundingClientRect().height>0&&!el.closest('details'))),'no story chapter hidden behind a disclosure');
   for(const section of record.sections)assert.equal(await page.locator('#'+section.id).count(),1,item.article+' unique chapter anchor');
   assert(!/New York|\bUTC\b|\b20\d{2}\b/.test(await page.locator('.article-body').innerText()),'story uses the Fenumion calendar');
   await fits();if(['azarian-peaks-expedition','fall-of-wrath','arias-last-battle','war-council-death','abyssal-rift-cthulhu'].includes(item.article))await picture(item.article+'-desktop');
   await page.setViewportSize({width:390,height:844});await fits();
   if(['azarian-peaks-expedition','fall-of-wrath','arias-last-battle','war-council-death','abyssal-rift-cthulhu'].includes(item.article))await picture(item.article+'-mobile');
   await page.setViewportSize({width:1440,height:1000});
  }
  const route='living-timeline?importance=4&match=exact&q=Azarian';await go(route);
  const saved=await page.evaluate(()=>location.hash),card=page.locator('.event-card');
  assert.equal(await card.count(),1);assert.equal(await card.getAttribute('href'),'#azarian-peaks-expedition');
  await card.click();await page.locator('.chronicle-layout').waitFor();assert.equal(await page.locator('#record-dialog[open]').count(),0,'primary action opens the page directly');
  const text=await page.locator('.article-body').innerText();
  for(const detail of ['Vasatzi','Eugene','Gudlaug','boulder','Leo','tornado','blizzard','cave'])assert(text.includes(detail),'expedition has specific action: '+detail);
  await page.locator('#contents .toc-link').nth(3).click();const sectionRoute=await page.evaluate(()=>location.hash);await page.reload();await page.locator('.chronicle-layout').waitFor();
  assert.equal(await page.evaluate(()=>document.activeElement.id),new URLSearchParams(sectionRoute.split('?')[1]).get('section'),'chapter permalink reload');
  await page.locator('.chronicle-actions a').first().click();await page.locator('#timeline-explorer input').waitFor();assert.equal(await page.evaluate(()=>location.hash),'#living-timeline','direct reload retains a useful timeline return');
  await go(route);await page.locator('.event-card').click();await page.locator('.chronicle-layout').waitFor();
  await page.locator('.chronicle-actions a').first().click();await page.locator('#timeline-explorer input').waitFor();assert.equal(await page.evaluate(()=>location.hash),saved,'return preserves all filters');
  await page.locator('.event-card').click();await page.locator('.chronicle-layout').waitFor();await page.goBack();await page.locator('#timeline-explorer input').waitFor();assert.equal(await page.evaluate(()=>location.hash),saved,'browser Back preserves filters');
  await go('war-council-death');assert((await page.locator('.record-summary').innerText()).includes('26, Month of Death'),'primary council date corrected before Aria’s death');
  await go('azarian-peaks-expedition');
  for(const width of [1440,1280,1100,1024,900,768,600,390,320]){await page.setViewportSize({width,height:844});await fits();}
  await page.setViewportSize({width:1440,height:1000});await go('event-chronicles');assert.equal(await page.locator('.chronicle-library>li').count(),review.stories.filter(story=>!story.existingFocusedHistory).length);
  await page.locator('#search').fill('Vasatzi');await page.locator('.search-result[data-article="azarian-peaks-expedition"]').first().waitFor();
  assert.deepEqual(await page.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.eventChronicle)).map(a=>a.id)),[]);
  assert.deepEqual(errors,[]);console.log('PASS 35 major milestone destinations; 33 complete story pages; full chapters/facts/evidence; direct links, search, chapter/reload and filtered Back; calendar correction; desktop/mobile and protected boundaries');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

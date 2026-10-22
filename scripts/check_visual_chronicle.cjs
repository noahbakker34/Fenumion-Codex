// Exercise the illustrated reader as a visitor; use public records and a signed-out vault.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
const output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-visual-upgrade';
(async()=>{
 fs.mkdirSync(output,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try {
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',route=>route.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async id=>{await page.goto(base+'#'+id);await page.waitForFunction(id=>byId.get(id.split('?')[0])?.bodyLoaded&&(id.split('?')[0]==='visual-archive'?document.querySelector('#article-content').dataset.route?.split('?')[0]==='#visual-archive':document.querySelector('#article-content').dataset.route===location.hash),id,{timeout:30000});};
  const fits=async()=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'page fits viewport');
  const dockFits=async()=>{
   assert.equal(await page.locator('.codex-utility-dock').count(),1);
   for(const selector of ['.music-toggle','#vault-button','.approved-content-link'])assert(await page.locator('.codex-utility-dock '+selector).evaluate(el=>{const r=el.getBoundingClientRect();return r.width>=44&&r.height>=44&&r.left>=0&&r.right<=innerWidth;}),'dock control fits: '+selector);
   const index=page.locator('.topbar .index-button');
   if(await index.isVisible())assert(await index.evaluate(el=>el.getBoundingClientRect().right<=document.querySelector('.codex-utility-dock').getBoundingClientRect().left),'header controls do not overlap');
  };
  const readableRailFact=async(label,word)=>{
   const panel=page.locator('.record-visual-facts');
   if(!await panel.evaluate(el=>el.open))await panel.locator('summary').click();
   const value=panel.locator('.fact').filter({has:page.locator('dt',{hasText:label})}).locator('dd');
   const reading=await value.evaluate((el,word)=>{
    const node=el.firstChild,start=node.textContent.indexOf(word),range=document.createRange();
    if(start<0)return {missing:word};range.setStart(node,start);range.setEnd(node,start+word.length);
    const box=el.getBoundingClientRect(),panel=el.closest('.record-visual-facts').getBoundingClientRect();
    return {lines:new Set([...range.getClientRects()].map(rect=>Math.round(rect.top))).size,inside:box.left>=panel.left&&box.right<=panel.right,width:box.width};
   },word);
   assert.equal(reading.lines,1,label+' keeps ordinary words on one line: '+JSON.stringify(reading));
   assert(reading.inside,label+' value stays within its panel');
  };
  await go('world-index');
  assert.equal(await page.locator('h1').innerText(),'The Fenumion Codex');
  assert.equal(await page.locator('.chronicle-pathways a').count(),3);
  assert.equal(await page.locator('.chronicle-recent button').count(),3);
  assert((await page.locator('.chronicle-turning-point').innerText()).includes('Death makes an offer after the mist clearing'));
  await page.locator('.chronicle-turning-point').click();
  assert.equal(await page.locator('#record-dialog-title').innerText(),'Death makes an offer after the mist clearing');
  await page.keyboard.press('Escape');await fits();await dockFits();
  await page.locator('#chronicle-featured').scrollIntoViewIfNeeded();
  await page.screenshot({path:output+'/homepage-desktop.png'});
  await go('living-timeline?importance=5');
  assert.equal(await page.locator('.event-card').count(),7);
  assert.equal(await page.locator('.event-card .chronicle-event-art img').count(),7);
  assert.equal(await page.locator('.workspace-context').count(),1);
  assert.equal(await page.locator('.workspace-context').getAttribute('open'),null);
  assert(await page.locator('.event-card').first().evaluate(el=>!getComputedStyle(el.querySelector('.event-summary')).fontFamily.includes('Vespasian')),'event prose uses reading font');
  const year=page.getByLabel('Jump to Final War year',{exact:true}),month=page.getByLabel('Jump to named month',{exact:true});
  await year.selectOption('3');
  assert(await year.evaluate(el=>el===document.activeElement),'year change retains keyboard focus');
  await page.keyboard.press('Tab');assert(await month.evaluate(el=>el===document.activeElement),'next keyboard stop is the month');
  await month.selectOption('10');
  const hash=await page.evaluate(()=>location.hash);
  await page.locator('[data-calendar-go]').click();
  assert.equal(await page.evaluate(()=>document.activeElement.dataset.timelineTitle),'Death makes an offer after the mist clearing');
  assert.equal(await page.evaluate(()=>location.hash),hash,'jump does not change filters or create event routes');
  await fits();await dockFits();
  await page.screenshot({path:output+'/timeline-desktop.png'});
  await page.locator('.timeline-reset').click();
  assert.equal(await page.locator('.event-card').count(),343);
  assert.equal(await page.locator('.chronicle-calendar').count(),1,'filter rerenders retain one navigator');
  assert.equal(await page.locator('.event-card .timeline-source-date').count(),326,'source dates survive the visual pass');
  for(const id of ['prima-pristinia','gael','fein-uaill','babel-ashur','voraketh','verdelune']){
   await go(id);assert.equal(await page.locator('.article-header .chronicle-region-badge').count(),1,id+' has a sourced region badge');
  }
  await go('fenwick');
  assert.equal(await page.locator('.chronicle-person-portrait :is(img,video)').count(),1);
  assert.equal(await page.locator('.record-visual-rail > .article-hero :is(img,video)').count(),0,'same portrait is shown once');
  assert(await page.locator('.chronicle-person-portrait video').evaluate(el=>el.paused&&!el.querySelector('source')?.hasAttribute('src')),'reduced-motion portrait retains its poster without loading video');
  assert.equal((await page.locator('.article-header .article-kicker').innerText()).toLowerCase(),'player character');
  assert.equal(await page.locator('.article-header .chronicle-relationships a').count(),4);
  assert(await page.locator('.chronicle-relationships a').evaluateAll(links=>links.every(link=>!byId.get(link.hash.slice(1))?.protected)),'relationships exclude protected targets');
  await page.screenshot({path:output+'/character-desktop.png'});
  await go('people-directory');await page.locator('#people-gallery-query').fill('Fenwick');
  await page.locator('#people-gallery [data-character-title]').filter({hasText:'Fenwick'}).first().click();
  assert.equal(await page.locator('.chronicle-character-header .record-dialog-media').count(),1);
  assert((await page.locator('.chronicle-role-badges').innerText()).toLowerCase().includes('player character'));
  await page.screenshot({path:output+'/character-dialog.png'});await page.keyboard.press('Escape');
  await go('visual-archive');await page.evaluate(()=>document.fonts.ready);
  for(const width of [1920,1440,1280,1200,1101,1024,768,390,320]){
   await page.setViewportSize({width,height:1000});await fits();
   await readableRailFact('Maps','interactive');await readableRailFact('Records','places');
   if(width===1440||width===390){await page.locator('.record-visual-facts').scrollIntoViewIfNeeded();await page.screenshot({path:output+'/atlas-facts-'+(width===1440?'desktop':'mobile')+'.png'});}
  }
  await page.goto(base+'gedankin/#location-directory');await page.locator('.record-visual-facts').waitFor({state:'attached'});await page.evaluate(()=>document.fonts.ready);
  for(const width of [1440,390]){await page.setViewportSize({width,height:1000});await readableRailFact('World','Gedankin');await fits();}
  for(const width of [390,320]){
   await page.setViewportSize({width,height:844});
   for(const id of ['world-index','living-timeline?importance=5','fenwick','babel-ashur','people-directory']){await go(id);await fits();await dockFits();}
   await page.locator('#people-gallery-query').fill('Fenwick');await page.locator('#people-gallery [data-character-title]').filter({hasText:'Fenwick'}).first().click();
   if(width===390)await page.screenshot({path:output+'/character-dialog-mobile.png'});
   await fits();const headingSize=await page.locator('.chronicle-character-header').evaluate(el=>({scroll:el.scrollWidth,width:el.clientWidth,children:[...el.children].map(child=>({class:child.className,width:child.clientWidth,scroll:child.scrollWidth}))}));
   assert(headingSize.scroll<=headingSize.width,'mobile profile heading fits: '+JSON.stringify(headingSize));
   await page.keyboard.press('Escape');
   await go('living-timeline?importance=5');
   for(const selector of ['[data-calendar-year]','[data-calendar-month]','[data-calendar-go]'])assert(await page.locator(selector).evaluate(el=>el.getBoundingClientRect().height>=44&&parseFloat(getComputedStyle(el).fontSize)>=16),'calendar touch target '+selector);
   await page.locator('.music-toggle').click();await page.locator('.music-panel').waitFor({state:'visible'});await fits();
   assert(await page.locator('.music-panel').evaluate(el=>el.getBoundingClientRect().right<=innerWidth&&el.getBoundingClientRect().left>=0));
   await page.locator('.music-toggle').click();
   if(!process.env.CODEX_LIVE){
    // Signed-out access retains the existing sign-in route. A 204 fixture prevents leaving the preview.
    await page.route('https://auth.fenumion.com/login?*',route=>route.fulfill({status:204,body:''}));
    const request=page.waitForRequest(request=>request.url().startsWith('https://auth.fenumion.com/login?'));
    await page.locator('#vault-button').click();assert((await request).url().includes('next='));
   }
   if(width===390){await page.locator('[data-calendar-year]').selectOption('3');await page.locator('[data-calendar-month]').selectOption('10');await page.locator('[data-calendar-go]').click();await page.screenshot({path:output+'/timeline-mobile.png'});}
  }
  const privacy=await page.evaluate(()=>({bodies:articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id),stubs:archiveIndex.timeline.filter(e=>e.veiled&&(e.importance||e.regions||e.dating)).length}));
  assert.deepEqual(privacy,{bodies:[],stubs:0});assert.deepEqual(errors,[]);
  console.log('PASS illustrated homepage/event links; seven World Changing cards; year/month keyboard controls and unchanged routes/counts/source dates; six sourced regional identities; portraits/roles/public relationships/dialog; readable atlas/directory facts at nine widths and in Gedankin; compact music/vault dock; 390/320 layouts; signed-out boundaries');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});

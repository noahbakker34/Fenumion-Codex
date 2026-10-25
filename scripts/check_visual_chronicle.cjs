const expected=require('./public_expectations.cjs');
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
   for(const selector of ['.music-toggle','#vault-button','.approved-content-link'])assert(await page.locator('.codex-utility-dock '+selector).evaluate(el=>{const r=el.getBoundingClientRect();return r.width>=44&&r.height>=44&&r.left>=0&&r.right<=innerWidth&&el.scrollWidth<=el.clientWidth;}),'dock control fits: '+selector);
   for(const [selector,label] of [['.music-toggle','Soundtrack'],['#vault-button','Spoiler vault'],['.approved-content-link','Approved content']]){const control=page.locator('.codex-utility-dock '+selector);assert((await control.innerText()).includes(label),'visible control label: '+label);}
   const index=page.locator('.topbar .index-button');
   if(await index.isVisible())assert(await index.evaluate(el=>el.getBoundingClientRect().right<=document.querySelector('.codex-utility-dock').getBoundingClientRect().left),'header controls do not overlap');
  };
  const headerFits=async()=>{
   const problems=await page.evaluate(()=>{
    const issues=[],rect=el=>el.getBoundingClientRect();
    const controls=[...document.querySelectorAll('.topbar :is(.menu-button,.brand,.search-toggle,.search-shell),.topbar-actions>:is(.campaign-tools-button,.index-button),.codex-utility-dock :is(.music-toggle,.vault-fab,.approved-content-link)')].filter(el=>el.checkVisibility());
    for(const el of controls){const r=rect(el);if(r.left<0||r.right>innerWidth+.5)issues.push(el.className+' leaves viewport');}
    for(let i=0;i<controls.length;i++)for(let j=i+1;j<controls.length;j++){
     const a=rect(controls[i]),b=rect(controls[j]);
     if(Math.min(a.right,b.right)-Math.max(a.left,b.left)>.5&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>.5)issues.push(controls[i].className+' overlaps '+controls[j].className);
    }
    const brand=document.querySelector('.topbar .brand');
    for(const el of brand.querySelectorAll('strong,small'))if(el.checkVisibility()&&rect(el).right>rect(brand).right+.5)issues.push('brand copy escapes its allotted space');
    return issues;
   });
   assert.deepEqual(problems,[],'header fits at '+page.viewportSize().width);
  };
  const readableRailFact=async(label,word)=>{
   const panel=page.locator('.atlas-context,.record-visual-facts').first();
   if(!await panel.evaluate(el=>el.open))await panel.locator('summary').click();
   const value=panel.locator('.fact').filter({has:page.locator('dt',{hasText:label})}).locator('dd');
   const reading=await value.evaluate((el,word)=>{
    const node=el.firstChild,start=node.textContent.indexOf(word),range=document.createRange();
    if(start<0)return {missing:word};range.setStart(node,start);range.setEnd(node,start+word.length);
    const box=el.getBoundingClientRect(),panel=el.closest('.atlas-context,.record-visual-facts').getBoundingClientRect();
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
  for(const width of [1440,1280,1100,1024,900,768,600,390,320]){await page.setViewportSize({width,height:1000});await fits();await dockFits();}
  await page.setViewportSize({width:1440,height:1000});
  await go('living-timeline?importance=4&match=exact');
  assert.equal(await page.locator('.event-card').count(),expected.importance[4]);assert.equal(await page.locator('.event-card .chronicle-event-art img').count(),expected.importance[4]);
  assert((await page.locator('.event-card .event-importance').first().innerText()).includes('Interregional'));
  await page.locator('.event-card').first().scrollIntoViewIfNeeded();await page.screenshot({path:output+'/interregional-desktop.png'});
  await go('living-timeline?importance=5');
  assert.equal(await page.locator('.event-card').count(),expected.importance[5]);
  assert.equal(await page.locator('.event-card .chronicle-event-art img').count(),expected.importance[5]);
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
  await page.evaluate(()=>document.body.style.setProperty('--sans','Arial,sans-serif'));await dockFits();await page.evaluate(()=>document.body.style.removeProperty('--sans'));
  await page.screenshot({path:output+'/timeline-desktop.png'});
  await page.locator('.timeline-reset').click();
  assert.equal(await page.locator('.event-card').count(),expected.events);
  assert.equal(await page.locator('.chronicle-calendar').count(),1,'filter rerenders retain one navigator');
  assert.equal(await page.locator('.event-card .timeline-source-date').count(),expected.dated,'source dates survive the visual pass');
  await go('bowene');
  await page.locator('.chronicle-person-portrait img').evaluate(image=>image.decode());
  assert.equal(await page.locator('.biography-section').count(),6);
  assert.equal(await page.locator('.biography-section:visible').count(),6,'biography reads continuously');
  assert.equal(await page.locator('.character-brief,.record-reading-controls,.chapter-guide,.record-visual-rail,.article-header .chronicle-relationships').count(),0,'one overview and one reading order');
  assert.equal(await page.locator('.record-summary .fact').count(),4);
  assert.equal(await page.locator('#contents .toc-link').count(),6,'contents follow the six narrative sections');
  assert(await page.locator('#bowene-council-limit').evaluate(el=>!getComputedStyle(el).fontFamily.includes('Vespasian')),'dated subheadings use a reading font');
  await page.locator('.biography-navigation [data-section="bowene-exile"]').click();
  assert.equal(await page.evaluate(()=>document.activeElement.id),'bowene-exile');
  assert.equal(await page.evaluate(()=>location.hash),'#bowene?section=bowene-exile','chapter jump uses the existing section route');
  const exile=page.locator('.biography-section').filter({has:page.locator('#bowene-exile')});
  assert((await exile.innerText()).includes('identical mandatory sentence'));
  assert.equal(await exile.locator('#bowene-exile-terms').count(),1,'departure terms stay beside the judgment');
  await page.locator('#bowene-relationships').scrollIntoViewIfNeeded();await page.screenshot({path:output+'/bowene-relationships-desktop.png'});
  await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:output+'/bowene-desktop.png'});
  // Only simulate the public control state: no private record or credentials are loaded.
  for(const unlocked of [false,true]){
   await page.evaluate(value=>{vaultUnlocked=value;updateVaultState();},unlocked);
   for(const width of [2048,1920,1440,1366,1280,1251,1250,1200,1101,1100,1024,900,768,761,760,600,390,320]){
    await page.setViewportSize({width,height:1000});await fits();await dockFits();await headerFits();
    if(width>=1280)assert(await page.locator('.topbar .brand strong').evaluate(el=>el.scrollWidth<=el.clientWidth),'full brand title fits at '+width);
    if(unlocked&&width>=1101)assert(await page.locator('.topbar .campaign-tools-button').isVisible(),'campaign tools remain available');
    if(unlocked&&[1440,1101,390].includes(width)){
     await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
     await page.screenshot({path:output+'/header-unlocked-'+width+'.png'});
    }
   }
  }
  await page.evaluate(()=>{vaultUnlocked=false;updateVaultState();});
  for(const width of [1440,1280,1100,1024,900,768,600,390,320]){
   await page.setViewportSize({width,height:1000});await fits();await dockFits();
   assert(await page.locator('.biography-navigation button').evaluateAll(buttons=>buttons.every(button=>button.scrollWidth<=button.clientWidth&&button.getBoundingClientRect().height>=44)),'biography links fit at '+width);
  }
  await page.setViewportSize({width:390,height:844});await page.locator('.biography-navigation [data-section="bowene-exile"]').click();await page.screenshot({path:output+'/bowene-exile-mobile.png'});
  await go('bowene?section=bowene-exile-terms');
  assert.equal(await page.evaluate(()=>document.activeElement.id),'bowene-exile-terms','legacy subsection route survives reload');
  await go('bowene?section=bowene-scene-sequence');
  assert(await page.locator('.article-evidence-ledger').evaluate(el=>el.open),'legacy scene route opens its source appendix');
  assert.equal(await page.locator('#bowene-scene-sequence a').count(),3);
  assert(!/\b20\d{2}\b/.test(await page.locator('.article-body').innerText()),'biography and source dates use the Fenumion calendar');
  await page.setViewportSize({width:1440,height:1000});
  for(const id of ['prima-pristinia','gael','fein-uaill','babel-ashur','voraketh','verdelune']){
   await go(id);assert.equal(await page.locator('.article-header .chronicle-region-badge').count(),1,id+' has a sourced region badge');
  }
  await go('fenwick');
  assert.equal(await page.locator('.biography-layout').count(),0,'other profiles keep their existing reader');
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
   if(width===1440||width===390){await page.locator('.atlas-context').scrollIntoViewIfNeeded();await page.screenshot({path:output+'/atlas-facts-'+(width===1440?'desktop':'mobile')+'.png'});}
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
   await go('world-index');await page.locator('#search-toggle').click();await page.locator('#search').fill('Saelihn');await page.locator('.search-result').first().waitFor();await page.locator('#close-search').click();assert.equal(await page.evaluate(()=>document.activeElement.id),'search-toggle','mobile Close remains reachable below the expanded search field');
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
  console.log('PASS illustrated homepage/event links; all Interregional and World Changing cards; year/month keyboard controls and unchanged routes/counts/source dates; six sourced regional identities; continuous Bowene biography, legacy destinations and source appendix; portraits/roles/public relationships/dialog; readable atlas/directory facts at nine widths and in Gedankin; labeled controls and non-overlapping locked/unlocked headers at 18 widths; 390/320 layouts; signed-out boundaries');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});

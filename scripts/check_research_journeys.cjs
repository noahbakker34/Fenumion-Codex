// End-to-end reading tasks for the selected evidence review and research queue.
const {chromium}=require('playwright');const assert=require('node:assert/strict');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
 const go=async route=>{await page.goto(base+'#'+route);await page.waitForFunction(id=>byId.get(id)?.bodyLoaded&&document.querySelector('#article-content').dataset.route===location.hash,route.split('?')[0]);await page.locator('.article-header h1').waitFor();};
 for(const id of ['nienna','adelia-hope','elenia','gartina','quake','saray','akarian','ryvyt','fenwick','tobias','melian-starguard','scribonia','wren','lady-severina','sildithas','coralyn','rolen','bowene','magnus','thorn','st-anky','dale','eugene','casimir','alioth','arjahn','olokun','nymera']){
  await go(id+'?section='+id+'-scene-sequence');assert(await page.locator('.scene-sequence>li').count()>=2,id+' scene sequence');
  assert(await page.locator('#'+id+'-scene-sequence').evaluate(el=>el.closest('details').open));
  assert(await page.locator('.scene-receipts a').count()>1,id+' source links');
 }
 for(const id of ['pristinia-campaign','gael-campaign','zarathis-campaign','voraketh-campaign']){
  await go(id);assert.equal(await page.locator('.record-chapter').count(),4,id+' chapters');
  assert.equal(await page.locator('.section-evidence').count(),4,id+' evidence');
 }
 await go('claim-review');assert.equal(await page.locator('.claim-card').count(),34);
 await go('open-questions');assert.equal(await page.locator('.research-card').count(),25);
 await page.locator('[data-research-region]').selectOption('Voraketh');assert.equal(await page.locator('.research-card:visible').count(),3);
 await page.locator('[data-research-query]').fill('final expedition');assert.equal(await page.locator('.research-card:visible').count(),1);
 assert.equal(await page.locator('[data-research-count]').innerText(),'1 of 25 questions');
 await page.locator('[data-research-query]').fill('no such evidence phrase');assert.equal(await page.locator('[data-research-count]').innerText(),'0 of 25 questions');
 await page.locator('[data-research-query]').fill('');await page.locator('[data-research-region]').selectOption('');
 assert.equal(await page.locator('[data-research-count]').innerText(),'25 of 25 questions');
 await page.screenshot({path:'/tmp/codex-research-desktop.png'});
 // Keyboard search: opening, reaching a result, following it and escaping restores a usable focus.
 await go('gael');await page.locator('.article-header h1').evaluate(el=>{el.tabIndex=-1;el.focus()});
 await page.keyboard.press('/');assert.equal(await page.evaluate(()=>document.activeElement.id),'search');
 await page.locator('#search').fill('Bowene');await page.locator('.search-result').first().waitFor();
 await page.keyboard.press('ArrowDown');assert(await page.evaluate(()=>document.activeElement.matches('.search-result')),'ArrowDown reaches results');
 await page.keyboard.press('Enter');await page.waitForFunction(()=>recordDialog.open||document.querySelector('.article-header h1')?.textContent==='High Lord Bowene');
 if(await page.locator('#record-dialog[open]').count())await page.keyboard.press('Escape');
 assert(await page.evaluate(()=>document.activeElement.isConnected));
 await go('gael');await page.evaluate(()=>window.scrollTo(0,800));const oldScroll=await page.evaluate(()=>scrollY);assert(oldScroll>500);await page.evaluate(()=>renderArticle('open-questions'));await page.goBack();await page.waitForFunction(()=>document.querySelector('#article-content').dataset.route==='#gael');const restoredScroll=await page.evaluate(()=>scrollY);assert(Math.abs(restoredScroll-oldScroll)<100,'back restores reading position: '+JSON.stringify({oldScroll,restoredScroll}));
 await page.setViewportSize({width:390,height:844});
 await page.locator('#search-toggle').click();await page.locator('#search').fill('Saray');await page.locator('.search-result').first().waitFor();
 await page.keyboard.press('Shift+Tab');assert(await page.evaluate(()=>document.activeElement.closest('#search-panel')||document.activeElement.id==='search'),'mobile search retains keyboard focus');await page.locator('#close-search').click();assert.equal(await page.evaluate(()=>document.activeElement.id),'search-toggle','mobile close restores trigger focus');
 await go('saray?section=saray-scene-sequence');await page.locator('.scene-sequence').screenshot({path:'/tmp/codex-saray-scenes-mobile.png'});
 for(const id of ['open-questions','claim-review','pristinia-campaign','gael-campaign','zarathis-campaign','voraketh-campaign']){
  await go(id);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+' overflow');
 }
 await page.locator('.record-chapter').first().locator('summary').first().press('Enter');
 const cold=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});cold.on('pageerror',e=>errors.push(e.message));let releaseSearch;const heldSearch=new Promise(resolve=>releaseSearch=resolve);await cold.route('**/data/search.*.json',async route=>{await heldSearch;await route.continue()});await cold.goto(base+'#fenwick');await cold.waitForFunction(()=>byId.get('fenwick')?.bodyLoaded);await cold.locator('#search-toggle').click();await cold.locator('#search').fill('Saray');await cold.locator('.search-result').first().waitFor();assert.equal(await cold.locator('.search-index-status').count(),1,'catalog results appear before full text');releaseSearch();await cold.waitForFunction(()=>CodexReader.searchReady);await cold.locator('#search').fill('rowboat');await cold.locator('.search-result[data-article=gael][data-search-section=gael-fenwick-coast]').waitFor();await cold.close();
 assert.deepEqual(errors,[]);console.log('PASS 28 scene sequences, 4 campaign narratives, 34 claim entries, 25 research questions/filters, source links, keyboard result selection, mobile focus and layout');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

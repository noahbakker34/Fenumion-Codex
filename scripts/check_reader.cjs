// Local integration checks. Requires Playwright; set CHROME_PATH and CODEX_BASE_URL as needed.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
 await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
 const go=async id=>{await page.goto(base+'#'+id);await page.waitForFunction(id=>byId.get(id.split('?')[0])?.bodyLoaded,id);await page.locator('#article-content').waitFor();};
 await go('fenwick');
 assert.equal(await page.locator('.character-brief').count(),1);
 assert(await page.locator('.character-brief').innerText().then(t=>/last established status/i.test(t)));
 assert(await page.locator('.section-evidence[data-evidence-kind=testimony]').count()>=1);
 assert.equal(await page.locator('.chapter-guide').count(),1);
 assert.equal(requests.filter(url=>url.includes('/data/records/')).length,1);
 assert.equal(requests.filter(url=>url.includes('/data/search.')).length,0);
 assert.equal(await page.evaluate(()=>articles.filter(a=>a.bodyLoaded).length),1);
 const open=page.getByRole('button',{name:'Read continuously',exact:true});await open.click();
 assert(await page.locator('.record-chapter').evaluateAll(list=>list.every(d=>d.open)));
 await page.getByRole('button',{name:'Browse sections',exact:true}).click();
 // Search an unloaded article, follow the exact section, reload and retain an open destination.
 await page.evaluate(async()=>{search.value='rowboat';await runSearch('rowboat');});
 const result=page.locator('.search-result[data-article=gael][data-search-section="gael-fenwick-coast"]');
 assert.equal(await result.count(),1);assert(await result.innerText().then(t=>t.includes('In Fenwick')));await result.click();
 await page.waitForFunction(()=>location.hash.includes('section=gael-fenwick-coast')&&byId.get('gael').bodyLoaded);
 assert(await page.locator('#gael-fenwick-coast').evaluate(el=>el.closest('details').open));
 assert.equal(await page.evaluate(()=>document.activeElement.id),'gael-fenwick-coast');
 await page.reload();await page.locator('#gael-fenwick-coast').waitFor({state:'visible'});
 assert(await page.locator('#gael-fenwick-coast').evaluate(el=>el.closest('details').open));
 await page.screenshot({path:'/tmp/codex-evidence-desktop.png'});
 await go('history-in-consequences');assert.equal(await page.locator('.consequence-chain').count(),6);
 await page.locator('[data-consequence-browser] [data-timeline-title]').first().click();await page.locator('#record-dialog[open]').waitFor();
 assert(await page.locator('#record-dialog .current-step').count());await page.locator('#record-dialog-close').click();
 await go('visual-archive?map=pristinia&place=Pristinia');await page.locator('.map-detail .place-history-context').waitFor();
 await page.locator('[data-atlas-date]').fill('2024-04-30');await page.locator('[data-atlas-date]').dispatchEvent('change');
 assert(await page.locator('.map-detail').innerText().then(t=>t.includes('2024-04-30')));
 assert(await page.locator('.map-detail').innerText().then(t=>!t.includes('Pilgrim’s Hearth returns')));
 await page.screenshot({path:'/tmp/codex-atlas-history.png'});
 await go('npc-discovery-registry');assert(await page.locator('[data-discovery-list]').innerText().then(t=>t.length>100));
 await go('player-perspectives');assert(await page.evaluate(()=>Boolean(window.FENUMION_PLAYER_PERSPECTIVES)));
 await go('art-of-fenumion');assert.equal(await page.evaluate(()=>fenumionArtRecords().length),106);
 await go('world-index');assert.equal(await page.evaluate(()=>archiveIndex.characters.filter(p=>p.article==='st-anky').length),1);
 // Back/forward and a slow load cannot replace a newer destination.
 await page.evaluate(async()=>{const one=renderArticle('nienna');const two=renderArticle('papirak');await Promise.all([one,two]);});
 assert.equal(await page.locator('h1').innerText(),'Papirak the Strange');
 await page.goBack();await page.waitForFunction(()=>location.hash.includes('nienna')&&byId.get('nienna').bodyLoaded);
 await page.goForward();await page.waitForFunction(()=>location.hash.includes('papirak'));
 // Locked records keep empty public bodies and no section search results.
 const locked=await page.evaluate(()=>({bodies:articles.filter(a=>isRestrictedArticle(a.id)&&a.body).map(a=>a.id),briefs:articles.filter(a=>isRestrictedArticle(a.id)&&a.brief).map(a=>a.id)}));
 assert.deepEqual(locked,{bodies:[],briefs:[]});
 await page.setViewportSize({width:390,height:844});
 for(const id of ['fenwick','gael','pristinia','voraketh','training-dungeon','history-in-consequences','visual-archive','living-timeline']){
  await go(id);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+' mobile overflow');
 }
 await go('papirak');await page.screenshot({path:'/tmp/codex-character-summary-mobile.png',fullPage:true});await page.locator('.character-brief').screenshot({path:'/tmp/codex-brief-mobile.png'});
 // A failed body request can retry, and clearing a pending search stays cleared.
 await page.route('**/data/records/training-dungeon.*.json',route=>route.abort(),{times:1});
 await page.goto(base+'?retry-test=1#training-dungeon');await page.locator('.record-load-error').waitFor();
 await page.getByRole('button',{name:'Try again',exact:true}).click();await page.locator('.article-header h1').waitFor();
 assert.equal(await page.locator('h1').innerText(),'The Training Dungeon');
 await page.route('**/data/search.*.json',async route=>{await new Promise(resolve=>setTimeout(resolve,120));await route.continue();},{times:1});
 await page.evaluate(()=>{search.value='rowboat';window.__pendingSearch=runSearch('rowboat');search.value='';runSearch('');});
 await page.evaluate(()=>window.__pendingSearch);assert(await page.locator('#search-panel').evaluate(panel=>panel.hidden));
 assert.deepEqual(errors,[]);console.log('PASS retry/canceled search; lazy bodies, deferred search, summaries, section evidence/deep links, reading modes, 6 sequences, dated atlas, supplemental indexes, gallery, load races/history, protected boundaries and mobile layout');
 await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});

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
 // Keep the ordinary reader-mode coverage on a profile outside the biography group.
 await go('st-anky');
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
 await go('history-in-consequences');assert.equal(await page.locator('.consequence-chain').count(),9);
 await page.locator('[data-consequence-browser] [data-timeline-title]').first().click();await page.locator('#record-dialog[open]').waitFor();
 assert(await page.locator('#record-dialog .current-step').count());await page.locator('#record-dialog-close').click();
 await go('visual-archive?map=pristinia&place=Pristinia');await page.locator('.map-detail .place-history-context').waitFor();
 await page.locator('[data-fenumion-year]').selectOption('2024');await page.locator('[data-fenumion-month]').selectOption('4');await page.locator('[data-fenumion-day]').selectOption('30');
 assert(await page.locator('.map-detail').innerText().then(t=>t.includes("30, Month of Namo'o · Year 1")));
 assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2024-04-30','date picker retains the sortable ISO value');
 assert(await page.locator('.map-detail').innerText().then(t=>!t.includes('Pilgrim’s Hearth returns')));
 await page.screenshot({path:'/tmp/codex-atlas-history.png'});
 await go('npc-discovery-registry');assert(await page.locator('[data-discovery-list]').innerText().then(t=>t.length>100));
 await go('player-perspectives');assert(await page.evaluate(()=>Boolean(window.FENUMION_PLAYER_PERSPECTIVES)));
 await go('art-of-fenumion');assert.equal(await page.evaluate(()=>fenumionArtRecords().length),111);
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
 // Keep the ordinary expandable brief covered as Papirak moves to continuous chapters.
 await go('st-anky');await page.screenshot({path:'/tmp/codex-character-summary-mobile.png',fullPage:true});await page.locator('.character-brief').screenshot({path:'/tmp/codex-brief-mobile.png'});
 // A failed body request can retry, and clearing a pending search stays cleared.
 await page.route('**/data/records/training-dungeon.*.json',route=>route.abort(),{times:1});
 await page.goto(base+'?retry-test=1#training-dungeon');await page.locator('.record-load-error').waitFor();
 await page.getByRole('button',{name:'Try again',exact:true}).click();await page.locator('.article-header h1').waitFor();
 assert.equal(await page.locator('h1').innerText(),'The Training Dungeon');
 await page.route('**/data/search.*.json',async route=>{await new Promise(resolve=>setTimeout(resolve,120));await route.continue();},{times:1});
 await page.evaluate(()=>{search.value='rowboat';window.__pendingSearch=runSearch('rowboat');search.value='';runSearch('');});
 await page.evaluate(()=>window.__pendingSearch);assert(await page.locator('#search-panel').evaluate(panel=>panel.hidden));
 for(const destination of ['', 'living-timeline?importance=5']){
  const cold=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});cold.on('pageerror',e=>errors.push(e.message));
  let release;const held=new Promise(resolve=>release=resolve);
  await cold.route('**/data/search.*.json',async route=>{await held;await route.continue()});
  await cold.goto(base+'#bowene');await cold.waitForFunction(()=>byId.get('bowene')?.bodyLoaded);
  await cold.locator('#search-toggle').click();await cold.locator('#search').fill('Bowene');await cold.locator('.search-result').first().waitFor();
  assert.equal(await cold.locator('.search-index-status').count(),1);
  await cold.locator('#close-search').click();
  if(destination){await cold.evaluate(route=>renderArticle(route),destination);await cold.waitForFunction(()=>document.querySelector('#article-content').dataset.route==='#living-timeline?importance=5');}
  release();await cold.waitForFunction(()=>CodexReader.searchReady);await cold.evaluate(()=>new Promise(requestAnimationFrame));
  assert(await cold.locator('#search-panel').evaluate(panel=>panel.hidden),'late full-text results stay dismissed');
  assert(await cold.evaluate(()=>!document.body.classList.contains('panels-open')),'late results cannot hide header controls');
  assert(await cold.locator('.music-toggle').isVisible());await cold.close();
 }
 // New authenticated pages have no public stub; they must join every lock/filter boundary.
 const sealedFixture={articles:[
  {id:'sealed-location-00000000000a',title:'Synthetic Sealed Chamber Alpha',category:'Locations',type:'Private fixture',dek:'Synthetic test location',tags:['synthetic sealed chamber'],facts:{Scope:'Private fixture'},sources:['Synthetic fixture'],sections:[{id:'synthetic-private-details-alpha',title:'Synthetic details',evidence:{kind:'reference',label:'Synthetic fixture',summary:'Synthetic data for privacy checks',sources:['Synthetic fixture']}}],body:'<p>PRIVATE_FIXTURE_ALPHA_BODY</p><h2 id="synthetic-private-details-alpha">Synthetic details</h2><p>PRIVATE_ALPHA_DETAILS</p>'},
  {id:'sealed-location-00000000000b',title:'Synthetic Sealed Chamber Beta',category:'Locations',type:'Private fixture',dek:'Synthetic test location',tags:['synthetic sealed chamber'],facts:{Scope:'Private fixture'},sources:['Synthetic fixture'],sections:[{id:'synthetic-private-details-beta',title:'Synthetic details',evidence:{kind:'reference',label:'Synthetic fixture',summary:'Synthetic data for privacy checks',sources:['Synthetic fixture']}}],body:'<p>PRIVATE_FIXTURE_BETA_BODY</p><h2 id="synthetic-private-details-beta">Synthetic details</h2><p>PRIVATE_BETA_DETAILS</p>'}
 ],index:{islands:[
  {title:'Synthetic Sealed Chamber Alpha',region:'Fein Uaill',parent:'Fein Uaill',type:'fixture',level:'site',article:'sealed-location-00000000000a',summary:'Synthetic private fixture'},
  {title:'Synthetic Sealed Chamber Beta',region:'Fein Uaill',parent:'Fein Uaill',type:'fixture',level:'site',article:'sealed-location-00000000000b',summary:'Synthetic private fixture'}
 ]}};
 await page.goto(base+'#'+sealedFixture.articles[0].id+'?section=synthetic-private-details-alpha');await page.reload();
 await page.locator('.vault-gate').waitFor();
 assert.equal(await page.evaluate(()=>location.hash),'#sealed-location-00000000000a?section=synthetic-private-details-alpha','opaque bookmark and chapter remain intact before authentication');
 assert(!(await page.locator('#article-content').innerText()).includes(sealedFixture.articles[0].title));
 await page.unroute('https://auth.fenumion.com/**');
 await page.route('https://auth.fenumion.com/vault/data',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(sealedFixture)}));
 await page.route('https://auth.fenumion.com/me',route=>route.fulfill({status:200,contentType:'application/json',body:'{"signedIn":true,"name":"Synthetic keeper"}'}));
 await page.evaluate(()=>unlockVault());
 await page.locator('#synthetic-private-details-alpha').waitFor({state:'visible'});
 assert.equal(await page.evaluate(()=>document.activeElement.id),'synthetic-private-details-alpha','unlock restores the bookmarked private chapter');
 for(const record of sealedFixture.articles){
  await page.evaluate(id=>renderArticle(id),record.id);assert.equal(await page.locator('h1').innerText(),record.title);
  assert.equal(await page.evaluate(id=>byId.get(id).body,record.id),record.body);
 }
 await page.evaluate(()=>renderArticle('fein-uaill'));
 assert.equal(await page.locator('.region-place-card').filter({hasText:'Synthetic Sealed Chamber'}).count(),2,'new private places appear for an unlocked keeper');
 await page.evaluate(async()=>{search.value='Synthetic Sealed Chamber';await runSearch(search.value);});
 assert.equal(await page.locator('.search-result[data-article^="sealed-location-"]').count(),2,'keeper can find newly delivered private records');
 await page.evaluate(()=>{closePanels();lockVault();});
 for(const record of sealedFixture.articles){
  await page.evaluate(id=>renderArticle(id),record.id);assert.equal(await page.locator('.vault-gate').count(),1,'new record is gated again after locking');
  assert(!(await page.locator('#article-content').innerText()).includes(record.title));assert(!(await page.title()).includes(record.title));
 }
 await page.evaluate(async()=>{search.value='Synthetic Sealed Chamber';await runSearch(search.value);});
 assert.equal(await page.locator('.search-result[data-article^="sealed-location-"]').count(),0,'locked search hides new private titles and bodies');
 await page.evaluate(()=>{closePanels();return renderArticle('fein-uaill');});
 assert.equal(await page.locator('.region-place-card').filter({hasText:'Synthetic Sealed Chamber'}).count(),0,'locked region hides newly delivered private places');
 await page.goto(base+'#'+sealedFixture.articles[1].id+'?section=synthetic-private-details-beta');await page.reload();await page.locator('.vault-gate').waitFor();
 assert(await page.evaluate(()=>!byId.has('sealed-location-00000000000a')&&!byId.has('sealed-location-00000000000b')),'fresh locked load has no private records');
 assert.equal(await page.evaluate(()=>location.hash),'#sealed-location-00000000000b?section=synthetic-private-details-beta','fresh private bookmark keeps its opaque route');
 await page.evaluate(()=>unlockVault());await page.locator('#synthetic-private-details-beta').waitFor({state:'visible'});
 assert.equal(await page.locator('.article-header h1').innerText(),sealedFixture.articles[1].title);
 assert.equal(await page.evaluate(()=>document.activeElement.id),'synthetic-private-details-beta','fresh bookmark opens the requested private chapter after unlocking');
 await page.reload();await page.locator('#synthetic-private-details-beta').waitFor({state:'visible'});
 assert.equal(await page.locator('.article-header h1').innerText(),sealedFixture.articles[1].title,'authorized reload restores a private bookmark automatically');
 await page.evaluate(()=>lockVault());assert.equal(await page.locator('.vault-gate').count(),1);

 assert.deepEqual(errors,[]);console.log('PASS retry/canceled search; lazy bodies, deferred search, summaries, section evidence/deep links, reading modes, 9 sequences, dated atlas, supplemental indexes, gallery, load races/history, protected boundaries, dynamic private records after locking, and mobile layout');
 await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});

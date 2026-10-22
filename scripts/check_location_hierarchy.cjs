// Exercise the atlas as a reader: regional maps contain their local settlement/area views.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/',output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-location-hierarchy';
(async()=>{
 fs.mkdirSync(output,{recursive:true});const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async(map,extra='')=>{await page.goto(base+'#visual-archive?map='+map+extra);await page.waitForFunction(id=>document.querySelector('.map-heading h3')?.textContent===interactiveMaps.find(m=>m.id===id)?.title,map);};
  const heading=()=>page.locator('.map-heading h3').innerText();
  const path=()=>page.locator('.map-breadcrumbs li').evaluateAll(nodes=>nodes.map(el=>el.textContent));
  const local=id=>page.locator('.map-local-switcher [data-map-id="'+id+'"]');
  const region=id=>page.locator('.map-switcher [data-map-id="'+id+'"]');
  const fits=async()=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'page fits viewport');
  await go('world');
  assert.deepEqual(await page.locator('.map-switcher [role=tab]').evaluateAll(nodes=>nodes.map(el=>el.dataset.mapId)),['world','prima','gael','fein-uaill','voraketh','babel-ashur']);
  assert.equal(await page.locator('.map-local-navigation').count(),0);
  await region('prima').click();assert.equal(await heading(),'Prima');
  assert.deepEqual(await page.locator('.map-local-switcher button').evaluateAll(nodes=>nodes.map(el=>el.dataset.mapId)),['prima','pristinia','eovar']);
  await local('pristinia').click();assert.equal(await heading(),'Pristinia');
  assert.deepEqual(await path(),['World','Prima','Pristinia']);
  assert.equal(await region('prima').getAttribute('aria-selected'),'true');
  assert.equal(await page.locator('#atlas-map-panel').getAttribute('aria-labelledby'),'map-tab-prima');
  assert.equal(await page.locator('.map-heading .eyebrow').textContent(),'Settlement within Prima');
  await local('pristinia').press('End');assert.equal(await heading(),'Eovar Harbor');
  assert.equal(await page.evaluate(()=>document.activeElement.dataset.mapId),'eovar');
  assert.deepEqual(await path(),['World','Prima','Eovar Harbor']);
  await local('eovar').press('ArrowLeft');assert.equal(await heading(),'Pristinia');
  await local('pristinia').press('Home');assert.equal(await heading(),'Prima');
  await region('prima').press('ArrowRight');assert.equal(await heading(),'Gael','region keyboard navigation stays at the regional level');
  await region('gael').press('End');assert.equal(await heading(),'Babel-Ashur');
  await local('luminar-spires').click();assert.deepEqual(await path(),['World','Babel-Ashur','Luminar Spires']);
  await local('greyward').click();assert.deepEqual(await path(),['World','Babel-Ashur','Greyward Littoral']);
  await go('eovar','&date=2024-04-30');
  assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2024-04-30');
  await page.locator('.map-breadcrumbs [data-map-id=prima]').click();assert.equal(await heading(),'Prima');
  assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2024-04-30','moving up preserves the history cutoff');
  await local('pristinia').click();
  assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2024-04-30');
  await page.reload();await page.locator('.map-breadcrumbs').waitFor();assert.deepEqual(await path(),['World','Prima','Pristinia']);
  assert.equal(await page.locator('[data-atlas-date]').inputValue(),'2024-04-30');
  await page.locator('.map-workspace img').evaluate(img=>img.decode());await page.evaluate(()=>document.fonts.ready);
  await page.locator('.map-switcher').scrollIntoViewIfNeeded();await page.screenshot({path:output+'/prima-pristinia-desktop.png'});
  const directory=page.locator('#location-explorer');await directory.locator('input').fill('Eovar');
  assert.equal(await directory.locator('.location-region[aria-label="Eovar Harbor"]').count(),0);
  assert.equal(await directory.locator('.location-region[aria-label="Prima"]').getByRole('button',{name:'Eovar Harbor',exact:true}).count(),1);
  assert((await directory.getByRole('button',{name:'Eovar Harbor',exact:true}).locator('.place-kicker').textContent()).startsWith('Prima'));
  await directory.locator('input').fill('Pristinia');assert.equal(await directory.locator('.location-region[aria-label="Prima"]').getByRole('button',{name:'Pristinia',exact:true}).count(),1);
  await directory.getByRole('button',{name:'Pristinia',exact:true}).click();await page.locator('.article-header h1').filter({hasText:'Pristinia'}).waitFor();
  assert((await page.locator('#breadcrumbs').textContent()).includes('Prima'));
  await page.goto(base+'#eovar-harbor');await page.locator('.article-header h1').filter({hasText:'Eovar Harbor'}).waitFor();
  assert((await page.locator('#breadcrumbs').textContent()).includes('Prima'));
  const parent=page.locator('.record-summary .fact').filter({has:page.locator('dt',{hasText:'Parent'})});assert.equal(await parent.locator('dd').innerText(),'Prima');
  await page.locator('.article-map-link').click();await page.locator('.map-heading h3').filter({hasText:'Eovar Harbor'}).waitFor();assert.deepEqual(await path(),['World','Prima','Eovar Harbor']);
  for(const width of [1440,1280,1100,1024,900,768,600,390,320]){
   await page.setViewportSize({width,height:844});await fits();
   assert(await page.locator('.map-local-switcher button').evaluateAll(nodes=>nodes.every(el=>el.scrollWidth<=el.clientWidth&&el.getBoundingClientRect().height>=44)),'local map controls fit at '+width);
  }
  await page.setViewportSize({width:390,height:844});await page.locator('.map-breadcrumbs').scrollIntoViewIfNeeded();await page.screenshot({path:output+'/prima-eovar-mobile.png'});
  await go('pristinia','&place=Pristinia');assert.deepEqual(await path(),['World','Prima','Pristinia'],'old direct map links retain their context');
  assert.deepEqual(await page.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id)),[]);assert.deepEqual(errors,[]);
  console.log('PASS regional atlas tabs; Prima settlement/Babel local maps and breadcrumbs; scoped keyboard/focus; parent navigation/date cutoff/reload; directory and article hierarchy; legacy links; nine widths and protected boundaries');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

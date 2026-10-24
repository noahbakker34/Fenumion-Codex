// Guard the directory's network cost and preserve the complete, player-safe roster.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
const output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-character-directory';
const previews=require('../content/reference/browse-images.json').images;
(async()=>{
 fs.mkdirSync(output,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  await page.goto(base+'#people-directory',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.querySelectorAll('#people-gallery .character-card').length===24);
  const initial=await page.evaluate(()=>{
   const people=[...archiveIndex.characters,...archiveIndex.npcs];
   return {total:people.length,ids:people.map(p=>p.article),cards:[...document.querySelectorAll('#people-gallery img')].map(i=>i.getAttribute('src')),
    hero:document.querySelector('.record-topic-art img')?.getAttribute('src'),
    tiles:[...document.querySelectorAll('.hub-switcher .gateway-tile')].map(t=>t.style.getPropertyValue('--tile-image')),
    keys:Object.keys(codexCatalog.browseImages),originals:people.filter(p=>p.image&&!isRestrictedArticle(p.article)).map(p=>p.image)};
  });
  assert(initial.cards.every(src=>src.startsWith('assets/browse/')),'initial portraits use static previews');
  assert(initial.hero.startsWith('assets/browse/'),'directory artwork uses a static preview');
  assert(initial.tiles.every(style=>style.includes('assets/browse/')),'small navigation tiles avoid full-size art');
  assert(initial.originals.every(source=>initial.keys.includes(source)),'all public portrait sources have a preview');
  // Inspect actual requests, including backgrounds triggered without scrolling.
  await page.waitForFunction(()=>[...document.querySelectorAll('#people-gallery img')].slice(0,4).every(i=>i.complete&&i.naturalWidth>0));
  const expensive=new Set([...initial.originals,'assets/archive/wrath.gif','assets/archive/pristinia.webp','assets/archive/throne.png','assets/archive/abyss.png','assets/archive/fein-uaill.jpeg']);
  assert.deepEqual(requests.filter(url=>expensive.has(decodeURI(new URL(url).pathname.slice(new URL(base).pathname.length)))),[],'initial directory never requests original portraits or heavy decorations');
  assert.equal(requests.filter(url=>url.includes('/data/records/')).length,1,'only directory body is loaded');
  assert.equal(requests.filter(url=>url.includes('/data/search.')).length,0,'full-text search stays deferred');
  await page.emulateMedia({reducedMotion:'reduce'});
  const seen=[];
  do{
   const cards=page.locator('#people-gallery .character-card');
   assert(await cards.count()<=24,'bounded page size');
   seen.push(...await cards.evaluateAll(list=>list.map(card=>card.dataset.article)));
   if(await page.locator('[data-people-next]').isDisabled())break;
   await page.locator('[data-people-next]').click();
   assert.equal(await page.evaluate(()=>document.activeElement.id),'people-gallery');
  }while(true);
  assert.deepEqual(seen.slice().sort(),initial.ids.slice().sort(),'every indexed person remains reachable exactly once');
  await page.locator('[data-people-kind="player"]').click();
  await page.locator('#people-gallery-query').fill('Aerrow');
  await page.locator('#people-gallery .player-record[data-article="aerrow"]').waitFor();
  await page.locator('[data-people-kind="npc"]').click();
  assert.equal(await page.locator('#people-gallery [data-article="aerrow"]').count(),0);
  await page.locator('[data-people-kind="all"]').click();
  await page.locator('#people-gallery-query').fill('Pin');
  await page.locator('#people-gallery [data-character-title="Pelegia"]').waitFor();
  assert.equal(await page.locator('#people-gallery [data-character-title="Pin"]').count(),0);
  await page.locator('#people-gallery-query').fill('Akarian Irenhour');
  await page.locator('#people-gallery [data-article="akarian"]').waitFor();
  await page.locator('#people-gallery-query').fill('no matching character xyz');
  await page.locator('#people-gallery .timeline-empty').waitFor();
  await page.locator('#people-gallery-query').fill('Fenwick');
  const fenwick=page.locator('#people-gallery [data-character-title]').filter({hasText:'Fenwick'}).first();await fenwick.waitFor();
  const original=await page.evaluate(()=>archiveIndex.characters.find(p=>p.article==='fenwick').image);
  await fenwick.click();await page.locator('#record-dialog[open]').waitFor();
  assert.equal(await page.locator('#record-dialog .record-dialog-media img').getAttribute('src'),original,'opening a person keeps original art');
  await page.keyboard.press('Escape');
  await page.locator('#people-gallery-query').fill('');
  await page.waitForFunction(()=>document.querySelectorAll('#people-gallery .character-card').length===24);
  assert.equal(await page.locator('.people-pagination [data-people-page]').innerText(),'Page 1 of '+Math.ceil(initial.total/24));
  assert.equal(await page.locator('#people-gallery .locked-record[data-character-title]').count(),0);
  for(const width of [1440,820,390,320]){
   await page.setViewportSize({width,height:width<500?844:1000});
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'directory fits '+width);
   if(width===1440||width===390){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:output+'/characters-'+width+'.png'});}
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+'#world-index');
  await page.waitForFunction(()=>document.querySelectorAll('#world-browser .index-card').length===24);
  assert(await page.locator('#world-browser .index-card img').evaluateAll(images=>images.every(i=>i.getAttribute('src').startsWith('assets/browse/'))),'homepage Characters also uses previews');
  assert(await page.locator('#world-browser video').evaluateAll(videos=>videos.every(v=>v.preload==='none')),'off-screen homepage character videos do not preload metadata');
  const homeSeen=[];
  do{
   assert(await page.locator('#world-browser .index-card').count()<=24);
   homeSeen.push(...await page.locator('#world-browser .index-card').evaluateAll(cards=>cards.map(c=>c.dataset.article)));
   if(await page.locator('[data-world-next]').isDisabled())break;
   await page.locator('[data-world-next]').click();
   assert.equal(await page.evaluate(()=>document.activeElement.id),'world-browser-results');
  }while(true);
  assert.deepEqual(homeSeen.slice().sort(),initial.ids.slice().sort(),'all people remain reachable from the homepage tab');
  await page.locator('#world-browser [data-sort-direction]').click();
  assert.equal(await page.locator('#world-browser .people-pagination span').innerText(),'Page 1 of '+Math.ceil(initial.total/24));
  const descendingFirst=await page.locator('#world-browser .index-card').first().getAttribute('data-article');
  assert.equal(descendingFirst,homeSeen.at(-1),'reverse sorting still includes the end of the roster');
  await page.locator('#world-browser [data-view="locations"]').click();
  assert.equal(await page.locator('#world-browser .people-pagination').count(),0,'character pagination does not carry into other views');
  await page.locator('#world-browser [data-view="characters"]').click();
  assert.equal(await page.locator('#world-browser .index-card').first().getAttribute('data-article'),homeSeen[0],'switching back resets the character page and order');
  await page.locator('#world-browser').screenshot({path:output+'/homepage-characters-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'homepage Characters fits mobile');
  await page.locator('#world-browser').screenshot({path:output+'/homepage-characters-mobile.png'});
  assert.deepEqual(await page.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id)),[]);
  assert.deepEqual(errors,[]);
  console.log('PASS lightweight initial artwork, deferred bodies/search, all '+initial.total+' people on directory and homepage, bounded pages, filters/aliases/sorting, original art, focus, four widths and protected boundaries');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

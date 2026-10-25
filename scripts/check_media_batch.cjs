// Actual decoding, no automatic scene transfers, regional destinations and quiet-mode fallbacks.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const films=[{"name": "olokun", "article": "olokun", "kind": "hero", "asset": "assets/characters/olokun-animation.mp4", "width": 720, "height": 544, "duration": 9.04}, {"name": "djohandrai", "article": "djohandrai", "kind": "hero", "asset": "assets/characters/djohandrai-animation.mp4", "width": 432, "height": 768, "duration": 5.21}, {"name": "brianna", "article": "brianna", "kind": "hero", "asset": "assets/characters/brianna-animation.mp4", "width": 720, "height": 544, "duration": 5.21}, {"name": "fenwick", "article": "fenwick", "kind": "hero", "asset": "assets/characters/fenwick-animation.mp4", "width": 720, "height": 544, "duration": 5.21}, {"name": "st-anky", "article": "st-anky", "kind": "hero", "asset": "assets/characters/st-anky-animation.mp4", "width": 720, "height": 544, "duration": 5.21}, {"name": "vysaeth-tomb", "article": "vysaeth", "kind": "place-scene", "asset": "assets/locations/vysaeth-tomb-animation.mp4", "width": 720, "height": 544, "duration": 5.21}, {"name": "wrath", "article": "roderick-wrath", "kind": "hero", "asset": "assets/characters/wrath-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "aria-white", "article": "aria-pride", "kind": "scene", "asset": "assets/character-scenes/aria-white-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "aria-resolve", "article": "aria-pride", "kind": "hero", "asset": "assets/characters/aria-resolve-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "titans-watch", "article": "gael", "kind": "place-scene", "asset": "assets/locations/titans-watch-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "citadel-approach", "article": "gael", "kind": "place-scene", "asset": "assets/locations/citadel-approach-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "fein-uaill", "article": "fein-uaill", "kind": "place-scene", "asset": "assets/locations/fein-uaill-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "adelia", "article": "adelia-hope", "kind": "hero", "asset": "assets/characters/adelia-animation.mp4", "width": 624, "height": 624, "duration": 5.21}, {"name": "citadel-fortress", "article": "gael", "kind": "place-scene", "asset": "assets/locations/citadel-fortress-animation.mp4", "width": 832, "height": 464, "duration": 5.21}];
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/',out=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-media-batch';
(async()=>{
 fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const errors=[];
  async function make(options={}){const p=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'no-preference',...options});p.on('pageerror',e=>errors.push(e.message));if(!process.env.CODEX_LIVE)await p.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));return p;}
  async function go(p,route){await p.goto(base+'#'+route,{waitUntil:'domcontentloaded'});await p.waitForFunction(r=>byId.get(r.split('?')[0])?.bodyLoaded&&document.querySelector('#article-content').dataset.route==='#'+r,route);}
  const p=await make();let old;
  for(const film of films){
   const requests=[];const record=JSON.parse(fs.readFileSync(__dirname+'/../content/records/'+film.article+'.json','utf8'));
   const observe=r=>{if(r.url().includes(film.asset))requests.push(r.url());};p.on('request',observe);
   await go(p,film.article+(film.kind==='hero'?'':'?section=scene-'+film.name));
   if(old)assert(await old.evaluate(v=>!v.isConnected&&v.paused),'previous playback stops');
   const video=film.kind==='hero'?p.locator('.chronicle-person-portrait video'):p.locator('#scene-'+film.name+' video');
   assert.equal(await video.count(),1,'one intended player for '+film.name);
   if(film.kind==='hero')assert.equal(await video.getAttribute('poster'),record.image,'original still retained');
   else{
    assert.equal(requests.length,0,'scene waits for Play');
    await video.evaluate(v=>v.play());
   }
   await p.waitForFunction(({hero,id})=>{const v=document.querySelector(hero?'.chronicle-person-portrait video':'#scene-'+id+' video');return v?.readyState>=2&&!v.paused&&v.currentTime>.1;},{hero:film.kind==='hero',id:film.name},{timeout:20000});
   const media=await video.evaluate(v=>({w:v.videoWidth,h:v.videoHeight,d:v.duration,muted:v.muted,loop:v.loop,inline:v.playsInline}));
   assert.deepEqual([media.w,media.h],[film.width,film.height],film.name+' decoded dimensions');assert(Math.abs(media.d-film.duration)<.05,film.name+' full duration');assert(media.inline);
   if(film.kind==='hero')assert(media.muted&&media.loop);
   old=await video.elementHandle();p.off('request',observe);
   if(['olokun','aria-resolve'].includes(film.name))await p.locator('.article-header').screenshot({path:out+'/'+film.name+'-desktop.png'});
   await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile fits '+film.name);
   if(film.kind==='hero')assert(await video.evaluate(v=>v.getBoundingClientRect().height<=281),'compact portrait');
   if(film.name==='djohandrai')await p.locator('.article-header').screenshot({path:out+'/djohandrai-mobile.png'});
   await p.setViewportSize({width:1440,height:1000});
  }
  for(const [article,title,scene] of [['gael','Titan’s Watch','titans-watch'],['gael','Citadel of Sorrow','citadel-fortress'],['gael','Vysaeth’s Tomb','vysaeth-tomb'],['fein-uaill','Fein Uaill','fein-uaill']]){
   await go(p,article);assert.equal(await p.locator('.region-hub-intro .article-map-link').count(),1,'interactive regional map retained');
   await p.evaluate(t=>openLocationRecord(archiveIndex.islands.find(x=>x.title===t)),title);
   await p.locator('#record-dialog-content .record-dialog-link').filter({hasText:'Watch this place'}).click();
   await p.locator('#scene-'+scene).waitFor();assert.equal(await p.evaluate(()=>new URLSearchParams(location.hash.split('?')[1]).get('section')),'scene-'+scene);
   assert(await p.locator('#scene-'+scene).evaluate(el=>{for(let p=el.parentElement;p;p=p.parentElement)if(p.matches('details')&&!p.open)return false;return true;}),'destination reveals film');
   assert.equal(await p.locator('.region-history').getAttribute('open'),null,'film does not expand unrelated history');
  }
  await p.locator('#scene-fein-uaill').screenshot({path:out+'/fein-uaill-film.png'});await p.close();
  for(const mode of ['reduce','saveData']){
   const q=await make({viewport:{width:390,height:844},reducedMotion:mode==='reduce'?'reduce':'no-preference'}),requests=[];
   if(mode==='saveData')await q.addInitScript(()=>Object.defineProperty(navigator,'connection',{value:{saveData:true,effectiveType:'4g'}}));
   q.on('request',r=>{if(films.some(f=>r.url().includes(f.asset)))requests.push(r.url());});
   for(const article of ['olokun','djohandrai','roderick-wrath']){await go(q,article);assert(await q.locator('.chronicle-person-portrait video').evaluate(v=>v.paused&&!v.querySelector('source').hasAttribute('src')));}
   await go(q,'people-directory');await q.locator('#people-gallery-query').fill('Olokun');assert.equal(await q.locator('#people-gallery video').count(),0);
   await go(q,'world-index');assert.deepEqual(requests,[],mode+' and browsing never transfer these films');
   assert.deepEqual(await q.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief||a.scenes)).map(a=>a.id)),[],'private content remains absent');await q.close();
  }
  assert.deepEqual(errors,[]);console.log('PASS fourteen supplied films decode, native scenes wait for Play, eight compact portraits, static browsing/quiet fallbacks, regional maps and film destinations, mobile fit and protected boundaries');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

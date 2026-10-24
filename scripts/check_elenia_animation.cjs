// The portrait plays only on its record; quiet/data-saving modes keep the existing still.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
const out=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-elenia-animation';
const source=require('../content/records/elenia.json');
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const errors=[];
  async function make(options={}){
   const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'no-preference',...options});
   page.on('pageerror',e=>errors.push(e.message));
   if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
   return page;
  }
  async function go(page,id){await page.goto(base+'#'+id,{waitUntil:'domcontentloaded'});await page.waitForFunction(id=>byId.get(id)?.bodyLoaded&&document.querySelector('#article-content').dataset.route==='#'+id,id);}
  const page=await make();await go(page,'elenia');
  const portrait=page.locator('.chronicle-person-portrait video');
  assert.equal(await portrait.count(),1);
  assert.equal(await page.locator('.record-visual-rail > .article-hero video').count(),0,'single portrait');
  assert.equal(await portrait.getAttribute('poster'),source.image);
  await page.waitForFunction(()=>{const v=document.querySelector('.chronicle-person-portrait video');return v?.readyState>=2&&!v.paused&&v.currentTime>.15;},null,{timeout:20000});
  const media=await portrait.evaluate(v=>({width:v.videoWidth,height:v.videoHeight,duration:v.duration,muted:v.muted,loop:v.loop,inline:v.playsInline,controls:v.controls}));
  assert.deepEqual([media.width,media.height],[960,540]);assert(media.duration>9&&media.duration<9.1);
  assert(media.muted&&media.loop&&media.inline&&!media.controls);
  await page.locator('.article-header').screenshot({path:out+'/elenia-animation-desktop.png'});
  await page.locator('#unresolved-elenia').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>document.querySelector('.chronicle-person-portrait video').paused);
  await page.locator('.article-header').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>!document.querySelector('.chronicle-person-portrait video').paused);
  await page.setViewportSize({width:390,height:844});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  assert(await portrait.evaluate(v=>v.getBoundingClientRect().height<=221),'compact mobile portrait');
  await page.locator('.article-header').screenshot({path:out+'/elenia-animation-mobile.png'});
  const old=await portrait.elementHandle();await go(page,'people-directory');
  assert(await old.evaluate(v=>!v.isConnected&&v.paused),'navigation stops old playback');await page.close();
  for(const mode of ['reduce','saveData']){
   const quiet=await make({viewport:{width:390,height:844},reducedMotion:mode==='reduce'?'reduce':'no-preference'}),requests=[];
   quiet.on('request',r=>{if(r.url().includes('elenia-portrait-animation.mp4'))requests.push(r.url());});
   if(mode==='saveData')await quiet.addInitScript(()=>Object.defineProperty(navigator,'connection',{value:{saveData:true,effectiveType:'4g'}}));
   await go(quiet,'elenia');
   assert(await quiet.locator('.chronicle-person-portrait video').evaluate(v=>v.paused&&!v.querySelector('source').hasAttribute('src')));
   assert.equal(await quiet.locator('.chronicle-person-portrait video').getAttribute('poster'),source.image);
   await quiet.waitForTimeout(150);assert.deepEqual(requests,[],mode+' does not download the portrait video');
   await quiet.close();
  }
  const browse=await make(),requests=[];browse.on('request',r=>{if(r.url().includes('elenia-portrait-animation.mp4'))requests.push(r.url());});
  await go(browse,'people-directory');await browse.locator('#people-gallery-query').fill('Elenia');
  const card=browse.locator('#people-gallery [data-character-title="Elenia"]');await card.waitFor();
  assert.equal(await card.locator('video').count(),0);assert((await card.locator('img').getAttribute('src')).startsWith('assets/browse/'));
  await go(browse,'world-index');assert.equal(await browse.locator('#world-browser video[src*="elenia-portrait-animation"]').count(),0);
  await browse.waitForTimeout(150);assert.deepEqual(requests,[],'both browsing views keep static artwork');
  assert.deepEqual(await browse.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id)),[]);
  assert.deepEqual(errors,[]);await browse.close();
  console.log('PASS Elenia H.264 playback/duration, one compact portrait, off-screen/navigation pause, original fallback, zero video requests in reduced motion/save-data/directories, mobile and protected boundaries');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/',output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-reviewed-portraits';
const review=require('../content/reference/portrait-review-2026-10-22.json');
(async()=>{
 fs.mkdirSync(output,{recursive:true});const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async id=>{await page.goto(base+'#'+id);await page.waitForFunction(id=>byId.get(id)?.bodyLoaded&&document.querySelector('#article-content').dataset.route==='#'+id,id);};
  await go('saelihn');assert.equal(await page.locator('h1').innerText(),'Saelihn');assert((await page.locator('.article-body').textContent()).includes('without breaking them'));
  const images=await page.evaluate(async portraits=>Promise.all(portraits.map(p=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve({id:p.article,ok:img.naturalWidth>0&&img.naturalHeight>0});img.onerror=()=>resolve({id:p.article,ok:false});img.src=p.asset;}))),review.portraits);assert(images.every(i=>i.ok),'every selected original image decodes');
  const directory=await page.evaluate(ids=>({newNpcs:archiveIndex.npcs.filter(p=>ids.includes(p.article)).length,saelihn:archiveIndex.characters.filter(p=>p.title==='Saelihn').map(p=>p.article),pin:resolvePublicPerson('Pin').title,groups:npcIslandGroups.flatMap(group=>islandNpcPeople(group).map(person=>person.article)),npcs:archiveIndex.npcs.map(p=>p.article)}),review.promotedExistingRecords);
  assert.equal(directory.newNpcs,43);assert.deepEqual(directory.saelihn,['saelihn']);assert.equal(directory.pin,'Pelegia');assert.deepEqual(directory.groups.slice().sort(),directory.npcs.slice().sort(),'exactly one island group per NPC');
  await page.screenshot({path:output+'/saelihn-desktop.png'});
  for(const id of ['discovery-260','discovery-312','discovery-109','discovery-120','discovery-008','discovery-133','bitoshi-nakamoto']){
   await go(id);await page.waitForFunction(()=>document.querySelector('.chronicle-person-portrait img')?.naturalWidth>0);
   assert(!/\b20\d{2}\b/.test(await page.locator('.article-body').innerText()),'new history uses Fenumion dates: '+id);
   if(id==='discovery-260')await page.screenshot({path:output+'/fenwae-desktop.png'});
  }
  for(const width of [390,320]){
   await page.setViewportSize({width,height:844});for(const id of ['saelihn','discovery-260','discovery-312']){await go(id);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'portrait fits '+width);}
   if(width===390)await page.screenshot({path:output+'/yoshida-mobile.png'});
  }
  assert.deepEqual(await page.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id)),[]);assert.deepEqual(errors,[]);
  console.log('PASS all selected image decoding, real-character directory links/island uniqueness, alias and manifestation boundaries, Fenumion dates, public limits and desktop/mobile profiles');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

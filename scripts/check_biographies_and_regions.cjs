// Verify the new reading order, original destinations and regional navigation as a signed-out reader.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/',out=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-biographies-regions';
const originals=id=>JSON.parse(fs.readFileSync(__dirname+'/../content/records/'+id+'.json'));
(async()=>{
 fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];page.on('pageerror',error=>errors.push(error.message));
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',route=>route.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async route=>{await page.goto(base+'#'+route);await page.waitForFunction(route=>byId.get(route.split('?')[0])?.bodyLoaded&&document.querySelector('#article-content').dataset.route==='#'+route,route);};
  const fits=async width=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'page fits '+width);
  const picture=async file=>{await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:out+'/'+file});};
  const newProfiles=['fenwick','scribonia','akarian','melian-starguard','herb','huoth','wren','eugene','arjahn','lady-severina','tarwen-silver-star','pristinia','eovar-harbor','shining-shores','larkhollow'];
  const places=new Set(['pristinia','eovar-harbor','shining-shores','larkhollow']);
  for(const [id,count] of [['olokun',7],['elenia',7],['aria-pride',6],['nienna',6],['gartina',7],['magnus',7],['saray',5],['adelia-hope',7],['fenwick',7],['scribonia',7],['akarian',6],['melian-starguard',5],['herb',5],['huoth',6],['wren',6],['eugene',6],['arjahn',7],['lady-severina',6],['tarwen-silver-star',4],['pristinia',6],['eovar-harbor',6],['shining-shores',5],['larkhollow',5]]){
   const source=originals(id),place=places.has(id);await go(id);
   assert.equal(await page.locator('.biography-navigation button').count(),count,id+' reading links');
   assert.equal(await page.locator('.biography-section').count(),count,id+' continuous chapters');
   assert(await page.locator('.article-body').evaluate(body=>{const intro=body.querySelector(':scope > p'),chapter=body.querySelector('.biography-section');return !intro||Boolean(intro.compareDocumentPosition(chapter)&Node.DOCUMENT_POSITION_FOLLOWING);}),id+' introduction precedes the chapters');
   assert.equal(await page.locator('.record-summary .fact').count(),Object.keys(source.facts).length,'all original facts remain visible');
   assert.equal(await page.locator('.record-visual-rail,.character-brief,.record-reading-controls,.chapter-guide').count(),0);
   assert.equal(await page.locator('#contents .toc-link').count(),count);
   for(const section of source.sections)assert.equal(await page.locator('[id="'+section.id+'"]').count(),1,id+' retains '+section.id);
   assert.deepEqual(await page.evaluate(id=>byId.get(id).sources,id),source.sources,'all original references retained');
   assert.equal(await page.locator('.section-evidence').count(),source.sections.length,'each original evidence panel retained');
   if(['olokun','elenia','aria-pride'].includes(id))assert(await page.locator('.biography-relationships a').count()>=4,'named linked relationships');
   assert(!/New York|\bUTC\b|\b[Bb]iblical\b/.test(await page.locator('.article-body').innerText()));
   if(source.video){
    const portrait=page.locator(place?'.record-overview ~ .article-hero video, #article-content > .article-hero video':'.chronicle-person-portrait video');
    assert.equal(await portrait.getAttribute('poster'),source.image,'original portrait remains the motion fallback');
    assert(await portrait.evaluate(video=>video.paused&&!video.querySelector('source')?.hasAttribute('src')),'reduced motion does not load the animation');
   await portrait.evaluate(async video=>{if(video.poster){const image=new Image();image.src=video.poster;await image.decode();}});
   }else if(source.image)await page.locator(place?'#article-content > .article-hero img':'.chronicle-person-portrait img').evaluate(image=>image.decode());
   if(place){
    assert.equal(await page.locator('.biography-navigation').getAttribute('aria-label'),'Read this location history');
    if(source.image)assert.equal(await page.locator('#article-content > .article-header + .article-hero').count(),1,'original place map/film leads the page');
    if(source.mapId)assert.equal(await page.locator('#article-content > .article-hero [data-open-map]').getAttribute('data-open-map'),source.mapId,'original map destination retained');
   }
   await picture(id+'-desktop.png');
   const target=source.biography.chapters[1].id;await page.locator('.biography-navigation [data-section="'+target+'"]').click();
   assert.equal(await page.evaluate(()=>document.activeElement.id),target,'chapter receives focus');
   await page.reload();await page.locator('#'+target).waitFor();assert.equal(await page.evaluate(()=>document.activeElement.id),target,'chapter route reload');
   const legacy=source.sections.find(section=>section.id!==target&&source.biography.chapters.some(chapter=>chapter.sections.includes(section.id))).id;
   await go(id+'?section='+legacy);assert.equal(await page.evaluate(()=>document.activeElement.id),legacy,'legacy source section route');
   assert.equal(await page.locator('#'+legacy).evaluate(el=>el.closest('.biography-section')!==null),true);
   const scene=source.sections.find(section=>section.id.endsWith('-scene-sequence'));
   if(scene){await go(id+'?section='+scene.id);assert(await page.locator('#'+scene.id).evaluate(el=>el.closest('details').open),'legacy scene appendix opens');assert(await page.locator('#'+scene.id).evaluate(el=>el.parentElement.parentElement.querySelector('.scene-sequence')!==null));}
   if(source.relationshipMap?.nodes?.length){
   await go(id+'?section=relationship-map-'+id);assert(await page.locator('#relationship-map-'+id).evaluate(el=>el.closest('details').open),'relationship map remains accessible');
   const filter=page.locator('[data-relationship-filter]').last();await filter.click();assert.equal(await filter.getAttribute('aria-pressed'),'true','relationship filters survive reorganization');
   }
   if(id==='elenia'){
    const artwork=page.locator('.record-rail-art img[src="elenia-chibi.png"]');
    await artwork.scrollIntoViewIfNeeded();await artwork.evaluate(image=>image.decode());
    assert.equal(await artwork.locator('..').getAttribute('href'),'elenia-chibi.png','original artwork remains linked');
   }
   for(const width of [1440,1280,1100,1024,900,768,600,390,320]){
    await page.setViewportSize({width,height:844});await fits(width);
    assert(await page.locator('.biography-navigation button').evaluateAll(nodes=>nodes.every(el=>el.scrollWidth<=el.clientWidth&&el.getBoundingClientRect().height>=44)),'biography controls fit '+width);
    if(id==='elenia')assert(await page.locator('.record-rail-art img[src="elenia-chibi.png"]').evaluate(img=>{
     const box=img.getBoundingClientRect(),card=img.closest('figure').getBoundingClientRect();
     return box.width>0&&box.height>0&&box.width<=img.naturalWidth+1&&box.height<=img.naturalHeight+1&&card.width<=281&&Math.abs(box.width/box.height-img.naturalWidth/img.naturalHeight)<.02;
    }),'small artwork stays compact and proportional at '+width);
   }
   if(['nienna','gartina','magnus','saray','adelia-hope',...newProfiles].includes(id)){await page.setViewportSize({width:390,height:844});await go(id+'?section='+source.biography.chapters[0].id);assert(await page.locator('#'+source.biography.chapters[0].id).evaluate(el=>el.getBoundingClientRect().top>=document.querySelector('.topbar').getBoundingClientRect().bottom),'chapter heading clears mobile controls');await picture(id+'-mobile.png');}
   if(id==='elenia'){await go('elenia?section=miracle');await page.locator('#miracle').scrollIntoViewIfNeeded();await picture('elenia-miracle-mobile.png');}
   await page.setViewportSize({width:1440,height:1000});
  }
  for(const id of ['eovar-harbor','pristinia']){
   await go(id);await page.locator('#article-content > .article-hero [data-open-map]').click();await page.locator('.map-heading h3').waitFor();assert.equal(await page.evaluate(()=>new URLSearchParams(location.hash.split('?')[1]).get('map')),originals(id).mapId,'place map opens at its original level');
   assert.equal(await page.locator('.biography-layout').count(),0,'place reading layout clears on entering atlas');
  }
  for(const id of ['prima-pristinia','gael','fein-uaill','voraketh','babel-ashur']){
   const hub=originals(id).regionHub;await go(id);
   assert.equal(await page.locator('.region-hub').count(),1);assert.equal(await page.locator('.region-history').getAttribute('open'),null);
   assert.equal(await page.locator('#contents .toc-link').count(),5+(originals(id).scenes?.length?1:0),'hub contents include the available film collection');
   assert.equal(await page.locator('.region-hub-navigation button').count(),5+(originals(id).scenes?.length?1:0));
   const expected=await page.evaluate(region=>archiveIndex.islands.filter(place=>place.region===region&&place.level!=='region'&&isPlayerSafeArticle(place.article)).length,hub.region);
   assert.equal(await page.locator('.region-place-card').count(),expected,'all accessible child places retained');
   assert(await page.locator('.region-place-card>small').evaluateAll((nodes,region)=>nodes.every(el=>el.textContent.startsWith(region)),hub.region),'place parent labels');
   assert.equal(await page.locator('.region-people-grid>a').count(),6);
   assert.equal(await page.locator('.region-journey-grid>a').count(),hub.journeys.length);
   assert(await page.locator('.region-event-grid>button').count()>0);
   await page.locator('.region-event-grid>button').first().click();await page.locator('#record-dialog[open]').waitFor();assert((await page.locator('#record-dialog-content').innerText()).includes('Month of'));await page.keyboard.press('Escape');
   for(const width of [1440,1280,1100,1024,900,768,600,390,320]){await page.setViewportSize({width,height:844});await fits(width);assert(await page.locator('.region-hub-navigation button').evaluateAll(nodes=>nodes.every(el=>el.scrollWidth<=el.clientWidth&&el.getBoundingClientRect().height>=44)),'regional controls fit '+width);}
   await page.setViewportSize({width:1440,height:1000});
   if(id==='prima-pristinia'){
    for(const name of ['Pristinia','Eovar Harbor']){const card=page.locator('.region-place-card').filter({has:page.getByText(name,{exact:true})});assert.equal(await card.count(),1);await card.click();assert.equal(await page.locator('#record-dialog-title').innerText(),name);assert((await page.locator('#record-dialog-content').innerText()).includes('Parent · Prima'));await page.keyboard.press('Escape');}
    await page.locator('#prima-pristinia-hub-places').scrollIntoViewIfNeeded();await picture('prima-hub-desktop.png');await page.setViewportSize({width:390,height:844});await page.locator('#prima-pristinia-hub-places').scrollIntoViewIfNeeded();await picture('prima-hub-mobile.png');await page.setViewportSize({width:1440,height:1000});
   }
   if(id==='gael'){
    await page.locator('.region-place-card').filter({has:page.getByText('Hope',{exact:true})}).click();
    await page.locator('#record-dialog-content [data-record-article="gael?section=gael-regional-history"]').click();
    assert(await page.locator('.region-history').evaluate(el=>el.open),'shared location opens its regional history');
    await go('gael?section=gael-fenwick-coast');assert(await page.locator('#gael-fenwick-coast').evaluate(el=>[...function*(el){for(let p=el.parentElement;p;p=p.parentElement)if(p.matches('details'))yield p;}(el)].every(el=>el.open)),'old deep links reveal both history and section');
    await go('gael');await picture('gael-hub-desktop.png');
   }
   await page.locator('.region-hub-actions [data-open-map]').click();await page.locator('.map-heading h3').waitFor();assert.equal(await page.evaluate(()=>new URLSearchParams(location.hash.split('?')[1]).get('map')),hub.mapId,'map opens at the regional level');assert.equal(await page.locator('#article-content').evaluate(el=>el.classList.contains('region-hub-layout')),false,'hub layout does not carry into the atlas');
   await go(id);await page.locator('.region-hub-actions>a').click();await page.locator('[data-timeline-region]').waitFor();assert.equal(await page.locator('[data-timeline-region]').inputValue(),hub.timelineRegion,'full timeline scoped to region');
  }
  assert.deepEqual(await page.evaluate(()=>articles.filter(a=>isRestrictedArticle(a.id)&&(a.body||a.brief)).map(a=>a.id)),[]);assert.deepEqual(errors,[]);
  console.log('PASS nineteen continuous biographies and four detailed place histories; full facts, source/evidence and legacy destinations; named relationships; five regional hubs; nested places and shared histories; region maps/timelines; dialogs, focus/reload and nine widths; protected boundaries');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

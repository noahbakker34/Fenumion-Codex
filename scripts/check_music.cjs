// Verify real playlist membership, streaming metadata and player behavior.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const additions=require('../docs/SOUNDTRACK_ADDITIONS_2026_11_13.json');
const instrumentReview=require('../docs/SOUNDTRACK_INSTRUMENT_REVIEW_2026_11_13.json');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.route('https://auth.fenumion.com/**',route=>route.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  if(process.env.CODEX_MUSIC_LOCAL)await page.route('https://raw.githubusercontent.com/noahbakker34/Fenumion-Codex/**/site/assets/music/**',route=>{
   const relative=new URL(route.request().url()).pathname.split('/site/assets/music/')[1];
   const data=fs.readFileSync(path.resolve(__dirname,'../site/assets/music',relative));
   const requested=/bytes=(\d+)-(\d*)/.exec(route.request().headers().range||'');
   if(requested){const start=Number(requested[1]),end=requested[2]?Math.min(Number(requested[2]),data.length-1):data.length-1;return route.fulfill({status:206,contentType:'audio/mpeg',headers:{'Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${data.length}`},body:data.subarray(start,end+1)});}
   return route.fulfill({status:200,contentType:'audio/mpeg',headers:{'Accept-Ranges':'bytes'},body:data});
  });
  await page.goto(base+'#world-index');await page.waitForFunction(()=>document.querySelector('#music-style option[value="i-am"]'));
  await page.locator('#music-toggle').click();
  const group=page.locator('#music-style'),track=page.locator('#music-track-select');
  assert(await page.locator('#music-audio').evaluate(audio=>audio.paused),'no autoplay on entry');
  await group.selectOption('i-am');
  const characterTitles=await track.locator('option').allTextContents();assert.equal(characterTitles.length,14);assert(characterTitles.includes('Saint Anky'));assert(characterTitles.every(title=>/^I Am |^Saint Anky$/.test(title)));
  assert.equal(await page.locator('#music-style-label').textContent(),'I Am');
  await track.selectOption('saint-anky.mp3');assert(await page.locator('#music-audio').evaluate(audio=>audio.paused),'selection does not start playback');
  await page.locator('#music-play').click();await page.waitForFunction(()=>!musicAudio.paused&&musicAudio.currentTime>.3);
  assert.equal(await page.locator('#music-title').innerText(),'Saint Anky');
  await page.locator('#music-play').click();assert(await page.locator('#music-audio').evaluate(audio=>audio.paused));
  await page.locator('#music-progress').evaluate(el=>{el.value='500';el.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.waitForFunction(()=>musicAudio.currentTime>10); // Seek completion is asynchronous.
  await page.locator('#music-previous').click();assert.equal(await track.inputValue(),'saint-anky.mp3','previous restarts the current song after seeking');
  await page.locator('#music-previous').click();assert.notEqual(await track.inputValue(),'saint-anky.mp3');
  await page.locator('#music-next').click();assert.equal(await track.inputValue(),'saint-anky.mp3','next stays inside the playlist');
  await page.locator('#music-audio').evaluate(audio=>audio.dispatchEvent(new Event('ended')));await page.waitForFunction(()=>musicTrackSelect.value!=="saint-anky.mp3");
  assert.equal(await track.inputValue(),'i-am-adelia.mp3','loop wraps at the end of the character playlist');
  await page.locator('#music-audio').evaluate(audio=>audio.pause());
  await track.selectOption('saint-anky.mp3');await page.locator('#music-loop').click();await page.locator('#music-audio').evaluate(audio=>audio.dispatchEvent(new Event('ended')));
  assert.equal(await page.locator('#music-status').innerText(),'Playlist complete');assert.equal(await track.inputValue(),'saint-anky.mp3');
  await page.locator('#music-loop').click();
  await track.selectOption('i-am-olokun.mp3');await page.reload();await page.waitForFunction(()=>document.querySelector('#music-style').value==='i-am');
  assert.equal(await track.inputValue(),'i-am-olokun.mp3','playlist and chosen song persist');assert(await page.locator('#music-audio').evaluate(audio=>audio.paused));
  await page.locator('#music-toggle').click();
  await group.selectOption('prima');assert.deepEqual(await track.locator('option').allTextContents(),['Prima Adventure','Prima Battle','Prima Battle at Home','Prima Five Note','Prima Strings','Prima Strings (Alternate)']);
  assert.deepEqual((await track.locator('option').evaluateAll(nodes=>nodes.map(node=>node.value))).sort(),instrumentReview.songs.filter(song=>song.hardangerNamed).map(song=>song.file).sort(),'all prompt-identified Hardanger tracks are in Prima');
  assert.equal(await page.locator('#music-style-label').textContent(),'Prima');
  await track.selectOption('prima-strings-alternate.mp3');await group.selectOption('fenumion');assert.equal(await track.inputValue(),'prima-strings-alternate.mp3','overlapping collection retains current song');
  assert.equal(await page.locator('#music-style-label').textContent(),'All Fenumion songs');assert.equal(await track.locator('option').count(),40);
  assert.equal(await track.locator('option').filter({hasText:/^Four Came In$/}).count(),1,'identical audio has one entry');
  for(const title of ['The Battle Approaches','Carmen and Paco','Carry the Flame'])assert((await track.locator('option').allTextContents()).includes(title));
  await group.selectOption('all');assert.equal(await track.locator('option').count(),139,'background collection excludes all custom songs');
  const entries=await page.evaluate(()=>fenumionSoundtrack.map(track=>({title:track.title,file:track.file,src:track.src,style:track.style})));
  assert.equal(new Set(entries.map(row=>row.file)).size,179);assert.equal(entries.filter(row=>row.style!=='fenumion').length,139,'original background library remains intact');
  // Every custom song has one thematic home, and no playlist mixes source collections.
  const customFiles=new Set(entries.filter(row=>row.style==='fenumion').map(row=>row.file));
  assert.deepEqual(await group.locator('optgroup').evaluateAll(nodes=>nodes.map(node=>node.label)),['Custom Fenumion · Suno','Background soundtrack']);
  const themes=[['i-am',14],['prima',6],['fenumion-tales',7],['fenumion-places',8],['fenumion-peril',5]],covered=[];
  for(const [id,count] of themes){await group.selectOption(id);const files=await track.locator('option').evaluateAll(nodes=>nodes.map(node=>node.value));assert.equal(files.length,count,id);assert(files.every(file=>customFiles.has(file)),id+' is custom only');covered.push(...files);}
  assert.equal(covered.length,40);assert.equal(new Set(covered).size,40,'custom themes do not overlap');assert.deepEqual([...new Set(covered)].sort(),[...customFiles].sort(),'every custom song is organized');
  const playlistIds=await group.locator('option').evaluateAll(nodes=>nodes.map(node=>({id:node.value,custom:node.parentElement.label.startsWith('Custom')})));
  for(const playlist of playlistIds){
   await group.selectOption(playlist.id);
   const options=await track.locator('option').evaluateAll(nodes=>nodes.map(node=>({file:node.value,title:node.textContent})));
   assert(options.length>0,playlist.id);assert(options.every(row=>customFiles.has(row.file)===playlist.custom),'source isolation '+playlist.id);
   const recommendation=await page.locator('#music-recommendation').getAttribute('data-track');assert(options.some(row=>row.title===recommendation),'recommendation remains in '+playlist.id);
   const selected=await track.inputValue();await page.locator('#music-previous').click();await page.locator('#music-next').click();assert.equal(await track.inputValue(),selected,'navigation remains in '+playlist.id);
  }
  await group.selectOption('fenumion-tales');await page.locator('#music-recommendation').click();await page.waitForFunction(()=>musicAudio.currentTime>.15&&!musicAudio.paused);await page.locator('#music-play').click();assert.equal(await group.inputValue(),'fenumion-tales','a custom recommendation retains its playlist');
  await group.selectOption('battle');await page.locator('#music-recommendation').click();await page.waitForFunction(()=>musicAudio.currentTime>.15&&!musicAudio.paused);await page.locator('#music-play').click();assert.equal(await group.inputValue(),'battle','a background recommendation retains its playlist');
  // Old mixed-list preferences migrate without losing a saved custom song.
  await page.evaluate(()=>{localStorage.setItem('fenumion-music-style','all');localStorage.setItem('fenumion-music-file','i-am-olokun.mp3');});
  await page.reload();await page.waitForFunction(()=>document.querySelector('#music-style').value==='fenumion');assert.equal(await track.inputValue(),'i-am-olokun.mp3');assert.equal(await track.locator('option').count(),40);
  await page.evaluate(()=>{localStorage.setItem('fenumion-music-style','all');localStorage.setItem('fenumion-music-file','middle-earth.mp3');});
  await page.reload();await page.waitForFunction(()=>document.querySelector('#music-style').value==='all');assert.equal(await track.inputValue(),'middle-earth.mp3');assert.equal(await track.locator('option').count(),139);
  await page.locator('#music-toggle').click();
  // Actually play all 40 Fenumion recordings, including every new file and the existing Four Came In.
  const songs=entries.filter(track=>track.style==='fenumion');
  for(let index=0;index<songs.length;index+=2){
   const rows=songs.slice(index,index+2).map(row=>({...row,durationSeconds:additions.find(track=>track.file===row.file)?.durationSeconds}));
   const results=await page.evaluate(rows=>Promise.all(rows.map(row=>new Promise((resolve,reject)=>{
    const audio=new Audio();audio.muted=true;
    const cleanup=()=>{clearTimeout(timer);audio.onerror=null;audio.ontimeupdate=null;audio.pause();audio.removeAttribute('src');audio.load();};
    const timer=setTimeout(()=>{cleanup();reject(new Error('Playback timeout: '+row.file));},30000);
    audio.ontimeupdate=()=>{if(audio.currentTime>.15&&audio.readyState>=2){const duration=audio.duration;cleanup();resolve({file:row.file,duration});}};
    audio.onerror=()=>{cleanup();reject(new Error('Unable to play '+row.file));};
    audio.src=row.src;audio.play().catch(error=>{cleanup();reject(new Error(row.file+': '+error.message));});
   }))),rows);
   results.forEach((row,i)=>{assert(Number.isFinite(row.duration)&&row.duration>0,row.file);if(rows[i].durationSeconds)assert(Math.abs(row.duration-rows[i].durationSeconds)<2,row.file+' duration matches supplied original');});
  }
  await group.selectOption('i-am');
  for(const width of [1440,768,390,320]){
   await page.setViewportSize({width,height:844});assert(await page.locator('#music-panel').evaluate(el=>{const rect=el.getBoundingClientRect();return rect.left>=0&&rect.right<=innerWidth&&el.scrollWidth<=el.clientWidth+1;}),'panel fits '+width);
   assert(await group.evaluate(el=>el.getBoundingClientRect().height>=44),'usable playlist selector');
  }
  await page.setViewportSize({width:1440,height:1000});await page.evaluate(async()=>{await document.fonts.ready;await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));});await page.screenshot({path:'/tmp/fenumion-music-playlists-desktop.png'});
  await group.selectOption('prima');await page.setViewportSize({width:390,height:844});await page.screenshot({path:'/tmp/fenumion-music-playlists-mobile.png'});
  assert.deepEqual(errors,[]);
  console.log('PASS five custom playlists cover 40 Suno songs once; seven mood playlists cover 139 background tracks; source-isolated collections/recommendations/navigation; legacy preference migration; all 40 custom MP3s play; controls/persistence and 4 widths');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

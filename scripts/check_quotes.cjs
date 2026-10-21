// Browse the same 38 approved lines and use existing public voice files. No transcript or vault is read.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/',output=process.env.CODEX_SCREENSHOTS||'/tmp/fenumion-quotes';
(async()=>{
 fs.mkdirSync(output,{recursive:true});const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[],voiceRequests=[];
  page.on('pageerror',error=>errors.push(error.message));page.on('request',request=>{if(request.url().includes('/assets/voices/'))voiceRequests.push(request.url());});
  if(!process.env.CODEX_LIVE)await page.route('https://auth.fenumion.com/**',route=>route.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  const go=async id=>{await page.goto(base+'#'+id);await page.locator('#quote-browser').waitFor();};
  await go('memorable-quotes');
  const expected=await page.evaluate(()=>memorableQuoteRecords().map(record=>({id:record.quoteId,text:record.title,speaker:record.speaker})));
  assert.equal(expected.length,38);assert.deepEqual(await page.locator('.quote-browser-card').evaluateAll(cards=>cards.map(card=>({id:card.id,text:card.querySelector('blockquote').textContent}))),expected.map(record=>({id:record.id,text:record.text})),'all selected wording and existing anchors preserved');
  assert.equal(await page.locator('.quote-result-group').count(),7);assert.equal(await page.locator('.quote-speaker img').count()>0,true);
  assert.equal(voiceRequests.length,0,'opening the collection does not fetch recordings');
  assert.equal(await page.locator('[data-quote-hover]').isChecked(),false);
  await page.locator('#memorable-quote-1 .quote-open').hover();await page.locator('#memorable-quote-1 .quote-open').focus();
  assert(await page.evaluate(()=>quoteVoiceRecordings.every(record=>record.audio.paused)),'hover and focus are silent by default');
  const speaker=page.locator('[data-quote-speaker]'),voice=page.locator('[data-quote-voice]'),query=page.locator('[data-quote-search]'),order=page.locator('[data-quote-order]');
  await speaker.focus();await speaker.selectOption('Aria / Pride');assert.equal(await page.locator('.quote-browser-card').count(),3);assert(await speaker.evaluate(el=>el===document.activeElement));
  await voice.selectOption('recorded');assert.equal(await page.locator('.quote-browser-card').count(),2);
  await query.fill('victory');assert.equal(await page.locator('.quote-browser-card').count(),1);
  await page.reload();await query.waitFor();assert.equal(await query.inputValue(),'victory');assert.equal(await speaker.inputValue(),'Aria / Pride');assert.equal(await voice.inputValue(),'recorded');assert.equal(await page.locator('.quote-browser-card').count(),1);
  await page.locator('[data-quote-reset]').click();await query.fill('no quotation 829381');assert.equal(await page.locator('.quote-browser-card').count(),0);await page.locator('[data-quote-reset]').click();
  await page.locator('[data-quote-theme="quotes-choice"]').click();assert.equal(await page.locator('.quote-browser-card').count(),4);await page.locator('[data-quote-reset]').click();
  await order.selectOption('newest');assert((await page.locator('.quote-browser-card').first().innerText()).includes('Karnak'));
  const last=await page.locator('.quote-browser-card').last().getAttribute('id');assert(!expected.find(record=>record.id===last).speaker.match(/20\d{2}/),'undated lines remain undated and follow dated ones');await page.locator('[data-quote-reset]').click();
  await page.locator('#memorable-quote-26 .quote-open').click();await page.locator('#quote-dialog[open]').waitFor();
  assert((await page.locator('.quote-detail-facts').innerText()).includes('29, Month of Namo\'o · Year 3'));assert((await page.locator('.quote-detail-facts').innerText()).includes('posting date'));
  await page.waitForFunction(()=>!document.querySelector('.quote-source-status').textContent.includes('Finding'));
  assert(await page.locator('.quote-detail-links button').filter({hasText:'Read the scene'}).count(),'exact existing line supports a section link');
  await page.screenshot({path:output+'/quote-context-desktop.png'});await page.keyboard.press('Escape');assert(await page.locator('#memorable-quote-26 .quote-open').evaluate(el=>el===document.activeElement),'dialog returns focus');
  await page.locator('#memorable-quote-0 .quote-open').click();assert((await page.locator('.quote-detail-facts').innerText()).includes('not established'));await page.keyboard.press('Escape');
  await voice.selectOption('recorded');assert.equal(await page.locator('.quote-browser-card').count(),4);
  const melian=page.locator('#memorable-quote-1'),play=melian.locator('.quote-voice-play');
  if(!process.env.CODEX_LIVE){
   const wav=Buffer.alloc(44+8000*12,128);wav.write('RIFF',0);wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(8000,24);wav.writeUInt32LE(8000,28);wav.writeUInt16LE(1,32);wav.writeUInt16LE(8,34);wav.write('data',36);wav.writeUInt32LE(wav.length-44,40);
   await page.route('**/quote-music-fixture.wav',route=>route.fulfill({status:200,contentType:'audio/wav',body:wav}));await page.evaluate(async()=>{const audio=document.querySelector('#music-audio');audio.src='quote-music-fixture.wav';await audio.play();});
  }
  await play.click();await page.waitForFunction(()=>quoteVoiceRecordings.some(record=>!record.audio.paused&&record.audio.currentTime>.4));
  assert(await page.locator('#music-audio').evaluate(el=>el.paused),'recorded voice pauses soundtrack');assert(await melian.locator('.quote-voice-seek').isEnabled());
  await query.hover();await query.focus();assert(await page.evaluate(()=>quoteVoiceRecordings.some(record=>!record.audio.paused)),'explicit playback continues when pointer and focus leave the card');
  await melian.locator('.quote-voice-volume').focus();await melian.locator('.quote-voice-volume').press('Home');assert(await page.evaluate(()=>quoteVoiceRecordings.every(record=>record.audio.volume===0)));await melian.locator('.quote-voice-volume').press('End');
  await melian.locator('.quote-voice-seek').focus();await melian.locator('.quote-voice-seek').press('Home');await melian.locator('.quote-voice-seek').press('ArrowRight');
  await play.click();assert(await page.evaluate(()=>quoteVoiceRecordings.every(record=>record.audio.paused)));assert.equal(await play.getAttribute('aria-pressed'),'false');
  await page.locator('[data-quote-hover]').check();await melian.locator('.quote-open').hover();await page.waitForFunction(()=>quoteVoiceRecordings.some(record=>!record.audio.paused));await page.locator('[data-quote-hover]').uncheck();
  assert(await page.evaluate(()=>quoteVoiceRecordings.every(record=>record.audio.paused)));
  for(let index=0;index<3;index++){await query.fill('Melian');await query.fill('');}
  assert.equal(await page.locator('.quote-voice-tools').count(),4,'rerendering does not duplicate players');
  await page.locator('[data-quote-reset]').click();await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:output+'/quotes-desktop.png'});
  for(const width of [390,320]){
   await page.setViewportSize({width,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'quote collection fits '+width);
   for(const control of [query,speaker,voice,order])assert(await control.evaluate(el=>el.getBoundingClientRect().height>=44&&parseFloat(getComputedStyle(el).fontSize)>=16));
   await page.locator('#memorable-quote-1 .quote-open').click();await page.locator('#quote-dialog[open]').waitFor();assert(await page.locator('#quote-dialog').evaluate(el=>el.scrollWidth<=el.clientWidth),'quote detail fits '+width);
   if(width===390)await page.screenshot({path:output+'/quote-context-mobile.png'});await page.keyboard.press('Escape');
  }
  await page.goto(base+'#hellknight-order');await page.locator('.article-header h1').waitFor();const emblem=page.locator('.article-hero img[src="assets/factions/hellknight-order.png"]');assert.equal(await emblem.count(),1);assert(await emblem.evaluate(el=>el.complete&&el.naturalWidth===512&&el.naturalHeight===768));
  assert((await page.locator('.article-header').innerText()).includes('Month of Death · Year 3'),'faction dates use the named calendar');
  await page.setViewportSize({width:390,height:844});await emblem.scrollIntoViewIfNeeded();await page.screenshot({path:output+'/hellknights-mobile.png'});await page.goto(base+'#factions');await page.locator('[data-article="hellknight-order"] img[src="assets/factions/hellknight-order.png"]').waitFor();
  assert.deepEqual(errors,[]);console.log('PASS unchanged 38 quotes/seven themes/anchors; search/speaker/theme/voice/date order/reload/reset; portraits/context/source limits; explicit recording playback/seek/volume/music pause/hover preference/player cleanup; desktop/mobile; Hellknights art and dates');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});

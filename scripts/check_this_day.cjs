// Rotating server history: recorded days, public boundaries and real event navigation.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.clock.install({time:new Date('2026-10-23T16:00:00Z')});
  await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
  await page.goto(base+'#world-index');await page.locator('.this-day').waitFor();
  assert.equal(await page.locator('#this-day-title').innerText(),'This Day in Fenumion');
  assert.equal(await page.locator('.this-day-controls').count(),0);
  assert.equal(await page.locator('.this-day-events button').count(),0,'no unrelated history when today has no match');
  assert.equal(await page.locator('.this-day-empty').count(),1);
  await page.clock.setSystemTime(new Date('2026-03-04T16:00:00Z'));await page.reload();await page.locator('.this-day-events button').first().waitFor();
  assert((await page.locator('.this-day-events').innerText()).includes('The first Called arrive in Prima'));
  assert((await page.locator('.this-day-events').innerText()).includes('Year 1'));
  const titles=await page.locator('.this-day-events strong').allTextContents();
  await page.reload();await page.locator('.this-day-events button').first().waitFor();assert.deepEqual(await page.locator('.this-day-events strong').allTextContents(),titles);
  const title=await page.locator('.this-day-events button strong').first().innerText();
  await page.locator('.this-day-events button').first().click();await page.locator('#record-dialog[open]').waitFor();
  assert.equal(await page.locator('#record-dialog-title').innerText(),title);await page.keyboard.press('Escape');
  for(const width of [1440,1024,768,600,390,320]){
   await page.setViewportSize({width,height:1000});
   assert(await page.locator('.this-day').evaluate(el=>el.scrollWidth<=el.clientWidth+1),'daily section fits '+width);

  }
  await page.evaluate(async()=>{const image=new Image();image.src='assets/archive/this-day-fenumion.png';await image.decode();});
  await page.setViewportSize({width:1440,height:1000});await page.locator('.this-day').scrollIntoViewIfNeeded();await page.screenshot({path:'/tmp/fenumion-this-day-desktop.png'});
  await page.setViewportSize({width:390,height:844});await page.evaluate(()=>window.scrollTo(0,window.scrollY+document.querySelector('.this-day').getBoundingClientRect().top-140));await page.screenshot({path:'/tmp/fenumion-this-day-mobile.png'});
  await page.clock.setSystemTime(new Date('2026-10-23T16:00:00Z'));
  // Mixed source dates cannot manufacture a precise anniversary.
  const result=await page.evaluate(()=>{
   const context=codexVisualContext(), root=document.createElement('div');root.innerHTML='<div id="chronicle-featured"></div>';document.body.append(root);
   const original=archiveIndex.timeline.find(e=>e.dating?.calendarAdjustment);
   const make=(title,overrides={})=>({...original,title,importance:1,veiled:false,vaultOnly:false,article:'world-index',dating:{kind:'recorded',postingWindow:{start:'2024-10-23',end:'2024-10-23',precision:'day',qualifier:'on'},finalWar:{start:234,end:234,precision:'day',qualifier:'on'}},...overrides});
   const exact=make('Exact history');
   const dateChange=make('Quest date overrides posting date',{dating:{...exact.dating,postingWindow:{...exact.dating.postingWindow,start:'2024-10-24',end:'2024-10-24'},calendarAdjustment:{date:'2024-10-23'}}});
   const adjustedAway=make('Adjusted away',{dating:{...exact.dating,calendarAdjustment:{date:'2024-10-22'}}});
   const excluded=[
    make('Report',{dating:{...exact.dating,kind:'recollection'}}),
    make('Approximate',{dating:{...exact.dating,kind:'approximate'}}),
    make('Range',{dating:{...exact.dating,postingWindow:{...exact.dating.postingWindow,end:'2024-10-24'}}}),
    make('Bound',{dating:{...exact.dating,postingWindow:{...exact.dating.postingWindow,qualifier:'by'}}}),
    make('Future',{dating:{...exact.dating,postingWindow:{...exact.dating.postingWindow,start:'2027-10-23',end:'2027-10-23'}}}),
    make('Same year',{dating:{...exact.dating,postingWindow:{...exact.dating.postingWindow,start:'2026-10-23',end:'2026-10-23'}}}),make('Other month',{dating:{...exact.dating,postingWindow:{...exact.dating.postingWindow,start:'2024-09-23',end:'2024-09-23'}}}),make('Sort key only',{dating:undefined}),make('Veiled',{veiled:true}),make('Vault',{vaultOnly:true}),make('Restricted',{article:'death-dumuzi'}),adjustedAway
   ];
   window.CodexVisual.home(root,{...context,events:[exact,dateChange,...excluded]});
   const titles=[...root.querySelectorAll('.this-day-events strong')].map(el=>el.textContent);root.remove();return titles;
  });
  assert.deepEqual(result,['Exact history','Quest date overrides posting date']);
  // Changing the campaign day updates an already-open homepage at midnight.
  await page.clock.setSystemTime(new Date('2026-03-04T16:00:00Z'));await page.reload();await page.locator('.this-day-events button').first().waitFor();
  await page.clock.setSystemTime(new Date('2026-03-05T05:00:01Z'));await page.clock.runFor(60001);
  const correct=await page.evaluate(()=>[...document.querySelectorAll('.this-day-events button')].every(button=>{const event=archiveIndex.timeline.find(event=>event.title===button.dataset.timelineTitle);const date=timelineCalendarWindow(event).start;return date.endsWith('03-05')&&date<'2026-01-01';}));
  assert(correct,'midnight switches to the new month/day in earlier years');
  await page.goto(base+'#living-timeline');await page.locator('#timeline-explorer').waitFor();assert.equal(await page.locator('.this-day').count(),0);
  assert.deepEqual(errors,[]);
  console.log('PASS on-this-day history: today month/day in prior years only, empty days, reload, midnight rollover, adjusted dates, source precision, privacy, event dialogs and six widths');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

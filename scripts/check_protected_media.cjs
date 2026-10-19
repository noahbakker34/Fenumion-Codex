// The fixture is a generated blue frame and sine wave, with a fresh test key.
// No private vault, real media, credentials or persistent encryption key is used.
const {chromium}=require('playwright');
const {readFileSync}=require('node:fs');
const {randomBytes,createCipheriv,createHash}=require('node:crypto');
const assert=require('node:assert/strict');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
(async()=>{
 const key=randomBytes(16),iv=randomBytes(16),cipher=createCipheriv('aes-128-cbc',key,iv);
 const bytes=Buffer.concat([cipher.update(readFileSync(__dirname+'/fixtures/protected-video.ts')),cipher.final()]);
 const name=createHash('sha256').update(bytes).digest('hex')+'.bin';
 const playlist='#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:12\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-PLAYLIST-TYPE:VOD\n#EXT-X-KEY:METHOD=AES-128,URI="{KEY}",IV=0x'+iv.toString('hex')+'\n#EXTINF:12.0,\n'+name+'\n#EXT-X-ENDLIST\n';
 const payload=JSON.stringify({articles:[{id:'death-dumuzi',title:'Protected media fixture',category:'Test',type:'Generated media',body:'<p>Generated test fixture.</p>',sources:[],scenes:[{title:'Generated video',caption:'Blue frame and sine wave.',protectedHls:{version:1,key:key.toString('base64'),playlist}}]}]});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try {
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});let authorized=false,requests=0,library=0;const errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(r.url().includes('/vendor/hls.'))library++;});
  await page.route('**/assets/protected-media/*.bin',r=>{requests++;return r.fulfill({status:200,contentType:'application/octet-stream',body:bytes});});
  const wav=Buffer.alloc(44+8000*12,128);wav.write('RIFF',0);wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(8000,24);wav.writeUInt32LE(8000,28);wav.writeUInt16LE(1,32);wav.writeUInt16LE(8,34);wav.write('data',36);wav.writeUInt32LE(wav.length-44,40);
  await page.route('**/music-fixture.wav',r=>r.fulfill({status:200,contentType:'audio/wav',body:wav}));
  await page.route('https://auth.fenumion.com/**',r=>r.fulfill({status:authorized?200:401,contentType:'application/json',body:authorized?(r.request().url().includes('/vault/data')?payload:'{"signedIn":true}'):'{"error":"signin"}'}));
  await page.goto(base+'#death-dumuzi?section=character-scenes-title');await page.locator('.vault-gate').waitFor();
  assert.equal(requests,0);assert.equal(library,0);assert.equal(await page.locator('[data-protected-scene]').count(),0);
  authorized=true;await page.locator('[data-open-vault]').click();await page.locator('[data-load-protected-scene]').waitFor();
  assert.equal(requests,0);assert.equal(library,0,'library is also deferred');
  await page.evaluate(async()=>{const a=document.getElementById('music-audio');a.src='music-fixture.wav';await a.play();});
  assert(await page.locator('#music-audio').evaluate(a=>!a.paused));
  await page.locator('[data-load-protected-scene]').click();
  await page.waitForFunction(()=>{const v=document.querySelector('[data-protected-scene] video');return v?.currentTime>1&&v.videoWidth===320;},{},{timeout:30000});
  assert(requests>0);assert.equal(library,1);
  assert(await page.locator('[data-protected-scene] video').evaluate(v=>!v.muted&&v.webkitAudioDecodedByteCount>0));
  assert(await page.locator('#music-audio').evaluate(a=>a.paused),'soundtrack pauses for the film');
  assert(await page.evaluate(()=>document.activeElement?.matches('[data-protected-scene] video')),'focus moves to native controls');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('#vault-button').click();await page.locator('.vault-gate').waitFor();
  assert.equal(await page.locator('[data-protected-scene]').count(),0);
  assert.deepEqual(errors,[]);
  console.log('PASS protected media: locked access, no automatic requests, lazy library, AES-decrypted H.264/AAC playback, soundtrack pause, native-control focus, mobile layout and lock cleanup; generated public fixture only');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

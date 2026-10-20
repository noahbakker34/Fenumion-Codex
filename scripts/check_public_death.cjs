// The owner-approved film is public. No private payload or credentials are read.
const {chromium, webkit} = require('playwright');
const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const assert = require('node:assert/strict');
const base = process.env.CODEX_BASE_URL || 'http://127.0.0.1:8880/';
(async () => {
  const useWebKit = process.env.CODEX_BROWSER === 'webkit';
  const browser = await (useWebKit ? webkit : chromium).launch({headless:true,
    ...(!useWebKit && process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {})});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    const errors = [], media = [], objects = new Set();
    let authorized = false;
    page.on('pageerror', e => errors.push(e.message));
    page.on('request', r => {
      if (/\/vendor\/hls\.|\/assets\/(?:media\/i-am-death\/(?:index.m3u8|key.bin)|protected-media\/)/.test(r.url())) media.push(r.url());
    });
    await page.addInitScript(() => sessionStorage.setItem('fenumion-vault-locked','1'));
    if (process.env.CODEX_NO_MEDIA_SOURCE === '1' && !useWebKit) await page.addInitScript(() => {
      const canPlayType = HTMLMediaElement.prototype.canPlayType;
      HTMLMediaElement.prototype.canPlayType = function(type) {
        return type === 'application/vnd.apple.mpegurl' ? '' : canPlayType.call(this,type);
      };
    });
    await page.route('https://auth.fenumion.com/**', r => r.fulfill({status:authorized?200:401,contentType:'application/json',
      body:authorized ? (r.request().url().includes('/vault/data') ? JSON.stringify({articles:[{
        id:'death-dumuzi',title:'Synthetic keeper dossier',type:'Test',tags:[],facts:{},sources:[],
        body:'<p>Synthetic keeper history.</p>',scenes:[{title:'Synthetic private scene',video:'',caption:'Test fixture only.'}]
      }]}) : '{"signedIn":true}') : '{"error":"signin"}'}));
    // Keep CI independent of the raw host while using the exact public film bytes.
    if (process.env.CODEX_LIVE_MEDIA !== '1') await page.route('https://raw.githubusercontent.com/noahbakker34/Fenumion-Codex/*/site/assets/protected-media/*.bin', r => {
      const name = r.request().url().split('/').pop();
      assert(/^[a-f0-9]{64}\.bin$/.test(name)); objects.add(name);
      return r.fulfill({status:200,contentType:'application/octet-stream',headers:{'access-control-allow-origin':'*'},path:join(__dirname,'../site/assets/protected-media',name)});
    });
    if (process.env.CODEX_NO_MEDIA_SOURCE === '1') await page.route('**/vendor/hls.light.min.js?*', r => r.fulfill({status:200,contentType:'text/javascript',
      body:readFileSync(join(__dirname,'../site/vendor/hls.light.min.js'),'utf8')+'\nHls.isSupported=()=>false;'}));
    await page.goto(base+'#death-dumuzi');
    const figure = page.locator('[data-public-scene]');
    await figure.waitFor();
    assert.equal(await page.locator('h1').innerText(),'I am Death');
    assert.equal(await page.locator('[data-protected-scene]').count(),0);
    assert.equal(await page.locator('video[data-story-scene]').count(),1);
    assert.equal(media.length,0,'opening the page never loads the library, playlist, key or film');
    assert(await figure.innerText().then(t=>t.includes('Presented as testimony.')));
    assert(await page.evaluate(()=>!vaultUnlocked && !byId.get('death-dumuzi').body));
    // A different locked record continues to use its normal gate.
    await page.evaluate(()=>renderArticle('wyrm-worlds-end'));
    assert.equal(await page.locator('[data-public-scene]').count(),0);
    assert.equal(await page.locator('h1').innerText(),'Veiled record');
    await page.evaluate(()=>renderArticle('death-dumuzi'));
    // A failed player download is retryable using only keyboard activation.
    if (process.env.CODEX_NO_MEDIA_SOURCE !== '1') {
      await page.route('**/vendor/hls.light.min.js?*', r=>r.abort(), {times:1});
      await figure.locator('button').focus(); await figure.locator('button').press('Enter');
      await figure.getByText('The video could not be loaded. Please try again.',{exact:true}).waitFor();
      assert(await figure.locator('button').isEnabled());
      assert(await page.evaluate(()=>document.activeElement?.matches('[data-load-public-scene]')));
    }
    await figure.locator('button').focus(); await figure.locator('button').press('Enter');
    if (process.env.CODEX_NO_MEDIA_SOURCE === '1' && !useWebKit) {
      await figure.getByText('This browser cannot play this video. Please update your browser and try again.',{exact:true}).waitFor();
      assert.equal(objects.size,0);
      assert(await figure.locator('button').isEnabled());
      assert.deepEqual(errors,[]);
      console.log('PASS public film unsupported path: clear failure, no segment loads, retry and keyboard focus');
      return;
    }
    await page.waitForFunction(()=>{const v=document.querySelector('[data-public-scene] video');return v?.currentTime>1&&v.videoWidth===1920;},{},{timeout:60000});
    assert(await figure.locator('video').evaluate(v=>!v.muted&&v.videoHeight===1080&&Math.abs(v.duration-292.8)<1&&(v.webkitAudioDecodedByteCount>0||v.audioTracks?.length>0)),'1080p film with sound');
    assert(await page.evaluate(()=>document.activeElement?.matches('[data-public-scene] video')));
    if (objects.size) assert(objects.size<47,'initial buffering does not download the entire film');
    await figure.locator('video').evaluate(v=>{v.currentTime=180;v.play();});
    await page.waitForFunction(()=>{const v=document.querySelector('[data-public-scene] video');return v?.currentTime>181&&v.readyState>=3;},{},{timeout:60000});
    await figure.locator('video').evaluate(v=>v.pause());
    await page.screenshot({path:'/tmp/codex-public-death-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile layout');
    await page.screenshot({path:'/tmp/codex-public-death-mobile.png',fullPage:true});
    await figure.locator('video').evaluate(v=>window.__publicVideo=v);
    await page.evaluate(()=>renderArticle('world-index'));
    assert(await page.evaluate(()=>window.__publicVideo.paused&&!window.__publicVideo.hasAttribute('src')),'navigation stops and detaches playback');
    // Unlock/lock must never leave the keeper history or scene in the public view.
    await page.evaluate(()=>renderArticle('death-dumuzi'));
    authorized=true; await page.locator('[data-open-vault]').click();
    await page.getByText('Synthetic keeper history.',{exact:true}).waitFor();
    assert.equal(await page.locator('[data-public-scene]').count(),0);
    await page.locator('#vault-button').click(); await figure.waitFor();
    assert.equal(await page.locator('h1').innerText(),'I am Death');
    assert.equal(await page.getByText('Synthetic keeper history.',{exact:true}).count(),0);
    assert.equal(await page.getByText('Synthetic private scene',{exact:true}).count(),0);
    assert.equal(await page.locator('video[data-story-scene]').count(),1);
    assert.deepEqual(errors,[]);
    console.log('PASS public Death film: anonymous access, lazy streaming, retry/focus, 1080p/audio/seek, bounded buffering, mobile layout, navigation cleanup and vault transitions; other protected records preserved');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});

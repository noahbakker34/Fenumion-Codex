// Controlled diagnostics, not field percentiles or a CI speed threshold.
const {chromium} = require('playwright');
const fs = require('node:fs');
const base = process.env.CODEX_BASE_URL || 'https://fenumion.com/';
const runs = Number(process.env.CODEX_PERF_RUNS || 3);
const routes = (process.env.CODEX_PERF_ROUTES || 'fenwick,babel-ashur,adelia-hope').split(',');
const output = process.env.CODEX_PERF_OUTPUT || '/tmp/fenumion-mobile-load-report.json';
(async () => {
  const browser = await chromium.launch({headless:true, ...(process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {})});
  const samples = [];
  try {
    for (const route of routes) for (let run = 1; run <= runs; run++) {
      const context = await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
      const page = await context.newPage();
      await page.route('https://auth.fenumion.com/**', r => r.fulfill({status:401,contentType:'application/json',body:'{"error":"signin"}'}));
      const cdp = await context.newCDPSession(page);
      await cdp.send('Network.enable');
      await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
      await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200*1024,uploadThroughput:100*1024});
      await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
      const requests = new Map();
      cdp.on('Network.requestWillBeSent', e => requests.set(e.requestId,{url:e.request.url,type:e.type,bytes:0}));
      cdp.on('Network.loadingFinished', e => {if(requests.has(e.requestId)) requests.get(e.requestId).bytes=e.encodedDataLength;});
      const started=Date.now();
      await page.goto(base+'#'+route,{waitUntil:'domcontentloaded',timeout:90000});
      const domContentLoadedMs=Date.now()-started;
      await page.waitForFunction(id=>typeof byId!=='undefined'&&byId.get(id)?.bodyLoaded&&document.querySelector('.article-header h1'),route,{timeout:90000});
      const headingMs=Date.now()-started;
      await page.waitForTimeout(1000);
      const initial=[...requests.values()];
      const initialBytes=initial.reduce((sum,r)=>sum+r.bytes,0);
      const textBytes=initial.filter(r=>['Script','Stylesheet','Document','Fetch','XHR'].includes(r.type)).reduce((sum,r)=>sum+r.bytes,0);
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
      const articleRequests=initial.filter(r=>r.url.includes('/data/records/')).length;
      const searchPreloaded=initial.some(r=>/\/data\/search\./.test(r.url));
      const protectedRequests=initial.filter(r=>r.url.includes('/assets/protected-media/')||r.url.includes('/vendor/hls.')).length;
      let search;
      if (run===1) {
        await page.locator('#search-toggle').click();
        const searchStarted=Date.now();
        await page.locator('#search').fill('Saray');
        await page.locator('.search-result').first().waitFor({timeout:60000});
        const firstResultMs=Date.now()-searchStarted;
        await page.waitForFunction(()=>CodexReader.searchReady,{}, {timeout:90000});
        search={firstResultMs,fullTextReadyMs:Date.now()-searchStarted};
      }
      const sample={route,run,domContentLoadedMs,headingMs,initialBytes,textBytes,articleRequests,searchPreloaded,protectedRequests,overflow,...(search?{search}:{})};
      samples.push(sample); console.log(JSON.stringify(sample));
      await context.close();
    }
    fs.writeFileSync(output,JSON.stringify({base,method:{viewport:'390×844',latencyMs:150,downloadKiBps:200,cpuMultiplier:4,cache:'cold per sample',reducedMotion:true,auth:'simulated anonymous'},samples},null,2)+'\n');
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

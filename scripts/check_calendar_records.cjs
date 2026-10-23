// Audit every public record body in the browser without opening media or exposing private records.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.CODEX_BASE_URL||'http://127.0.0.1:8880/';
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
  const page=await browser.newPage();await page.goto(base);await page.waitForFunction(()=>window.FenumionCalendar?.html);
  const contract=await page.evaluate(()=>{
   const source='<h2 id="record-2026-07-29">29 Jul 2026</h2><time datetime="2026-07-29" title="29 Jul 2026">By Jul 2026</time><a href="https://example.test/2026-07-29">Reference · 29 Jul 2026</a><input value="2026-07-29"><option value="2026">2026</option><code>2026-07-29</code><span data-calendar-source>2024</span>';
   const html=FenumionCalendar.html(source),template=document.createElement('template');template.innerHTML=html;
   return {html,stable:FenumionCalendar.html(html)===html,id:template.content.querySelector('h2').id,datetime:template.content.querySelector('time').getAttribute('datetime'),title:template.content.querySelector('time').title,href:template.content.querySelector('a').getAttribute('href'),input:template.content.querySelector('input').value,option:template.content.querySelector('option').value,code:template.content.querySelector('code').textContent,edition:template.content.querySelector('[data-calendar-source]').textContent};
  });
  assert(contract.stable);assert(contract.html.includes('By Month of Cala · Year 3'));
  assert.equal(contract.title,'29, Month of Cala · Year 3 of the Final War');
  assert.equal(contract.id,'record-2026-07-29');assert.equal(contract.datetime,'2026-07-29');assert.equal(contract.href,'https://example.test/2026-07-29');assert.equal(contract.input,'2026-07-29');assert.equal(contract.option,'2026');assert.equal(contract.code,'2026-07-29');assert.equal(contract.edition,'2024');
  const records=fs.readdirSync(__dirname+'/../content/records').map(name=>JSON.parse(fs.readFileSync(__dirname+'/../content/records/'+name))).filter(record=>record.body);
  const failures=[];
  for(let start=0;start<records.length;start+=40){
   failures.push(...await page.evaluate(records=>records.flatMap(record=>{
    const template=document.createElement('template');template.innerHTML=FenumionCalendar.html(record.body);
    template.content.querySelectorAll('script,style,code,pre,textarea,input,[data-calendar-source]').forEach(node=>node.remove());
    const text=template.content.textContent.replace(/https?:\/\/[^\s<>]+|\S+\.(?:md|txt|json|csv)/g,'').replace(/\b20\d{2}\s+(?:rules(?:et)?|edition)\b/gi,'');
    const date=/\b20\d{2}\b|\b(?:Jan(?:uary)?|Feb(?:ruary)?|Apr(?:il)?|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sept?(?:ember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?|New York|America\/New_York|UTC|EDT|EST|GMT)\b/g;
    return [...text.matchAll(date)].slice(0,3).map(match=>({record:record.id,context:text.slice(Math.max(0,match.index-25),match.index+60)}));
   }),records.slice(start,start+40)));
  }
  assert.deepEqual(failures,[],'all public record bodies use named dates');
  console.log(`PASS ${records.length} complete public record bodies; detached formatting, bounds and idempotency; preserved source links, ISO attributes, inputs, option values, IDs, code and edition identifiers`);
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});

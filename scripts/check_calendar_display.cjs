// Calendar display is separate from canonical dates and source identities.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const api=require('../site/fenumion-calendar.js')(require('../content/reference/world.json').timelineCalendar);
const cases=[
 ['29 Jul 2026','29, Month of Cala · Year 3 of the Final War'],
 ['27 Jan 2026','27, Month of Talan · Year 3 of the Final War'],
 ['By Jul 2026','By Month of Cala · Year 3 of the Final War'],
 ['18 October 2026','18, Month of Death · Year 3 of the Final War'],
 ['Oct 18, 2026','18, Month of Death · Year 3 of the Final War'],
 ['4 March 2024','4, Month of War · Year 1 of the Final War'],
 ['29 February 2024','29, Month of Aionia · Year 1 · before the Final War'],
 ['February 2024','Month of Aionia · Year 1 · before the Final War'],
 ['26–27 Sep 2026','26–27, Month of Nuru · Year 3 of the Final War'],
 ['28 Sep–2 Oct 2025','28, Month of Nuru – 2, Month of Death · Year 2 of the Final War'],
 ['31 Dec 2024–1 Jan 2025','31, Month of Hope · Year 1 of the Final War – 1, Month of Talan · Year 2 of the Final War'],
 ['Aug–Sep 2025','Month of Moirah–Month of Nuru · Year 2 of the Final War'],
 ['Jan–Feb 2024','Month of Talan–Month of Aionia · Year 1 · before the Final War'],
 ['Late 2024 · exact day unknown','Late Year 1 of the Final War · exact day unknown'],
 ['By 19 Sep 2026 · reported later','By 19, Month of Nuru · Year 3 of the Final War · reported later'],
 ['2026-10-18T19:05:02Z','18, Month of Death · Year 3 of the Final War · 19:05:02 UTC'],
 ['15 July.','15, Month of Cala.'],
 ['In May, by late March.','In Month of Physisia, by late Month of War.'],
 ['Another May expedition. In a March retreat.','Another Month of Physisia expedition. In a Month of War retreat.'],
 ['May the gods guide you. March onward.','May the gods guide you. March onward.'],
 ['May tame a pet. May build roads.','May tame a pet. May build roads.'],
 ['Before the Calling · year unknown','Before the Calling · year unknown'],
 ['31 Apr 2026','31 Apr 2026'],
 ['2025-02-29','2025-02-29'],
 ['https://example.test/2026-10-18 #history-2024 Babel-2026-10-18.md','https://example.test/2026-10-18 #history-2024 Babel-2026-10-18.md'],
 ['D&D 2024 rules · 2014 edition','D&D 2024 rules · 2014 edition']
];
for(const [input,expected]of cases){assert.equal(api.text(input),expected,input);assert.equal(api.text(expected),expected,'idempotent: '+input);}
const monthNames=['Talan','Aionia','War',"Namo'o",'Physisia','Rebirth','Cala','Moirah','Nuru','Death','the Wyrm','Hope'];
for(let month=1;month<=12;month++)assert.equal(api.date(`2025-${String(month).padStart(2,'0')}-01`),`1, Month of ${monthNames[month-1]} · Year 2 of the Final War`);
assert.equal(api.date('2023-12-31'),'31, Month of Hope · Year 1 before the Final War');
assert.equal(api.date('2028-02-29'),'29, Month of Aionia · Year 5 of the Final War');
let strings=0;
const scan=value=>{
 if(typeof value==='string'){const once=api.text(value);assert.equal(api.text(once),once,'public record conversion is stable');strings++;}
 else if(Array.isArray(value))value.forEach(scan);
 else if(value&&typeof value==='object')Object.values(value).forEach(scan);
};
for(const name of fs.readdirSync(__dirname+'/../content/records'))scan(JSON.parse(fs.readFileSync(__dirname+'/../content/records/'+name)));
scan(require('../content/reference/world.json'));
const gedankin={window:{}};vm.runInNewContext(fs.readFileSync(__dirname+'/../site/gedankin/data.js','utf8'),gedankin);scan(gedankin.window.GedankinData);
console.log(`PASS twelve named months, year rollover/pre-Gate/year-before labels, leap days, bounds/partial dates/ranges, ISO timestamps, modal May/March, source identities, rules editions and ${strings} record/world/Gedankin string idempotency checks`);

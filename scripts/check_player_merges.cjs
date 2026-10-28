const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const expectedWorld=JSON.parse(require('node:fs').readFileSync(require('node:path').join(__dirname,'../content/reference/world.json'),'utf8'));
const expectedRegionCount=id=>expectedWorld.archiveIndex.npcs.filter(p=>{const group=expectedWorld.npcIslandGroups.find(g=>g.people.some(item=>item.name===p.title));return id==='unplaced'?(!group||group.id==='unplaced'):group?.id===id;}).length;
const base = process.env.CODEX_BASE_URL || 'http://127.0.0.1:8880/';
(async () => {
  const browser = await chromium.launch({headless:true, ...(process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {})});
  const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors = [];
  page.on('pageerror', error=>errors.push(error.message));
  await page.goto(base+'#pelegia');
  await page.locator('h1').waitFor();
  const identity = await page.evaluate(async()=>{ const discoveryData=await fetch("data/supplements/npc-discoveries.json").then(r=>r.json()); return ({
    names:['Pin','Pell','Pelagia','Pelegia'].map(name=>resolvePublicPerson(name)?.title),
    records:archiveIndex.characters.filter(p=>p.title==='Pelegia').length,
    duplicates:archiveIndex.characters.filter(p=>['Pin','Pell','Pelagia'].includes(p.title)).length,
    oldArticle:byId.has('pin'),image:archiveIndex.characters.find(p=>p.title==='Pelegia').image,
    paw:archiveIndex.characters.find(p=>p.title==='Paw')?.article,
    discovery:discoveryData.FENUMION_NPC_DISCOVERIES.entries.find(e=>e.name==='Pin').canonical,
    sources:byId.get('pelegia').body.includes('1341600560326901790'),
    regions:archiveIndex.npcs.map(p=>npcRegionLabel(p))
  });});
  assert.deepEqual(identity.names,['Pelegia','Pelegia','Pelegia','Pelegia']);
  assert.equal(identity.records,1); assert.equal(identity.duplicates,0); assert.equal(identity.oldArticle,false);
  assert(identity.image.includes('pell')); assert.notEqual(identity.paw,'pelegia');
  assert.equal(identity.discovery,'pelegia'); assert(identity.sources);
  assert.equal(identity.regions.filter(r=>r==='Region · Fein Uaill').length,expectedRegionCount('fein-uaill'));
  assert.equal(identity.regions.filter(r=>r==='Region unestablished').length,expectedRegionCount('unplaced'));
  for (const alias of ['pin','pell','pelagia']) {
    await page.goto(base+'#'+alias); await page.locator('h1').waitFor();
    assert.equal(await page.locator('h1').innerText(),'Pelegia');
  }
  for (const id of ['bitoshi-nakamoto','brianna']) {
    await page.goto(base+'#'+id); await page.locator('h1').waitFor();
    assert.equal(await page.locator('.character-reading-path').count(),1);
    const links=await page.evaluate(()=>[...document.querySelectorAll('#article-content a[href^="#"]')].map(a=>a.hash.slice(1).split('?')[0]).filter(id=>id&&!byId.has(id)&&!routeAliases.has(id)&&!document.getElementById(id)));
    assert.deepEqual(links,[]);
  }
  await page.goto(base+'#people-directory');await page.locator('#people-gallery-query').waitFor();
  await page.locator('#people-gallery-query').fill('Pin');await page.waitForTimeout(250);
  assert.equal(await page.locator('#people-gallery [data-character-title="Pelegia"]').count(),1);
  assert.equal(await page.locator('#people-gallery [data-character-title="Pin"]').count(),0);
  // Explicit owner confirmation: preserve Caravash's page while correcting the old census role.
  await page.locator('#people-gallery-query').fill('Caravash');
  await page.locator('[data-people-kind="player"]').click();
  await page.locator('#people-gallery [data-article="discovery-005"]').waitFor();
  await page.locator('[data-people-kind="npc"]').click();
  assert.equal(await page.locator('#people-gallery [data-article="discovery-005"]').count(),0);
  const caravash=await page.evaluate(async()=>({
    players:archiveIndex.characters.filter(p=>p.article==='discovery-005').length,
    npcs:archiveIndex.npcs.filter(p=>p.article==='discovery-005').length,
    islandNPC:npcIslandGroups.some(g=>g.people.some(p=>p.name==='Caravash')),
    kind:(await fetch('data/supplements/npc-discoveries.json').then(r=>r.json())).FENUMION_NPC_DISCOVERIES.entries.find(e=>e.id==='discovery-005').kind,
    role:byId.get('discovery-005').type
  }));
  assert.deepEqual(caravash,{players:1,npcs:0,islandNPC:false,kind:'player',role:'Player character'});
  await page.goto(base+'#npcs-prima');await page.locator('.island-npc-collection').waitFor();
  assert.equal(await page.locator('.island-npc-collection [data-article="discovery-005"]').count(),0);
  await page.goto(base+'#discovery-005');await page.waitForFunction(()=>byId.get('discovery-005')?.bodyLoaded);
  assert.equal(await page.locator('h1').innerText(),'Caravash');
  assert((await page.locator('#article-content').innerText()).includes('Player character'));
  await page.goto(base+'#people-directory');await page.locator('#people-gallery-query').waitFor();
  await page.locator('[data-people-kind="npc"]').click();
  await page.locator('#people-gallery-query').fill('Poe');await page.waitForTimeout(250);
  assert.equal(await page.locator('#people-gallery [data-character-title="Poe"] .npc-region-label').textContent(),'Region · Prima');
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+'#brianna');await page.locator('h1').waitFor();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.screenshot({path:'/tmp/brianna-dossier-mobile.png'});
  assert.deepEqual(errors,[]);
  console.log('PASS canonical player merge, aliases, preserved portrait/scenes, dedicated dossiers, all NPC region labels and mobile layout');
  await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});

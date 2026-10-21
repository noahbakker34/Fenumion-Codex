// Exercise player choices through both timeline surfaces; no real vault data is used.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.CODEX_BASE_URL || 'http://127.0.0.1:8880/';
(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = []; page.on('pageerror', error => errors.push(error.message));
    await page.route('https://auth.fenumion.com/**', route => route.fulfill({ status: 401, contentType: 'application/json', body: '{"error":"signin"}' }));
    const go = async route => {
      await page.goto(base + '#' + route);
      await page.waitForFunction(id => byId.get(id)?.bodyLoaded && document.querySelector('#article-content').dataset.route === location.hash, route.split('?')[0]);
    };
    const importance = () => page.locator('#timeline-explorer [data-timeline-importance]');
    const match = () => page.locator('#timeline-explorer [data-timeline-match]');
    const order = () => page.locator('#timeline-explorer [data-timeline-order]');
    const titles = () => page.locator('.event-card').evaluateAll(cards => cards.map(card => card.dataset.timelineTitle));
    const ranks = () => page.locator('.event-card').evaluateAll(cards => cards.map(card => Number(card.dataset.importance)));
    await go('living-timeline');
    assert.equal(await page.locator('.event-card').count(), 343);
    assert(await match().isDisabled());
    const events = await page.evaluate(() => archiveIndex.timeline.filter(e => !e.veiled));
    const byTitle = new Map(events.map(e => [e.title, e]));
    // Exact categories and minimum thresholds are different reader choices.
    const counts = [0, 73, 159, 77, 27, 7];
    for (let level = 1; level <= 5; level++) {
      await importance().selectOption(String(level)); await match().selectOption('exact');
      assert.equal(await page.locator('.event-card').count(), counts[level], 'exact level ' + level);
      assert((await ranks()).every(rank => rank === level));
      await match().selectOption('minimum');
      assert.equal(await page.locator('.event-card').count(), counts.slice(level).reduce((a, b) => a + b, 0));
      assert((await ranks()).every(rank => rank >= level));
    }
    for (const title of ['Talan kills Aria','The assault on Wrath ends with Saray’s blow','Wrath is defeated, but Gael remains dangerous','Death invokes ownership of Magnus','Death makes an offer after the mist clearing']) {
      assert((await titles()).includes(title), 'owner-designated turning point survives the World Changing filter: '+title);
      assert.equal(byTitle.get(title).importance,5);
    }
    await page.locator('#timeline-explorer input').fill('Cthulhu');
    assert.equal((await titles())[0], 'Cthulhu comes through a rift into Fenumion');
    await page.locator('.event-card').click();
    const dialogText = await page.locator('#record-dialog-content').innerText(); assert(dialogText.toLowerCase().includes('importance · 5. world changing'), dialogText);
    assert.equal(await page.locator('#record-dialog-content [data-timeline-title]').count(), 0, 'one filtered event has no out-of-filter neighbors');
    await page.keyboard.press('Escape');
    await page.locator('.timeline-reset').click();
    for (const value of ['highest', 'lowest', 'oldest', 'newest']) {
      await order().selectOption(value);
      const shown = (await titles()).map(title => byTitle.get(title));
      for (let i = 1; i < shown.length; i++) {
        const a = shown[i - 1], b = shown[i];
        if (value === 'highest') assert(a.importance >= b.importance, 'global descending importance');
        if (value === 'lowest') assert(a.importance <= b.importance, 'global ascending importance');
        const left = a.dating?.calendarAdjustment?.date || a.sort, right = b.dating?.calendarAdjustment?.date || b.sort;
        if (value === 'oldest') assert(left.localeCompare(right) <= 0, 'global oldest first with quest continuations aligned');
        if (value === 'newest') assert(left.localeCompare(right) >= 0, 'global newest first with quest continuations aligned');
      }
    }
    await order().selectOption('highest'); await importance().selectOption('3');
    await page.locator('[data-timeline-region]').selectOption('gael');
    const filteredTitles = await titles();
    assert(filteredTitles.length > 1 && filteredTitles.every(title => byTitle.get(title).regions.includes('gael')), 'region intersects importance');
    await page.locator('.event-card').first().click();
    await page.locator('#record-dialog-content .record-dialog-nav button').first().click();
    assert.equal(await page.locator('#record-dialog-title').innerText(), filteredTitles[1], 'dialog follows the filtered order');
    await page.keyboard.press('Escape');
    const savedRoute = await page.evaluate(() => location.hash);
    await page.reload(); await importance().waitFor();
    assert.equal(await importance().inputValue(), '3'); assert.equal(await order().inputValue(), 'highest');
    assert.equal(await page.locator('[data-timeline-region]').inputValue(), 'gael');
    assert.deepEqual(await titles(), filteredTitles, 'reload preserves choices');
    await page.evaluate(() => renderArticle('gael')); await page.goBack();
    await page.waitForFunction(hash => document.querySelector('#article-content').dataset.route === hash, savedRoute);
    assert.deepEqual(await titles(), filteredTitles, 'Back preserves choices');
    await go('living-timeline?person=saray&region=babel-ashur&importance=2&match=exact&q=green%20dragon');
    assert.deepEqual(await titles(), ['A gathering party faces the green dragon']);
    const era = byTitle.get('A gathering party faces the green dragon').era;
    await page.locator('[data-era='+JSON.stringify(era)+']').click();
    assert.equal(await page.locator('.event-card').count(), 1, 'person, era, text and importance intersect');
    await page.locator('#timeline-explorer input').fill('no matching event 12345');
    assert.equal(await page.locator('.event-card').count(), 0); await page.locator('.timeline-empty').waitFor();
    await page.locator('.timeline-reset').click();
    assert((await page.locator('.timeline-person-filter').innerText()).includes('Saray'));
    assert.equal(await page.locator('[data-timeline-region]').inputValue(), '', 'reset clears the region');
    assert((await page.evaluate(() => location.hash)).includes('person=saray'), 'reset retains the explicitly chosen person');
    await go('living-timeline?importance=99&match=bad&order=constructor&era=hidden&q=%22%3E%3Cimg%20src=x%3E');
    assert.equal(await importance().inputValue(), '0'); assert.equal(await order().inputValue(), 'oldest');
    assert.equal(await page.locator('#timeline-explorer img').count(), 0, 'URL search is escaped');
    await page.locator('.timeline-reset').click(); await importance().selectOption('3');
    await page.locator('#timeline-explorer').scrollIntoViewIfNeeded();
    await page.screenshot({ path: '/tmp/codex-timeline-desktop.png' });
    for (const width of [390, 320]) {
      await page.setViewportSize({ width, height: 844 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'mobile page fits');
      for (const control of [importance(), match(), order(), page.locator('[data-timeline-region]')]) {
        assert(await control.evaluate(el => el.getBoundingClientRect().height >= 44 && parseFloat(getComputedStyle(el).fontSize) >= 16));
      }
      await importance().focus(); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter');
      assert(await importance().evaluate(el => document.activeElement === el), 'keyboard selection retains focus');
      if (width === 390) await page.screenshot({ path: '/tmp/codex-timeline-mobile.png' });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await go('world-index'); await page.locator('#world-browser [data-view="timeline"]').click();
    assert.equal(await page.locator('.timeline-view .index-card').count(), 343);
    assert.equal(await page.locator('.timeline-view .timeline-war-day').count(), 326, 'home timeline shares the calendar');
    assert.equal(await page.locator('.timeline-view .timeline-calendar-date').count(), 326, 'home timeline shares named dates');
    await page.locator('#world-browser [data-timeline-importance]').selectOption('3');
    assert.equal(await page.locator('.timeline-view .index-card').count(), counts.slice(3).reduce((a,b)=>a+b,0));
    assert(await page.locator('#world-browser [data-timeline-importance]').evaluate(el => el === document.activeElement));
    await page.locator('#world-browser [data-timeline-order]').selectOption('highest');
    const homeRanks = await page.locator('.timeline-view .index-card').evaluateAll(cards => cards.map(card => Number(card.dataset.importance)));
    assert(homeRanks.every((rank, i) => !i || rank <= homeRanks[i - 1]));
    await page.locator('.timeline-browser-link a').click(); await importance().waitFor();
    assert.equal(await importance().inputValue(), '3'); assert.equal(await order().inputValue(), 'highest');
    await go('living-timeline');
    const origin = page.locator('.event-card[data-timeline-title="The first Called arrive in Prima"]');
    assert((await origin.textContent()).includes('Day 1 of the Final War'));
    assert.equal(await page.locator('.event-card .timeline-war-day').count(), 326, 'posting calendar preserves the 17 unresolved dates');
    assert.equal(await page.locator('.event-card [data-calendar-adjusted]').count(), 12);
    assert.equal(await page.locator('.event-card .timeline-calendar-date').count(),326);
    const monthNames=['Talan','Aionia','War',"Namo'o",'Physisia','Rebirth','Cala','Moirah','Nuru','Death','the Wyrm','Hope'].map(name=>'Month of '+name);
    assert.deepEqual(await page.locator('.timeline-month-guide strong').allTextContents(),monthNames);
    const calendarExamples=await page.evaluate(()=>{
      const item=(start,end=start,precision='day',qualifier='on',kind='recorded')=>({dating:{kind,postingWindow:{start,end,precision,qualifier},finalWar:{start:1,end:1}}});
      return {
        months:Array.from({length:12},(_,i)=>timelineCalendarDateLabel(item(`2025-${String(i+1).padStart(2,'0')}-01`))),
        cases:[
          item('2024-12-31','2025-01-01','range'),item('2025-05-25','2025-06-04','range'),item('2024-06-12','2024-06-13','range'),
          item('2026-02-01','2026-02-28','month','around'),item('2024-02-29'),item('2028-02-29'),item('2025-02-29'),
          item('2024-06-12',undefined,'day','by'),item('2025-06-24',undefined,'day','on','recollection'),{dating:{kind:'unresolved'}}
        ].map(timelineCalendarDateLabel)
      };
    });
    assert.deepEqual(calendarExamples.months,monthNames.map(name=>`1, ${name} · Year 2 of the Final War`));
    assert.deepEqual(calendarExamples.cases,[
      '31, Month of Hope · Year 1 of the Final War – 1, Month of Talan · Year 2 of the Final War',
      '25, Month of Physisia – 4, Month of Rebirth · Year 2 of the Final War','12–13, Month of Rebirth · Year 1 of the Final War',
      'Approx. Month of Aionia · Year 3 of the Final War','29, Month of Aionia · Year 1 · before the Final War','29, Month of Aionia · Year 5 of the Final War','',
      'By 12, Month of Rebirth · Year 1 of the Final War','Record: 24, Month of Rebirth · Year 2 of the Final War',''
    ]);
    assert.equal(await origin.locator('.timeline-calendar-date').innerText(),'4, Month of War · Year 1 of the Final War');
    assert((await page.locator('.timeline-era-header h3').allTextContents()).includes('Year 3 of the Final War'));
    assert((await page.locator('.timeline-month-heading').allTextContents()).includes('Month of Death'));
    await page.locator('#timeline-explorer input').fill('Month of Death Year 3');
    assert((await titles()).includes('Death makes an offer after the mist clearing'));
    assert((await page.locator('.event-card .timeline-calendar-date').allTextContents()).every(label=>label.includes('Month of Death')&&label.includes('Year 3')));
    await page.locator('#timeline-explorer input').fill('Year 2 Month of Namo’o');
    assert(await page.locator('.event-card').count());
    assert((await page.locator('.event-card .timeline-calendar-date').allTextContents()).every(label=>label.includes("Month of Namo'o")&&label.includes('Year 2')),'curly apostrophe finds the supplied month name');
    await page.locator('.timeline-reset').click();
    await page.evaluate(async()=>{search.value='Month of Death Year 3';await runSearch(search.value);});
    assert(await page.locator('.search-result[data-search-kind="timeline"][data-search-title="Death makes an offer after the mist clearing"]').count());
    await page.keyboard.press('Escape');
    const expectedDates = [
      ['The newcomers scout beyond Pristinia', 'Day 3 of the Final War'],
      ['Neemah offers the newcomers many ways to matter', '39 days before the Final War'],
      ['Nienna’s expedition reaches Gael', 'By Day 101 of the Final War'],
      ['Minerva finds no readable trace in Papirak’s grimoire', 'Approx. Days 700–727 of the Final War'],
      ['The tower expedition ends in rescue and retreat', 'Day 919 of the Final War'],
      ['Vessalia’s party investigates the harpy cave', 'Day 930 of the Final War'],
      ['The harpy cave is collapsed after a final prayer', 'Day 930 of the Final War'],
      ['Pristinia reconstructs Melian’s abduction', 'Record: Day 458 of the Final War'],
      ['The Babel company survives a blind salamander ambush', 'Day 959 of the Final War'],
      ['The western mist turns companions into apparent monsters', 'Day 959 of the Final War'],
      ['Death makes an offer after the mist clearing', 'Day 959 of the Final War']
    ];
    for (const [title, label] of expectedDates) {
      const card=page.locator('.event-card').filter({has:page.locator('[class="event-copy"] > strong', {hasText:title})});
      assert.equal(await card.locator('.timeline-war-day').innerText(),label,title);
      const displayed=await page.evaluate(value=>FenumionCalendar.text(value),byTitle.get(title).meta);
      assert.equal(await card.locator('.timeline-source-date').innerText(),displayed,'source date displayed in the Fenumion calendar');
    }
    const sourceEvents = await page.evaluate(() => archiveIndex.timeline.filter(e=>!e.veiled));
    assert.deepEqual(sourceEvents,events,'rendering and sorting never mutate source dates or metadata');
    const chronological = await titles();
    assert(chronological.indexOf('The harpy cave is collapsed after a final prayer') < chronological.indexOf('The western mist blankets Babel-Ashur'),'September 26 continuation stays with the September 19 battle');
    assert((await page.locator('.event-card[data-timeline-title="Ephraith reports Melian’s release after the peace"] .timeline-war-day').innerText()).startsWith('Record: '),'report day does not date an unwitnessed handover');
    const syntheticLabels = await page.evaluate(() => {
      const label=(start,end,qualifier='on')=>timelineWarDateLabel({dating:{kind:'recorded',finalWar:{start,end,qualifier}}});
      return [label(0,0),label(-2,0),label(0,2),label(1,1,'before'),label(3,4,'after'),label(1,1,'by'),timelineWarDateLabel({dating:{kind:'unresolved'}})];
    });
    assert.deepEqual(syntheticLabels,['1 day before the Final War','1–3 days before the Final War','1 day before the Final War – Day 2','Before Day 1 of the Final War','After Days 3–4 of the Final War','By Day 1 of the Final War','']);
    const sameHash = await page.evaluate(() => location.hash); await origin.click();
    assert.equal(await page.evaluate(() => location.hash), sameHash, 'event dialogs do not create permalinks');
    assert((await page.locator('#record-dialog-content').textContent()).includes('The owner establishes'));
    assert((await page.locator('#record-dialog-content').textContent()).includes('first Called’s arrival begins Day 1'));
    await page.keyboard.press('Escape');
    const collapse=page.locator('.event-card[data-timeline-title="The harpy cave is collapsed after a final prayer"]');
    await collapse.click();
    assert.equal(await page.locator('#record-dialog-content > .record-dialog-dek .timeline-calendar-date').innerText(),'19, Month of Nuru · Year 3 of the Final War','clear continuation retains its quest calendar day');
    assert((await page.locator('#record-dialog-content').textContent()).includes('explicitly resumes the ongoing battle'));
    assert((await page.locator('#record-dialog-content').textContent()).includes('26–27, Month of Nuru · Year 3'));
    assert.equal(await page.locator('.timeline-review-sources a').count(),4,'continuation sources are visible');
    await page.screenshot({path:'/tmp/codex-calendar-event-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    assert(await page.locator('#record-dialog-content').evaluate(el=>el.scrollWidth<=el.clientWidth),'calendar dialog fits mobile');
    await page.screenshot({path:'/tmp/codex-calendar-event-mobile.png'});
    await page.setViewportSize({width:1440,height:1000});
    await page.keyboard.press('Escape');
    await page.locator('#timeline-explorer input').fill('Day 959');
    assert((await titles()).includes('Death makes an offer after the mist clearing'),'calendar days are searchable');
    await page.locator('.timeline-reset').click();
    await page.locator('#timeline-explorer input').fill('Mortals unmake a mountain');
    assert.deepEqual(await titles(), ['Babel’s defenders reshape the cavern-bearing mountain'], 'one source-checked mountain event with legacy title search');
    await page.locator('.event-card').click();
    assert((await page.locator('#record-dialog-content').textContent()).includes('earlier broad account describes this same assault'));
    await page.keyboard.press('Escape');
    for (const [title, kind] of [['Ephraith reports Melian’s release after the peace','recollection'],['Cthulhu comes through a rift into Fenumion','canon'],['Nienna’s expedition reaches Gael','approximate']]) {
      await page.locator('#timeline-explorer input').fill(title);
      assert.equal(await page.locator('.event-card').count(), 1);
      assert.equal(await page.locator('.event-card [data-date-kind]').getAttribute('data-date-kind'), kind);
    }
    await go('history-in-consequences'); assert.equal(await page.locator('.article-body .consequence-chain').count(), 9);
    for (const id of ['rahu-war-peace','nienna-loss-return-sacrifice','zarathis-judgment']) {
      await page.locator('#sequence-'+id+' [data-timeline-title]').last().click();
      assert(await page.locator('#record-dialog .current-step').count() >= 1);
      await page.keyboard.press('Escape');
    }
    await go('open-questions');
    const releaseCard = await page.locator('#question-melian-captivity').textContent();
    assert(releaseCard.includes('Queen’s release report') && releaseCard.includes('physical handover'));
    assert((await page.locator('#question-exile-jurisdiction').textContent()).includes('fixed term'));
    assert((await page.locator('#question-nymera-second-return').textContent()).includes('does not name a completed spell'));
    // Synthetic private events exercise unlock/lock without exposing protected lore in fixtures.
    await page.evaluate(async () => {
      const template = { article: 'great-fracture', meta: 'Undated', sort: '0000-00', era: 'Ancient world', kind: 'Test', location: 'Test', people: 'Test', summary: 'Synthetic private fixture', vaultOnly: true };
      const events = [1, 2, 3, 4, 5].map(level => ({ ...template, title: 'Private fixture ' + level, importance: level }));
      Object.assign(events[4],{meta:'31 Dec 2025',sort:'2025-12-31',era:'2025 · Truth and authority',dating:{kind:'recorded',note:'Synthetic calendar fixture',postingWindow:{start:'2025-12-31',end:'2025-12-31',precision:'day',qualifier:'on'},finalWar:{start:668,end:668,precision:'day',qualifier:'on'}}});
      events.push({ ...template, title: 'Private unrated fixture' });
      vaultUnlocked = true; applyVault({ articles: [], index: { timeline: events } }); await renderArticle('living-timeline', false);
    });
    assert.equal(await page.locator('.event-card').count(), 349);
    assert.equal(await page.locator('.event-card[data-timeline-title="Private fixture 5"] .timeline-calendar-date').innerText(),'31, Month of Hope · Year 2 of the Final War','private events share the public calendar formatter');
    await importance().selectOption('4');
    assert.equal(await page.locator('.event-card').count(), counts.slice(4).reduce((a,b)=>a+b,0)+2);
    assert.equal(await page.locator('.event-card[data-timeline-title="Private fixture 4"]').count(), 1);
    assert.equal(await page.locator('.event-card[data-timeline-title="Private fixture 3"]').count(), 0);
    await importance().selectOption('0'); await order().selectOption('highest');
    assert.equal((await titles()).at(-1), 'Private unrated fixture');
    await page.evaluate(() => lockVault()); await page.waitForLoadState('load'); await importance().waitFor();
    assert.equal(await page.locator('.event-card').count(), 343);
    assert(!(await page.locator('#timeline-explorer').innerText()).includes('Private fixture'));
    assert(await page.evaluate(() => archiveIndex.timeline.filter(e => e.veiled).every(e => !['importance','importanceReason','regions','dating','reviewSources'].some(key=>key in e))));
    assert.deepEqual(errors, []);
    console.log('PASS five importance levels, adjusted sorting, filtered dialogs, named months/January year rollover/ranges/leap dates/calendar search, share/reload/Back, keyboard/mobile, home timeline, continuations, histories/research and private unlock/lock boundaries');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });

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
    const counts = [0, 73, 148, 89, 32, 1];
    for (let level = 1; level <= 5; level++) {
      await importance().selectOption(String(level)); await match().selectOption('exact');
      assert.equal(await page.locator('.event-card').count(), counts[level], 'exact level ' + level);
      assert((await ranks()).every(rank => rank === level));
      await match().selectOption('minimum');
      assert.equal(await page.locator('.event-card').count(), counts.slice(level).reduce((a, b) => a + b, 0));
      assert((await ranks()).every(rank => rank >= level));
    }
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
        if (value === 'oldest') assert(a.sort.localeCompare(b.sort) <= 0, 'global oldest first');
        if (value === 'newest') assert(a.sort.localeCompare(b.sort) >= 0, 'global newest first');
      }
    }
    await order().selectOption('highest'); await importance().selectOption('3');
    const filteredTitles = await titles();
    await page.locator('.event-card').first().click();
    await page.locator('#record-dialog-content .record-dialog-nav button').first().click();
    assert.equal(await page.locator('#record-dialog-title').innerText(), filteredTitles[1], 'dialog follows the filtered order');
    await page.keyboard.press('Escape');
    const savedRoute = await page.evaluate(() => location.hash);
    await page.reload(); await importance().waitFor();
    assert.equal(await importance().inputValue(), '3'); assert.equal(await order().inputValue(), 'highest');
    assert.deepEqual(await titles(), filteredTitles, 'reload preserves choices');
    await page.evaluate(() => renderArticle('gael')); await page.goBack();
    await page.waitForFunction(hash => document.querySelector('#article-content').dataset.route === hash, savedRoute);
    assert.deepEqual(await titles(), filteredTitles, 'Back preserves choices');
    await go('living-timeline?person=saray&importance=2&match=exact&q=green%20dragon');
    assert.deepEqual(await titles(), ['A gathering party faces the green dragon']);
    const era = byTitle.get('A gathering party faces the green dragon').era;
    await page.locator('[data-era]').filter({ hasText: era }).click();
    assert.equal(await page.locator('.event-card').count(), 1, 'person, era, text and importance intersect');
    await page.locator('#timeline-explorer input').fill('no matching event 12345');
    assert.equal(await page.locator('.event-card').count(), 0); await page.locator('.timeline-empty').waitFor();
    await page.locator('.timeline-reset').click();
    assert((await page.locator('.timeline-person-filter').innerText()).includes('Saray'));
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
      for (const control of [importance(), match(), order()]) {
        assert(await control.evaluate(el => el.getBoundingClientRect().height >= 44 && parseFloat(getComputedStyle(el).fontSize) >= 16));
      }
      await importance().focus(); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter');
      assert(await importance().evaluate(el => document.activeElement === el), 'keyboard selection retains focus');
      if (width === 390) await page.screenshot({ path: '/tmp/codex-timeline-mobile.png' });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await go('world-index'); await page.locator('#world-browser [data-view="timeline"]').click();
    assert.equal(await page.locator('.timeline-view .index-card').count(), 343);
    await page.locator('#world-browser [data-timeline-importance]').selectOption('3');
    assert.equal(await page.locator('.timeline-view .index-card').count(), 122);
    assert(await page.locator('#world-browser [data-timeline-importance]').evaluate(el => el === document.activeElement));
    await page.locator('#world-browser [data-timeline-order]').selectOption('highest');
    const homeRanks = await page.locator('.timeline-view .index-card').evaluateAll(cards => cards.map(card => Number(card.dataset.importance)));
    assert(homeRanks.every((rank, i) => !i || rank <= homeRanks[i - 1]));
    await page.locator('.timeline-browser-link a').click(); await importance().waitFor();
    assert.equal(await importance().inputValue(), '3'); assert.equal(await order().inputValue(), 'highest');
    // Synthetic private events exercise unlock/lock without exposing protected lore in fixtures.
    await page.evaluate(async () => {
      const template = { article: 'great-fracture', meta: 'Undated', sort: '0000-00', era: 'Ancient world', kind: 'Test', location: 'Test', people: 'Test', summary: 'Synthetic private fixture', vaultOnly: true };
      const events = [1, 2, 3, 4, 5].map(level => ({ ...template, title: 'Private fixture ' + level, importance: level }));
      events.push({ ...template, title: 'Private unrated fixture' });
      vaultUnlocked = true; applyVault({ articles: [], index: { timeline: events } }); await renderArticle('living-timeline', false);
    });
    assert.equal(await page.locator('.event-card').count(), 349);
    await importance().selectOption('4');
    assert.equal(await page.locator('.event-card').count(), 35);
    assert.equal(await page.locator('.event-card[data-timeline-title="Private fixture 4"]').count(), 1);
    assert.equal(await page.locator('.event-card[data-timeline-title="Private fixture 3"]').count(), 0);
    await importance().selectOption('0'); await order().selectOption('highest');
    assert.equal((await titles()).at(-1), 'Private unrated fixture');
    await page.evaluate(() => lockVault()); await page.waitForLoadState('load'); await importance().waitFor();
    assert.equal(await page.locator('.event-card').count(), 343);
    assert(!(await page.locator('#timeline-explorer').innerText()).includes('Private fixture'));
    assert(await page.evaluate(() => archiveIndex.timeline.filter(e => e.veiled).every(e => !('importance' in e))));
    assert.deepEqual(errors, []);
    console.log('PASS five importance levels, exact/minimum filters, global sorting, filtered dialogs, era/person/search, share/reload/Back, keyboard/mobile, home timeline and private unlock/lock boundaries');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });

// Run against a local preview; CODEX_BASE_URL and CHROME_PATH follow the other checks.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.CODEX_BASE_URL || 'http://127.0.0.1:8880/';

(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {})
  });
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    // Player-safe checks do not require the external authentication service.
    await page.route('https://auth.fenumion.com/**', route => route.fulfill({
      status: 401, contentType: 'application/json', body: '{}'
    }));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(base + '#rifts');
      await page.waitForFunction(() => byId.get('rifts')?.bodyLoaded);
      await page.locator('h1').waitFor();
      assert.equal(await page.locator('h1').innerText(), 'Rifts');
      const records = await page.evaluate(() => {
        const record = byId.get('rifts');
        const parsed = new DOMParser().parseFromString(record.body, 'text/html');
        const events = archiveIndex.timeline.filter(event => event.article === 'rifts');
        const cards = [...parsed.querySelectorAll('[data-timeline-title]')].map(button => button.dataset.timelineTitle);
        const dataBefore = JSON.stringify({body: record.body, events});
        renderTimelineEventList(events);
        return {
          events, cards,
          contextsValid: subchannelMap.rifts.every(link => byId.has(link.article) && subchannelMap[link.article].filter(item => item.article === 'rifts').length === 1),
          unchanged: dataBefore === JSON.stringify({body: record.body, events}),
          protected: articles.filter(article => isRestrictedArticle(article.id)).map(article => article.body),
          pappy: archiveIndex.timeline.find(event => event.title === 'The Rift ambush tests knowledge and rescue'),
          headings: [...parsed.querySelectorAll('h2')].map(heading => heading.id),
          overflow: document.documentElement.scrollWidth > innerWidth
        };
      });
      assert.equal(records.events.length, 9);
      assert.equal(new Set(records.events.map(event => event.title)).size, 9);
      assert.deepEqual(records.cards, [...records.events].sort((a, b) => a.sort.localeCompare(b.sort)).map(event => event.title));
      assert(records.unchanged);
      assert(records.contextsValid);
      assert(records.protected.every(body => body === ''));
      assert.equal(new Set(records.headings).size, records.headings.length);
      assert(!records.overflow);
      const arrival = records.events.find(event => event.title.startsWith('Cthulhu'));
      assert(arrival.meta.startsWith('3 September 2026'));
      assert(arrival.summary.includes('devours the creatures'));
      assert(records.pappy.sort < arrival.sort);
      await page.goto(base + '#living-timeline');
      for (const event of records.events) {
        await page.locator('#timeline-explorer input').fill(event.title);
        assert.equal(await page.locator('.event-card').count(), 1);
        await page.locator('.event-card').click();
        await page.waitForFunction(id=>document.querySelector('#article-content').dataset.route==='#'+id&&byId.get(id)?.bodyLoaded,event.story);
        assert.equal(await page.locator('.chronicle-chapter').count()>=3,true,'rift opens a substantive story');
        await page.locator('.chronicle-actions a').first().click();await page.locator('#timeline-explorer input').waitFor();
      }
      for (const spelling of ['Cthulu', 'Cthulhu']) {
        await page.locator('#timeline-explorer input').fill(spelling);
        assert(await page.locator('.event-card').count() >= 1);
        assert.equal(await page.locator('.event-card').getByText(arrival.title, { exact: true }).count(), 1);
      }
    }
    for (const id of ['rift', 'rift-phenomenon', 'vessalia', 'pristinia']) {
      await page.goto(base + '#' + id);
      await page.waitForFunction(route => byId.get(route)?.bodyLoaded && document.querySelector('#article-content').dataset.route === location.hash, id.startsWith('rift') ? 'rifts' : id);
      await page.locator('h1').waitFor();
      if (id.startsWith('rift')) assert.equal(await page.locator('h1').innerText(), 'Rifts');
      await page.evaluate(() => document.querySelectorAll('details').forEach(details => { details.open = true; }));
      const event = page.locator('.article-body .location-timeline-list [data-timeline-title]').first();
      const title = await event.getAttribute('data-timeline-title');
      await event.click();
      const destination=await page.evaluate(title=>timelineStory(findTimelineRecord(title))?.id,title);
      if(destination){await page.locator('.chronicle-layout').waitFor();assert.equal(await page.evaluate(()=>location.hash),'#'+destination);}
      else {assert.equal(await page.locator('#record-dialog-title').innerText(), title);await page.evaluate(() => closeRecordDialog());}
    }
    // Source text must remain text when included in shared event-card markup.
    assert(await page.evaluate(() => {
      const html = renderTimelineEventList([{ title: '<img src=x onerror=alert(1)>', meta: '"<&', summary: '<script>bad()</script>', kind: '<b>bad</b>' }]);
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      return !parsed.querySelector('script,img') && parsed.querySelector('strong').textContent.includes('<img');
    }));
    assert.deepEqual(errors, []);
    console.log('PASS rift chronology, naming/search, dialogs, source immutability, protected boundaries and shared character/place event lists at desktop/mobile widths');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });

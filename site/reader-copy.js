/* Shared reader-facing copy. Research metadata stays in the content records. */
(() => {
  const replacements = [
    ['The supplied geography synthesis records', 'Regional accounts record'],
    ['The supplied geography synthesis places', 'Regional accounts place'],
    ['The supplied geography synthesis names', 'Regional accounts name'],
    ['The supplied geography account describes', 'Regional accounts describe'],
    ['appear in the supplied geography synthesis as prophetic leads', 'are described as prophetic leads'],
    ['the supplied world map', 'the world map'], ['the supplied regional map', 'the regional map'],
    ['The supplied regional map', 'The regional map'], ['the supplied map', 'the map'],
    ['The supplied map', 'The map'], ['the supplied visual record depicts', 'the artwork depicts'],
    ['the supplied visual record', 'the artwork'], ['The supplied visual record', 'The artwork'],
    ['the supplied moving record', 'the illustration'], ['a supplied moving visual record', 'an illustration'],
    ['the preserved moving records', 'the illustrations'],
    ['The supplied account', 'The account'], ['the reviewed scenes', 'the known accounts'],
    ['Explore the supplied world map', 'Explore the world map'],
    ['The reviewed record', 'The known history'], ['the reviewed record', 'the known history'],
    ['The recovered dossier', 'The accounts'], ['the recovered dossier', 'the accounts'],
    ['The dossier records', 'The account describes'], ['The dossier does not', 'The account does not'],
    ['The source does not', 'The account does not'], ['the source does not', 'the account does not'],
    ['The source establishes', 'The account describes'], ['The source therefore', 'The account therefore'],
    ['The sources therefore preserve', 'The accounts include'],
    ['The transcript preserves', 'The account describes'],
    ['The Codex preserves that as an attributed claim rather than omniscient narration.', 'That remains Mya’s account.'],
    ['The Codex does not invent what killed Anky.', 'Anky’s cause of death remains unknown.'],
    ['The evidence for authorship is now stronger than the earlier archive allowed: Anky says', 'Anky says'],
    ['The provenance matters, and so does the tension. ', ''],
    ['The Codex preserves both readings:', 'The two disagree:'],
    ['A complete quest transcript now supplies the city’s first scene-backed modern history alongside the preserved moving records.', ''],
    ['The battle’s exact casualty sequence still requires a dedicated pass, but the transcript fixes the attack to 15 October 2025 and confirms the coast as a battlefield rather than only a place of arrival and reflection.', 'The attack takes place on 15 October 2025, turning the coast into a battlefield.'],
    ['The user confirms Aelthor as the proper spelling.', 'The city is named for Aelthor.'],
    ['The user confirms <strong>Aelthor</strong> as the proper spelling;', '<strong>Aelthor</strong> is also recorded as'],
    ['The supplied profile’s “Aethor” rendering and the older “Arthor” variant remain searchable aliases, preserving the textual history without elevating either over the corrected form.', 'Aethor and Arthor are alternate spellings of his name.'],
    ['“Aethor” in the supplied profile and the older “Arthor” rendering remain searchable source variants.', '“Aethor” and “Arthor” in older accounts.'],
    ['The Codex uses the user-confirmed name Greyward Littoral.', 'The coast is known as Greyward Littoral.'],
    ['The supplied map retains “Grayward Littoral” as a searchable cartographic spelling variant.', 'Some maps use the spelling Grayward Littoral.'],
    ['The primary quest logs use Ephraith. Epriath is an early self-introduction typo, and Ephiraith appears in later secondary files. All remain searchable names for the same queen.', 'Ephraith is also recorded as Epriath and Ephiraith.'],
    ['Select an event for its source and evidence limits.', 'Select an event to read more.'],
    ['The selectable marker follows the label already printed on the supplied map.', 'Select its marker to explore the location.'],
    ['Artwork supplied for the Last Grove.', 'The Last Grove, Voraketh.'],
    ['A living history reconstructed from play', 'People, places and the history they leave behind'],
    ['Every recovered character, event, and place', 'Characters, events and places'],
    ['Search every recovered place', 'Find a place'],
    ['The record’s limits', 'What remains unknown'], ['Reading the record', 'Following the chronicle']
  ];
  const editorialParagraph = /^(?:This account draws on the roleplay posts|The collection will grow only from source-supported wording|Names are canonicalized from the clearest supplied label|Where evidence permits, an article records|The raw export is|Each session pass separates|Source hierarchy:|Source rule:|Research standard:)/i;
  function cleanHtml(html) {
    const template = document.createElement('template');
    template.innerHTML = html || '';
    template.content.querySelectorAll('p').forEach(p => {
      if (!p.closest('blockquote, .quote, .quote-card') && editorialParagraph.test(p.textContent.trim())) p.remove();
    });
    // The play principles remain; this appended section explains editorial work.
    template.content.querySelectorAll('.chronicle-reading-guide, .archive-dashboard').forEach(el => el.remove());
    let result = template.innerHTML;
    for (const [before, after] of replacements) result = result.split(before).join(after);
    template.innerHTML = result;
    template.content.querySelectorAll('.callout').forEach(el => { if (!el.textContent.trim() && !el.querySelector('img,video,a')) el.remove(); });
    template.content.querySelectorAll('h2,h3').forEach(h => {
      if (h.closest('.blessing-theme-heading')) return;
      if (!h.nextElementSibling || /^H[23]$/.test(h.nextElementSibling.tagName)) h.remove();
    });
    return template.innerHTML;
  }
  const pageCopy = {
    'people-directory': `<h2 id="follow-their-stories">Follow their stories</h2><p><a href="#living-timeline">Explore the timeline</a> or hear their words in <a href="#memorable-quotes">the quote gallery</a>.</p>`,
    'living-timeline': `<p>Follow Fenumion’s events, journeys and discoveries. Dates identify chronicle entries; ancient events and uncertain dates are marked separately.</p><div id="timeline-explorer" class="timeline-explorer"></div><h2 id="discovery-order">Discoveries that change the past</h2><p>Roderick is first encountered through Vysaeth’s hostile account, then as Wrath, then through the Liar’s Delerium trade, and finally through Legend Lore. Each revelation changes what his companions understand, without erasing the choices they made before they knew.</p>`,
    conversation: `<p>Fenumion is a world shaped by the people who live in it. Cities remember their founders, companions carry grief and unfinished promises, and choices made years ago still change what happens next.</p><h2 id="what-it-became">A history measured in consequences</h2><p>Wars and divine powers change the landscape, while meals, memorials, homes and acts of care give it meaning. Follow a person, a place or an unanswered question to discover how those stories meet.</p><h2 id="read-the-source">Find your way</h2><p><a href="#world-index">Browse the World Index</a>, explore <a href="#visual-archive">the atlas</a>, follow <a href="#living-timeline">the timeline</a>, or begin with <a href="#ethos-of-fenumion">the Ethos of Fenumion</a>.</p>`,
    'visual-archive': `<p>Explore Fenumion’s regions, settlements and landmarks. Caisleán na Brón belongs to Fein Uaill; Hope and the Tower lie within Gael; Pristinia’s civic sites belong to Prima.</p><h2 id="place-directory">Find a place</h2><div id="location-explorer" class="location-explorer"></div>`,
    'quest-record': `<p>Adventures carry people across Fenumion, leaving changed places, friendships and unfinished questions behind.</p><h2 id="quest-record-boundaries">Named adventures</h2><ul><li><strong>You Better Watch Out</strong> · 16 December 2025</li><li><strong>Wherever We Are Now</strong> · 27 March 2026</li><li><strong>Acolyte</strong> · 19 May 2026</li><li><strong>Howl</strong> · 29 May 2026</li></ul><p>Dates identify the chronicle entries and may differ from the in-world calendar.</p><p><a href="#living-timeline">Explore the timeline →</a> · <a href="#people-directory">Meet the people →</a></p>`
  };
  window.codexReadingText = value => String(value || '').split(/(?<=\.)\s+(?=[A-Z])/).filter(sentence => !/^(?:Source:|Primary account:|Castle chronicle · reviewed scene|Date shown is|The Gate export anchors|The displayed dates are|Dates shown anchor)/.test(sentence) && !/\.(?:md|txt)\b/.test(sentence)).join(' ').trim();
  window.cleanCodexRecord = record => {
    if (record.id === 'ethos-of-fenumion') { record.type = 'Player guide'; record.dek = 'How to inhabit Fenumion: remember its people, make choices, and leave something behind.'; record.tags = ['Player guide', 'Agency', 'Continuity', 'Shared world']; record.facts = {World:'Fenumion',Principles:'13'}; }
    if (record.id === 'conversation') record.facts = {World:'Fenumion'};
    if (record.id === 'conversation') record.dek = 'People, places and choices that continue to shape Fenumion.';
    if (record.id === 'quest-record') {
      record.title = 'Adventures'; record.type = 'Journeys and quests'; record.dek = 'Follow the journeys that leave their mark on Fenumion.';
      record.tags = ['Adventures', 'Quests', 'Fenumion']; record.facts = {World:'Fenumion'};
    }
    if (pageCopy[record.id]) record.body = pageCopy[record.id];
    if (record.facts) record.facts = Object.fromEntries(Object.entries(record.facts).filter(([key]) => !/^(Source|Sources|Evidence|Archive basis|Review|Coverage|Confidence)$/i.test(key)));

    if (record.body) record.body = cleanHtml(record.body);
    return record;
  };
})();

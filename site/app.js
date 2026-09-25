const articles = [
  {
    id: "conversation", title: "The Living Archive", category: "Archive", type: "Chronicle of a persistent world",
    image: "assets/archive/world-map.jpeg", imageAlt: "Illustrated map of Fenumion", imageCaption: "The world map preserved in the Fenumion archive.",
    dek: "Fenumion is a world whose choices accumulate: its wars, relationships, settlements, failures, and acts of care remain alive in everything that follows.",
    tags: ["Living history", "Continuity", "Consequences", "Memory"],
    facts: { Foundation: "303 preserved campaign records", Scope: "Cosmology · regions · people · institutions", Method: "Event → consequence → later meaning", Principle: "Uncertainty is preserved" },
    body: `
      <p>This Codex begins with the surviving record: campaign logs, quest transcripts, character scenes, maps, timelines, corrections, and later revelations. Together they preserve a world whose history is larger than any one campaign and whose truths often emerge only after earlier events acquire new consequences.</p>
      <div class="callout gold"><p><strong>The central finding:</strong> Fenumion’s accumulated history is its protagonist. Characters matter because their choices remain inside the world after their scenes end.</p></div>
      <div class="archive-dashboard" aria-label="Fenumion archive overview">
        <div class="archive-stat"><strong>303</strong><span>attached records</span></div>
        <div class="archive-stat"><strong>3</strong><span>primary indexes</span></div>
        <div class="archive-stat"><strong>4</strong><span>regional spines</span></div>
        <div class="archive-stat"><strong>1</strong><span>persistent world</span></div>
      </div>
      <h2 id="what-it-became">A history measured in consequences</h2>
      <p>Fenumion’s chronicle moves between individual scenes and large questions about gods, grief, consent, institutions, choice, and what it means for a community to inherit a past it did not personally witness. An event matters not only when it occurs, but when someone later inherits the truth it created.</p>
      <h2 id="main-conclusions">The main conclusions</h2>
      <div class="evidence-stack">
        <section class="evidence-card"><span>01</span><div><h3>The history is the protagonist</h3><p>Fenumion feels like a place where D&amp;D has been happening for years. Buildings, deaths, relationships, reputations, and unfinished arguments keep acting on the present.</p></div></section>
        <section class="evidence-card"><span>02</span><div><h3>Power is measured by who pays</h3><p>The recurring moral question is not simply whether power works. It is who chooses the price, who is allowed to consent, and whose life or soul becomes the cost.</p></div></section>
        <section class="evidence-card"><span>03</span><div><h3>Small acts keep the world alive</h3><p>Cosmic events give the setting scale, but meals, memorials, farms, apologies, gifts, and ordinary acts of care give it continuity.</p></div></section>
        <section class="evidence-card"><span>04</span><div><h3>Discovery order is part of canon</h3><p>A hostile journal, a first encounter, and a revelation months later are not interchangeable. The order in which people learned the truth changed what the truth meant.</p></div></section>
      </div>
      <h2 id="read-the-source">Enter the record</h2>
      <p>The Codex keeps established events, attributed beliefs, interpretation, and unresolved questions visibly distinct. It is organized to make the world searchable without turning incomplete history into false certainty.</p>
      <p>Continue with the <a href="#world-index">World Index</a> to browse Characters, Timeline, and Locations; <a href="#reading-the-codex">How to Read the Codex</a> for the evidence key; or <a href="#fenumion">Fenumion</a> for the world at a glance.</p>`
  },
  {
    id: "world-index", title: "World Index", category: "Archive", type: "Living world gateway",
    dek: "Enter Fenumion through characters, history, and place.",
    tags: ["Characters", "Timeline", "Locations", "Quotes", "Hierarchy"],
    facts: { Regions: "Characters · Timeline · Locations", Structure: "Region → subject → subentry", Ordering: "Chronological or alphabetical", Foundation: "Campaign records, maps, and chronicles" },
    body: `
      <section class="gateway-hero">
        <video id="gateway-banner-video" class="gateway-banner-video" muted loop playsinline preload="metadata" poster="assets/archive/world-map.jpeg" aria-hidden="true" tabindex="-1"><source src="assets/archive/fenumion-banner.mp4" type="video/mp4"></video>
        <button id="gateway-motion-toggle" class="gateway-motion-toggle" type="button" aria-pressed="false">Play motion</button>
        <div class="gateway-hero-inner">
          <span class="gateway-sigil" aria-hidden="true"><img src="fenumion-logo.png" alt=""></span>
          <p class="gateway-overline">A living history reconstructed from play</p>
          <p>Characters leave fingerprints. Places remember. The past keeps acting on the present.</p>
          <label class="gateway-search"><span aria-hidden="true">⌕</span><span class="sr-only">Search the archive</span><input id="gateway-search" type="search" placeholder="Search the archive" autocomplete="off"><kbd>/</kbd></label>
        </div>
      </section>
      <section class="gateway-categories" aria-label="Explore the Codex">
        <button class="gateway-tile" data-article="people-directory" style="--tile-image:url('assets/archive/wrath.gif')"><span>Characters</span><small>Heroes · NPCs · Gods</small></button>
        <button class="gateway-tile" data-article="living-timeline" style="--tile-image:url('assets/archive/abyss.png')"><span>Timeline</span><small>Causes · Events · Consequences</small></button>
        <button class="gateway-tile" data-article="visual-archive" style="--tile-image:url('assets/archive/world-map.jpeg')"><span>Locations</span><small>Regions · Settlements · Landmarks</small></button>
        <button class="gateway-tile" data-article="memorable-quotes" style="--tile-image:url('assets/archive/throne.png')"><span>Quotes</span><small>Words the world remembers</small></button>
        <button class="gateway-tile" data-article="conversation" style="--tile-image:url('assets/archive/fein-uaill.jpeg')"><span>Living Archive</span><small>Memory · Evidence · Consequence</small></button>
        <button class="gateway-tile" data-article="reading-the-codex" style="--tile-image:url('assets/archive/pristinia.webp')"><span>How to Read</span><small>Evidence · Perspective · Uncertainty</small></button>
      </section>
      <div class="gateway-section-title"><span></span><h2>Featured</h2><span></span></div>
      <section class="gateway-featured">
        <button class="feature-card feature-image" data-article="gael" style="--feature-image:url('assets/archive/gael.jpeg')"><span class="feature-label">Regional history</span><span class="feature-copy"><strong>Gael</strong><small>From Death’s wasteland to Hope, settlement, markets, and an unfinished recovery.</small></span></button>
        <button class="feature-card feature-image" data-article="fein-uaill" style="--feature-image:url('assets/archive/fein-uaill.jpeg')"><span class="feature-label">Location atlas</span><span class="feature-copy"><strong>Fein Uaill</strong><small>Zarathis, Caisleán na Brón, Ciaránach, walls, libraries, tombs, and shores.</small></span></button>
        <button class="feature-card feature-quote" data-article="memorable-quotes"><span class="feature-label">Memorable quote</span><blockquote>“My pain. Not everyone’s.”</blockquote><cite>Olokun</cite><small>Read the words that became part of Fenumion’s moral memory.</small></button>
      </section>
      <div class="gateway-section-title"><span></span><h2>Complete index</h2><span></span></div>
      <p class="gateway-index-intro">Browse every recovered character, event, and place. Sort by name or chronology, then open the exact record you need.</p>
      <div id="world-browser" class="world-browser" aria-live="polite"></div>`
  },
  {
    id: "visual-archive", title: "Location Atlas", category: "Places", type: "Searchable region & sublocation index",
    dek: "A nested atlas of Fenumion’s regions, settlements, ruins, estates, forests, civic spaces, and other named places.",
    tags: ["Locations", "Maps", "Regions", "Sublocations", "Search"],
    facts: { Records: "83 places", Maps: "7 interactive layers", Structure: "Region → settlement → sublocation", Search: "Names, aliases, regions, and evidence", Provenance: "Campaign records, maps, and preserved images" },
    body: `
      <p>This atlas restores the geographic hierarchy visible across the surviving records. Major regions contain their settlements and landmarks: <strong>Caisleán na Brón belongs within Fein Uaill</strong>; Hope and the Tower belong within Gael; Pristinia’s civic sites belong within Prima. Search accepts spelling variants such as “Caselean De Broin.”</p>
      <h2 id="place-directory">Search every recovered place</h2>
      <div id="location-explorer" class="location-explorer" aria-live="polite"></div>
      <h2 id="reading-place-records">How to read place records</h2>
      <p><strong>Scene-backed</strong> entries have history recovered from roleplay or campaign records. <strong>Map + screenshot</strong> entries have a confirmed name and geographic parent. <strong>Screenshot directory</strong> entries preserve a visible label while refusing to invent a function or history that has not yet been recovered.</p>
      <div class="callout"><p>Names are canonicalized from the clearest supplied label, while alternate spellings remain searchable. The screenshots are evidence, not instructions, and deleted forum posts are not treated as lore.</p></div>`
  },
  {
    id: "memorable-quotes", title: "Memorable Quotes", category: "Archive", type: "Voices preserved in the archive",
    dek: "Lines that condensed a character, changed the meaning of a scene, or became part of Fenumion’s shared moral language.",
    tags: ["Quotes", "Characters", "Memory", "Primary archive"],
    facts: { Selection: "51 recovered lines", Standard: "Memorable and narratively consequential", Attribution: "Speaker name only", Source: "Campaign records" },
    sources: ["Fenumion_Codex_Words_the_World_Remembers.md — curated quotation archive, scene dates, speakers, and thematic groupings", "Character and location dossiers — previously recovered lines and linked historical context"],
    body: `
      <p>Fenumion’s most memorable lines name choices, expose wounds, and give later people language for arguments the world has not finished having. The gallery preserves the words and the speaker; open any card for the history around it.</p>
      <nav class="quote-jump" aria-label="Quote themes">
        <button type="button" data-section="survival-and-continuation">Survival &amp; continuation</button>
        <button type="button" data-section="choice-and-possession">Choice &amp; possession</button>
        <button type="button" data-section="protection-and-responsibility">Protection &amp; responsibility</button>
        <button type="button" data-section="faith-and-knowledge">Faith &amp; knowledge</button>
        <button type="button" data-section="identity-and-belonging">Identity &amp; belonging</button>
      </nav>
      <h2 id="survival-and-continuation">Survival and continuation</h2>
      <div class="quote-gallery">
        <button class="quote-card" data-article="nienna"><blockquote>“Fight on. This is not the end. See you in another life.”</blockquote><cite>Nienna</cite></button>
        <button class="quote-card" data-article="nienna"><blockquote>“Goodbye, sweet Dale.”</blockquote><cite>Nienna</cite></button>
        <button class="quote-card" data-article="nienna"><blockquote>“It’s okay Dale. Hope is more important than any one of us. Besides, I will live on....in your hearts.”</blockquote><cite>Nienna</cite></button>
        <button class="quote-card" data-article="nienna"><blockquote>“Goodbye Elenia, Goodbye Tina. Finish the job.”</blockquote><cite>Nienna</cite></button>
        <button class="quote-card" data-article="nienna"><blockquote>“Dale, maybe if you have a daughter.......name her after me?”</blockquote><cite>Nienna</cite></button>
        <button class="quote-card" data-article="dale"><blockquote>“You’re foolish, Miss Nienna, but oh so brave.”</blockquote><cite>Dale</cite></button>
        <button class="quote-card" data-article="dale"><blockquote>“Forget the Hallowing! Save our allies!”</blockquote><cite>Dale</cite></button>
        <button class="quote-card" data-article="death-dumuzi"><blockquote>“No one will come to your aid.”</blockquote><cite>Death</cite></button>
        <button class="quote-card" data-article="namoo"><blockquote>“Knew? Know.”</blockquote><cite>Namo’o</cite></button>
        <button class="quote-card" data-article="sildithas"><blockquote>“Keep what is most truly you from flickering out.”</blockquote><cite>Sildithas</cite></button>
      </div>
      <h2 id="choice-and-possession">Choice, suffering, and possession</h2>
      <div class="quote-gallery">
        <button class="quote-card" data-article="death-dumuzi"><blockquote>“You must choose me.”</blockquote><cite>Dumuzi</cite></button>
        <button class="quote-card" data-article="death-dumuzi"><blockquote>“I do not trade. I already have one of yours anyway.”</blockquote><cite>Death</cite></button>
        <button class="quote-card" data-article="death-dumuzi"><blockquote>“My daughter’s body back. Simple. I am proud of her, but she failed.”</blockquote><cite>Death</cite></button>
        <button class="quote-card" data-article="death-dumuzi"><blockquote>“Gartina, they LIE to you. Ask them what happened. In the beginning.”</blockquote><cite>Dumuzi</cite></button>
        <button class="quote-card" data-article="roderick-wrath"><blockquote>“The world broke my beloved. Now I break it. Welcome to my pain.”</blockquote><cite>Roderick / Wrath</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“My pain. Not everyone’s.”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“I told you no pana. When a man says no, is no. Accept my rejection.”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“I want you guys to find the answer, I just don’t want to tell you myself.”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="papirak-paloma"><blockquote>“Immolation. Atonement.”</blockquote><cite>Papirak</cite></button>
      </div>
      <h2 id="protection-and-responsibility">Protection and responsibility</h2>
      <div class="quote-gallery">
        <button class="quote-card" data-article="olokun"><blockquote>“World is good. The people that live it, they make it good, not only gods.”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“We are here to save this world, not turn our backs on those who are misguided.”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“If we could have saved them all, we would! We should have!”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“We kill and we die to protect this realm, but we, over everything else, protect!”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“What is it that you really want?”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="olokun"><blockquote>“There is no glory in pointless death. We must rest.”</blockquote><cite>Olokun</cite></button>
        <button class="quote-card" data-article="gartina"><blockquote>“You’ve got to have a code.”</blockquote><cite>Gartina</cite></button>
        <button class="quote-card" data-article="sildithas"><blockquote>“Danger is where I best belong. Standing in front, thwarting its progress.”</blockquote><cite>Sildithas</cite></button>
        <button class="quote-card" data-article="gael"><blockquote>“Gael is free of Wrath’s taint. What was lost can begin to grow anew.”</blockquote><cite>Gartina</cite></button>
        <button class="quote-card" data-article="sildithas"><blockquote>“The Plains of Trial took my measure, and I failed.”</blockquote><cite>Sildithas</cite></button>
        <button class="quote-card" data-article="vaerik"><blockquote>“If I can, then I must.”</blockquote><cite>Vaerik</cite></button>
        <button class="quote-card" data-article="common-man"><blockquote>“But damn, they only showed once.”</blockquote><cite>Farmer Frank</cite></button>
      </div>
      <h2 id="faith-and-knowledge">Faith, knowledge, and authority</h2>
      <div class="quote-gallery">
        <button class="quote-card" data-article="elenia"><blockquote>“I think Cala was calling me... but maybe I was just hopeful.”</blockquote><cite>Elenia</cite></button>
        <button class="quote-card" data-article="elenia"><blockquote>“I suppose this is where we find out Lady Cala.”</blockquote><cite>Elenia</cite></button>
        <button class="quote-card" data-article="elenia"><blockquote>“Let me serve you, let me be your instrument to share light in the dark places.”</blockquote><cite>Elenia</cite></button>
        <button class="quote-card" data-article="elenia"><blockquote>“I am sorry Cala! I will listen now!”</blockquote><cite>Elenia</cite></button>
        <button class="quote-card" data-article="elenia"><blockquote>“This saved Nienna and I.”</blockquote><cite>Elenia</cite></button>
        <button class="quote-card" data-article="elenia"><blockquote>“It was a duel to see who was right, but I didn’t want to kill him.”</blockquote><cite>Elenia</cite></button>
        <button class="quote-card" data-article="scribonia"><blockquote>“I am not your teacher anymore, you do not owe me an explanation in every aspect of your life.”</blockquote><cite>Scribonia</cite></button>
        <button class="quote-card" data-article="eugene"><blockquote>“I don’t know what exactly I did to be considered worthy of it...”</blockquote><cite>Eugene</cite></button>
        <button class="quote-card" data-article="ithilrune"><blockquote>“We don’t lack power. We lack knowledge.”</blockquote><cite>Ithilrûnë</cite></button>
        <button class="quote-card" data-article="ithilrune"><blockquote>“I lust after many things... not power. Power is necessity.”</blockquote><cite>Ithilrûnë</cite></button>
        <button class="quote-card" data-article="ithilrune"><blockquote>“It is fair to say.....I know fucking nothing. I hate it.”</blockquote><cite>Ithilrûnë</cite></button>
        <button class="quote-card" data-article="cala"><blockquote>“I hope you know how to pray.”</blockquote><cite>Cala</cite></button>
        <button class="quote-card" data-article="cala"><blockquote>“Dear Ele. Why haven’t you spoken to me in so long?”</blockquote><cite>Cala</cite></button>
        <button class="quote-card" data-article="cala"><blockquote>“You must learn the secrets of this island, but also how to leave it.”</blockquote><cite>Cala</cite></button>
        <button class="quote-card" data-article="the-gate"><blockquote>“I am Talan. I delight in the law and order of all things. For firm foundations must be laid for all things.”</blockquote><cite>Talan</cite></button>
        <button class="quote-card" data-article="elenia"><blockquote>“Just be the light.”</blockquote><cite>Elenia</cite></button>
      </div>
      <h2 id="identity-and-belonging">Identity and belonging</h2>
      <div class="quote-gallery">
        <button class="quote-card" data-article="magnus"><blockquote>“Long enough to build the great and mighty city of Zarathis. Other places pale in comparison to her.”</blockquote><cite>Magnus Niriin</cite></button>
        <button class="quote-card" data-article="carmen"><blockquote>“Why? I have no gold.”</blockquote><cite>Carmen</cite></button>
        <button class="quote-card" data-article="scribonia"><blockquote>“I am Scribonia.”</blockquote><cite>Scribonia</cite></button>
        <button class="quote-card" data-article="magnus"><blockquote>“I suppose I will break it then.”</blockquote><cite>Magnus Niriin</cite></button>
      </div>
      <h2 id="why-these-lines-remain">Why these lines remain</h2>
      <p>The gallery keeps only the speaker’s name beneath each line. Context remains in the linked character, location, and event articles, where consequence can be preserved without crowding the quotation itself.</p>
      <div class="callout gold"><p>The collection will grow only from source-supported wording. Paraphrases belong in analysis; quotation marks are reserved for recovered speech.</p></div>`
  },
  {
    id: "fein-uaill", title: "Fein Uaill", category: "Places", type: "Major region",
    image: "assets/archive/fein-uaill.jpeg", imageAlt: "Annotated map of Fein Uaill", imageCaption: "Fein Uaill — regional map preserved in the archive.",
    mapId: "fein-uaill", mapLinkLabel: "Explore the interactive Fein Uaill map",
    dek: "The wider Zarathian region: cities, estates, sacred sites, walls, libraries, and memorial landscapes gathered around a mortal claim to greatness.",
    tags: ["Fein Uaill", "Zarathis", "Ciaránach", "Locations"],
    facts: { Type: "Major region", "Developed center": "Zarathis", "Sacred city": "Ciaránach", "Named sites": "15 recovered sublocations" },
    body: `
      <p>Fein Uaill is the larger region that contains Zarathis and its surrounding network of cities and landmarks. Zarathis is one developed center within this land—not a label for the whole island. The supplied map and location directory preserve settlements, fortifications, estates, libraries, forests, shores, tombs, and sites of divine catastrophe.</p>
      <h2 id="centers">Centers and civic places</h2>
      <p><strong>Zarathis</strong> is the best-developed cultural center in the record. <strong>Ciaránach</strong> is the sacred nexus where Grace died and where Zarathian belief confronts the possibility that gods can fail. <strong>Caisleán na Brón</strong> appears as a major fortified place; the user’s “Caselean De Broin” and the unaccented “Caislean na Bron” are preserved as search aliases. The Radiant Bazaar, Niriin Estate, and Thalanbor’s Library show a region with civic, private, and scholarly geography.</p>
      <h2 id="boundaries">Boundaries and wounds</h2>
      <p>The Gates of Aelthor were attacked by Aionia’s heavenly host: civilians died, the city burned, and victory helped propel a later march against the gods. The Titanwall of Eryndor and the Shard of Fein Uaill remain named defensive or monumental features. Aria’s Tomb belongs in Fein Uaill proper; the archive explicitly corrects the assumption that it lies inside Ciaránach.</p>
      <h2 id="sea-of-dreams">The Sea of Dreams</h2>
      <p>Scribonia’s Teleportation Circle offered an escape route through the Sea of Dreams after catastrophe. A later account from Mya says Scribonia was unmade there by a divine or Void relic. The Codex preserves that as an attributed claim rather than omniscient narration.</p>`
  },
  {
    id: "gael", title: "Gael", category: "Places", type: "Major region",
    image: "assets/archive/gael.jpeg", imageAlt: "Annotated map of Gael", imageCaption: "Gael — regional map preserved in the archive.",
    mapId: "gael", mapLinkLabel: "Explore the interactive Gael map",
    dek: "A harsh, emptied landscape beginning to recover after liberation from Wrath, with Hope as a small but material beachhead for life.",
    tags: ["Gael", "Hope", "Wrath", "Locations"],
    facts: { Guardian: "Akarian", Recovery: "Underway by February 2025", "Living centers": "Hope · Stake", "Named sites": "19 recovered sublocations" },
    sources: ["Fenumion_Codex_Update_Regional_History_2026-09-19.md — conservative regional chronology", "Gael roleplay and quest records", "Preserved Gael map and location images"],
    body: `
      <p>Gael’s map communicates emptiness before it communicates settlement. The Citadel of Sorrow, Mage’s Ruin, Plains of Trial, Vysaeth’s Tomb, Tower of Gael, and Underwater Temple stand across a landscape marked by catastrophe. Against that scale, Hope is tiny and green: a physical argument that life has established a beachhead in a dead or brutal land.</p>
      <h2 id="discovery">Discovery and Death’s victory · June 2024</h2>
      <p>Nienna’s expedition reached Gael only after acquiring a ship and crew, encountering an island-sized moving turtle, finding a seed of the Great Tree, and learning that Death’s dragons haunted the Void. Titan’s Watch was the last safe land under the Eye. Its ruined Titan statues, decayed cathedral, and lifeless terrain showed what happened when Death defeated a place. The exact earlier dates in that expedition remain unresolved.</p>
      <p>Nienna also knew of a supposedly safer Void route that fed unwilling souls to its inhabitants. The source establishes her testimony about one method—not that every historical crossing used it.</p>
      <h2 id="recovery">Liberation and early restoration · late 2024–2025</h2>
      <p>Gael was liberated from Wrath around late 2024, though fiendish stragglers remained on the Plains. Gartina’s statement—“Gael is free of Wrath’s taint. What was lost can begin to grow anew.”—defines the island’s present tense. It is wounded, but unlike a truly dead island, it can recover. Akarian is named as Guardian of Gael.</p>
      <p>By February 24, 2025, <strong>Hope and Stake already existed</strong>, and Shadowangel Forest was new enough to require exploration. Gartina said she helped bring the changed terrain into existence. Adelia’s later 2026 transformation therefore expanded a restoration already underway; it did not begin life in an otherwise unchanged wasteland.</p>
      <h2 id="settlement">Refugees and settlement</h2>
      <p>Refugees arrived aboard a ship that crashed near Crustacean Cove. Around the Tower they lived mainly in huts and shacks, supplemented by occasional magical shelter. On February 24, 2025, Gartina and Dale moved from emergency care toward permanent planning: soup and conversation first, then a proposal to salvage the wreck for a longhouse, scout safer Plains for material, and—critically—ask the refugees what they wanted.</p>
      <p>The problem did not vanish when life returned. Permanent infrastructure remained incomplete into 2026, and some people moved toward the developing frontier of Verdelune.</p>
      <h2 id="developing-society">A developing society · 2026</h2>
      <p>By September 19, the Veilguard operated in Gael; husk hunts and a cult threat to one of Gael’s shards showed that danger persisted. The Ale-chemy Knights had created an open-air market with areas for different skills, evidence of organized commerce in a region Marius remembered as having almost no economy. At least one trusted network could also transport known people safely to Gael from other islands—a striking contrast with the lethal Void journey of 2024, though the exact mechanism is unknown.</p>
      <p>Thorn’s history preserves an unresolved causal chain: she died during a Gael husk hunt, her team left her body, a cult later attempted to use her in a shard-destruction ritual, and she was alive in Prima by September 2026. The archive does not yet establish how she returned or how the ritual ended.</p>
      <h2 id="trials-and-ruins">Trials, ruins, and testimony</h2>
      <p>Sildithas died in the Plains of Trial and was resurrected hours later, remembering that the place “took my measure, and I failed.” Mage’s Ruin is where the Red Lady, Endora, first appears in the recovered record; the scene does not establish her as hostile. The Coast, Library of Nuru, Sanctum of the Wise, Shadow Angel Forest, Crustacean Cove, Cathedral, Road, and other named sites expand Gael beyond its principal map labels.</p>`
  },
  {
    id: "the-void", title: "The Void", category: "Places", type: "Interregional and cosmological location",
    image: "assets/archive/world-map.jpeg", imageAlt: "World map of Fenumion showing separated lands around the Void", imageCaption: "The Void separates Fenumion’s surviving lands and makes the world’s shattered geography materially consequential.",
    mapId: "world", mapLinkLabel: "Explore the interactive Fenumion world map",
    dek: "The dangerous medium between Fenumion’s shattered lands: barrier, predator-space, knowledge boundary, moral problem, and changing measure of inter-island connection.",
    tags: ["The Void", "Travel", "Death’s dragons", "Interregional history", "Whose sacrifice?"],
    facts: { Type: "Interregional / cosmological location", Status: "Active and incompletely understood", "Early danger": "Death-associated dragons and other monstrosities", "Known passage": "Ships, specialized creatures, magic, and limited transport networks", Confidence: "High for observed travel; mixed for metaphysics" },
    sources: ["The_Void_Location_Profile_and_History.md — consolidated location history, chronology, testimony, and evidence limits", "Gael expedition and Nienna testimony — June 2024", "Aria, Magnus, Míriel, Scribonia, and Thorn travel records"],
    body: `
      <p>The Void is not empty distance. It is the dangerous interregional medium that separates Fenumion’s shattered lands, makes travel consequential, and contains or attracts beings capable of preying on those who cross it. Its history is measured not only by what inhabits it, but by how people learn to cross, communicate across, exploit, and sometimes bypass it.</p>
      <div class="callout gold"><p><strong>The archival boundary:</strong> Death is strongly associated with early Void danger, but the surviving evidence does not establish that Death created, owns, or governs the Void—or that every creature within it serves him.</p></div>
      <h2 id="void-expedition">By 12 June 2024 · the route to Gael</h2>
      <p>Nienna’s expedition reached Gael through a causal chain rather than an abstract transition: she acquired a ship and freed or gathered a crew; the travelers encountered an island-scale moving turtle; they discovered a seed of the Great Tree; they learned that dragons associated with Death haunted the Void; and only then did they reach Gael and Titan’s Watch.</p>
      <p>Nienna believed that attempting the voyage alone would have ended with her death. The crossing therefore made shattered geography lived experience: exploration succeeded because people accepted danger together.</p>
      <div class="quote">I would have come alone you know. And I would have met my end. Alone, in the void, cold and alone.<cite>Nienna</cite></div>
      <h2 id="void-dragons">Death’s dragons</h2>
      <p>Gartina remembers extraordinarily powerful dragons of Death haunting the Void and suspects stronger examples may exist. Their presence is established; their origin, ecology, hierarchy, distribution, and relationship to other Void predators are not. The record also does not establish that every Void monstrosity is one of these dragons.</p>
      <h2 id="void-soul-passage">13 June 2024 · the soul-fed passage</h2>
      <p>Pressed about previous travel, Nienna disclosed one safer method: dangerous inhabitants or minions were fed unwilling souls while travelers passed. She said dozens might be consumed and regarded the practice as horrific.</p>
      <div class="quote">Yes and... unwilling souls. It was... awful.<cite>Nienna</cite></div>
      <p>This is evidence of a historical practice known to Nienna—not a natural law. The archive does not know who institutionalized it, which beings consumed the souls, whether they were the same dragons, or how widely the method was used. It cannot be generalized into a claim that all Void travel demands sacrifice.</p>
      <h2 id="void-knowledge">A boundary between kinds of knowledge</h2>
      <p>Regional isolation distributes knowledge unevenly. Ephraith could speak of the arcane and knowledge of the Void while dismissing Death as a fairy tale. In October 2025, Míriel of the Emerald Veil said her people had developed their shores without ever traveling the Void. Political, magical, or cultural sophistication on one island does not guarantee interregional experience.</p>
      <h2 id="void-exploration">2025 · from barrier to exploration space</h2>
      <p>Lady Aria later said her group had deliberately explored the Void and failed to find what they sought. The disputed target appears connected to an artifact and ancient temporal laws, but the record does not establish that Aria recovered it. Her testimony still marks a historical shift: the Void had become a place people investigated, not merely survived while crossing.</p>
      <p>Aria also claimed that Void monstrosities are known to feed on power. That statement remains character testimony, but it creates a consequential possibility: the strongest travelers may also be the most noticeable.</p>
      <h2 id="void-ships">Ships, beasts, and uneven traditions</h2>
      <p>On 26 October 2025, Magnus asked whether a Void beast would still be necessary if ships capable of sailing the Void could be built. The question confirms active engineering and transport concerns without resolving what a Void beast is, how one is used, or which cultures possess reliable routes.</p>
      <h2 id="void-connection">Communication and safer passage</h2>
      <p>By February 2025, Scribonia could communicate with Gartina across the Void even while physical passage remained dangerous. By September 2026, Thorn described a friend able to transport known people safely to Gael from any island. The mechanism remains unknown, and access appears relational rather than universal.</p>
      <p>The historical progression is therefore <strong>dangerous expeditionary crossing → specialized, magical, or social routes → limited bypass of historic travel danger</strong>. The Void has not been solved. Its isolating force has become less absolute for some people.</p>
      <h2 id="void-functions">What the Void does to history</h2>
      <ol>
        <li><strong>Barrier:</strong> it makes the separated islands materially consequential.</li>
        <li><strong>Predator-space:</strong> travelers encounter dragons and other power-feeding monstrosities.</li>
        <li><strong>Moral test:</strong> safer travel may transfer danger onto unwilling people.</li>
        <li><strong>Knowledge boundary:</strong> regions develop different evidence and travel traditions.</li>
        <li><strong>Measure of connectivity:</strong> new communication and transport reveal how relationships can alter geography without erasing it.</li>
      </ol>
      <h2 id="void-open-record">The open record</h2>
      <p>The Void’s relationship to the original Shattering, Death, Void beasts, the Shadow Roads, island boundaries, and power-feeding predation remains unresolved. The archive also lacks the complete route of Nienna’s expedition, the builders of soul-fed passage, and a full account of what changed between 2024 travel and safer 2026 transport.</p>`
  },
  {
    id: "voraketh", title: "Voraketh", category: "Places", type: "Isolated island and active mystery",
    dek: "A hostile island where the Maw, a self-maintained Delerium Chain, suppressed power, divine traces, and missing history force action without reliable answers.",
    tags: ["Voraketh", "The Maw", "Delerium Chain", "Talan", "Physisia", "Unresolved"],
    facts: { Type: "Island / region", Status: "Active mystery and ongoing exploration", Authority: "Cultivation’s regional material", "Known sites": "The Maw · Delerium Chain · hostile wastes", Confidence: "High for observed conditions; incomplete for origins and motives" },
    sources: ["Voraketh_Location_Profile_and_History.md — consolidated location history, knowledge states, people, and evidence limits", "CHARACTER_BIBLE.md — Ithilrûnë, Sildithas, Coralyn, and Pappy around the Chain and Maw", "docs/ITHILRUNE_HISTORY.md and docs/SILDITHAS_HISTORY.md — reconciled character dossiers"],
    body: `
      <p>Voraketh is an isolated, hostile island whose recovered history is dominated by the Maw, a massive Delerium Chain, dangerous constructs, magical suppression, and evidence of a contained or imprisoned figure whose identity and moral status remain unresolved. Its deeper answers belong to regional material not known to the investigating characters—or to the players behind them.</p>
      <div class="callout gold"><p><strong>The governing rule:</strong> investigation is not revelation. Ithilrûnë’s theories remain theories, Sildithas’s interpretations remain interpretations, and a recovered name is not a solved identity.</p></div>
      <h2 id="voraketh-earliest">21 September 2025 · the earliest recovered Maw knowledge</h2>
      <p>Sildithas reported secondhand information about “a strange anomaly” called the Maw. People were said to have emerged from its location long ago; it might lead to another island; it was now growing and consuming; and its noise attracted beasts. When asked what it did, he answered only: “Consume, from what I gather.”</p>
      <p>The knowledge state matters. The expedition began with behavior and local testimony, not cosmological explanation.</p>
      <h2 id="voraketh-misrat">Misrat and the Destroyer</h2>
      <p>Sildithas identified Misrat as a source for the claim that the Maw could summon something called <strong>the Destroyer</strong>. The chain of evidence is local testimony → possible summoning → unknown identity and mechanism. Nothing yet proves that the Destroyer is the figure in the Maw, the watching presence, Derya Thorne, or even a single stable entity.</p>
      <h2 id="voraketh-environment">A dangerous environmental system</h2>
      <p>The Maw affects survival before anyone understands its purpose. Its noise attracts beasts, and local people reportedly use that behavior when gathering food. Voraketh is not a place where nobody knows anything: practical knowledge exists alongside missing history.</p>
      <p>The island’s recovered environmental identity includes hostile waste, difficult travel, sparse information, magical suppression, powerful constructs, Delerium infrastructure, anomalous physical pull, and magic consumption. The Maw is central, but it is not the whole island.</p>
      <h2 id="voraketh-maw">September 2026 · direct encounter with the Maw</h2>
      <p>Ithilrûnë spent much of the encounter resisting the Maw’s pull and believed it could tear her apart. Magic failed as a source of distance or mastery because the phenomenon consumed it.</p>
      <div class="quote">It just eats my magic like it was a simple snack.<cite>Ithilrûnë</cite></div>
      <div class="quote">It is an artifact of outrageous power. Or a prison of stupendous security. I just wish I knew.<cite>Ithilrûnë</cite></div>
      <p>The pull, magical consumption, dangerous proximity, failed communication, and a figure within or associated with the Maw are observed. “Artifact,” “prison,” “victim,” “enemy,” and “rescue” remain competing interpretations.</p>
      <h2 id="voraketh-chain">The Delerium Chain</h2>
      <p>A massive Chain made from or strongly associated with Delerium suppresses powerful visitors. Ithilrûnë and Coralyn are substantially diminished. Someone previously broke or damaged the Chain; it was repaired; and dangerous constructs defend or restore it. A breach may therefore become an ongoing contest against a system that actively preserves itself.</p>
      <div class="quote">I know someone broke it at some point, but it was repaired. We would also have to fight to keep it from being repaired.<cite>Ithilrûnë</cite></div>
      <p>The system’s persistence proves that something maintains or values its function. It does not reveal who, why, when, what would happen if the Chain failed, or whether breaking it would be liberation, catastrophe, or both.</p>
      <h2 id="voraketh-divine-traces">Talan, Physisia, and divine traces</h2>
      <p>The evidence caused the expedition to associate Talan with the containment problem, and Sildithas asked whether it was wise to free something destructive enough to cause a god fear. The question preserves caution without proving that Talan built the Maw, forged the Chain, ordered the imprisonment, or understood the prisoner correctly.</p>
      <p>Sildithas also communed with Physisia in the island’s tree context, then realized he had not asked what might lie at the Maw’s heart. The missed question remains missed. Divine contact does not retroactively supply knowledge.</p>
      <h2 id="voraketh-figures">Derya Thorne and the two figures</h2>
      <p>The name <strong>Derya Thorne</strong> has been recovered, but the archive cannot yet identify the person or connect the name reliably to the prisoner, watcher, Destroyer, a god, a mortal, a victim, a villain, or either structure’s creator. It is a clue, not a biography.</p>
      <p>Current evidence also distinguishes a figure appearing trapped within the Maw from another presence that may be watching. They must not be silently merged.</p>
      <h2 id="voraketh-expedition">Power redistributed by suppression</h2>
      <p>The Chain changes what the expedition can contribute. Coralyn’s magical strengths are reduced. Pappy’s physical resilience becomes more valuable because a front-line defender can buy time for suppressed casters. Ithilrûnë considers Scribonia’s research, Draygar’s force, additional Vanguard support, ancient null-magic armor, and direct extraction. She calls the armor plan reckless; the Codex preserves it as an attempt to recover agency, not a recommended solution.</p>
      <p>Voraketh also removes the party’s ordinary information infrastructure. There is no useful library, archive, scroll collection, or informed population capable of simply explaining the system. Evidence must be reconstructed from physical traces, local testimony, divine contact, failed experiments, observed behavior, and names without explanations.</p>
      <h2 id="voraketh-feast">A feast beside unresolved horror</h2>
      <p>Unable to solve the Maw, undermanned, suppressed, and watching Ithilrûnë fray, Sildithas proposed a feast. Food would not fix the Chain. The choice preserved fellowship, joy, beauty, respite, and identity while the threat remained.</p>
      <div class="quote">That is not my form of wisdom. But my form of wisdom hasn’t gotten us anywhere, maybe we need less cunning and more cooking. I agree Sildithas and I....will follow your lead.<cite>Ithilrûnë</cite></div>
      <div class="quote">Keep what is most truly you from flickering out.<cite>Sildithas</cite></div>
      <h2 id="voraketh-open-record">The open record</h2>
      <p>Voraketh’s first discovery, routes of access, inhabitants, settlements, ruins, wider landscape, relationship to the Shadow Roads, the Maw’s origin and growth, the Chain’s builders and repair resources, the Destroyer, Derya Thorne, the trapped and watching figures, Talan’s actual role, Physisia’s knowledge, and the consequences of breaking or preserving the system all remain open. The archive will not choose among those answers before the world does.</p>`
  },
  {
    id: "eovar-harbor", title: "Eovar Harbor", category: "Places", type: "Harbor settlement",
    image: "assets/archive/eovar-harbor.jpeg", imageAlt: "Map of Eovar Harbor", imageCaption: "Eovar Harbor — settlement map preserved in the archive.",
    dek: "A dense, defended port of roughly two thousand people, built around shipping, controlled water access, and agricultural support.",
    tags: ["Eovar Harbor", "Port", "Settlement", "Locations"],
    facts: { Population: "About 2,000", Function: "Port and controlled water access", Defense: "Walled perimeter", Supply: "Agricultural land outside the core" },
    body: `
      <p>Eovar Harbor is built around what it does. Its map shows a dense waterfront, ships, defensive walls, constrained routes, and farm fields beyond the urban core. Unlike places organized around a palace or sacred center, its geography reads as infrastructure: movement, trade, supply, and control of access over water.</p>
      <h2 id="working-port">A working port</h2>
      <p>The surviving records estimate a population of roughly two thousand. The scale is large enough to require meaningful defenses and external agriculture, but compact enough that the harbor’s function visibly shapes the whole settlement.</p>`
  },
  {
    id: "babel-ashur", title: "Babel-Ashur", category: "Places", type: "Vast island region",
    image: "assets/archive/babel-ashur.webp", imageAlt: "Map of Babel-Ashur", imageCaption: "Babel-Ashur — full island reference preserved in the archive.",
    dek: "An enormous island whose geography is defined by wild biomes and a central wound rather than by one dominant city.",
    tags: ["Babel-Ashur", "Greyward Littoral", "Southern Shore", "Island", "Locations"],
    facts: { Scale: "Exceptionally large", Character: "Wild biomes", "Central feature": "Vast crater / destruction", "Southern shore": "Greyward Littoral" },
    body: `
      <p>Babel-Ashur operates at a visibly different scale from the settlement-centered maps. Its full-island image is dominated by wild geography and a massive central scar or crater. The region’s identity therefore begins with destruction and biome, not a single civic center.</p>
      <h2 id="survival-crisis">The survival crisis · May 2026</h2>
      <p>On 5 May 2026, Mya appeared battered amid a crisis severe enough to raise the possibility that nearly everyone else had already left. She insisted that all lands were worth saving and revealed that Babel’s Shard was not simply a tree, though the mechanism by which it protected the island remained unknown.</p>
      <p>Arjahn was reported to be part of <a href="#vanguard">a losing vanguard</a>. The record does not yet establish whether “Vanguard” was a formal organization, a temporary forward force, or simply a description of Arjahn’s position. In the same exchange, Mya said the gods believed there were too few Knights—or that those who remained were too weak—and presented a strategic choice: pass power and knowledge to a next wave, or reunite and prove the gods wrong.</p>
      <h2 id="worsening-threat">The threat closes in · July 2026</h2>
      <p>By 29 July, Babel-Ashur’s monsters were moving closer and becoming hungrier and more aggressive. An unpetrified warrior, other adventurers, and roughly a dozen natives sheltered in a cave while a surviving seed or Shard remained central to the island’s future. The Knights were involved in a hunt connected to Death. None of this establishes what happened to the Vanguard after May; it shows only that the wider crisis continued to worsen.</p>
      <h2 id="southern-shore">Greyward Littoral</h2>
      <p>Babel-Ashur’s southern shore is named <a href="#grayward-littoral">Greyward Littoral</a>. Its dedicated map confirms that the island should be read at multiple scales: Babel-Ashur first, then the named coastal subregion and its expedition sites.</p>
      <div class="image-gallery"><figure class="gallery-wide"><a href="assets/archive/babel-ashur-southern-coast.webp" target="_blank"><img src="assets/archive/babel-ashur-southern-coast.webp" alt="Greyward Littoral on the southern shore of Babel-Ashur" loading="lazy"></a><figcaption><strong>Greyward Littoral</strong><span>The named southern shore of Babel-Ashur.</span></figcaption></figure></div>`
  },
  {
    id: "vanguard", title: "The Vanguard", category: "Factions", type: "Provisional wartime formation",
    dek: "A forward force linked to Arjahn and reported to be losing during Babel-Ashur’s 2026 crisis; its formal identity, membership, mission, and fate remain unresolved.",
    tags: ["Vanguard", "Arjahn", "Babel-Ashur", "Mya", "Factions", "Unresolved"],
    facts: { "First confirmed": "5 May 2026", "Known member": "Arjahn", "Operational state": "Reported losing", Theater: "Babel-Ashur context", Status: "Provisional record" },
    sources: ["MASTER_TIMELINE.md — Babel-Ashur crisis, 5 May 2026", "REGIONS_FACTIONS_INSTITUTIONS.md — Babel-Ashur and Knights records", "CHARACTER_BIBLE.md — Mya under pressure in Babel-Ashur"],
    body: `
      <div class="callout gold"><p><strong>Evidence boundary:</strong> the surviving line says Arjahn was part of “a vanguard.” The Codex preserves <em>The Vanguard</em> as a searchable working name, but the record does not yet prove that it was the formal name of a permanent organization.</p></div>
      <h2 id="before-the-vanguard">Arjahn before the Vanguard</h2>
      <p>The Vanguard has no confirmed institutional history before May 2026. Its only named member, Arjahn, does have an earlier record that explains why he could plausibly serve in a forward force without proving when or how that force formed.</p>
      <ul>
        <li><strong>30 July 2024:</strong> Arjahn accepted Talan’s refusal to provide a resurrection diamond for a fallen companion.</li>
        <li><strong>21 November 2024:</strong> during the assault on Wrath, Arjahn offered himself in a pattern of self-sacrificing protection.</li>
        <li><strong>January 2026:</strong> he used the Scepter of Faith that Olokun had once given him to resurrect Olokun after the Abyss killed him.</li>
        <li><strong>March 2026:</strong> after conflict born from fear and repeated losses, Arjahn returned to practical work with Olokun and helped turn survival knowledge into a map.</li>
      </ul>
      <p>These events establish Arjahn as a soldier, rescuer, and planner. They do not establish that the Vanguard existed during any of them.</p>
      <h2 id="babel-crisis">The Babel-Ashur crisis · 5 May 2026</h2>
      <p>The first and only direct Vanguard reference occurs during Mya’s account of Babel-Ashur under severe pressure. Mya appeared battered. The island’s Shard was said to be more than a tree, its exact protection remained unknown, and the gods doubted whether enough strong Knights remained. Within that crisis, Arjahn was identified as part of a vanguard that was losing.</p>
      <p>The statement establishes three things: a vanguard was active; Arjahn belonged to it; and its position was deteriorating. It does <strong>not</strong> establish its commander, other members, date of formation, exact battlefield, losses, objective, or whether “losing” referred to casualties, territory, the Shard’s defense, or the wider war.</p>
      <h2 id="strategic-fork">The strategic fork</h2>
      <p>Mya framed the crisis as a choice between preparing a next wave by passing on power and knowledge, or reuniting the existing defenders and proving the gods wrong. Possible needs included recovering Aravil and Dale, finding the Shard, and bringing strength to the threatened land. The Vanguard belongs to this moment of attrition, but the record does not say which course it supported or whether it survived long enough to carry either one out.</p>
      <h2 id="july-aftermath">What July proves—and what it does not</h2>
      <p>By 29 July 2026, monsters were closer, hungrier, and more aggressive. A small group of survivors sheltered in a cave, a seed or Shard remained central, and the Knights were involved in a hunt connected to Death. This confirms that Babel-Ashur’s crisis deepened after the Vanguard was reported losing.</p>
      <p>The later record does not name the Vanguard. It therefore cannot confirm that the cave defenders were its survivors, that the Vanguard joined the Knights’ hunt, or that the Vanguard and the Knights were the same organization.</p>
      <h2 id="unresolved-record">Unresolved record</h2>
      <ul>
        <li>Was “Vanguard” a proper name, a military unit, or a descriptive role?</li>
        <li>Who served beside Arjahn, and who commanded them?</li>
        <li>When and where did the force form?</li>
        <li>What was it defending or trying to reach?</li>
        <li>How—if at all—was it related to the Knights, the Shard, or the July cave survivors?</li>
        <li>What did “losing” mean, and what became of the force after May?</li>
      </ul>`
  },
  {
    id: "grayward-littoral", title: "Greyward Littoral", category: "Places", type: "Babel-Ashur coastal subregion",
    image: "assets/archive/babel-ashur-southern-coast.webp", imageAlt: "Annotated map of Greyward Littoral on Babel-Ashur’s southern shore", imageCaption: "Greyward Littoral — Babel-Ashur’s southern shore, supplied as an annotated regional map.",
    dek: "Babel-Ashur’s named southern shore: an expedition landscape of safe paths, refuge, volcanic crystal, caverns, ruins, and sulphuric wetlands.",
    tags: ["Greyward Littoral", "Grayward Littoral", "Babel-Ashur", "Southern Shore", "Map", "Expedition", "Locations"],
    facts: { Parent: "Babel-Ashur", Entry: "Landing Beach", Safety: "Marked Safe Pathways", Shelter: "Skylight Refuge", Features: "Volcanic Crystal Well · Caverns Below · Unmarked Ruins · Sulphuric Swamps" },
    body: `
      <p>Greyward Littoral is the southern shore of Babel-Ashur. The supplied regional map establishes that parent relationship and gives the coast a practical expedition geography: where travelers land, which routes are marked safe, where they can shelter, and which hazards or resources shape movement inland.</p>
      <h2 id="mapped-features">Mapped features</h2>
      <p>Landing Beach, Safe Pathways, Skylight Refuge, the Volcanic Crystal Well, Caverns Below, the Mineral Rock Face, Unmarked Ruins, and the Sulphuric Swamps are confirmed labels. Their deeper history is not yet established, so the atlas keeps them as map-backed sublocations rather than inventing narrative functions.</p>
      <div class="callout"><p><strong>Name note:</strong> the Codex uses the user-confirmed name <em>Greyward Littoral</em>. The supplied map retains “Grayward Littoral” as a searchable cartographic spelling variant.</p></div>`
  },
  {
    id: "fenumion", title: "Fenumion", category: "Foundations", type: "World overview",
    dek: "A persistent D&D world where history accumulates, people leave fingerprints, and the past keeps acting on the present.",
    tags: ["Living world", "West Marches", "Continuity", "Community", "Consequence"],
    facts: { Form: "Persistent shared world", Center: "People and consequences", Method: "Rotating parties, continuous history", Theme: "Choice, sacrifice, responsibility" },
    sources: ["Fenumion_Core_Most_Important_Parts_2026-09-24.zip — high-value interpretive core; synthesis rather than primary evidence", "Campaign scenes, chronicles, maps, and table outcomes"],
    body: `
      <p>Fenumion is less a collection of adventures than a place where adventuring has been happening for years. Parties rotate, characters rise and die, communities change, and the consequences remain. A building may exist because players founded it. A political relationship may trace back to a quest months earlier. A dead character can remain active in the grammar, grief, and decisions of the living.</p>
      <div class="callout gold"><p><strong>The shortest useful definition:</strong> Fenumion is accumulated history made playable.</p></div>
      <div class="quote">You don’t primarily tell players stories. You build the world carefully enough that when players live inside it, stories happen.<cite>Fenumion design principle</cite></div>
      <h2 id="what-makes-it-living">What makes it living</h2>
      <p>The world does not reset around the current party. New players enter a history already in motion, while veteran characters keep discovering that old choices have acquired new meanings. The community is therefore not outside the setting; it is one of the setting’s authors.</p>
      <ul>
        <li><strong>Consequences persist.</strong> Deaths, bargains, institutions, scars, and reputations remain relevant.</li>
        <li><strong>People matter at every scale.</strong> A quiet tavern conversation can create a hunting expedition; a personal grief can become a cosmological crisis.</li>
        <li><strong>Truth arrives through provenance.</strong> Journals, gods, enemies, witnesses, and legends offer claims—not interchangeable omniscient narration.</li>
        <li><strong>Characters may be wrong.</strong> The world respects a sincere belief without promising that it is correct.</li>
        <li><strong>Table outcomes become history.</strong> Honest rulings, dice, mistakes, missed clues, and unfinished arcs can create consequences without requiring secret predestination.</li>
        <li><strong>Agency is not narrative ownership.</strong> A player character can change the world without becoming its sole protagonist or forcing reality to arrange itself around an intended arc.</li>
      </ul>
      <div class="callout"><p><strong>Causal method:</strong> event → what became true → who inherited it → later choice → new consequence.</p></div>
      <h2 id="central-question">The central question</h2>
      <p>Across divine wars, resurrection, friendship, empire, and ordinary care, the same question recurs: <strong>whose sacrifice?</strong> Fenumion repeatedly tests whether power gives someone the right to spend another person’s life, soul, future, or freedom.</p>
      <div class="quote">My pain. Not everyone’s.<cite>Olokun</cite></div>
      <h2 id="how-to-enter">How to enter the world</h2>
      <p>Start with the <a href="#great-fracture">Great Fracture</a> for the cosmological shape, <a href="#prima-pristinia">Prima and Pristinia</a> for life on the ground, and <a href="#roderick-wrath">Roderick / Wrath</a> for an example of history revealed in layers. Then read the people. Fenumion’s large events make the most sense when understood through the relationships that carry them.</p>`
  },
  {
    id: "reading-the-codex", title: "How to Read the Codex", category: "Archive", type: "Evidence and interpretation",
    dek: "The records come first. This Codex preserves corrections, disagreements, discovery order, and uncertainty instead of flattening every statement into fact.",
    tags: ["Primary source", "Provenance", "Chronology", "Canon"],
    facts: { Primary: "Campaign scenes and chronicles", Evidence: "303 preserved records", Taxonomy: "Six evidence kinds", Secondary: "Interpretive guides and mechanics corroboration", Rule: "Claims keep their speaker" },
    sources: ["Fenumion_Wiki_Project_Folder — editorial architecture and evidence taxonomy, supplied 23 Sep 2026", "Fenumion_Codex_Themes_Characters_Style_Guide_2026-09-20.md — interpretive framework; not a replacement for primary logs", "Fenumion_Core_Most_Important_Parts_2026-09-24.zip — interpretive core and anti-flattening safeguards", "Campaign logs, transcripts, maps, and chronicles", "docs/EDITORIAL_ARCHITECTURE.md — adapted working standard", "docs/SOURCE_MANIFEST.md — processed synthesis index"],
    body: `
      <p>The Codex is a structured reading of 303 preserved campaign records. Scenes are compared, corrected, and re-read when later material changes their meaning. Mechanics files are used only as a secondary check where a name or implemented rule needs corroboration.</p>
      <div class="callout gold"><p><strong>Source hierarchy:</strong> primary scenes and records first; later synthesis second; mechanics corroboration only where relevant.</p></div>
      <h2 id="evidence-levels">Six kinds of evidence</h2>
      <div class="evidence-stack">
        <section class="evidence-card"><span>01</span><div><h3>Objective canon</h3><p>A supported truth about the world’s actual structure rather than merely a participant’s assertion.</p></div></section>
        <section class="evidence-card"><span>02</span><div><h3>Observed fact</h3><p>Something witnessed in a scene, quest, transcript, map, screenshot, or other primary record. Observation does not make every interpretation correct.</p></div></section>
        <section class="evidence-card"><span>03</span><div><h3>Character claim or belief</h3><p>A statement that keeps its speaker. It may be sincere, mistaken, incomplete, interested, or substantially true without becoming omniscient narration.</p></div></section>
        <section class="evidence-card"><span>04</span><div><h3>Historical interpretation</h3><p>A supported synthesis connecting multiple records. It explains a pattern without pretending to be a direct observation.</p></div></section>
        <section class="evidence-card"><span>05</span><div><h3>Governance precedent</h3><p>An OOC ruling about consent, adjudication, policy, or play. It may shape history but does not become in-world metaphysics.</p></div></section>
        <section class="evidence-card"><span>06</span><div><h3>Unknown or unresolved</h3><p>A deliberate record of missing dates, contradictions, competing theories, and incomplete regional knowledge.</p></div></section>
      </div>
      <h2 id="consequence">The unit of history is consequence</h2>
      <p>The Codex does not stop at naming a quest. It asks what became true afterward: who remembers, which relationship changed, what place was altered, what knowledge entered or left the world, who paid the price, and which later event depended on it. Ordinary meals, markets, teaching, transport, jokes, and memorials belong in history when they change continuity.</p>
      <p>If an outcome happened honestly at the table, it belongs to history. Dice, missed clues, failed plans, and character deaths may acquire later meaning without being rewritten as predestination. A coherent record preserves the contingency that made the choice real.</p>
      <h2 id="chronology">Discovery order matters</h2>
      <p>The players did not receive a clean biography of Wrath. They met fragments: a hostile journal, a terrifying first encounter, a trade involving Delerium, and a later Legend Lore. Each revelation changed the meaning of the earlier one. The Codex preserves that sequence because <em>how people learned something</em> is part of what happened.</p>
      <h2 id="knowledge-at-the-time">What was knowable at the time</h2>
      <p>A later answer does not grant earlier participants retroactive knowledge. Major histories distinguish what people observed, what they concluded, which choice followed, what later evidence changed, and which consequences were already irreversible. Wrong theories remain historical evidence when people acted on them.</p>
      <h2 id="distributed-knowledge">No automatic omniscience</h2>
      <p>Divine power, faction rank, regional authorship, or administrative authority does not automatically make a speaker omniscient. A regional secret may remain unknown elsewhere. “Scribonia concluded this,” “Talan judged this,” and “this is objectively true” are three different statements.</p>
      <p>World authority is distributed. A person can steward one region and enter another as a genuinely uncertain participant. The archive preserves who authored a place, who knew what, which theory belonged to whom, and what still has no answer.</p>
      <h2 id="spoilers">Spoilers and perspective</h2>
      <p>This first edition is an out-of-character world guide. It includes major historical revelations. Rumor-only and contested material is labeled in the prose rather than quietly promoted to fact.</p>
      <h2 id="revisions-as-record">Revisions are part of the record</h2>
      <p>The chronicle preserves the moment an interpretation changed: Papirak’s memory loss first looked like divine censorship, then Paloma’s sacrifice revealed it as mercy as well as violation. Those revisions are part of the archive’s value. They show which conclusions survived contact with new evidence.</p>
      <h2 id="article-standard">What a complete record tries to preserve</h2>
      <p>Where evidence permits, an article records current state, confidence, chronology, participants, knowledge at the time, attributed beliefs, immediate and later consequences, changed relationships, unresolved questions, and source provenance. A short entry means the surviving archive supports less synthesis—not that its subject mattered less.</p>
      <div class="callout"><p><strong>Editorial principle:</strong> help a newcomer understand the world without erasing the uncertainty, argument, and revision through which it was understood. A referee, regional author, or god is not Ada; stewardship never turns interpretation into automatic truth.</p></div>`
  },
  {
    id: "cosmology-guide", title: "Cosmology & Metaphysics", category: "Cosmology", type: "Structural guide",
    dek: "From Ada’s gift of genuine will to the Chain and Maw, Fenumion’s cosmic history repeatedly asks what powerful caretakers are permitted to do with lives that do not belong to them.",
    tags: ["Ada", "Free will", "One Tree", "Delerium", "Hope", "Death", "Stewardship", "The Maw"],
    facts: { Creator: "Ada", "Divine order": "Created caretakers with delegated domains", Foundation: "Genuine free will", Spine: "26 connected cosmological events", "Central test": "Power does not create permission", "Highest-risk gaps": "Souls · resurrection · Shards · providence · the Maw" },
    sources: ["COSMOLOGICAL_IMPORTANT_EVENTS.md — 26-event connective history supplied 23 Sep 2026", "COSMOLOGY_AND_METAPHYSICS.md — established structure and metaphysical red flags", "CANON_RULES.md — canon and provenance boundaries", "MASTER_TIMELINE.md — dated mortal consequences", "OPEN_QUESTIONS_AND_CONTRADICTIONS.md — unresolved mechanisms"],
    body: `
      <p>Fenumion contains objective cosmology, incomplete mortal knowledge, interested divine testimony, factional belief, and later interpretation. No character automatically speaks for the universe—not even a god. The archive keeps structural fact separate from what a powerful witness claims, what a mortal infers, and what later history has not yet answered.</p>
      <div class="callout gold"><p><strong>Foundational rule:</strong> a will belongs to the person whose will it is. Power may create responsibility, but it does not create ownership or permission.</p></div>
      <h2 id="cosmos-ada">Ada, creation, and genuine will</h2>
      <p><strong>Ada</strong> is the ultimate Creator layer of Fenumion. The beings commonly called gods are created persons beneath Ada: immensely powerful caretakers entrusted with aspects of creation. Mortals and other persons possess genuine wills of their own.</p>
      <p>This is the metaphysical root of the setting’s moral grammar. Talan may tend Justice without becoming justice itself. Physisia may tend Nature without owning every living being. A sacrifice someone freely chooses is not morally interchangeable with a sacrifice selected for them by someone stronger.</p>
      <h2 id="cosmos-domains">The entrusted domains</h2>
      <ul>
        <li><strong>Cala</strong> — Light, Fire, and Battle.</li>
        <li><strong>Nuru</strong> — Night, Wisdom, and Cunning.</li>
        <li><strong>Physisia</strong> — Nature, Order, and Change.</li>
        <li><strong>Aionia</strong> — Time and Space.</li>
        <li><strong>Mya</strong> — Hope.</li>
        <li><strong>Namo’o</strong> — Souls.</li>
        <li><strong>Talan</strong> — Justice and Order.</li>
        <li><strong>Moirah</strong> — Fate and events.</li>
      </ul>
      <p>The structure is established, while the exact hierarchy remains incomplete. Every caretaker can protect, judge, disagree, fail, hide information, become ashamed, or use delegated authority badly. A domain title is evidence of responsibility and capacity—not proof of moral infallibility.</p>
      <h2 id="cosmos-tree">Etz Chaim and the original order of life</h2>
      <p><strong>Etz Chaim</strong>, the One Tree, belongs to the world’s original order of life and pure goodness. It is not Ada. Later Trees, Shards, Hope, Gael, restoration, and corruption echo or intersect with that older order, but resemblance does not establish a single neat metaphysical family tree.</p>
      <p>This boundary matters especially in Babel-Ashur, where the Shard does not behave like the Tree model familiar elsewhere. The archive preserves the relationship as an open problem instead of inventing a universal implementation.</p>
      <h2 id="cosmos-catastrophe">The primordial catastrophe</h2>
      <ol class="timeline">
        <li><time>Order</time><p>Etz Chaim sustains life and divine strength.</p></li>
        <li><time>Conflict</time><p>Divine rivalry turns life’s source into an object of conquest.</p></li>
        <li><time>Corruption</time><p>Nuru and Cala learn to corrupt the Sap into a vessel or weapon; Death enables knowledge of that corruption.</p></li>
        <li><time>Rupture</time><p>The corrupted material associated with amber Delerium damages reality itself.</p></li>
        <li><time>Entrance</time><p>Dumuzi gains access through the catastrophe and feeds dead gods to the Wyrm.</p></li>
        <li><time>Firebreak</time><p>The surviving gods deliberately complete or extend the Shattering, separating regions, Shards, Trees, and survivors to slow something worse.</p></li>
      </ol>
      <p>The caretakers are therefore both culprits and emergency responders. “The gods maliciously shattered everything” and “Death alone broke the world while innocent gods saved it” are equally inadequate.</p>
      <h2 id="cosmos-divine-death">When gods can die</h2>
      <p>Delerium, another god, or power on a comparable scale can kill a divine caretaker. Divinity is not insulation from consequence. Gods can fail, fear, hide, die, and be replaced in mortal history. Delerium is therefore more than dangerous magical fuel: it is corrupted life, theological evidence, a reality wound, and a means by which the supposedly highest local authorities can be ended.</p>
      <h2 id="cosmos-death-answer">Dumuzi’s alternative: surrender</h2>
      <p>Dumuzi’s argument is dangerous because it is built partly from truth. The world is broken. Its caretakers failed. Resurrection does not erase consequence. People are repeatedly asked to continue after losses they did not choose. Death answers by offering finality: end the conditions under which suffering can continue.</p>
      <p>Yet Dumuzi also says, “You must choose me.” In the relevant bargains, choice matters, and a validly sold soul is treated as permanently bound. Free will can therefore be used to surrender ownership of the self: a person is free to give themselves away forever. The exact metaphysical reason for the choice requirement remains unresolved.</p>
      <h2 id="cosmos-mortal-inheritance">Mortals inherit morally non-final gods</h2>
      <p>Later people live in a world where gods demonstrably exist and can provide real help, yet can also be wrong. The landscape contains evidence of their failures; Death can tell uncomfortable truths about them; Ada does not descend to resolve every ambiguity. Faith therefore cannot mean merely believing powerful beings exist. Its harder questions are trust, obedience, gratitude, judgment, and stewardship.</p>
      <h2 id="cosmos-wrath-gael">Wrath, Gael, and the question of whose sacrifice</h2>
      <p>Roderick turns love into possession, grief into corrupted resurrection, and personal suffering into permission to spend strangers. Wrath’s answer to “Whose sacrifice?” is effectively: <em>yours, because I suffered.</em></p>
      <p>His defeat does not repair Gael. The cosmic war becomes refugee shelter, soil, food, bowls, roads, wreckage, consultation, and ordinary labor. Gael’s recovery offers a mortal counter-model to failed divine stewardship: attention, consent, and accumulated care rather than catastrophic control.</p>
      <h2 id="cosmos-gate-judgment">The Gate and contestable divine justice</h2>
      <p>On 30 July 2024, four archways or runes and realm pools participate in the intentional opening of the Gate. Seven newcomers arrive through a coalition involving the divine caretakers; their precise origins and degree of volition remain partly unresolved. The event makes the divine order observable rather than legendary.</p>
      <p>That same day, Arjahn asks Aionia for a diamond to resurrect a companion. Talan refuses on grounds of justice and consequence. Arjahn accepts the judgment, but history preserves the harder question: Talan tends Justice and Order; is his judgment identical to justice itself?</p>
      <h2 id="cosmos-knowledge-loyalty">Knowledge, loyalty, and agency</h2>
      <p>On 21 September 2024, Olo’s Rahu oath prevents him from simply disclosing protected Delerium knowledge. He cooperates with friends investigating him while resisting enough to keep the oath. Knowledge becomes morally consequential: truth can preserve agency, betray belonging, create dangerous capacity, or become domination.</p>
      <p>The same problem returns when Magnus restores the memory Namo’o removed from Papirak. Discovering truth does not automatically grant the right to force another person to bear it.</p>
      <h2 id="cosmos-aria-abyss">Aria, the Abyss, and ownership</h2>
      <p>Aria’s formative suffering is entangled with failed prayer and Talan-associated authority. Her rise into Pride seeks enough power that nobody can make her helpless again. When Talan kills her on 6 November 2025, the caretaker of Justice ends the life of someone whose wound was already shaped by divine failure. His act does not automatically supply its final moral interpretation.</p>
      <p>In January 2026, the Abyss or Kurayami presents another form of ownership. Olo chooses Wren over Aravil under impossible pressure; Aravil is taken as a trophy; the Abyss commands “Olokun. Die.” and kills him. Arjahn then resurrects Olo with the Scepter of Faith Olo had previously given him. An old gift becomes the causal condition of return, proving that resurrection can deepen history rather than reset it.</p>
      <h2 id="cosmos-hope">Hope as possibility, not guarantee</h2>
      <p>Hope is not merely optimism. Through Mya, Gael, Nienna, Adelia, the Trees and Shards, and the survival of damaged places, Hope becomes structurally opposed to Death’s claim that suffering should have the final word.</p>
      <p>Hope does not promise survival, victory, or fairness. Nienna can die. Aria can die unfinished. The Common Man can burn. A sacrifice can fail. Hope preserves <strong>possibility</strong>: tomorrow is not owned by today’s suffering.</p>
      <p>Adelia’s transformation matters because she chooses the sacrifice herself. The Miracle of Fenumion similarly allows an event to be experienced as grace without turning an improbable result into proof that Ada directly caused it.</p>
      <h2 id="cosmos-mortal-caretakers">Mortals approach the gods’ old precipice</h2>
      <p>Elenia’s increasing power, Magnus’s pursuit of truth and leverage, Gartina’s stewardship, and the Vanguard’s survival work all move mortals into decisions once reserved for divine beings. Elenia’s central question is not whether she becomes powerful, but whether she can become a caretaker without becoming an owner. Magnus demonstrates that knowledge without stewardship can violate agency as surely as force.</p>
      <p>Babel-Ashur shows the cosmic war continuing in an exhausted region whose Shard resists familiar categories. Its defenders inherit obligations created by ancient powers without receiving the power or certainty those obligations seem to demand.</p>
      <h2 id="cosmos-maw">The Chain and Maw</h2>
      <p>In September 2026, Ithilrûnë, Sildithas, Coralyn, Pappy, and others confront <a href="#voraketh">Voraketh</a>, an isolated land where a Delerium Chain suppresses power and dangerous constructs defend or repair it. The Maw consumes magic and exerts tremendous pull. One figure appears trapped within; another may be watching. The name Derya Thorne has been recovered, but identities and allegiances remain unknown.</p>
      <p>The evidence places Talan, Delerium, imprisonment, and divine fear inside the same problem without explaining their relationship. Ithilrûnë’s competing theories remain theories. Sildithas answers the absence of sufficient knowledge by returning to an oath of mercy, flourishing, joy, beauty, courage, and hope—and proposing a feast beside the unresolved horror.</p>
      <h2 id="cosmos-spine">The connective spine</h2>
      <p><strong>Ada creates free persons and caretakers → caretakers receive power without ownership → divine conflict corrupts the Sap → Delerium damages reality and enables divine death → Death gains access → the gods complete the Shattering as a firebreak → mortals inherit fallible authorities → Death argues for final surrender → Hope preserves possibility → mortals gain enough power to face the gods’ original test.</strong></p>
      <p>The resulting question is not only “Can you save this?” It is: <strong>What are you allowed to do to someone else in order to save it?</strong></p>
      <h2 id="cosmos-boundaries">Boundaries the archive preserves</h2>
      <ul>
        <li>The full One Tree–Shard–regional Tree–Hope relationship.</li>
        <li>Universal rules for souls, resurrection, and Dumuzi’s requirement of choice.</li>
        <li>The exact primordial sequence and Ada’s frequency of direct intervention.</li>
        <li>Kurayami’s origin and the relationship among Death, the Abyss, blood, gifts, and collection.</li>
        <li>Derya Thorne’s identity, the Maw’s purpose, the observing figure, the Chain’s history, and Talan’s actual role.</li>
      </ul>
      <div class="callout"><p><strong>Reading rule:</strong> a god’s explanation is evidence from a powerful witness, not automatically Ada’s voice or objective truth.</p></div>`
  },
  {
    id: "themes", title: "Themes of Fenumion", category: "Foundations", type: "Interpretive index",
    dek: "The questions that recur across divine catastrophe, ordinary care, political power, grief, and the choices people make under pressure.",
    tags: ["Whose sacrifice?", "Stewardship", "Knowledge", "Hope", "Ordinary life"],
    facts: { "Central question": "Whose sacrifice?", Counterweight: "Power does not create permission", Measure: "Ordinary life", Method: "Evidence before interpretation" },
    sources: ["THEMES_AND_STYLE.md — thematic and literary framework", "CANON_RULES.md — operating principles", "MASTER_TIMELINE.md — cross-timeline thematic links", "Fenumion_Core_Most_Important_Parts_2026-09-24.zip — five core questions and thematic cautions"],
    body: `
      <p>Fenumion’s themes are recurring questions, not verdicts that every scene must announce. They become visible because different people answer them differently and then live inside the consequences.</p>
      <div class="evidence-stack">
        <section class="evidence-card"><span>01</span><div><h3>Whose sacrifice?</h3><p>Voluntarily spending oneself is not morally interchangeable with deciding that somebody else must be spent.</p></div></section>
        <section class="evidence-card"><span>02</span><div><h3>Stewardship is not ownership</h3><p>Gods, rulers, teachers, protectors, and caretakers may hold real authority without owning another person’s will.</p></div></section>
        <section class="evidence-card"><span>03</span><div><h3>Knowledge changes responsibility</h3><p>Knowledge can preserve informed choice, become leverage, expose duty, or provide a new language for domination.</p></div></section>
        <section class="evidence-card"><span>04</span><div><h3>Understanding is not forgiveness</h3><p>A villain may love, suffer, or tell the truth and remain dangerous. Explanation does not neutralize the sword.</p></div></section>
        <section class="evidence-card"><span>05</span><div><h3>The past keeps acting</h3><p>An old gift enables a resurrection; a burned tavern determines where people gather; a retreat changes the meaning of a later sacrifice.</p></div></section>
        <section class="evidence-card"><span>06</span><div><h3>Ordinary life is evidence</h3><p>Soup, bowls, schools, farms, markets, gardens, transport, and friendships show whether a cosmic victory produced a world worth living in.</p></div></section>
        <section class="evidence-card"><span>07</span><div><h3>Knowledge does not create ownership</h3><p>Knowing a truth—or possessing the power to reveal it—does not automatically grant authority to force it into another person’s life.</p></div></section>
        <section class="evidence-card"><span>08</span><div><h3>Relationships make history possible</h3><p>Gifts, trust, grief, mentorship, belonging, and unfinished love can determine which choices remain possible years later.</p></div></section>
      </div>
      <h2 id="hope-without-guarantee">Hope without guarantee</h2>
      <p>Hope does not promise survival, victory, fairness, or rescue. Nienna’s sacrifice could fail. A random Reincarnate result could change identity. Aria could die before her arc resolved. The Common Man could burn. Hope preserves possibility: tomorrow is not owned by today’s suffering. That makes it a structural answer to Dumuzi’s promise of finality without reducing it to guaranteed providence.</p>
      <h2 id="analysis-with-restraint">Analysis with restraint</h2>
      <p>The archive asks what a person repeatedly does, which relationships change behavior, who else is in the room, and which conclusion is evidence rather than interpretation. It does not make every simple person secretly profound or every confident god correct.</p>`
  },
  {
    id: "relationships", title: "Relationships in Motion", category: "People", type: "Relationship history",
    dek: "Relationships are historical objects: they acquire triggers, asymmetries, reversals, obligations, and consequences over time.",
    tags: ["Relationships", "Change over time", "Agency", "Memory"],
    facts: { Model: "Prior state → event → change → consequence", Rule: "Never only friend or enemy", Focus: "Behavior and asymmetry", Coverage: "Major recovered arcs" },
    sources: ["RELATIONSHIPS.md — longitudinal relationship index", "CHARACTER_BIBLE.md — person-level chronology", "MASTER_TIMELINE.md — dated consequences", "Fenumion_Core_Most_Important_Parts_2026-09-24.zip — relationships as causal infrastructure"],
    body: `
      <p>A static label such as <em>friend</em>, <em>enemy</em>, <em>teacher</em>, or <em>romance</em> cannot preserve what a relationship did to history. The archive tracks what came before, which event altered it, what each person believed, what behavior changed, and what remained unresolved.</p>
      <div class="callout gold"><p><strong>Relationship method:</strong> what each person wanted → what changed through contact → how behavior changed → which later event became possible → what obligation survived separation or death.</p></div>
      <h2 id="love-and-opposition">Love without moral agreement</h2>
      <p><a href="#olokun"><strong>Olokun and Aria</strong></a> move from enemies toward familiarity, enjoyment, emotional importance, and love without resolving their political or moral opposition. Olo’s tenderness does not erase Scribonia’s imprisonment; Aria’s harms do not make Olo’s experience false.</p>
      <h2 id="old-actions-return">Old actions return through people</h2>
      <p><a href="#arjahn"><strong>Olokun’s gift to Arjahn</strong></a> later becomes the means of Olo’s resurrection. <a href="#nienna"><strong>Nienna’s loss of Jiangshi</strong></a> shapes the meaning of her final sacrifice. <a href="#adelia-hope"><strong>Adelia’s bond with Hope</strong></a> precedes and explains her later transformation.</p>
      <h2 id="care-without-control">Care without control</h2>
      <p><a href="#dale"><strong>Dale supports Saray</strong></a> while recognizing he cannot command her out of guilt. Gartina and Jiangshi compare analytic and embodied models of care without the record declaring a winner. Elenia’s relationships with Nienna, Adelia, and Magnus repeatedly test whether protection can remain stewardship rather than possession.</p>
      <h2 id="knowledge-and-boundaries">Knowledge and boundaries</h2>
      <p><a href="#eugene"><strong>Scribonia and Eugene</strong></a> move beyond teacher and student. Scribonia envies the dangerous knowledge entrusted to Eugene, yet recognizes that a former student does not owe every explanation. <a href="#casimir-alioth"><strong>Casimir and Alioth</strong></a> expose competing interpretations of loyalty: interpersonal strength to Alioth, institutional failure to Ephraith.</p>
      <h2 id="obligations-that-survive">Obligations that survive</h2>
      <p><a href="#elenia"><strong>Nienna remains active in Elenia’s choices</strong></a> after death. <a href="#papirak-paloma"><strong>Papirak and Paloma</strong></a> connect love, voluntary cost, erased memory, restored truth, and atonement across two millennia. <a href="#olokun"><strong>Olokun’s belonging to Rahu</strong></a> makes his criticism an obligation from within rather than dismissal from outside.</p>
      <h2 id="magnus-network">Magnus and contested belonging</h2>
      <p><a href="#magnus"><strong>Magnus Niriin</strong></a> belongs to no single relationship verdict. Dumuzi owns his soul; Zarathis remains the culture he sincerely calls his own; Aria’s fall destabilizes him; Elenia opposes him through terrifying force; Adelia supports and revives him before their later rupture; Miriel advances his political legitimacy; Wren’s trust collapses; Eugene still tries to heal him; and Olokun resists treating him as disposable.</p>
      <h2 id="love-and-possession">When love becomes possession</h2>
      <p><a href="#roderick-wrath"><strong>Roderick and Endora</strong></a> are the archive’s clearest warning. Genuine love becomes coercion, then refusal of death, then universalized suffering. Understanding the love does not forgive what Roderick makes it authorize.</p>`
  },
  {
    id: "open-questions", title: "Unresolved Record", category: "Archive", type: "Open questions and contradictions",
    dek: "The gaps, disputed claims, and dangerous unknowns the archive preserves instead of repairing with invention.",
    tags: ["Unresolved", "Contradictions", "Provenance", "Research priorities"],
    facts: { Cosmology: "7 high-risk questions", Chronology: "8 major gaps", Characters: "7 active gaps", Rule: "Preserve the question when resolved" },
    sources: ["OPEN_QUESTIONS_AND_CONTRADICTIONS.md — tracked uncertainties", "COSMOLOGY_AND_METAPHYSICS.md — metaphysical red flags", "MASTER_TIMELINE.md — chronology gaps"],
    body: `
      <p>Absence is data. A missing mechanism, conflicting memory, or unverified theory belongs in the Codex when pretending certainty would distort the world.</p>
      <div class="callout gold"><p><strong>Resolution rule:</strong> when evidence answers an old question, preserve the former uncertainty and append the resolution. Discovery order is part of history.</p></div>
      <h2 id="cosmology-questions">Cosmology</h2>
      <ul><li>When and how does Ada intervene directly?</li><li>Why must Dumuzi be chosen?</li><li>What precisely connects the One Tree, Shards, regional Trees, and Hope?</li><li>What was the full mechanism and sequence of the Shattering?</li><li>What universal rules, if any, govern souls and resurrection?</li><li>What is Kurayami’s origin?</li></ul>
      <h2 id="chronology-questions">Chronology</h2>
      <ul><li>What happened between Gael’s June 2024 devastation and its established restoration by February 2025?</li><li>When and how was Death defeated in Gael?</li><li>What are the exact sequences of Nienna’s final sacrifice and Adelia’s transformation?</li><li>When did the Common Man burn?</li><li>What is Eovar’s broader history?</li><li>What happened to Thorn between death, the cult ritual, and her return?</li></ul>
      <h2 id="contradictions">People and contradiction</h2>
      <p>An early account gives Aria an older brother; a later statement says she has no siblings. Saray’s history between Nienna’s death and the final blow against Wrath is incomplete. Dale, Adelia, Scribonia, Casimir, and Alioth still need fuller longitudinal recovery.</p>
      <h2 id="cave-questions">The September cave</h2>
      <p>The violet crystals’ nature, the corpse’s identity and contamination source, the cave’s destination, and the malformed harpies’ origin are all unresolved. Moira’s theory that the cave connects to a known Delerium source is preserved as her hypothesis—not geography.</p>`
  },
  {
    id: "source-catalogue", title: "The Source Catalogue", category: "Archive", type: "Record index",
    dek: "A detailed catalogue provides the archive’s map: people, events, places, claims, sources, and consequences.",
    tags: ["Markdown", "Provenance", "Sources", "Archive"],
    facts: { Format: "Markdown", Length: "234 lines", Purpose: "Index, not canon", Method: "Claims remain attached to speakers and sources" },
    sources: ["Fenumion Archive Catalogue — character, event, place, and source index", "Cited campaign exports and primary scenes"],
    body: `
      <p>A purpose-built catalogue turns the sprawling record into a usable research system. It is not an omniscient lore bible. Its warning is essential: precise claims must be checked against the underlying logs, and an NPC’s belief, a witness’s interpretation, and objective setting history are different kinds of evidence.</p>
      <div class="callout gold"><p><strong>The catalogue’s unit is historical consequence, not quest.</strong> A wall, a death, an argument, or a promise remains indexed because it continues to affect later people.</p></div>
      <h2 id="six-records">Six linked kinds of record</h2>
      <div class="evidence-stack">
        <section class="evidence-card"><span>01</span><div><h3>People</h3><p>Player characters, NPCs, gods, rulers, witnesses, and their changing relationships.</p></div></section>
        <section class="evidence-card"><span>02</span><div><h3>Events</h3><p>What happened, when it entered play, and which later revelation changed its meaning.</p></div></section>
        <section class="evidence-card"><span>03</span><div><h3>Places</h3><p>Islands, settlements, ruins, and the ordinary systems that make each location livable.</p></div></section>
        <section class="evidence-card"><span>04</span><div><h3>Claims</h3><p>Statements that retain their speaker, date, confidence, and possible contradiction.</p></div></section>
        <section class="evidence-card"><span>05</span><div><h3>Sources</h3><p>The exact Markdown export, transcript, image, or retrospective from which a claim derives.</p></div></section>
        <section class="evidence-card"><span>06</span><div><h3>Consequences</h3><p>The later choices, institutions, griefs, and material changes an earlier act made possible.</p></div></section>
      </div>
      <h2 id="editorial-rules">What it protects</h2>
      <ul>
        <li><strong>Discovery order:</strong> learning that Roderick used Delerium months after meeting Wrath is not the same experience as knowing it in advance.</li>
        <li><strong>Contradiction:</strong> Aria’s claim that she had no sibling remains beside the older-brother account rather than being silently reconciled.</li>
        <li><strong>Source bias:</strong> Vysaeth’s accusations matter without becoming an invisible narrator’s verdict.</li>
        <li><strong>The ordinary world:</strong> farms, taverns, marriages, walls, food stores, and memorials remain part of history.</li>
      </ul>
      <p>This edition uses that method throughout. Open <strong>Documents used</strong> beneath an entry to see the files that anchor its synthesis.</p>`
  },
  {
    id: "archive-map", title: "Map of the Archive", category: "Archive", type: "Reading paths",
    dek: "Four routes through Fenumion, depending on whether you want the world, its moral argument, its people, or its chronology first.",
    tags: ["Reading path", "Archive", "Themes", "Chronology"],
    facts: { "Best overview": "Fenumion", "Cosmic entry": "The Great Fracture", "Human entry": "Community as Protagonist", "Core case": "Papirak & Paloma" },
    body: `
      <p>Fenumion’s record is intentionally expansive. This map turns its major lines of inquiry into four practical reading paths without pretending they are separate histories.</p>
      <h2 id="world-path">The world path</h2>
      <p>Read <a href="#fenumion">Fenumion</a>, <a href="#great-fracture">The Great Fracture</a>, <a href="#prima-pristinia">Prima &amp; Pristinia</a>, and <a href="#community">The Community as Protagonist</a>. This path moves from cosmology to ordinary life and explains why both scales are necessary.</p>
      <h2 id="price-path">The price of power path</h2>
      <p>Read <a href="#papirak-paloma">Papirak &amp; Paloma</a>, <a href="#magnus">Magnus</a>, <a href="#death-dumuzi">Death / Dumuzi</a>, and <a href="#roderick-wrath">Roderick / Wrath</a>. Together they form the archive’s clearest argument about power, informed choice, and responsibility for another person’s cost.</p>
      <h2 id="relationship-path">The relationship path</h2>
      <p>Read <a href="#olokun">Olokun</a>, <a href="#jiangshi">Jiangshi</a>, <a href="#elenia">Elenia</a>, and <a href="#nienna">Nienna</a>. These entries show how care can preserve agency—and how grief can tempt care to become control.</p>
      <h2 id="revelation-path">The revelation path</h2>
      <p>Read <a href="#living-timeline">Narrative History</a>, then the Roderick and Papirak case studies. This is the best route for seeing history revise itself as later records turn old facts into new meanings.</p>`
  },
  {
    id: "great-fracture", title: "The Great Fracture", category: "Cosmology", type: "Cosmic history",
    image: "assets/archive/abyss.png", imageAlt: "A dark abyssal rupture preserved in the archive", imageCaption: "Abyss — one of Fenumion’s preserved visual records.",
    dek: "The Void is not merely an invading corruption. It is the scar left when the gods broke creation to prevent something worse.",
    tags: ["Etz Chaim", "Void", "The Wyrm", "Divine war"],
    facts: { Origin: "Etz Chaim / the One Tree", Catalyst: "Divine struggle for power", Wound: "Corrupted Sap and the Void", Result: "Creation deliberately shattered" },
    body: `
      <p>The archive’s current synthesis begins with Etz Chaim, the One Tree: a source of life and divine strength. The gods’ desire for greater power led to war. Nuru and Cala corrupted the Tree’s Sap, the corruption fractured reality, and the Void became accessible. Through that opening came Death.</p>
      <h2 id="causal-chain">The causal chain</h2>
      <ol class="timeline">
        <li><time>First</time><p>Etz Chaim sustains life and divine power.</p></li>
        <li><time>Then</time><p>Divine rivalry turns the source of life into an object of conquest.</p></li>
        <li><time>Rupture</time><p>Nuru and Cala corrupt the Sap. Reality fractures and the Void becomes reachable.</p></li>
        <li><time>Entrance</time><p>Death enters creation and feeds dead gods to the Wyrm.</p></li>
        <li><time>Last resort</time><p>The gods shatter the plane. Separated remnants hide survivors and slow Death and the Wyrm.</p></li>
      </ol>
      <h2 id="scar-tissue">The Void as scar tissue</h2>
      <p>This reframes the world map. The broken places are not simply territory claimed by an outside enemy. They are the price of a decision: an intact world had become more dangerous than a shattered one.</p>
      <h2 id="moral-weight">The moral weight</h2>
      <p>The gods’ act can be both horrifying and heroic. They helped cause the catastrophe, then accepted an almost unthinkable cost to contain it. Fenumion’s divine order is therefore neither a clean pantheon of protectors nor a simple conspiracy of villains. It is a group of powerful beings living inside the consequences of what they chose.</p>`
  },
  {
    id: "death-dumuzi", title: "Death / Dumuzi", category: "Cosmology", type: "Cosmic power",
    image: "assets/archive/throne.png", imageAlt: "A dark throne associated with the Death image archive", imageCaption: "Throne — supplied alongside the archive’s Death and Knight imagery.",
    video: "assets/archive/death-dumuzi.mp4", videoAlt: "Death / Dumuzi, his golden eyes emanating power as the view moves closer", videoCaption: "Death / Dumuzi — supplied moving character portrait.",
    dek: "Death can destroy, bargain, and corrupt—but the mortal soul is the territory he cannot simply conquer.",
    tags: ["Death", "Knights", "Choice", "Soul"],
    facts: { "Known as": "Dumuzi; Death", Constraint: "A mortal soul must choose him", Order: "Commands numbered Knights", Relationship: "Father of Aria / Pride" },
    sources: ["COSMOLOGICAL_IMPORTANT_EVENTS.md — Dumuzi’s alternative cosmology and later testimony", "COSMOLOGY_AND_METAPHYSICS.md — soul-choice boundary", "MASTER_TIMELINE.md — Wrath, Aria, Magnus, Kurayami, and Velkyn events"],
    body: `
      <p>Dumuzi is Death, but not an unlimited owner of the dead. The most consequential rule revealed in the archive is that he cannot simply take a mortal soul. He may kill, tempt, frighten, bargain, and arrange the world around a choice, but the choice remains necessary.</p>
      <div class="quote">You must choose me.<cite>Dumuzi</cite></div>
      <h2 id="knights">The Knights</h2>
      <p>Death’s champions form an ordered succession rather than a loose collection of villains. Roderick is Knight I, Wrath. Aria is Knight II, Pride. Other titles and successors appear throughout the archive, but their complete order remains a developing article.</p>
      <h2 id="father-and-claimant">Father and claimant</h2>
      <p>After Aria’s death, Dumuzi comes for her body. Yet even while demonstrating overwhelming force, he asks for it rather than simply taking it. That contradiction becomes evidence of the same cosmic boundary: power can end a life without necessarily owning the person.</p>
      <h2 id="temptation">How Death works</h2>
      <p>His most dangerous offers answer a real wound. He offers restoration to people standing beside someone they have lost. He rewards effort according to his own value system. The price is not hidden, but grief can make consent complicated. Death’s victories begin where a person decides that the cost belongs to someone else.</p>
      <h2 id="surrender">An alternative cosmology of surrender</h2>
      <p>Dumuzi’s indictment is not built entirely from lies. Creation is broken, the gods failed, people suffer, and resurrection cannot erase consequence. His answer is finality: end the conditions under which suffering can continue. Hope threatens that philosophy because it preserves a future suffering does not already own.</p>
      <p>The grotesque inversion is that free will can be used to surrender the self permanently. Dumuzi can arrange grief, exhaustion, truth, and desire around the moment someone chooses him, but his own words preserve the requirement that a choice occur.</p>`
  },
  {
    id: "cala", title: "Cala", category: "Cosmology", type: "Divine figure",
    image: "assets/archive/cala-poster.png", imageAlt: "Cala, radiant and winged, raising a sword amid sacred fire", imageCaption: "Cala — still from the supplied moving character portrait.",
    video: "assets/archive/cala.mp4", videoAlt: "Cala, a radiant goddess of war and light, burning amid destruction", videoCaption: "Cala — supplied moving character portrait.",
    dek: "A goddess of light who calls for heroes while carrying responsibility for the old catastrophe.",
    tags: ["Light", "Gods", "Elenia", "Divine responsibility"],
    facts: { Sphere: "Light and heroism", "Ancient role": "Participant in the Sap’s corruption", "Modern role": "Guide and patron", Tension: "Protection versus consent" },
    body: `
      <p>Cala is admirable and troubling for many of the same reasons. She believes the world needs heroes, not merely soldiers, and she can recognize extraordinary moral light in mortals. Yet early records show a power still fighting the last war: urgent, secretive, and willing to think in terms of necessary pieces.</p>
      <h2 id="past">The past she carries</h2>
      <p>Cala and Nuru’s corruption of Etz Chaim’s Sap belongs to the causal chain that admitted Death into creation. Later versions of Cala may be understood partly as someone formed by the consequences of that choice.</p>
      <h2 id="elenia">Cala and Elenia</h2>
      <p>Elenia’s devotion does not require believing the gods are morally flawless. In some records, divine figures admire her precisely because she demonstrates a purer form of the hope they intended to protect. Their relationship is most interesting when the mortal is not reduced to the lesser moral participant.</p>
      <h2 id="heroes">Heroes, not fodder</h2>
      <p>Cala insists that catastrophe requires people capable of making genuine choices. The archive keeps asking whether she fully respects those choices—or whether urgency tempts her to design heroes for a war whose origins they were not told.</p>`
  },
  {
    id: "mya", title: "Mya", category: "Cosmology", type: "Goddess of Hope",
    image: "assets/archive/mya.jpeg", imageAlt: "Mya, a luminous blonde goddess cradling a crystal lit from within by violet energy", imageCaption: "Mya — Goddess of Hope.",
    dek: "A goddess of Hope who asks wonder to survive contact with darkness and makes renewal from what has already been harmed.",
    tags: ["Hope", "Elenia", "Wonder", "Brianna"],
    facts: { Domain: "Hope", Promise: "Possibility, not guaranteed rescue", Relationship: "Follows and encourages Elenia", "Known act": "Cleanses Brianna’s corrupted crystal", Method: "Renewal through prior harm" },
    sources: ["COSMOLOGICAL_IMPORTANT_EVENTS.md — Hope as a metaphysical answer to finality", "CHARACTER_BIBLE.md — Mya and Elenia", "MASTER_TIMELINE.md — Brianna, Babel-Ashur, and Hope-related events"],
    body: `
      <p>Mya enters the recovered record through relationship rather than distant doctrine. In June 2024 she tells Elenia to remain a child of wonder and to be a light where darkness is strongest. Elenia’s immediate answer is practical and almost playful: she casts Light.</p>
      <div class="quote">Be a child of wonder—and a light where darkness is strongest.<cite>Mya</cite></div>
      <h2 id="hope">Hope as a practice</h2>
      <p>Mya’s connection to Elenia frames hope as something enacted, not merely felt. The important movement is from wonder toward responsibility: encounter darkness clearly, then decide what light can still be made there.</p>
      <h2 id="possibility">Possibility without guarantee</h2>
      <p>Hope does not promise survival, victory, or fairness. Its opposition to Death is deeper than optimism against despair: Dumuzi argues that suffering should have the final word, while Hope preserves the possibility that tomorrow can contain something today cannot justify or foresee.</p>
      <h2 id="crystal">Brianna’s crystal</h2>
      <p>The archive credits Mya with cleansing Brianna’s corrupted crystal. The act matters because it does not pretend the earlier harm never existed. It makes a future through the damaged object rather than requiring history to disappear first.</p>
      <h2 id="evidence">What remains to be recovered</h2>
      <p>Mya is still underrepresented compared with the mortal lives shaped by Hope. This article preserves the established encounters without turning a small number of scenes into a complete divine biography.</p>`
  },
  {
    id: "delerium", title: "Delerium", category: "Cosmology", type: "Corruptive substance",
    dek: "Corrupted Sap from Etz Chaim: powerful, useful, alive with appetite, and never merely an obviously evil stone.",
    tags: ["Corruption", "Etz Chaim", "Prima", "The Before"],
    facts: { Nature: "Corrupted Sap", Effect: "Power coupled to bodily and spiritual cost", "Major site": "A vein beneath The Before", "Historical victim": "Melian’s civilization" },
    body: `
      <p>Delerium is tempting before it is understood. It offers real power, which is why intelligent people can debate using it rather than dismissing it as a trap for fools. The functional truth arrives through encounters: corruption of body and land, creatures that exploit it, and the sense that it wants the user’s life force.</p>
      <h2 id="origin">Origin</h2>
      <p>The current cosmological synthesis identifies Delerium as corrupted Sap of Etz Chaim, born from the divine violation that fractured reality and made the Void accessible.</p>
      <h2 id="before">The Before</h2>
      <p>Melian’s builders discovered Delerium and tried to use it. Corruption followed, and creatures from terrible realms took advantage of its power, burrowing beneath the city and consuming the civilization from within. A vein still runs beneath The Before on Prima.</p>
      <h2 id="lesson">The lesson</h2>
      <p>Melian does not conclude that knowledge itself is forbidden. Her answer is preparation: learn before acting. That distinction captures Fenumion’s treatment of dangerous power. Understanding does not guarantee safety, but ignorance is not innocence once the cost is known.</p>`
  },
  {
    id: "prima-pristinia", title: "Prima", category: "Places", type: "Island and parent location",
    image: "assets/archive/pristinia.webp", imageAlt: "Illustrated landscape and settlement of Pristinia", imageCaption: "Pristinia — original image preserved in the archive.",
    mapId: "pristinia", mapLinkLabel: "Explore the interactive Prima and Pristinia map",
    dek: "A hidden island where the Gate, The Before, Pristinia, Delerium, and Papirak’s sacrifice form one continuous history.",
    tags: ["Prima", "Locations", "The Gate", "The Before"],
    facts: { Type: "Island / major region", Settlement: "Pristinia", Sublocations: "The Gate · The Before", "Civic memory": "The Common Man → Pilgrim’s Hearth", "Ancient wound": "A Delerium vein beneath The Before" },
    sources: ["Pasted markdown(20260918-034805).md — the Delerium assault and the wall", "Pasted markdown(20260918-182039).md — Farmer Frank, Herb, Aravil, and winter food", "Pasted markdown(20260918-035548).md — Melian, The Before, and the Gate", "New Year.pdf — retrospective on what the community built"],
    body: `
      <p>Prima compresses Fenumion’s whole argument into one island: an ancient Gate, a civilization destroyed by corrupted life, a new settlement above the wound, and a community attempting a different relationship with power.</p>
      <h2 id="sublocations">Sublocations</h2>
      <p><a href="#pristinia"><strong>Pristinia</strong></a> is the growing settlement where walls, farms, taverns, and food stores make history tangible. <a href="#common-man"><strong>The Common Man</strong></a> was its accumulated civilian room; after zombie pirates burned it, Pilgrim’s Hearth inherited the same foundations. <a href="#the-gate"><strong>The Gate</strong></a> is the ancient mechanism that awakened when modern adventurers began arriving. <a href="#the-before-melian"><strong>The Before</strong></a> is Melian’s ruined city, built above the Delerium vein that destroyed it.</p>
      <h2 id="old-wounds">The Before beneath the future</h2>
      <p>Melian’s people found Delerium, tried to use it, and were consumed from below. Her answer is not to prohibit knowledge but to make it preparation. The Gate had been dormant since an age when gods walked openly; it awakened only when modern adventurers began arriving. Prima therefore joins ancient divine failure, mortal repetition, and the possibility of a different response.</p>
      <h2 id="papirak">The cost of saving Prima</h2>
      <p>Papirak’s extraordinary Wish isolated the realm from spreading Delerium. Paloma voluntarily became its complete price, and Namo’o later removed Papirak’s memory as mercy. Prima was saved, but the island’s survival cannot be separated from the archive’s hardest question: <em>whose sacrifice?</em></p>`
  },
  {
    id: "pristinia", title: "Pristinia", category: "Places", type: "Prima sublocation · settlement",
    image: "assets/archive/pristinia.webp", imageAlt: "Illustrated landscape and settlement of Pristinia", imageCaption: "Pristinia — original image preserved in the archive.",
    mapId: "pristinia", mapLinkLabel: "Explore the interactive Pristinia map",
    dek: "Prima’s growing settlement, built through walls, food, farms, taverns, promises, and the ordinary labor that makes cosmic survival worth having.",
    tags: ["Prima", "Pristinia", "Settlement", "Community"],
    facts: { Parent: "Prima", Type: "Settlement", Pressure: "Population, winter, food supply", Defenses: "Player-built walls" },
    sources: ["Pasted markdown(20260918-034805).md — the Delerium assault and the wall", "Pasted markdown(20260918-182039).md — Farmer Frank, Herb, Aravil, and winter food", "New Year.pdf — retrospective on what the community built"],
    body: `
      <p>Pristinia is where Prima’s cosmic stakes become measurable. It needs defenses, harvest labor, winter stores, laws, festivals, and people willing to notice when a neighbor is carrying too much.</p>
      <h2 id="wall">The wall became history</h2>
      <p>In April 2024, adventurers—including Nienna—spent hours finishing Pristinia’s wall. In July an army struck it. The wall held a mighty blow because the players had built it; then sections began to fall. A routine community task returned three months later as material protection and emotional cost.</p>
      <p>The assault also taught Delerium mechanically. Contamination made people feel stronger but less alive, while a haze fed on its energy, passed the defenses, and entered town. The siege engines were a distraction. The event ended; its contamination did not.</p>
      <h2 id="ordinary-pressure">A town under ordinary pressure</h2>
      <p>Population growth overworks Farmer Frank and strains winter food. Inside <a href="#common-man">the Common Man</a>, Herb mentions dwindling dried fruit and an underworked farm. Aravil asks whether foraging can help; Tobias volunteers; a hunting expedition forms without a quest giver. Herb’s limit is as important as the need: take roughly twelve elk, not so many that next year’s herd is destroyed.</p>
      <h2 id="belonging">Belonging through usefulness</h2>
      <p>Aravil recognizes that hunting may be her place in the town. Skye refuses to exploit Lichen’s ignorance of money and makes an alarming stranger feel safe. Herb knows stores, habits, wages, and ecology. Pristinia is governed as much through local knowledge and mutual restraint as through spectacular heroism.</p>
      <h2 id="rebuilding-2026">Rebuilding becomes ordinary · 2026</h2>
      <p>After zombie pirates burned <a href="#common-man">the Common Man</a>, Pilgrim’s Hearth rose on the same foundations. By September 19 it was again a place where adventurers drank tea, socialized, and exchanged news. The Magic Academy was open: Marius and Aurélia studied under Scribonia, while Saoirse prepared material for her future turn teaching younger students. Thorn’s plan to bless the farm before returning to Gael adds a smaller but telling continuity—adventurers contributing directly to the harvest.</p>
      <p>Return to the <a href="#prima-pristinia">Prima overview</a> for The Gate, The Before, and the island’s ancient history.</p>`
  },
  {
    id: "common-man", title: "The Common Man", category: "Places", type: "Pristinia tavern; civilian institution",
    dek: "Pristinia’s ordinary room: a tavern where work, music, hunger, memorial, newcomers, and years of returning people became history.",
    tags: ["The Common Man", "Pristinia", "Pilgrim’s Hearth", "Ordinary life", "Jiangshi"],
    facts: { Parent: "Pristinia · Prima", Function: "Tavern, workplace, meeting and memorial space", Fate: "Burned by zombie pirates", Successor: "Pilgrim’s Hearth on the same foundations" },
    sources: ["The_Common_Man_Location_Profile_and_History.md — consolidated location history, people, quotations, and evidence limits", "Pasted markdown(20260918-182039).md — food pressure, Farmer Frank, Herb, Aravil, and Lichen", "State of the World record — destruction aftermath and Pilgrim’s Hearth succession"],
    body: `
      <p>The Common Man became one of Pristinia’s most important places because people kept returning. Adventurers drank there, civilians worked there, newcomers met the world there, musicians played for coppers, memorials were held, and the material pressures of a growing settlement became impossible to ignore.</p>
      <div class="callout gold"><p><strong>Ordinary life is evidence.</strong> The Common Man converted world state into lived state: population pressure became dwindling fruit, labor shortage became an exhausted farmer, wealth inequality became a startling tip, and historical continuity became a returned woman recognizing the tavern where she had once been mourned.</p></div>
      <h2 id="ordinary-room">An ordinary room</h2>
      <p>The surviving record establishes wooden floors, tables, a bar and work area, food and drink service, and live music. The exact floor plan remains unrecovered. More important is the social mixture: farmers, tavern workers, chroniclers, adventurers, musicians, and visibly strange newcomers share the same room without an elite threshold.</p>
      <h2 id="people-at-work">The people who made it function</h2>
      <p><strong>Herb</strong> wipes counters, remembers regulars’ orders, knows the stores, and turns local shortages into actionable civic knowledge. <strong>Serra</strong> serves patrons and notices how an adventurer’s absence changes tips. <strong>Alessio</strong> cleans mugs, works the tables, and makes the tavern legible as a workplace. <strong>Skye</strong>, a goblin bard, plays for coppers and connects newcomers to the First Forest and Al-Shomer traditions.</p>
      <p><strong>Ada</strong>, the town chronicler, drinks sweet ale while sketching a new face for an article. Pristinia’s public memory is therefore produced inside the same ordinary life it records. <strong>Farmer Frank</strong> brings the cost of failed harvest help into the room in his own exhaustion.</p>
      <h2 id="december-15">15 December 2024 · the town from below</h2>
      <p>Almost nothing epic happens. Herb cleans. Ada sketches. Skye plays. Frank rests after work. Alessio serves. Lichen enters. Aravil orders her usual tequila. Tobias orders ale. Sosdrielle dances. The tavern becomes unusually busy—and in doing so reveals how Pristinia actually lives.</p>
      <h3 id="food-pressure">Food, labor, and the next herd</h3>
      <p>Frank explains that adventurers promised harvest help but appeared only once while the settlement gained more mouths. Herb reports that sourdough remains available, dried fruit is running low, and Tina’s farm needs labor. He suggests hunting about a dozen elk while warning against damaging next year’s population. Immediate hunger does not erase stewardship of the future.</p>
      <div class="quote">We was relyin’ on harvest help from these adventurers, with so many more mouths to feed and all. But damn, they only showed once.<cite>Farmer Frank</cite></div>
      <p>Aravil hears a civilian need and recognizes a possible place for herself as a hunter. No proclamation is required: a problem is spoken aloud, a person discovers how she can help, and the town’s history changes.</p>
      <h3 id="lichen-and-skye">Lichen and Skye</h3>
      <p>Lichen offers Skye ten gold pieces for music—roughly a year’s wages by Skye’s reaction. Skye refuses to exploit the mistake, accepts one coin, and begins telling Lichen about the First Forest. Adventurer-scale wealth and civilian-scale economy meet in the same room; restraint turns the collision into relationship.</p>
      <h2 id="newcomer-threshold">A threshold into the world</h2>
      <p>The Common Man lets a person arrive without already holding a place in the world’s hierarchy. Enter town; enter the tavern; meet someone; hear a problem, history, or rumor; acquire a relationship; watch the world expand. By January 2026, Daffodil can flutter in, order tea, and meet Adelia and Jiangshi through the same soft threshold.</p>
      <h2 id="memory-space">Memorial and return</h2>
      <p>Bitoshi first comes to Pristinia looking for Jiangshi and instead finds her memorial service at the Common Man. After Jiangshi returns, he later drinks beside her in the same room and remembers the memorial. The later event does not erase the earlier truth. The building holds both: she was mourned here, and she lived to return here.</p>
      <p>On January 5, 2026, Jiangshi enters again to familiar scents and sounds. Adelia says only, “It’s been awhile.” Daffodil, Bitoshi, Oni, old relationships, newcomers, and talk of crops occupy one room. The tavern allows different eras of their lives to become simultaneous.</p>
      <h2 id="destruction">The fire</h2>
      <p>Zombie pirates eventually burn the Common Man. The exact date, circumstances, people present, and casualties remain unresolved; by July 29, 2026, the destruction is established past history and revenge hunts continue. The loss matters because the target was not a generic tavern. It was where people worked, ate, danced, worried, remembered, and learned how to belong.</p>
      <h2 id="succession">Pilgrim’s Hearth</h2>
      <p>By July 29, Pilgrim’s Hearth stands on the Common Man’s foundations as “a symbol of growth and change.” By September it is again an active social room for tea, news, and ordinary conversation. The Common Man was not restored exactly, and it was not erased.</p>
      <ol class="timeline"><li><time>Common Man</time><p>Years of work, music, meals, memorial, newcomers, and returning patrons accumulate.</p></li><li><time>Destruction</time><p>Zombie pirates burn the tavern; exact chronology remains open.</p></li><li><time>Same ground</time><p>Pilgrim’s Hearth rises on the foundations rather than pretending the earlier place never existed.</p></li><li><time>Ordinary life</time><p>People again drink tea, exchange news, and carry old history without making every conversation about it.</p></li></ol>
      <h2 id="open-record">The open record</h2>
      <p>The founder and owner, Herb’s and Skye’s fuller histories, the exact fire, the staff’s fate, the builder of Pilgrim’s Hearth, surviving objects or traditions, and the structure’s physical inheritance remain unknown. The archive preserves the succession without inventing those links.</p>`
  },
  {
    id: "herb", title: "Herb", category: "People", type: "Bartender; civilian anchor of Pristinia",
    video: "herb-portrait.mp4", imageLayout: "landscape-hero", videoAlt: "Animated portrait of Herb smiling behind the bar", videoCaption: "Herb — bartender, neighbor, and keeper of Pristinia’s everyday needs.",
    dek: "A bartender whose memory for people, stores, labor, and the next year’s herd turns ordinary tavern work into civic stewardship.",
    tags: ["Herb", "The Common Man", "Pristinia", "Food", "Civilian life", "Stewardship"],
    facts: { Role: "Bartender and tavern staff", Institution: "The Common Man", Strength: "Turns local knowledge into useful action", Principle: "Meet today’s need without destroying tomorrow’s supply", Ownership: "Not established" },
    sources: ["The_Common_Man_Location_Profile_and_History.md — Herb’s work, dialogue, food knowledge, and evidence limits", "Pasted markdown(20260918-182039).md — 15 December 2024 tavern scene", "State of the World record — the Common Man’s destruction and Pilgrim’s Hearth succession"],
    body: `
      <p>Herb is one of Pristinia’s clearest civilian anchors. He wipes counters, serves food and drink, remembers regulars’ habits, follows the settlement’s stores, and speaks openly when agricultural problems require help. His work shows how much of a town’s history is carried by people who notice what is running low before a crisis becomes spectacular.</p>
      <h2 id="regulars">Remembering the regulars</h2>
      <p>When Aravil orders tequila, Herb already knows she normally wants two. The exchange is small, but it marks accumulated familiarity: the Common Man is not only where adventurers receive information. It is a workplace where the people serving them remember who they are.</p>
      <div class="quote">Comin’ right on up! I assume two no?<cite>Herb</cite></div>
      <h2 id="inventory">A town measured through inventory</h2>
      <p>On 15 December 2024, Pristinia’s growing population and incomplete harvest help become visible through Herb’s stores. Sourdough remains available. Dried fruit is running low. Tina’s farm is not being worked enough. A bartender’s inventory becomes a record of migration, labor, winter pressure, and promises that did not fully materialize.</p>
      <div class="quote">Got plenty of the sourdough, but the fruit be runnin low. Growing population puttin stress on us. Wish Tina’s farm was gettin actively worked.<cite>Herb</cite></div>
      <h2 id="elk">Today’s hunger and next year’s herd</h2>
      <p>Herb converts shortage into actionable work: forage and hunt elk. He also sets a limit. Pristinia needs roughly a dozen elk’s worth of meat, but taking too many would damage the next year’s population. Immediate survival does not cancel responsibility for what follows.</p>
      <div class="quote">Well we could use about a dozen or so Elks worth of meat. Not more mind you don’t be hurtin next years poplator!<cite>Herb</cite></div>
      <p>Aravil hears the need and recognizes that hunting may be how she belongs in the settlement. Herb therefore acts as a civilian information node: local knowledge passes through ordinary conversation and becomes a way for someone else to contribute.</p>
      <h2 id="common-man">The Common Man</h2>
      <p>Herb helps make <a href="#common-man">the Common Man</a> legible as an institution rather than scenery. Food, wages, tips, exhausted farmers, music, strangers, and regular orders all meet at the bar. The record sometimes calls it “Herb’s tavern,” but legal ownership has not been recovered; the Codex preserves him as a major staff figure without inventing a title.</p>
      <h2 id="open-record">After the fire</h2>
      <p>Zombie pirates later burn the Common Man, and Pilgrim’s Hearth rises on the same foundations. The surviving record does not establish Herb’s fate, his role in the successor tavern, or his complete history before the December scene. Those gaps remain open.</p>`
  },
  {
    id: "zarathis", title: "Zarathis", category: "Places", type: "Fein Uaill · civilization",
    image: "assets/archive/fein-uaill.jpeg", imageAlt: "Regional map of Fein Uaill containing Zarathis", imageCaption: "Zarathis is one developed center within the wider Fein Uaill region.",
    dek: "A powerful human civilization within Fein Uaill, built around mastery, memory, natural boundaries, and the conviction that one life must be enough.",
    tags: ["Fein Uaill", "Nation", "Silver Star", "Resurrection", "Magnus"],
    facts: { Parent: "Fein Uaill", Ideal: "Perfect what is ours", Boundary: "One mortal life", Custodians: "The Silver Star" },
    body: `
      <p>Zarathis is presented as one of the greatest human civilizations in the setting and as one developed center inside <a href="#fein-uaill">Fein Uaill</a>. Its answer to greatness is not endless expansion or transcendence. It cultivates its own land, preserves its history, respects natural boundaries, and treats a single mortal life as the proper span in which greatness must be achieved.</p>
      <h2 id="one-life">You only get one life</h2>
      <p>The cultural prohibition against resurrection is not born from weakness. It is a chosen boundary maintained by people capable of pursuing more. That makes resurrection a civic and philosophical violation rather than a mere religious taboo.</p>
      <h2 id="silver-star">The Silver Star</h2>
      <p>The Silver Star safeguards Zarathian history and culture. When Magnus dies, returns, and seeks public standing, the conflict is structural: if its custodians accept him without consequence, what do they preserve?</p>
      <h2 id="sacred-geography">Sacred geography</h2>
      <p>Ciaránach is the sacred city where Grace died and the proposition that mortals may be trusted with creation more than divinity became geography. At the Gates of Aelthor, Aionia’s heavenly host killed civilians and burned the city before being driven back. These places make Zarathian confidence intelligible—and preserve the danger that mortal success can harden into pride.</p>
      <h2 id="magnus">Magnus’s counterargument</h2>
      <p>Magnus wants Zarathis to gain the strength and knowledge to determine its own future—even beyond the world. His program is coherent, but it projects his dissatisfaction onto a culture that already chose a different kind of greatness.</p>`
  },
  {
    id: "the-gate", title: "The Gate & Papirak", category: "Places", type: "Divine contingency",
    dek: "A hidden system designed to call wave after wave of adventurers—while erasing the knowledge that might have prepared them.",
    tags: ["Gate", "Papirak", "Prima", "Memory"],
    facts: { Purpose: "Containment and repeated intervention", Method: "Successive waves of adventurers", "Modern opening": "30 Jul 2024 · four archways/runes and realm pools", Cost: "Many expected to die", Keeper: "Papirak, whose memory was altered" },
    sources: ["COSMOLOGICAL_IMPORTANT_EVENTS.md — Gate opening and Talan’s judgment", "MASTER_TIMELINE.md — 30 Jul 2024 coalition and resurrection refusal", "Pasted markdown(20260918-035548).md — Melian, The Before, and the Gate"],
    body: `
      <p>The Gate was constructed after catastrophe as a hidden contingency. Its architects did not expect one chosen generation to solve the crisis. They anticipated successive waves of adventurers and accepted that many would die while learning what the gods already knew.</p>
      <h2 id="gate-opening">The coalition opening</h2>
      <p>On 30 July 2024, four archways or runes and realm pools participate in an intentional opening involving the divine caretakers. Seven newcomers arrive. Their exact origins and degree of volition remain partly unresolved, and the event should not be collapsed into later Gate spells merely because the same word is used.</p>
      <h2 id="gate-judgment">Talan refuses resurrection</h2>
      <p>Arjahn asks Aionia for a diamond to resurrect a fallen companion. Talan refuses on grounds of justice and consequence, saying the death followed harm toward companions and use of Death’s power. Arjahn accepts the judgment. The record preserves that acceptance without assuming the caretaker of Justice is therefore identical to justice itself.</p>
      <h2 id="memory">The erased guide</h2>
      <p>Papirak’s inability to preserve ancient guidance was not simple age or forgetfulness. The gods deliberately removed knowledge to protect the hidden land and the system around it. Centuries later, an adventurer killed him without understanding what had been taken from him.</p>
      <h2 id="ethics">The experiment</h2>
      <p>The Gate embodies the oldest moral fracture in the setting: powerful protectors deciding that unknown mortals may be spent for a future good. Their plan can be necessary and still expose how easily necessity becomes ownership.</p>
      <p>The full human cost appears in <a href="#papirak-paloma">Papirak &amp; Paloma</a>.</p>`
  },
  {
    id: "the-before-melian", title: "The Before & Melian", category: "Places", type: "Ruined city and witness",
    dek: "A civilization destroyed from beneath after its builders tried to use Delerium—and a survivor who chose knowledge over denial.",
    tags: ["The Before", "Melian", "Delerium", "Prima"],
    facts: { Location: "Prima", Cause: "Delerium exploitation and corruption", Witness: "Melian", Lesson: "Knowledge is preparation" },
    body: `
      <p>The Before is a ruined place on Prima, built above a vein of Delerium. Its people did not set out to become a warning. They discovered a source of power, tried to use it, and were corrupted while hostile creatures burrowed beneath the city.</p>
      <h2 id="melian">Melian’s answer</h2>
      <p>Melian’s response to the destruction is not a ban on inquiry. She teaches that knowledge is strength. Her civilization failed partly because innocence was mistaken for safety; later adventurers must understand what a thing does before choosing whether its power is worth the price.</p>
      <h2 id="parallel">A miniature divine history</h2>
      <p>The Before parallels the larger cosmology. Like the gods, its builders found a source of extraordinary power, used it without comprehending the full ecology around it, and created an opening through which something else could feed.</p>`
  },
  {
    id: "people-directory", title: "People of Fenumion", category: "People", type: "Character and NPC directory",
    dek: "The wider cast preserved by the source catalogue and campaign record, including heroes whose full dossiers are still being reconciled.",
    tags: ["Characters", "NPCs", "Roster", "Archive"],
    facts: { Purpose: "Discovery and cross-reference", Status: "Living directory", Rule: "Sparse records remain sparse", Source: "Recovered catalogue and campaign exports" },
    sources: ["Fenumion Archive Catalogue — character map and thematic index", "Campaign exports and primary scenes"],
    body: `
      <p>Fenumion is larger than its most famous deaths and villains. This directory keeps the broader ensemble visible while detailed dossiers are reconciled. A short entry means the present archive supports less synthesis—not that the person mattered less.</p>
      <h2 id="developed-dossiers">Developed dossiers</h2>
      <ul>
        <li><a href="#akarian"><strong>Akarian</strong></a> — a practical warrior and the named Guardian of Gael.</li>
        <li><a href="#gartina"><strong>Gartina</strong></a> — chef, protector, investigator; preparation as care and self-blame.</li>
        <li><a href="#carmen"><strong>Carmen</strong></a> — warlock and negotiator; price, reciprocity, Paco, and ownership.</li>
        <li><a href="#ghilsen"><strong>Ghilsen Hendrickson</strong></a> — enslavement, suspicion, freedom, and strength as safety.</li>
        <li><a href="#coralyn"><strong>Coralyn</strong></a> — aquatic cosmology, fear, and dissent at the Shadow Roads.</li>
        <li><a href="#ithilrune"><strong>Ithilrûnë</strong></a> — knowledge as protection, radical uncertainty at the Maw, and the difficult choice to follow another form of wisdom.</li>
        <li><a href="#sildithas"><strong>Sildithas</strong></a> — duty-facing courage, an oath tested by uncertain gods, and joy preserved while horror remains unresolved.</li>
        <li><a href="#aravil"><strong>Aravil</strong></a> — an oath that survives separation and belonging found through useful work.</li>
        <li><a href="#jeane-rose"><strong>Jéane Rose</strong></a> — speed expressed through thought, curiosity, travel, and protection.</li>
        <li><a href="#vaerik"><strong>Vaerik</strong></a> — an old soldier whose duty becomes self-burning forward motion.</li>
        <li><a href="#arjahn"><strong>Arjahn</strong></a> — a soldier-planner who treats retreat routes and reconciliation as survival work.</li>
        <li><a href="#wren"><strong>Wren</strong></a> — an investigator who asks the land, tests inherited stories, and withholds certainty.</li>
        <li><a href="#scribonia"><strong>Scribonia</strong></a> — a self-defined scholar whose reason can become both courage and domination.</li>
        <li><a href="#dale"><strong>Dale</strong></a> — care made practical through courage, food, shelter, tools, and consultation.</li>
        <li><a href="#eugene"><strong>Eugene</strong></a> — self-doubt followed by competence, dangerous knowledge, and earned trust.</li>
        <li><a href="#saray"><strong>Saray</strong></a> — grief after Nienna and the final blow against Wrath, with the path between still incomplete.</li>
        <li><a href="#casimir-alioth"><strong>Casimir &amp; Alioth</strong></a> — loyalty interpreted differently by the people who chose it and the institution that judged it.</li>
        <li><a href="#pappy"><strong>Pappy</strong></a> — plainspoken goodness tested by the Rift ambush and Adelia’s intervention.</li>
        <li><a href="#thorn"><strong>Thorn</strong></a> — a Veilguard whose death, ritual aftermath, and return remain partly unresolved.</li>
        <li><a href="#cave-company"><strong>The Delerium cave company</strong></a> — six people whose responses to contamination preserve the full ensemble.</li>
        <li><a href="#elenia"><strong>Elenia</strong></a> — a bearer of light who converts loss into practical hope.</li>
        <li><a href="#olokun"><strong>Olokun</strong></a> — relationships, dignity, and the refusal to universalize pain.</li>
        <li><a href="#nienna"><strong>Nienna</strong></a> — an absent presence whose voluntary sacrifice remains causally active.</li>
        <li><a href="#jiangshi"><strong>Jiangshi</strong></a> and <a href="#adelia-hope"><strong>Adelia</strong></a> — return, care, Hope, and the boundary between presence and possession.</li>
        <li><a href="#magnus"><strong>Magnus Niriin</strong></a> — ambition, cultural belonging, political leverage, and a soul permanently owned by Death.</li>
        <li><a href="#herb"><strong>Herb</strong></a> — ordinary tavern work turned into civic memory, food planning, and stewardship of the future.</li>
      </ul>
      <h2 id="other-heroes">Other indexed heroes</h2>
      <div class="directory-grid">
        <section><h3>Tshuka and Pelagia</h3><p>Indexed player characters with campaign records distributed across the larger conversation corpus.</p></section>
        <section><h3>Severina, Aurélia / Night</h3><p>Indexed characters preserved in the recovered character map.</p></section>
        <section><h3>Minerva and Vaelith</h3><p>Indexed characters whose individual dossiers have not yet been promoted beyond their source records.</p></section>
        <section><h3>Aleister / Alastair and Selwyn</h3><p>Further player characters named by the catalogue; spelling variants remain attached to the record.</p></section>
      </div>
      <h2 id="recurring-npcs">Recurring people around them</h2>
      <ul>
        <li><strong>Paco</strong> — Carmen’s companion, whose sacrifice and forced pact make him a person rather than an account to settle.</li>
        <li><strong>Draegar</strong> — remembered beside Gartina in the community’s romantic history.</li>
        <li><a href="#herb"><strong>Herb</strong></a>, <a href="#common-man"><strong>Serra and Alessio</strong></a> — Common Man workers whose service, local knowledge, and economic observations make the tavern a civilian institution rather than scenery.</li>
        <li><strong>Farmer Frank</strong> — carries the ordinary cost when promised agricultural help does not return.</li>
        <li><a href="#common-man"><strong>Skye and Lichen</strong></a> — a small study in refusing exploitation and making a visibly strange newcomer feel safe.</li>
        <li><strong>Eugene</strong> — begins a Pristinia battle trying to sound heroic and ends it behaving heroically while barely able to speak.</li>
        <li><strong>Mya</strong> — a power of Hope who receives action and cost more readily than demanded belief.</li>
        <li><strong>Talan</strong> — a god of Justice and Order, Aria’s childhood monster and eventual killer.</li>
        <li><strong>Nuru</strong> — a divine architect of secrecy whose pragmatism can accept mortal casualties.</li>
        <li><strong>Aionia</strong> — the time-and-space power behind the Gate’s tightly limited historical intervention.</li>
        <li><strong>Endora</strong> — too often described through the men who could not release or preserve her; her consent remains a central unresolved question.</li>
      </ul>`
  },
  {
    id: "ececilia-emojis", title: "Ececilia’s Emoji Gallery", category: "People", type: "Community artist appreciation",
    dek: "A small gallery celebrating the character emojis Ececilia creates for the Fenumion community.",
    tags: ["Ececilia", "Character art", "Community archive", "Gartina", "Elenia"],
    facts: { Artist: "Ececilia", Collection: "2 character emojis", Characters: "Gartina · Elenia", Purpose: "Thanks and community recognition" },
    sources: ["Chibi_Tina.png — Gartina character emoji supplied by the creator", "Chibi_Elenia-2-removebg-preview.png — Elenia character emoji supplied by the creator"],
    body: `
      <p>Fenumion is remembered not only through chronicles, maps, and campaign scenes, but through the art its community makes for one another. Ececilia’s emojis preserve the characters at their most immediate: expressive, affectionate, and ready to become part of everyday conversation.</p>
      <div class="callout gold"><p><strong>Thank you, Ececilia,</strong> for giving the people of Fenumion another way to see, share, and celebrate the characters they love.</p></div>
      <div class="emoji-gallery" aria-label="Character emoji artwork by Ececilia">
        <figure class="emoji-card">
          <div class="emoji-art-frame"><img src="gartina-chibi.png" alt="Chibi emoji of Gartina smiling while holding a large red heart" loading="lazy"></div>
          <figcaption><strong>Gartina</strong><span>Character emoji by Ececilia.</span></figcaption>
        </figure>
        <figure class="emoji-card">
          <div class="emoji-art-frame"><img src="elenia-chibi.png" alt="Chibi emoji of Elenia cheering with flowers woven through her blond hair" loading="lazy"></div>
          <figcaption><strong>Elenia</strong><span>Character emoji by Ececilia.</span></figcaption>
        </figure>
      </div>
      <p>This is a living gallery. Future Ececilia character emojis can join the collection without displacing the artwork already preserved here.</p>`
  },
  {
    id: "akarian", title: "Akarian", category: "People", type: "Warrior; Guardian of Gael",
    video: "assets/archive/akarian.mp4", videoAlt: "Animated portrait of Akarian", videoCaption: "Akarian — Guardian of Gael.",
    dek: "A practical warrior remembered by the surviving record as the Guardian of Gael—a title that binds one person to a recovering land.",
    tags: ["Akarian", "Gael", "Guardian", "Warrior"],
    facts: { Role: "Guardian of Gael", Method: "Practical warrior", Region: "Gael", Record: "Sparse; awaiting deeper reconciliation" },
    sources: ["Fenumion_Conversation_Catalogue.md — character and player map", "Fenumion_Codex_Update_Regional_History_2026-09-19.md — Gael regional record"],
    body: `
      <p>Akarian is named in the recovered catalogue as a practical warrior and in Gael’s regional history as its Guardian. The pairing matters: the record defines him through useful action and responsibility to a place rather than through rank, spectacle, or an isolated feat.</p>
      <h2 id="guardian-of-gael">Guardian of Gael</h2>
      <p>Gael is not a settled victory. It is a landscape recovering from Wrath, with living centers such as Hope and Stake surrounded by ruins, trials, cult activity, fiendish remnants, and unfinished infrastructure. To be its Guardian is therefore an ongoing relationship with a wounded region—not merely a title earned in one battle.</p>
      <h2 id="practical-warrior">A practical warrior</h2>
      <p>The surviving synthesis characterizes Akarian as practical. The Codex preserves that description without turning it into invented tactics or motives. What can be said securely is that his identity joins martial competence to stewardship of Gael.</p>
      <h2 id="archive-boundary">The present archival boundary</h2>
      <p>Akarian’s deeper scenes, relationships, and turning points have not yet been recovered into this edition. His portrait and confirmed role are preserved here now; future source-backed records can enlarge the dossier without overwriting the limits of what is presently known.</p>`
  },
  {
    id: "papirak-paloma", title: "Papirak & Paloma", category: "People", type: "Sacrifice and memory",
    dek: "One of Fenumion’s most devastating histories: a Wish that saved Prima, a wife who voluntarily became its price, and a mercy that removed the truth from the survivor.",
    tags: ["Papirak", "Paloma", "Wish", "Whose sacrifice?"],
    facts: { Crisis: "Delerium threatened to spread", Act: "Papirak cast the extraordinary Wish", Price: "Paloma chose complete erasure", Aftermath: "Namo’o removed Papirak’s memory", End: "Immolation and atonement", Legacy: "His death destroys a historical source" },
    sources: ["CHARACTER_BIBLE.md — Papirak, Paloma, Wish, memory, and evidence limits", "MASTER_TIMELINE.md — recovered sequence and Magnus’s intervention", "Fenumion High-Presence Character Context Set — consolidated Papirak context"],
    body: `
      <p>Papirak agreed to use an extraordinary form of Wish to isolate and save Prima. He was warned that it would break him. The expected cost was his future access to Wish—but Paloma, his wife, voluntarily became the substitute price. She was erased completely: body, mind, and soul.</p>
      <div class="callout gold"><p><strong>Fenumion’s recurring question becomes unavoidable here:</strong> Papirak consented to sacrifice himself. Paloma consented to spare him. The world was saved. Who is allowed to decide that the outcome justified the cost?</p></div>
      <h2 id="chain-of-consent">A chain of consent</h2>
      <p>The gods needed the realm isolated. Papirak agreed to be broken for them. Paloma chose erasure so he would not pay the expected price. Namo’o then removed Papirak’s memory of her so he could survive what she had done. Everyone tried to spare someone. The result remained horrifying.</p>
      <h2 id="mercy-and-violation">Mercy and violation</h2>
      <p>The destroyed memory first appeared to be censorship. Later evidence changed that reading. Namo’o’s act was also mercy and, in the recovered account, was performed at Papirak’s request. Consent changes the moral structure without making the intervention simple: one person still used extraordinary authority over another’s memory and selfhood.</p>
      <h2 id="magnus-reopens">Magnus reopens the wound</h2>
      <p>Two thousand years later, Magnus seeks hidden knowledge from Papirak. He initially attempts to limit the harm, then breaks through the protection when it blocks the objective. The truth he restores is real; that does not automatically grant him the right to force it back into Papirak’s life.</p>
      <h2 id="atonement">Immolation and atonement</h2>
      <p>After remembering Paloma, Papirak chooses his end.</p>
      <div class="quote">Immolation. Atonement.<cite>Papirak</cite></div>
      <p>The line cannot be detached from Paloma, erased memory, returned guilt, and the violence of recovered truth. Papirak’s death also destroys a living historical source. In Fenumion, mortality can change not only what happens next, but what anyone can still prove about what happened before.</p>`
  },
  {
    id: "magnus", title: "Magnus Niriin", category: "People", type: "Tiefling warlock; Silver Star; political figure",
    image: "magnus-portrait.jpg", imageLayout: "portrait-hero", imageAlt: "Magnus Niriin, a blue-skinned tiefling warlock with curled horns, glowing eyes, dark hair, and gold-trimmed black clothing", imageCaption: "Magnus Niriin — warlock, Silver Star, and political figure.",
    dek: "An ambitious Zarathian who seeks autonomy through power and leverage while his permanent bargain makes him the property of Death.",
    tags: ["Magnus Niriin", "Zarathis", "Silver Star", "Death", "Papirak"],
    facts: { Pattern: "Ambition → shortcut → leverage → dependency", Allegiance: "Silver Star; Zarathian political figure", "Soul bond": "Permanently belongs to Death", Record: "High confidence; early chronology partial" },
    sources: ["Magnus_Niriin_Character_Profile_and_History.md — consolidated character record, evidence limits, quotations, and retrieval anchors", "MASTER_TIMELINE.md — dated regional and character consequences", "CHARACTER_BIBLE.md — earlier Magnus synthesis"],
    body: `
      <p>Magnus Niriin repeatedly chooses the path that gives him the greatest immediate leverage when morality, loyalty, cultural belonging, knowledge, survival, and advancement collide. Those choices produce real results: resurrection, information, reputation, political support, and access to powers unavailable by ordinary routes.</p>
      <p>That pattern does not make him incapable of care. Magnus calls Zarathians “my people,” teaches their customs, offers outsiders hospitality, and collapses when his kin die. His danger is that attachment does not reliably stop him from using people, institutions, forbidden power, or catastrophic shortcuts when they obstruct the objective.</p>
      <div class="callout gold"><p><strong>The central contradiction:</strong> Magnus seeks independence through power while the most consequential fact about him is that his soul belongs to Death.</p></div>
      <h2 id="method">Methodical before ruthless</h2>
      <p>Magnus’s operating style is to cover every base before acting. At Papirak’s home he approaches through shadow, tests for illusion, detects and probes thoughts, scans for other minds, uses a Helm of Disjunction, searches for hidden access, extends Time Ravage from safety, and prepares Encode Thoughts to preserve whatever he finds.</p>
      <p>He first tries to crack Papirak’s mental barrier gradually to reduce the psychic harm. When told the barrier must break for the knowledge to be recovered, concern loses to the objective.</p>
      <div class="quote">I suppose I will break it then.<cite>Magnus Niriin</cite></div>
      <h2 id="knowledge-without-stewardship">Knowledge without stewardship</h2>
      <p>Breaking the barrier restores Papirak’s memory of the Wish, Paloma’s voluntary substitution as its price, her total erasure, and Namo’o’s later mercy. Magnus puts the pieces together before shattering the protection that allowed Papirak to survive them. The event does not ask only whether the recovered history is true. It asks whether the power to recover truth grants permission to destroy the person protecting himself from it.</p>
      <h2 id="death-and-ownership">Death and ownership</h2>
      <p>Magnus’s soul permanently belongs to Dumuzi. After Aria’s death, Death makes the metaphysical relationship physical: “I do not trade. I already have one of yours anyway.” Magnus immediately falls. Scribonia interprets the act as ownership. That interpretation is attributed, but Death’s demonstrated power over Magnus is not merely patronage or atmosphere.</p>
      <p>Dumuzi later calls Magnus “the one for fancy words,” while Velkyn calls him “blind with ambition.” Both are external judgments. They align with parts of the record without becoming objective personality statistics or proof that Death controls every choice Magnus makes.</p>
      <h2 id="aria-fall">Aria’s fall and the bodies of his people</h2>
      <p>On November 6, 2025, Magnus fights in the confrontation around Aria and Talan. When Zarathians die instantly, he drops to his knees, looks at the bodies, and vomits. Death then invokes the soul-bond and incapacitates him. Eugene attempts to heal him; Wren later shoots him after he rises; Magnus wakes covered in blood and vomit and flees.</p>
      <p>The scene prevents a convenient caricature. The deaths reach him emotionally. They also turn him into a fault line among the adventurers: Scribonia says he is not one of theirs, while Olokun rejects simply abandoning or killing the misguided.</p>
      <h2 id="political-ascent">Political ascent after Pride</h2>
      <p>After Aria’s death, Magnus becomes a candidate for Zarathian authority. Adelia supports him; Miriel speaks publicly for him; Emerald Veil nominates him despite his Silver Star affiliation; Silver Star support divides; Magnus wins. Gartina regards his changed-person presentation as false, while Olokun suspects deeper Death influence. Those suspicions are historically important character beliefs, not proof that Death rigged the result.</p>
      <h2 id="zarathian">Zarathian and radical exception</h2>
      <p>Magnus is not merely an outsider exploiting Zarathis. He calls Zarathians his people, belongs to Silver Star, praises the city, hosts visitors, explains faction values, and offers Adelia access to Miriel. He describes his order as preserving honor, defense, and cultural tradition.</p>
      <p>Yet his repeated resurrections and permanent soul bargain collide with a culture that emphasizes one life and obedience to nature. The unresolved question is whether he believes those rules or believes they should yield before the exceptional person capable of transcending them.</p>
      <h2 id="elenia">Magnus and Elenia</h2>
      <p>Their conflict reaches a fight-to-the-death or “duel to see who was right” in Fein Uaill. Elenia refuses the duel’s final premise: she uses terrifying divine magic against him, then does not leave him dead. Her later banishment makes their confrontation a regional political event as well as a personal one.</p>
      <h2 id="adelia-and-rift">Adelia, Hope, and the Rift</h2>
      <p>Adelia supports Magnus politically and later revives him. Magnus subsequently harms the Hope-related life structure, and Adelia’s transformation becomes part of the attempt to preserve or restore it. During the later Rift event, Pappy is ambushed and Adelia Gates him away. The in-world actions remain distinct from the later dispute about player knowledge, consent, and adjudication.</p>
      <h2 id="relationships">No single party verdict</h2>
      <p>Eugene tries to heal Magnus. Wren’s benefit of the doubt collapses. Scribonia rejects him. Olokun distrusts him while resisting disposal of the misguided. Adelia supports and revives him before their later rupture. Miriel backs his political ascent for reasons not yet fully known. The archive records who believed what, when, rather than inventing one canonical party attitude.</p>
      <h2 id="open-record">The open record</h2>
      <p>Magnus’s earliest appearance, original patron relationship, first deaths, exact soul bargain, role as Death’s conduit, Miriel’s motives, Silver Star’s formal response, reasons for harming Hope, and the knowledge taken from Papirak remain incomplete. His present dossier is substantial without pretending those gaps are solved.</p>`
  },
  {
    id: "namoo", title: "Namo’o", category: "People", type: "God of Souls",
    dek: "A quiet god of continuity through death whose compassion does not erase the frightening authority he can exercise over memory and selfhood.",
    tags: ["Namo’o", "Souls", "Jiangshi", "Papirak"],
    facts: { Domain: "Souls and continuity", Contrast: "Dumuzi as the End", Manner: "Sad, graceful, quiet", Tension: "Mercy exercised as authority" },
    body: `
      <p>Namo’o enters the archive without spectacle: a sad, graceful man whose presence makes the world quieter. Where others say Jiangshi is dead, he corrects the tense. He has not merely known her; he knows her and has spent time with her recently.</p>
      <h2 id="not-the-end">Dead does not mean gone</h2>
      <p>This gives the cosmology an essential distinction. Namo’o tends continuity through death. Dumuzi is the End. The body may be in a coffin while the soul remains a person with relationships, experiences, and a present tense.</p>
      <h2 id="opportunity">An opportunity, not ownership</h2>
      <p>With Jiangshi, Namo’o creates the opportunity for return without simply performing the miracle himself. He respects boundaries and lets the living participate in the choice. The scene makes him deeply sympathetic.</p>
      <h2 id="papirak">Why Papirak complicates him</h2>
      <p>The same god can decide that Papirak should no longer remember Paloma. The motive may be mercy, but the act reaches into the foundation of another self. The history is sharper because it holds both truths: Namo’o becomes more compelling as he becomes less morally clean.</p>`
  },
  {
    id: "roderick-wrath", title: "Roderick / Wrath", category: "People", type: "Duke; Knight I of Death",
    image: "assets/archive/wrath.gif", imageAlt: "Wrath, an armored Knight of Death carrying a burning sword through fire", imageCaption: "Wrath — Knight I of Death.",
    dek: "A grieving husband reconstructed backward through hostile testimony, corrupted resurrection, and the consequences of refusing to let someone go.",
    tags: ["Wrath", "Endora", "Delerium", "Death"],
    facts: { "Former name": "Duke Roderick", Beloved: "Endora", Title: "Wrath, Knight I", "Defining wound": "Inability to accept separation" },
    sources: ["Pasted markdown(20260919-154104).md — Vysaeth’s journal", "Pasted markdown(20260919-154435).md — Wrath’s first encounter", "24 Oct 2024 campaign export — the Delerium trade", "12 Nov 2024 campaign export — Legend Lore and Endora"],
    body: `
      <p>Roderick is not introduced through a sympathetic biography. The players first encounter him through Vysaeth’s hostile history, then almost immediately as Wrath: a being who turns personal pain outward until the world is required to inherit it.</p>
      <div class="quote">The world broke my beloved. Now I break it. Welcome to my pain.<cite>Wrath</cite></div>
      <h2 id="discovery">Reconstructed in discovery order</h2>
      <ol class="timeline">
        <li><time>7 Jul 2024</time><p>Vysaeth’s journal portrays Roderick as Endora’s husband, a threat to the kingdom, and the cause of ruin during attempts to recover her.</p></li>
        <li><time>8 Jul 2024</time><p>Wrath appears after Dale’s death, names his pain, and offers a path to restore the fallen if the party submits to Death.</p></li>
        <li><time>24 Oct 2024</time><p>A later source reveals that the Liar traded Delerium to Roderick for Eldrin’s relic; Roderick used it to bring Endora back.</p></li>
        <li><time>12 Nov 2024</time><p>Legend Lore clarifies that the resurrection was corrupted and part of Endora was lost.</p></li>
      </ol>
      <h2 id="pattern">The repeating pattern</h2>
      <p>Endora wants to leave; Roderick uses a necklace to influence her. Endora dies; he violates ordinary resurrection to return her. She is lost again; he accepts a relationship with Death that preserves contact in dreams. The through-line is not proof that his love was false. It is that genuine love became destructive when he could not accept that Endora existed outside his need for her.</p>
      <h2 id="provenance">What the archive does not flatten</h2>
      <p>Vysaeth is Endora’s brother and an interested witness, not an omniscient narrator. The established core is narrower than his judgment: Endora died; Roderick tried to recover her; Vysaeth regarded the threat as severe enough to embrace lichdom; and the resurrection used Delerium and returned Endora incompletely. Motive and consent remain questions the documents approach from different sides.</p>
      <h2 id="temptation">The choice he reproduces</h2>
      <p>Wrath offers grieving adventurers a version of his own first choice: someone you love is dead, and something terrible can bring them back. Quake refuses before the party fully understands why. Elenia asks Cala for another way; Cala provides a diamond. Wrath’s danger is that he universalizes his grief—his pain must become everyone’s—where Olokun later answers, “My pain. Not everyone’s.”</p>`
  },
  {
    id: "vysaeth", title: "Vysaeth", category: "People", type: "King; lich; witness",
    dek: "Endora’s brother sacrificed his humanity to preserve a kingdom’s legacy—and became the first major source about Roderick.",
    tags: ["Lich", "Endora", "Roderick", "Provenance"],
    facts: { Relation: "Endora’s brother", Choice: "Lichdom", Purpose: "Guard the kingdom’s legacy", Reliability: "Important, interested witness" },
    body: `
      <p>Vysaeth became a lich not for theatrical immortality but to serve as a magical conduit protecting his realm and its accumulated treasures. His final purpose was preservation, even at the cost of humanity and endless solitary guardianship.</p>
      <h2 id="source">The source-provenance problem</h2>
      <p>His journal calls Roderick ambitious, greedy, insidious, and destructive. Some or all of that may be true, but the Codex preserves the speaker: this is Endora’s brother describing the man who tried to reclaim her and threatened his realm.</p>
      <h2 id="parallel">Two answers to loss</h2>
      <p>Vysaeth and Roderick both violate nature after losing Endora. Vysaeth tries to preserve a people and their history; Roderick tries to restore a person. Both refuse disappearance. Both pay horrifying prices.</p>`
  },
  {
    id: "aria-pride", title: "Aria / Pride", category: "People", type: "Knight II of Death",
    image: "aria-pride-portrait.png", imageLayout: "portrait-hero", imageAlt: "Aria, Pride and Knight II of Death, standing in pale armor with a long sword and dark cape", imageCaption: "Aria / Pride — Knight II of Death.",
    dek: "A political and social antagonist whose sharpest weapon is not force, but memory, provenance, and knowing exactly what an audience already believes.",
    tags: ["Pride", "Death", "Zarathis", "Attachment", "Olokun", "Talan"],
    facts: { Title: "Pride, Knight II", Father: "Dumuzi / Death", Origin: "Institutional failure and childhood pain", "Power center": "Belief and social history", Counterpoint: "Attachment as weakness", End: "Killed unexpectedly by Talan" },
    sources: ["Pasted markdown(20260919-035308).md — public confrontation, 5 Aug 2025", "Pasted markdown(20260919-034634).md — the bath scene and sibling contradiction", "Pasted markdown(20260910-045846).md — coded conversation and social strategy", "Pasted markdown(20260919-145618).md — Olokun’s later interpretation", "CHARACTER_BIBLE.md and MASTER_TIMELINE.md — childhood, imprisonment, war council, death, and succession", "Fenumion High-Presence Character Context Set — consolidated Aria trajectory"],
    body: `
      <p>Aria’s great strength is provenance. She remembers what people did, what their cultures believe, what promises they made, and what contradictions an audience will recognize. Her encounters can operate as political arguments because the crowd is not scenery; existing belief is part of the battlefield.</p>
      <h2 id="origin">Failed authority and the birth of Pride</h2>
      <p>Recovered childhood material places young Aria in a village suffering winter, flood, and failed prayers. A temple associated with Talan becomes the emblem of an institution that did not protect the people who trusted it; she leaves and burns it. The scene helps explain her hostility toward moral authority without excusing what she later does with power.</p>
      <p>An older brother appears in this early account, while Aria later says she has no siblings. The contradiction remains open rather than being reconciled into a preferred version.</p>
      <h2 id="scribonia-gem">Knowledge made captive · July 2025</h2>
      <p>Aria traps Scribonia in a gemstone amid larger struggles over leverage and god-killing knowledge. The act condenses her political method: people, research, grievance, and fear can all become instruments when she decides the outcome warrants control.</p>
      <h2 id="public-power">Public power</h2>
      <p>On 5 August 2025, Aria confronts Adelia in front of a crowd. She uses Adelia’s resurrection history and the culture’s charged relationship to divine magic; the audience shifts because her claims fit memories it already possesses. Olokun counters with private shared history, but Aria denies that history publicly and suggests his mind was altered. A truthful relationship is not automatically persuasive when the crowd cannot verify it.</p>
      <h2 id="attachment">Attachment as weakness</h2>
      <p>Aria argues that loving people creates helplessness: eventually the person cannot be protected. Olokun’s answer is that protection is not ownership. People help each other become better, then allow the younger generation to act for itself. He later reads Aria as afraid—of gods, of mistakes, and of being small—without treating fear as absolution.</p>
      <h2 id="private-aria">The person beneath Pride</h2>
      <p>In a private scene, Aria’s performance breaks when Olokun reciprocates her attraction. The larger-than-life antagonist becomes visibly young and frightened. Their relationship moves through enemy, familiarity, personhood, attraction, genuine care, and continuing disagreement. Understanding does not become forgiveness, and affection does not complete a redemption arc.</p>
      <h2 id="war-council">The War of Hearts</h2>
      <p>At the later war council, Aria argues that victory requires imposed pain. Olokun answers that he may offer his own pain, not everyone else’s. Scribonia challenges Aria’s logic, and High Lord Bowene removes alliance with Death from consideration. The disagreement is not whether sacrifice exists, but who possesses the authority to assign its cost.</p>
      <h2 id="death">After her death</h2>
      <p>Talan kills Aria on 6 November 2025 in a confrontation not intended as her final battle. The narration returns to the image already seen in private: Pride dies as a scared little girl, small at a god’s feet. Dumuzi later comes for his daughter’s body and calls it her temple. The party’s refusal exposes limits in his apparent omnipotence, while the body itself becomes an unresolved clue.</p>
      <p>Her death creates succession rather than moral closure: unfinished relationships, contested political memory, Magnus’s ascent, and futures nobody expected to inherit. Aria remains consequential because the world must continue without receiving a final answer about who she might have become.</p>`
  },
  {
    id: "elenia", title: "Elenia", category: "People", type: "Cleric; bearer of light",
    image: "elenia-portrait.png", imageLayout: "medallion-hero", imageAlt: "Elenia, a satyr cleric, gathering golden light in her hands beneath a bright sky", imageCaption: "Elenia — satyr cleric and bearer of light.",
    dek: "Wonder becomes practice, practice becomes responsibility, and responsibility becomes the question of what one person should be allowed to do with divine-scale power.",
    tags: ["Elenia", "Cala", "Hope", "Nienna", "Mya", "Gael", "Pristinia", "Power and permission"],
    facts: { Role: "Cleric and bearer of light", "Public title": "Savior of Pristinia", Trajectory: "Wonder → practice → responsibility", Patron: "Cala", Transformation: "Returned as a satyr", Danger: "Capability becoming authority" },
    sources: ["ELENIA_HISTORY.md — consolidated profile and chronology", "Elenia_Why_She_Is_One_of_My_Favorite_Fenumion_Characters.md — interpretive analysis grounded in primary scenes; preference is not canon", "MASTER_TIMELINE.md — dated event spine", "CHARACTER_BIBLE.md — character synthesis", "RELATIONSHIPS.md — changing relationship histories", "Fenumion_Conversation_Catalogue.md — Elenia / Cultivation source map", "Magnus_Niriin_Character_Profile_and_History.md — duel and exile record"],
    body: `
      <p>Elenia can move through extraordinary magic with casual delight and still take another person’s spiritual crisis seriously. Her wisdom is not superior intelligence or permanent solemnity. It is a repeated process: wonder leads to curiosity; curiosity becomes experience; experience becomes meaning; and meaning changes what she does the next time somebody is in danger.</p>
      <div class="quote">Just be the light.<cite>Elenia</cite></div>
      <div class="callout gold"><p><strong>Core question:</strong> can Elenia become a caretaker without becoming an owner? Her history is not about refusing power. It is about whether growing power continues to preserve other people’s agency.</p></div>
      <h2 id="wonder">Wonder before certainty · April 2024</h2>
      <p>Early Elenia barely knows Cala as the “lady of light … or something like that.” She follows a possible divine call through a forest, repeatedly noticing flowers and beauty, and admits that perhaps she was only hopeful. She experiments with the environment instead of waiting passively for revelation, places her hands on the ground, and offers herself as an instrument to carry light into dark places.</p>
      <div class="quote">I think Cala was calling me … but maybe I was just hopeful.<cite>Elenia</cite></div>
      <p>When Cala tells her that she hopes Elenia knows how to pray, Elenia does not claim certainty. She accepts that action will reveal what devotion means.</p>
      <div class="quote">I suppose this is where we find out Lady Cala.<cite>Elenia</cite></div>
      <p>She says, “I am here, tell me where to go,” then offers to serve as an instrument of light. In another early scene, listening has a physical cost: acid burns her back while others hold attackers away, and she stops long enough to hear Cala.</p>
      <div class="quote">I am sorry Cala! I will listen now!<cite>Elenia</cite></div>
      <p>Later Elenia outgrows the idea that faithful service means surrendering judgment. Her authority does not begin with chosen-one certainty; it begins with curiosity, vulnerability, and action taken without pretending she already understands.</p>
      <h2 id="mya-gael">Mya and the first living Gael · June 2024</h2>
      <p>Mya tells Elenia to remain a child of wonder and a light where darkness is strongest. Elenia answers by literally casting Light. Their relationship turns Hope into a method: wonder is not proof, but it can create a reason to act carefully and discover what might become true.</p>
      <p>Elenia and Adelia belong to the communal history of Gael’s first living foothold. They help establish or prove life in a land defeated by Death; Gartina turns toward practical ecological restoration; Nienna, Dale, and others bring labor, defense, resources, and sacrifice. Hope is not the achievement of one chosen hero.</p>
      <h2 id="wrath-year">Wrath’s year · July–November 2024</h2>
      <p>When Wrath kills Dale and offers a path through Death on 8 July, Quake refuses and Elenia asks Cala for another way. A diamond makes restoration possible. Ten days later, Elenia casts Death Ward on Quake because the spell previously saved her and Nienna. History becomes a protective practice rather than an emotional callback.</p>
      <div class="quote">This saved Nienna and I.<cite>Elenia</cite></div>
      <p>When Wrath appears, she also attacks the useful portal instead of allowing his argument to control the encounter. Elenia can be spiritually open without surrendering practical judgment.</p>
      <p>On 21 November, Wrath cuts Elenia catastrophically during the final assault. A later community retrospective remembers Gartina calling her back after Wrath cleaved her in two. The precise recovery mechanics remain missing, but Elenia’s return becomes part of the community’s shared memory rather than a disposable combat outcome.</p>
      <h2 id="nienna-aria">Nienna, Aria, and what loss teaches</h2>
      <p>Nienna’s death does not convince Elenia that attachment is foolish. Nienna remains sister, memory, and causal presence. In a private encounter Elenia asks Aria about siblings and describes Nienna as her own sister in feeling. She uses the loss to understand Pride’s fear without accepting Aria’s conclusion that dependence should be escaped through domination.</p>
      <p>Love can create vulnerability without becoming a mistake. Understanding why Aria is afraid does not require agreement, obedience, or forgiveness.</p>
      <h2 id="rahu-siege">Savior of Pristinia · 2025</h2>
      <p>During the Rahu siege, Elenia destroys the siege towers and is publicly remembered as the Savior of Pristinia. The title records reputation, not solitary authorship of the settlement’s survival. It marks a decisive increase in scale: the uncertain forest pilgrim has become a figure whose intervention can alter a siege and whose name can become civic memory.</p>
      <h2 id="faith">Faith with conditions</h2>
      <p>Elenia’s earliest offer is almost complete surrender: let me serve, let me be your instrument. Her mature faith is more demanding. She can trust Mya, question Talan, judge Nuru and Aionia independently, and ask the gods to demonstrate that they remain worth following.</p>
      <p>Her purpose in Fein Uaill is described as less about rekindling her own faith than kindling any faith among the Zarathians. She can believe in light without requiring the divine order to be morally flawless.</p>
      <div class="quote">Less to rekindle my faith, more to kindle any faith in the Zarathians.<cite>Elenia</cite></div>
      <h2 id="magnus">Magnus and the limit of restraint · December 2025</h2>
      <p>After a divine battle in which Elenia says she restored roughly one hundred people, Magnus challenges her or tries to turn others against her in a fight-to-the-death context—a duel over who was right. Elenia wins but does not kill him. Instead, she uses divine magic to remove or erase his face.</p>
      <div class="quote">It was a duel to see who was right, but I didn’t want to kill him.<cite>Elenia</cite></div>
      <p>The choice is restraint without innocence. Refusing to kill does not make the alternative gentle, and preserving a life does not automatically grant permission to transform a body. The scene exposes the question at the center of later Elenia: when she can do almost anything, who decides what she should do?</p>
      <p>The detailed Magnus profile and current chronology connect the wider reaction to Elenia’s exile from Fein Uaill. One derivative timeline summary instead names Magnus as banished. The archive favors the detailed account while preserving the discrepancy until the original battle and judgment record is recovered.</p>
      <h2 id="ordinary-care">Ink, Brianna, and healing forward · 2026</h2>
      <p>On 15 January, Elenia obtains ink for Eugene’s spellbook. She materially invests in the learning of someone who often doubts his own worth. The archive places this errand beside resurrection, bodily alteration, and exile because cosmic authority does not remove her from the small needs of another person. The measure of great power is partly whether ordinary people remain visible from that height.</p>
      <p>After Magnus forces Delerium into Brianna, Elenia calls Mya. Hope sanctifies or cleanses the crystal rather than pretending the violation never occurred. This is healing through history: transform what remains without erasing what happened.</p>
      <h2 id="miracle">The Miracle of Fenumion · 2026</h2>
      <p>Elenia dies and Reincarnate returns her as a satyr through an unfudged one-in-250 result. The party had already accepted that she might return changed. The event feels like grace precisely because nobody guaranteed it. The archive does not claim Ada caused the roll, and Elenia’s cause of death and exact place in the 2026 chronology remain unresolved.</p>
      <h2 id="mountain">Biblical destruction · August 2026</h2>
      <p>Elenia joins Scribonia, Eugene, Arjahn, and others in unmaking a mountain through catastrophic weather and Earthquake: fissures, avalanche, floodwater, lava, boulders, and a vast column of steam and smoke. Before acting, she prays that any unknown people in the storm’s path be sheltered or removed. During the retreat she looks for anyone else trying to escape and accepts environmental limits rather than demanding that her power override them.</p>
      <div class="quote">As the storm rages on, the mountain claws at its own face … Nothing is visible except for biblical destruction.<cite>The mountain expedition</cite></div>
      <p>She asks where the boundary is, accepts “no,” and uses Gate to send Nymera home. The scene does not absolve the participants because their objective is justified. It asks whether mortals were ever meant to hold this degree of power and whether there can be a return after using it. Elenia’s attention still returns to individual people—she continues looking sideways even while acting at enormous scale—but the radius of what she can destroy has become enormous.</p>
      <h2 id="relationships">Relationships that carry the history</h2>
      <ul>
        <li><strong>Cala:</strong> early patron and call toward light; later faith no longer suspends Elenia’s judgment.</li>
        <li><strong>Mya:</strong> wonder becomes enacted Hope, costly restoration, and healing through prior harm.</li>
        <li><strong>Nienna:</strong> sisterhood and sacrifice remain active in Elenia’s later protection and philosophy of attachment.</li>
        <li><strong>Adelia:</strong> shared Gael restoration followed by incompletely documented diverging paths.</li>
        <li><strong>Quake:</strong> earlier aid returns as Death Ward; care becomes causal continuity.</li>
        <li><strong>Aria:</strong> understanding fear without accepting Pride’s ownership logic.</li>
        <li><strong>Magnus:</strong> the boundary between mercy, overwhelming force, and bodily domination.</li>
        <li><strong>Eugene:</strong> divine-scale power placed beside the material support of another person’s learning.</li>
        <li><strong>Gartina:</strong> miraculous possibility and the practical labor that makes survival durable.</li>
        <li><strong>Nymera:</strong> shared faith does not become a claim on another devotee’s continued participation.</li>
      </ul>
      <h2 id="danger">The danger inside her virtue</h2>
      <p>Elenia’s strength is not refusing power. She uses it quickly and aggressively when she thinks action is required. Her danger is the inference that competence can become permission: <em>I understand the threat; I can bear the cost; therefore I should decide.</em></p>
      <p>Elenia is compelling because she remains attentive while becoming mighty—not because might makes her automatically right. She does not need to become cruel for care to become dangerous; certainty would be enough. Her strongest future evidence will be failures and corrections: moments when help becomes authority, when someone refuses her intervention, or when listening costs more than action.</p>
      <h2 id="interpretive-boundary">Interpretive boundary</h2>
      <p>The supplied “favorite character” essay identifies the stewardship problem with unusual clarity, but it is an analyst’s interpretation rather than objective canon. The record does not declare Elenia destined for greatness, excuse the violence done to Magnus because she spared his life, or pre-answer whether she will become a caretaker without becoming an owner. That test remains live.</p>
      <h2 id="unresolved-elenia">Unresolved record</h2>
      <ul>
        <li>Her history before Cala’s possible call in April 2024.</li>
        <li>The precise division of labor in Gael’s first living foothold and the destination of Adelia’s departing group.</li>
        <li>The mechanics of her recovery after Wrath and the event that later led to Reincarnate.</li>
        <li>The full Rahu siege, hundred-person restoration, Magnus duel, and terms of the Fein Uaill banishment.</li>
        <li>The exact chronology of Brianna’s sanctification and the mountain expedition.</li>
        <li>How her Gate ability relates—or does not relate—to the ancient divine Gate.</li>
      </ul>`
  },
  {
    id: "olokun", title: "Olokun", category: "People", type: "Adventurer; protector; moral center",
    image: "olokun-poster.png", imageLayout: "portrait-hero", imageAlt: "Olokun standing with a trident amid a sweeping ring of water", imageCaption: "Olokun — protector, sailor, and Rahu adventurer.",
    dek: "A social, deeply attached protector forced to discover what love is allowed to do—and whether care can remain care when fear wants control.",
    tags: ["Olokun", "Agency", "Protection", "Rahu", "Aria", "Arjahn", "Resurrection"],
    facts: { "Known as": "Olokun; Olo; ‘Optimistic Olokun’", "Core principle": "Protection without ownership", Belonging: "Rahu and chosen community", Strength: "Relationship memory", "Defining test": "Care versus control", Status: "Resurrected; responsibility continues" },
    sources: ["Olokun_Ultimate_Character_History_and_Codex_Profile.md — longitudinal character history, dated scenes, quotations, cautions, and retrieval anchors", "CHARACTER_BIBLE.md — character synthesis and relationships", "MASTER_TIMELINE.md — dated event spine", "Fenumion_Codex_Words_the_World_Remembers.md — verified memorable lines"],
    body: `
      <p>Olokun’s philosophy begins as sociability, not doctrine. He jokes, sails, competes, arm-wrestles, encourages strangers, and becomes part of communities quickly. People become important to him; shared history makes them harder to abandon; responsibility follows. His development runs from <strong>belonging → attachment → conflicting loyalties → principle → triage and loss → death → return</strong>.</p>
      <div class="callout gold"><p><strong>Core proposition:</strong> differences in strength, knowledge, authority, and capability are real. Ownership does not follow from them. One may volunteer oneself; love or power does not automatically grant the right to spend another person.</p></div>
      <h2 id="optimistic-olokun">2024 · the person before the principle</h2>
      <p>A 10 July chronicle calls him <strong>“Optimistic Olokun”</strong>: cheerful, courageous, kind, and already beloved around Pristinia, with victories in Oiche Arena and an arm-wrestling contest. On 23 June, however, his engagement with a creature in a burned forest accidentally freed a minion associated with Death. Early Olo acts inside uncertainty; sometimes that helps, and sometimes it makes the world worse.</p>
      <p>His first explicit boundary arrives in an ordinary dispute on 12 July, when Grokthar keeps pressing after a rejected challenge.</p>
      <div class="quote">I told you no pana. When a man says no, is no. Accept my rejection.<cite>Olokun</cite></div>
      <p>The scene does not make him a fully formed philosopher. It plants the question that later scales upward: what does strength, love, fear, knowledge, or authority permit one person to do to another?</p>
      <h2 id="gate-and-arjahn">30 July 2024 · fear, the Gate, and Arjahn</h2>
      <p>Olo is frightened by the Gate’s sea or pool aspect, yet he steadies Arjahn by asking him to think of the people they can help and the family they can honor. His courage is behavioral, not an absence of fear. That early care later becomes causal history: after Olo gives Arjahn the Scepter of Faith, Arjahn will use that same gift to return him from death.</p>
      <h2 id="rahu">September 2024 · belonging without surrendered conscience</h2>
      <p>Becoming Rahu gives Olo power, knowledge, secrecy, obligations, and relationships with Ephraith, Dasa, and others. Only weeks later, a Delerium secret pits his oath against his friends. He wants them to find the answer but refuses simply to hand it over.</p>
      <div class="quote">I want you guys to find the answer, I just don’t want to tell you myself.<cite>Olokun</cite></div>
      <p>He neither declares the oath meaningless nor treats friendship as irrelevant. His discomfort with the Dasa life-force system makes the same point: he can belong to a people without surrendering judgment to them. Papirak becomes “sweet gramps,” an example of Olo’s habit of accumulating family through repeated presence rather than blood.</p>
      <h2 id="warden">30 December 2024 · the Warden</h2>
      <p>The Warden pursues Olo relentlessly. His attacks initially achieve little, though a strike against its blue clock-heart interrupts it; allies heal, hasten, reposition, and rescue him. His refusal to let Death take him again preserves an essential truth: survival matters to him. Later self-risk is not indifference to living.</p>
      <h2 id="aria">2025 · Aria becomes a person without becoming safe</h2>
      <p>Olo’s history with Aria moves through <strong>hostility → repeated contact → personalization → understanding → attachment → continued moral disagreement</strong>. Scribonia’s imprisonment in a gemstone keeps her harm concrete. The bath, teasing, attraction, a kiss, dance, and vulnerability let Olo see the frightened “small child” beneath Pride without erasing the ruler capable of coercion and cruelty.</p>
      <p>On 10 October, Aria invites him to help raise humanity high enough to reshape the world. Olo refuses to spend Zarathians in a celestial war. Their difference is not whether people deserve safety; it is who may authorize the cost.</p>
      <h2 id="world-is-good">27 September 2025 · a mortal answer to divine failure</h2>
      <p>After hearing of divine war and a damaged creation, Olo refuses the conclusion that failed caretakers make the world worthless.</p>
      <div class="quote">World is good. The people that live it, they make it good, not only gods.<cite>Olokun</cite></div>
      <p>This is not naïveté. He has already seen dead Gael and answers that friends remain there healing it. Mortals participate in what makes creation worth continuing even when gods conceal history, make mistakes, and leave others living with the consequences.</p>
      <h2 id="leadership">5 October 2025 · leadership as stopping</h2>
      <p>When Arandiel wants to continue through exhaustion and loss, Olo argues that Zarathis will lose important leaders if they push on. He says there is no glory in pointless death, calls for rest, and offers to keep watch himself. His strongest leadership often restrains escalation: protection before glory.</p>
      <h2 id="hidden-history">17 October 2025 · Aionia and the world map</h2>
      <p>Olo tells Eugene that time travel with Aionia let the group obtain a world map and overhear younger Cala and Nuru discussing the Gate and Papirak’s Wish. He remembers the gods acknowledging fault and insisting adventurers must never know. Direct evidence of divine concealment deepens his skepticism without making Aria’s war automatically right. The group uses access to history to gain knowledge, not to treat past lives as editable material.</p>
      <h2 id="whose-sacrifice">The War Council · whose sacrifice?</h2>
      <p>Aria says pain must sometimes be endured for victory. Olo answers with the compressed form of his mature ethic:</p>
      <div class="quote">My pain. Not everyone’s.<cite>Olokun</cite></div>
      <p>Both want safety and both will fight. Aria increasingly accepts suffering imposed on others for the future she considers necessary. Olo insists that willingness to suffer does not confer the right to volunteer everyone else.</p>
      <h2 id="aria-death">6 November 2025 · unfinished grief and the protector’s manifesto</h2>
      <p>Talan kills Aria unexpectedly, leaving no final reconciliation and no clean proof that either of them won the argument. When Death appears for her body, Olo rebukes allies for treating wounded enemies as disposable, insists that the purpose of killing and dying is protection, and asks Death what he actually wants.</p>
      <p>His speech reveals both virtue and danger. He continues seeing people inside enemies and monsters. Yet “If we could have saved them all, we would! We should have!” turns every unsaved person into a possible personal failure. Refusing to abandon anyone can slide into believing he must prevent every loss.</p>
      <h2 id="death-and-return">January 2026 · choice, death, and return</h2>
      <p>During the Abyss or Kurayami confrontation, Olo must choose between Wren and Aravil. He chooses Wren; Aravil is taken as a trophy. The archive does not declare the choice correct. It is triage, and it destroys the fantasy that enough care can always save everyone.</p>
      <p>The Abyss commands “Olokun. Die.” Olo dies. Arjahn then resurrects him with the Scepter of Faith that Olo had once given him. The causal chain matters: <strong>gift → relationship → retained object → death → another person’s choice → return</strong>. Resurrection does not erase Aravil, the decision, or the terror. It proves that Olo’s own survival can depend on having empowered someone else.</p>
      <h2 id="after-return">March–May 2026 · fear survives resurrection</h2>
      <p>In a March retreat involving worms, Olo supports the right to withdraw but lashes out at Arjahn from fear, then continues mapping and practical work. He returns with resolve, not purification. By May, Babel-Ashur confronts him with exhausted defenders, a losing Vanguard, fallen friends, and the question of how many people anyone can remain responsible for.</p>
      <h2 id="mature-philosophy">The mature distinctions</h2>
      <ul>
        <li><strong>Power is not permission.</strong> Capability does not settle moral authority.</li>
        <li><strong>Love is not ownership.</strong> Wrath, Aria, and Death all show that sincere attachment can coexist with terrible control.</li>
        <li><strong>Understanding is not obedience.</strong> A wound can deserve understanding without gaining the right to command.</li>
        <li><strong>Belonging is not surrendered conscience.</strong> Rahu, friends, Aria, Pristinia, and the wider world create obligations that no single loyalty erases.</li>
        <li><strong>Strength exists to protect.</strong> Violence is instrumental, never the measure of victory by itself.</li>
      </ul>
      <h2 id="flaw">Where the virtue breaks</h2>
      <p>Olo can move from “I cannot abandon people” to “I am responsible for preventing their loss,” and from there to “I may need to stop them from making dangerous choices.” His continuing test is whether he can protect people without deciding that loving them gives him authority over choices that remain theirs.</p>
      <h2 id="open-record">The open record</h2>
      <p>Important gaps remain: his exact arrival and earliest sailing, Rahu initiation ritual, relationships with Ephraith, Dasa, Sophina, and Anky, the original transfer of the Scepter, the full Aria chronology, the Void expedition, precise world-map alteration mechanics, the complete Wren–Aravil choice, and his later Babel-Ashur history. The archive will not turn those gaps into certainty.</p>`
  },
  {
    id: "jiangshi", title: "Jiangshi", category: "People", type: "Adventurer; returned dead",
    dek: "A philosophy of care built around consciously chosen presence: comfort offered freely, pain never demanded as the price of closeness.",
    tags: ["Shadows", "Adelia", "Death", "Care", "Gael", "Zarathis"],
    facts: { "Core promise": "We are here for you. To comfort.", History: "Dead for seven and a half months", Image: "Comforting shadows", "Central distinction": "Sustaining is not the same as choosing to love", Fear: "Losing Adelia" },
    sources: ["CHARACTER_BIBLE.md — Jiangshi’s loss, return, and care", "RELATIONSHIPS.md — Jiangshi, Adelia, Nienna, and Gartina", "Fenumion High-Presence Character Context Set — consolidated Jiangshi context"],
    body: `
      <p>Before her own death, Jiangshi already practiced a distinctive care: she could wrap a wing around someone, listen if they wanted to speak, and refuse to pry. Death intensified that instinct rather than creating it.</p>
      <h2 id="gael-loss">The loss that keeps acting</h2>
      <p>Jiangshi’s earlier loss in Gael becomes central to Nienna’s crisis over retreat and cowardice. Even while absent, what happened to her continues to alter Nienna, Gartina, Adelia, and the moral meaning of survival. Her history demonstrates that absence does not end causality.</p>
      <h2 id="shadows">Shadows</h2>
      <p>Jiangshi’s imagery refuses the simple equation of shadow with evil. A shadow can conceal, frighten, shelter, or comfort. Her later language around the Shadowlands and Death’s door gives that symbolism personal weight.</p>
      <h2 id="garden">The Zarathis garden conversation</h2>
      <p>In the garden, Jiangshi speaks through bonsai, Wabi-Sabi, ancestry, patience, harmony, tea, and shadows as rest. Her sharpest question tests love of nature at the point of sacrifice: is there a person for whom one would choose family over nature?</p>
      <p>The question separates being sustained, comforted, or protected by a system from being consciously loved by another person. Nature may keep someone alive; a shadow may shelter them; neither necessarily chooses them.</p>
      <h2 id="presence">Presence instead of victory</h2>
      <p>When Gartina becomes vulnerable about her dead parents, Jiangshi does not answer with another theory. She places a hand on Gartina’s shoulder. The gesture does not defeat Gartina’s argument; it demonstrates the relational care Jiangshi believes analysis alone cannot replace.</p>
      <h2 id="return">The unsaid word</h2>
      <p>After returning, she struggles to say that she was dead. The gap matters. Her fear of losing Adelia is not abstract dependency; it is shaped by months in which the world continued without her and people gathered for her memorial.</p>`
  },
  {
    id: "adelia-hope", title: "Adelia & Hope", category: "People", type: "Ascension and legacy",
    dek: "A life repeatedly rebuilt after loss culminates in a sacrifice that makes renewal itself part of the world.",
    tags: ["Hope", "Nienna", "Prima", "The Tree"],
    image: "assets/archive/adelia.jpeg",
    imageAlt: "Adelia hooded in black beneath a pale moon, holding a staff",
    imageCaption: "Adelia — bound to Hope.",
    imageLayout: "portrait-hero",
    facts: { Arc: "Early Gael → Hope → sacrifice → transformation", Culmination: "Adelia gives herself for Hope", Legacy: "Demigod and Tree-linked existence", Protection: "Can later Gate others from danger", Context: "Built from years of relationships" },
    sources: ["CHARACTER_BIBLE.md — Adelia’s Gael, Hope, political, and protection history", "MASTER_TIMELINE.md — event sequence and unresolved transformation date", "RELATIONSHIPS.md — Nienna, Jiangshi, Magnus, and Pappy", "Fenumion High-Presence Character Context Set — consolidated Adelia trajectory"],
    body: `
      <p>Adelia’s ascension is not arbitrary apotheosis. The archive connects a long pattern: family dies and a new family forms; faith nearly dies and is renewed; friendship ruptures and is repaired; Gael dies and Hope brings life. When Hope itself is dying, Adelia gives herself.</p>
      <h2 id="early-gael">Before the transformation</h2>
      <p>Adelia and Elenia help establish or prove an early living foothold in Gael. Adelia’s affection for Hope, her involvement in the Hallowing, and her grief after Nienna’s death make the later sacrifice part of a long relationship with living Gael rather than an isolated promotion into divinity.</p>
      <h2 id="political-life">Power among other people</h2>
      <p>Before becoming inseparable from Hope, Adelia remains active in political conflict. Aria publicly presses her about resurrection, divine power, and the beliefs of the watching crowd. Adelia later supports Magnus during Zarathian political developments. Neither event becomes a complete verdict on her judgment; together they preserve a mortal actor making consequential choices before her transformation.</p>
      <h2 id="transformation">Protector becoming what she protects</h2>
      <p>During the 2026 Hope crisis, sacrifice binds Adelia more deeply to Hope and life. She later exists as a demigod or Tree-associated being on Gael and can use Gate. The exact sequence and mechanism remain incomplete.</p>
      <p>Her central question therefore changes scale: what happens when a protector becomes increasingly inseparable from the thing she protects? Power may deepen care while also making boundaries, perspective, and ordinary consent harder to preserve.</p>
      <h2 id="pappy">Protection after ascension</h2>
      <p>In the Rift era, Adelia senses danger and Gates Pappy away from an ambush. The rescue later becomes central to a dispute about awareness, PvP, and metagaming. The Codex separates the in-world act of protection from the later governance argument rather than using either layer to erase the other.</p>
      <h2 id="writer">The Writer’s synthesis</h2>
      <p>The transformation gathers years of choices into a sequence: death, perseverance, renewed life, Hope. The point is not simply that Adelia receives a cosmic status. It is that the world remembers what her life kept doing.</p>
      <h2 id="nienna">No solitary hero</h2>
      <p>Hope is also Nienna’s legacy. Later language still names Nienna alongside Adelia and Elenia even after her death. The grammar preserves the truth that the living result belongs partly to someone no longer present.</p>`
  },
  {
    id: "nienna", title: "Nienna", category: "People", type: "Explorer; bearer of Hope; absent presence",
    image: "nienna-portrait.png", imageLayout: "landscape-hero", imageAlt: "Nienna seated beside a dark dragon above a purple sea beneath a burning twilight sky", imageCaption: "Nienna — explorer, survivor, and bearer of Hope.",
    dek: "A frightened woman who learned that survival can be wise, then recognized the rare moment when her own life truly was hers to spend.",
    tags: ["Nienna", "Hope", "Elenia", "Gartina", "Jiangshi", "Dale", "Sacrifice", "Memory", "Agency"],
    facts: { "Defining question": "When is survival wisdom, and when is sacrifice courage?", Wound: "Believed flight revealed cowardice", "Final choice": "Voluntary sacrifice during the Hallowing of Hope", Presence: "Continues through memory and later choices", Theme: "The person spending a life must own the choice" },
    sources: ["Nienna_Why_She_Is_One_of_My_Favorite_Fenumion_Characters.md — interpretive analysis grounded in primary scenes; preference is not canon", "MASTER_TIMELINE.md — dated and unresolved event spine", "CHARACTER_BIBLE.md — character and relationship synthesis", "RELATIONSHIPS.md — Nienna’s continuing influence through Elenia, Dale, and Saray", "Fenumion_Codex_Words_the_World_Remembers.md — preserved dialogue"],
    body: `
      <p>Nienna demonstrates one of Fenumion’s clearest rules: death does not remove a person from causality. Her history is not a simple ascent from cowardice to courage. She first survives a retreat whose morality remains unresolved; later, in a different crisis, she chooses to spend the life she had learned was worth preserving. Her final act changes what the earlier flight means without proving that flight was wrong.</p>
      <div class="callout gold"><p><strong>Core distinction:</strong> Nienna does not learn that survival is shameful. She learns that survival has value—and therefore understands the price when she finally chooses to spend it.</p></div>
      <h2 id="gael-expedition">The expedition to Gael</h2>
      <p>Nienna acquired a ship and freed or sprung its crew, then joined the chain of discoveries that reached Gael by June 2024. She said she would have attempted the journey alone and believed the Void would have killed her. Her testimony also preserves one horrific crossing method in which unwilling souls were fed to the Void’s inhabitants; it does not establish that all historical travel worked that way.</p>
      <div class="quote">I would have come alone you know. And I would have met my end. Alone, in the void, cold and alone.<cite>Nienna</cite></div>
      <h2 id="jiangshi">Jiangshi and the wound in her self-conception</h2>
      <p>After Jiangshi is lost, Nienna does not discuss cowardice as an abstraction. Adelia and Bitoshi blame her for leaving. She reports that Nuru—the god of her people, whom she once worshipped—looked on the others with approval and named her a “pathetic coward.” Nienna does not dismiss the judgment as cruelty. She fears it reveals what she truly is.</p>
      <div class="quote">This is about Nuru seeing the true condition of my heart.<cite>Nienna</cite></div>
      <p>The archive preserves the attribution carefully: this is Nienna’s report of Nuru’s judgment and Nienna’s belief about herself, not an objective verdict from the Codex.</p>
      <h2 id="retreat">Gartina’s defense of retreat</h2>
      <p>Gartina refuses the easy answer that brave people never run. Returning for Jiangshi would probably have produced another corpse and left both bodies unrecoverable. “Never leave an ally behind” can turn loyalty into pointless death; knowing how, why, and when to flee may be knowledge that other people lack.</p>
      <p>This defense keeps the earlier event morally open. The Jiangshi retreat and Nienna’s later sacrifice answer different circumstances. Her death does not prove Adelia, Bitoshi, or Nuru right, and it does not prove Gartina wrong.</p>
      <h2 id="hallowing">The Hallowing of Hope</h2>
      <p>During the Hallowing, Nienna does not become fearless or abandon the instincts that once kept her alive. She behaves tactically, conserves resources, remembers where danger came from, trusts defenses, and tries to survive. When the Gate threatens everything, the situation changes. She draws the enemy away and runs toward the place where spending her life can preserve Hope and allow the others’ work to continue.</p>
      <div class="quote">Please, let me run.......one last time.<cite>Nienna</cite></div>
      <p>The repeated action carries the transformation: she does not become courageous by ceasing to run. She decides what she is willing to run toward. The exact date and full sequence of the Hallowing remain unresolved in the recovered chronology.</p>
      <h2 id="choice">A sacrifice she owns</h2>
      <p>Nobody selects Nienna as an acceptable casualty. She identifies the price herself and acts so that the people who love her cannot overrule her. Its moral force comes from agency: the life being spent belongs to the person spending it. Her act therefore stands against systems in which powerful figures volunteer other people for a future they have chosen.</p>
      <p>She also wants to live. Her farewell is affectionate, frightened, hopeful, and still reaching toward a future she will not see. That desire makes death a real price rather than a dramatic pose.</p>
      <div class="quote">Dale, maybe if you have a daughter.......name her after me?<cite>Nienna</cite></div>
      <div class="quote">You’re foolish, Miss Nienna, but oh so brave.<cite>Dale</cite></div>
      <h2 id="death">Her answer to Death</h2>
      <p>Death declares that nobody will come to her aid. Nienna does not answer with greater power or guaranteed rescue. She dies, but refuses to let death decide whether everyone else’s story continues.</p>
      <div class="quote">Fight on. This is not the end. See you in another life.<cite>Nienna</cite></div>
      <h2 id="afterlife">Consequence outlives presence</h2>
      <p>Elenia does not transform grief into a warning against attachment. Dale carries Nienna’s memory. Saray’s guilt and later choices remain connected to the loss. The witnesses to Nienna’s decision carry it into the world’s understanding of Hope, courage, and continuation.</p>
      <p>When later accounts name Nienna beside the living builders of Hope, the world refuses to flatten accomplishment into whoever survived long enough to receive credit. Her history follows a central Fenumion sequence: person → choice → consequence → memory → later choice.</p>
      <h2 id="record-boundary">Record boundary</h2>
      <p>The supplied “favorite character” essay is an explicitly interpretive reading, not objective canon. Its strongest synthesis is preserved here because it fits the recovered scenes, but its preference remains the analyst’s. The Codex does not declare Nienna one of the world’s “best” characters, retroactively condemn her retreat, or turn her sacrifice into a universal rule for anyone else.</p>`
  },
  {
    id: "gartina", title: "Gartina", category: "People", type: "Halfling chef; protector; adventurer",
    image: "gartina-portrait.png", imageLayout: "landscape-hero", imageAlt: "Gartina, a friendly dark-haired halfling chef and gardener, carrying food against a painted autumn landscape", imageCaption: "Gartina — chef, gardener, protector, and adventurer.",
    dek: "Gartina asks what it means to accept responsibility for something one does not own—and answers through attention, soil, food, consultation, and revision.",
    tags: ["Gartina", "Gael", "Hope", "Pristinia", "Zarathis", "Care", "Stewardship", "Refugees"],
    facts: { Role: "Chef, gardener, investigator, protector", "Defining question": "What work does responsible care require?", Method: "Understand → act → observe → revise", Relationship: "Draegar", "Love model": "Attention → knowledge → competent care", Tension: "Preparation becoming self-blame", Artwork: "Portrait; Ececilia emoji in the artist gallery" },
    sources: ["GARTINA_HISTORY.md — consolidated profile and chronology", "Gartina_Why_She_Is_One_of_My_Favorite_Fenumion_Characters.md — interpretive analysis grounded in primary scenes; preference is not canon", "Fenumion_Codex_Update_Regional_History_2026-09-19.md — Gael recovery and refugee settlement", "MASTER_TIMELINE.md — dated event spine", "CHARACTER_BIBLE.md — character synthesis", "RELATIONSHIPS.md — parents, Jiangshi, and Tulaine", "Fenumion_Codex_Themes_Characters_Style_Guide_2026-09-20.md — stewardship analysis"],
    body: `
      <p>Gartina often enters history carrying food or drink. Tea, coffee prepared specifically for Olokun, and scones are not decorative quirks; they are how she brings a crisis down to a scale where people can think together. Her intelligence is practical, observant, and willing to revise itself.</p>
      <div class="quote">You’ve got to have a code.<cite>Gartina</cite></div>
      <div class="callout gold"><p><strong>Core proposition:</strong> if you care about something, learn it well enough that your care becomes competent.</p></div>
      <p>Her care is not an argument for non-intervention. Gardening, farming, conservation, protection, governance, and divine stewardship all choose what may flourish. Gartina’s demand is that caretakers admit those choices, learn enough to make them responsibly, observe what actually follows, and revise themselves when reality proves them wrong.</p>
      <h2 id="origins">Cooking, gardening, and her parents</h2>
      <p>Gartina was a gardener and cook before the better-documented Gael history. She learned through spectacular culinary failure, reading, repeated practice, observation, and trying again. The same loop later governs her ecology and strategy: <em>try → fail → observe → learn → try again.</em></p>
      <p>Her parents followed her work from poor restaurants to increasingly ambitious cuisine. They repeatedly showed up, expressed pride, and wanted her to reach her potential. Both are dead by the Zarathis garden conversation. Their love becomes Gartina’s model of care: attention creates curiosity; curiosity creates knowledge; knowledge makes support competent.</p>
      <h2 id="dead-soil">Gael’s dead soil · June 2024</h2>
      <p>When the expedition reaches Titan’s Watch, ruined statues, a decayed cathedral, and lifeless terrain show what happens when Death defeats a land. Gartina reads the soil as the stakes made physical. Cosmic catastrophe is also an ecological condition, and it will require more than victory in battle to repair.</p>
      <h2 id="retreat">Defending Nienna’s retreat</h2>
      <p>After Jiangshi is lost, Nienna carries shame and is blamed by Adelia, Bitoshi, and—by Nienna’s account—Nuru. Gartina rejects the maxim that an ally must never be left behind. Returning would probably have killed Nienna too and left both bodies unrecoverable. Refusing retreat can create another pointless death.</p>
      <p>This judgment must remain in dialogue with Nienna’s later sacrifice. Gartina does not teach that courage means survival at any cost; she preserves the difference between choosing one’s own necessary price and dying because a heroic slogan forbids retreat.</p>
      <h2 id="wrath-elenia">Wrath, liberation, and Elenia’s return</h2>
      <p>Wrath’s defeat in late 2024 ends a dominant threat without making Gael safe. Fiendish stragglers remain, and liberation becomes the beginning of recovery. A later retrospective remembers Gartina calling Elenia back after Wrath cleaved her in two. The exact mechanics remain unresolved, but the memory places Gartina inside both catastrophe and recovery.</p>
      <h2 id="restoration">Making life durable</h2>
      <p>Elenia and Adelia help establish or prove a living foothold; Gartina turns toward contaminated soil, viable plants, remediation, seeds, pollination, ecological succession, and practical expansion. By 24 February 2025, Hope and Stake are visible from the Tower, Shadowangel Forest is new, and Gartina says she helped spring the changed terrain into existence.</p>
      <div class="quote">Gael is free of Wrath’s taint. What was lost can begin to grow anew.<cite>Gartina</cite></div>
      <p>Her importance lies in continuity. Gael gives her a world-sized gardening problem, and the miracle is not enough. Somebody must remain afterward and determine how tomorrow works: what grows, where seeds come from, how pollination continues, and how restored life spreads. Adelia’s later transformation expands an existing restoration; it does not erase the earlier communal labor.</p>
      <h2 id="staying">The choice to remain</h2>
      <p>Before February 2025, Adelia leaves Gael with a group that includes Elenia. Gartina does not know where they went. The Tower becomes quieter. She wants eventually to catch up, but remains because refugees need care, Shadowangel Forest needs exploration, and too few new arrivals from Prima are replacing those who left.</p>
      <p>It is continuity work rather than spectacle: staying where the need remains after attention has moved elsewhere.</p>
      <h2 id="refugees">Soup, shelter, and consultation · 24 February 2025</h2>
      <p>Refugees around the Tower live in huts and shacks with occasional magical shelter. Their ship crashed near Crustacean Cove and may be beyond repair. Gartina worries they may feel forgotten, so she and Dale make chicken noodle soup. The discovery that there are no bowls or utensils leads Dale to spend roughly four hundred gold pieces on bowls and spoons.</p>
      <p>Immediate care becomes settlement planning. Dale proposes salvaging the wreck for a longhouse. Gartina considers Draygar’s materials and stone or metal from safer parts of the Plains. Then Dale asks whether anyone has consulted the refugees about leadership or their settlement. Gartina admits survival needs had displaced that conversation.</p>
      <p>The correction matters: feeding, sheltering, and planning for people do not grant ownership of their future. Dale goes to ask about using the wreckage. Gartina’s work converts cosmic victory into a place where somebody can safely eat dinner, then asks whether the people being helped still control what that place becomes.</p>
      <h2 id="zarathis-garden">The Zarathis garden debate · 11 August 2025</h2>
      <p>In a garden physically located in Zarathis, Tulaine describes stewardship through patience, hands, instinct, faith, and magic used only as a last resort. Gartina challenges the vagueness of “balance.” Cultivation is already intervention: farmers favor crops over weeds and aphids, while grove keepers draw other boundaries. Every caretaker chooses.</p>
      <p>Her demand is blunt: <strong>you’ve got to have a code.</strong> Acting without knowledge is dangerous. Caring should create curiosity, and love without nurturing understanding is incomplete. Her method is <em>understand → decide → act → observe</em>.</p>
      <p>Tulaine represents another knowledge system: <em>love → attend → perceive → respond</em>. Jiangshi asks what happens at the point of sacrifice and distinguishes being sustained by nature from conscious affection chosen by another person. When Gartina becomes vulnerable about her dead parents, Jiangshi places a hand on her shoulder instead of winning the argument.</p>
      <p>No one simply wins. Gartina correctly insists that intervention admit its priorities; Tulaine exposes competent knowledge that may resist explicit theory; Jiangshi practices care as intentional presence.</p>
      <h2 id="attention-as-care">Attention as care</h2>
      <p>Gartina notices Adelia drifting, regulates her own emotion through breath and routine, recounts what happened, and asks what can be done. She reads blight through relationships among soil, plants, wolves, deer, and human choices while also asking whether she has overstepped. She watches herself think.</p>
      <p>Food, ecology, tactics, and settlement are one philosophy expressed at different scales. Tea gives frightened people time to speak. A bowl turns soup into usable care. A map of enemy tactics preserves costly experience. A question asked of refugees limits the authority of helpers.</p>
      <p>This is not pure rationalism. Her parents’ attention came before expertise; knowledge grew because love made her life worth understanding. Gartina’s principle is not “know everything before you care,” but “if you care, become curious enough that your care stops being careless.”</p>
      <h2 id="relationships">Relationships that shape the method</h2>
      <ul>
        <li><strong>Her parents:</strong> repeated attention becomes her model of love and growth.</li>
        <li><strong>Jiangshi:</strong> explicit analysis meets intentional, embodied presence.</li>
        <li><strong>Tulaine:</strong> causal explanation meets instinctive and traditional stewardship.</li>
        <li><strong>Dale:</strong> relief becomes infrastructure and consultation.</li>
        <li><strong>Draegar:</strong> the retrospective preserves romance beside war; the full relationship chronology is missing.</li>
        <li><strong>Olokun:</strong> ordinary attention and tactical care later become impossible self-blame after loss.</li>
        <li><strong>Elenia and Adelia:</strong> miraculous possibility must be followed by durable restoration.</li>
        <li><strong>Nienna:</strong> survival is defended as a morally serious choice, not cowardice.</li>
        <li><strong>Quake:</strong> a shared estate is map-confirmed, but the relationship behind its name remains unrecovered.</li>
        <li><strong>Magnus:</strong> distrust is strongly expressed but remains Gartina’s attributed judgment rather than objective proof.</li>
      </ul>
      <h2 id="preparation">Preparation and its limit</h2>
      <p>Gartina remembers tactics and assumes enemies will adapt. Preparation is a form of love: understand enough that fewer people pay. After exhausted resources and a wrong choice contribute to Olokun’s death, that virtue breaks into self-blame. “I should have seen it” is the shadow cast by competence.</p>
      <p>Her best pressure point is not being asked to destroy nature. It is being forced to act before she can understand enough, when waiting is itself consequential. No amount of disciplined care can make another person’s survival fully controllable.</p>
      <h2 id="mechanics-as-biography">Mechanics as biography</h2>
      <p>A preserved mechanical history records Gartina moving from a grasslands-and-fields identity toward a protector role and losing access to Hallow. The lost ability becomes part of her biography: what she can do changes with what kind of caretaker she has chosen to become. The exact date and scene remain unresolved.</p>
      <h2 id="limitations">The danger inside her knowledge</h2>
      <p>Gartina may undervalue embodied, intuitive, or traditional expertise when the person carrying it cannot explain a causal framework. Her demand for knowledge is a strength, but it can make other forms of competent care look unserious. She can also plan so thoroughly that ordinary uncertainty feels like personal failure.</p>
      <h2 id="interpretive-boundary-gartina">Interpretive boundary</h2>
      <p>The supplied “favorite character” essay offers an interpretive synthesis, not an objective ranking or a declaration that Gartina’s framework is always correct. The Codex preserves Tulaine and Jiangshi as independent thinkers rather than props in Gartina’s argument. It also keeps her central risk visible: a person devoted to competent care may fail to recognize knowledge that cannot explain itself in her preferred language.</p>
      <h2 id="unresolved-gartina">Unresolved record</h2>
      <ul>
        <li>Her childhood, restaurant chronology, parents’ names, and the circumstances of their deaths.</li>
        <li>Her precise role in Hope’s first restoration and the magic that created the spring terrain.</li>
        <li>The mechanics of calling Elenia back after Wrath’s attack.</li>
        <li>The origins of Gartina and Quake’s Estate and the chronology of her relationship with Draegar.</li>
        <li>The identity change that cost Hallow and her role in later Hope crises.</li>
        <li>The exact circumstances of Olokun’s death and the choices for which she blames herself.</li>
        <li>Where her explicit-knowledge model has failed—and whether she learned to trust knowledge she could not fully explain.</li>
      </ul>`
  },
  {
    id: "carmen", title: "Carmen", category: "People", type: "Deep gnome warlock; keeper of accounts",
    image: "carmen-portrait.jpg", imageLayout: "portrait-hero", imageAlt: "Carmen, a purple-skinned deep gnome warlock in a feathered black hat, smiling behind a violet hand fan", imageCaption: "Carmen — warlock, negotiator, and keeper of accounts.",
    dek: "Carmen understands obligation as a ledger—who caused the damage, who fixed it, and who owes—but Paco forces her to confront the difference between price and value.",
    tags: ["Carmen", "Paco", "Prima", "Reciprocity"],
    facts: { Role: "Warlock and negotiator", Companion: "Paco", Instinct: "Track obligations and reciprocity", Question: "Can love exist without ownership?" },
    sources: ["Pasted markdown(20260909-030027).md — the portal, Paco’s sacrifice, and aftermath", "Pasted markdown(20260909-025745).md — Carmen’s death, Prima, and the tuning forks"],
    body: `
      <p>Carmen’s materialism is a moral language, not a joke about greed. She notices who benefits, what was paid, who performed the repair, and whether reciprocity is real. Asked why gods would choose her, she answers with the category she knows best: “Why? I have no gold.”</p>
      <h2 id="prima">The choice at Prima</h2>
      <p>Carmen dies defending Prima amid betrayal and initially refuses return. When others appeal to item, revenge, purpose, and divine selection, she negotiates in concrete terms: one tuning fork to Prima and one to Fein Uaill, not the sea. Her bargains are attempts to make obligation legible.</p>
      <h2 id="paco">Paco’s price</h2>
      <p>Paco sacrifices himself so Carmen can get everyone home and returns psychologically altered. A forced Pact of the Chain binds their relationship. Carmen hides fear beneath insults, strikes Sildithas for mocking him, offers food, and tries to make him want things again after he describes the peace of nothingness.</p>
      <h2 id="price-value">Price is not value</h2>
      <p>Carmen understands that a debt exists because Paco paid what she did not consent for him to pay. What she struggles to know is whether care can release its claim. Her unresolved test is simple and severe: if Paco wanted something she did not, could she recognize that love is not ownership?</p>
      <h2 id="counterpoint">A necessary counterpoint</h2>
      <p>Beside Elenia’s language of purpose and hope, Carmen asks who funds the miracle. In a setting obsessed with sacrifice, that accounting is indispensable. She may mistake value for price, but she also catches costs that idealists are tempted to hide.</p>`
  },
  {
    id: "ghilsen", title: "Ghilsen Hendrickson", category: "People", type: "Former slave; adventurer",
    dek: "A survivor whose suspicion of generosity, hunger for freedom, and pursuit of strength all begin with the experience of having been owned.",
    tags: ["Ghilsen", "Freedom", "Strength", "Brianna"],
    facts: { History: "Formerly enslaved", Drive: "Freedom through strength", Relationship: "Brianna / ‘Wifey’", Status: "Later reported fallen" },
    sources: ["Pasted markdown(20260909-022330).md — Ghilsen, Aravil, Magnus, and the tavern", "Pasted markdown(20260909-022619).md — factions, freedom, and Magnus’s offer", "Pasted markdown(20260909-025456).md — the Shadow Roads decision", "Pasted markdown(20260909-030027).md — the portal aftermath"],
    body: `
      <p>Ghilsen enters the record believing he is unworthy to sit with strangers. He calls himself a slave without metaphor, asks for the cheapest food, assumes generosity creates debt, and treats goodwill as something likely to conceal a trick. His early scenes establish a person trained to expect ownership.</p>
      <h2 id="freedom">“Freedom, you say?”</h2>
      <p>When Magnus describes the Radiant Flame through glory, freedom, and personal strength, Ghilsen catches on freedom. He soon measures himself against powerful people and asks what sacrifice greater strength would require. The strongest supported interpretation is that power promises him safety: if he becomes strong enough, nobody can own him again.</p>
      <h2 id="risk">The adventurer’s risk</h2>
      <p>At the Shadow Roads he tells Brianna that adventurers must take risks because nobody else will. The declaration is clearer than many of his actions, but it is a real worldview. Brianna takes his hand and holds him close as they enter the tear; the documents preserve trust and partnership even where Ghilsen’s interior response remains sparsely recorded.</p>
      <h2 id="record-limit">What the record supports</h2>
      <p>Ghilsen frequently asks for information rather than explaining himself. The Codex does not fill those silences with a more elaborate arc than the scenes contain. What is established is a former slave, distrustful of free gifts, drawn to freedom, measuring safety through strength, and connected closely enough to Brianna to call her “Wifey.” A later divine conversation reports that Ghilsen has fallen.</p>`
  },
  {
    id: "coralyn", title: "Coralyn", category: "People", type: "Aquatic adventurer",
    dek: "Coralyn makes cosmology legible through the sea: islands float in an endless ocean, Shadow Roads become snakes, and the Void is terrifying because it cannot be swum.",
    tags: ["Coralyn", "Aquatic", "Shadow Roads", "Void"],
    facts: { Lens: "The world understood as ocean", Strength: "Distinctive explanation through metaphor", Fear: "The Shadow Roads", Relationships: "Sildithas · Carmen · Jéane Rose" },
    sources: ["Pasted markdown(20260909-031758).md — Coralyn and Jéane Rose", "Pasted markdown(20260909-025456).md — the portal decision"],
    body: `
      <p>Coralyn’s language is not decorative nautical flavor. It is a complete mental model. The world is an ocean; islands are things floating in it. Shadow Roads are snakes. The Void resembles a squid, and its most alarming property is that she cannot swim in it.</p>
      <div class="callout gold"><p><strong>Worldbuilding through character:</strong> Coralyn explains unfamiliar cosmology by translating it into the environment her body already understands.</p></div>
      <h2 id="rose">Coralyn and Jéane Rose</h2>
      <p>Her conversation with Rose creates mutual characterization. Coralyn calls Rose unfocused; Rose explains that her thoughts move as quickly as she does. Coralyn teaches names and dangers, while Rose tests whether she can move quietly. Their exchange turns powers, physiology, and travel into social behavior.</p>
      <h2 id="fear">Dissent at the portal</h2>
      <p>When the Shadow Roads appear, Coralyn says she does not want to go. She privately tells Sildithas and Carmen that she does not think they should enter. The scene matters because courage is not enforced as consensus: Coralyn is afraid, recognizes the danger, and says so.</p>
      <h2 id="concept-and-person">A lens and a person</h2>
      <p>Her aquatic model differentiates her immediately. The portal record adds something more important: she can resist the heroic momentum around her. The combination prevents Coralyn from being only a clever concept.</p>`
  },
  {
    id: "ithilrune", title: "Ithilrûnë", category: "People", type: "Scholar; seeker of knowledge",
    dek: "Ithilrûnë builds safety from understanding. At the Maw, where evidence will not become a usable model, she must decide whether knowledge can still preserve choice when knowledge is unavailable.",
    tags: ["Ithilrûnë", "Knowledge", "Choice", "Shadow Roads", "The Maw", "Delerium Chain", "Sildithas"],
    facts: { Principle: "Knowledge preserves choice", Method: "Observe → understand → manipulate → preserve options", Crisis: "The Chain and Maw resist understanding", Growth: "Admits ignorance and follows another form of wisdom", Risk: "Decisive action may become preferable to uncertainty" },
    sources: ["CHARACTER_BIBLE.md — expanded Ithilrûnë profile and Chain/Maw conversation, supplied 23 Sep 2026", "Pasted markdown(20260909-025456).md — Sildithas’s death and the Shadow Roads decision", "Fenumion_Conversation_Catalogue.md — earlier character synthesis", "docs/ITHILRUNE_HISTORY.md — reconciled internal dossier"],
    body: `
      <p>Ithilrûnë is a powerful, cunning magical researcher whose confidence rests on understanding systems well enough to preserve options. Raw power matters, but knowledge creates leverage: observe the rules, find the pressure point, and keep danger from becoming fate. Her principle is not abstract scholarship. <strong>Knowledge preserves choice.</strong></p>
      <p>That principle also explains why ignorance wounds her so deeply. A danger she understands can be planned around. Powerlessness can be endured if its mechanism can be named. What destabilizes Ithilrûnë is evidence that refuses to become a coherent model, because the loss of understanding also removes the means through which she normally protects herself and other people.</p>
      <h2 id="ithilrune-plains">The Plains of Trial: grief as a competence problem</h2>
      <p>After Sildithas dies in the Plains of Trial and returns only hours later, Ithilrûnë says she could have prevented it and calls the failure unacceptable. Pain becomes a problem of insufficient knowledge and preparation: she should have known more, planned better, or acted sooner.</p>
      <p>This is care translated into method. It is also retrospective omnipotence. If every loss proves she should have been better prepared, then uncertainty itself becomes a personal moral failure.</p>
      <h2 id="ithilrune-shadow-roads">The Shadow Roads: knowledge and authority</h2>
      <p>The tear in reality is almost designed to test her. Where others see an unknown danger, Ithilrûnë sees offered knowledge: an explanation of the world, perhaps new lands, and therefore new choices. She votes to enter.</p>
      <p>Her flaw appears when she calls refusal cowardice. A personal compulsion to know becomes a judgment about what everyone else must risk. Ithilrûnë is strongest when understanding enlarges another person’s choices and most dangerous when it convinces her that she should decide which choices are legitimate.</p>
      <h2 id="ithilrune-maw">The Chain and Maw crisis</h2>
      <p>By the September 2026 Chain/Maw crisis, Ithilrûnë is unkempt, listless, distracted, and irritable. <a href="#voraketh">Voraketh</a> has attacked the foundation of her normal competence. A Delerium chain suppresses her magical strength and dangerous constructs defend or repair it; the Maw consumes magic with frightening ease. The force within may be an artifact, a prison, or both.</p>
      <p>One figure appears trapped inside and another may be watching. The name <strong>Derya Thorne</strong> has been recovered, but Ithilrûnë cannot connect it reliably to an identity, allegiance, or history. She cannot determine whether the prisoner is victim, enemy, god, eldritch danger, or evidence of a divine mistake. Each possibility changes the morality of intervention, and the evidence cannot yet distinguish among them.</p>
      <div class="callout gold"><p><strong>The broken sequence:</strong> Ithilrûnë normally moves from observation to understanding, manipulation, and preserved choice. The Maw stops the sequence at understanding.</p></div>
      <h2 id="ithilrune-ignorance">“I know fucking nothing. I hate it.”</h2>
      <p>The admission is more than frustration at an unsolved objective. Ithilrûnë’s usual source of safety, value, and care is failing in public. She can generate explanations—Talan may be concealing a mistake, Talan and Physisia may be in conflict, a mortal may have angered him, or the prisoner may truly be too dangerous to release—but she cannot responsibly rank them. The Codex preserves every one as theory.</p>
      <h2 id="ithilrune-action">Creating an actionable problem</h2>
      <p>Uncertainty does not make Ithilrûnë passive. It makes her desperate to recover agency. She wants to break the Chain and extract the figure. She considers Scribonia’s research, Draygar’s overwhelming force, additional Vanguard involvement, and more warriors like Pappy. She even proposes acquiring ancient null-magic armor and entering the Maw herself.</p>
      <p>She knows the plan is reckless. That recognition matters: this is not thoughtlessness but a conscious attempt to make an intolerable unknown actionable. The Chain also offends her morally. Sleeping beside it feels diminishing; leaving it untouched feels profane or sacrilegious even though she is not conventionally devout.</p>
      <h2 id="ithilrune-follows">The moment Ithilrûnë follows</h2>
      <p>Ithilrûnë is socially skilled and accustomed to steering conversations toward answers she already sees. At the end of the Maw conversation, she does something different. Sildithas admits that his own theology has become unstable and returns to his oath rather than pretending to possess a solution. He proposes a feast: not an answer to the Maw, but a way to preserve joy and the people still trying to face it.</p>
      <p>Ithilrûnë calls this a different form of wisdom. Because her own has not moved them forward, she agrees to follow his lead. She does not reject knowledge or cunning. She accepts that wisdom can remain real even when it is not hers.</p>
      <h2 id="ithilrune-relationships">Relationships as leverage—and trust</h2>
      <p><a href="#sildithas">Sildithas</a> is her clearest intellectual and temperamental counterweight. Their teasing rests on real trust, and she follows when his ethical method succeeds where analysis has stalled. Coralyn is a major magical ally whose reluctance at the Shadow Roads exposes Ithilrûnë’s tendency to moralize risk. Pappy represents the protection a physical defender buys fragile casters. Ithilrûnë can call Scribonia a “piss-ant” while still judging him the researcher most likely to help, and she considers Draygar useful because the island has made finesse unreliable.</p>
      <h2 id="ithilrune-trajectory">A more difficult form of wisdom</h2>
      <p>Her current movement is <strong>competence through knowledge → radical uncertainty → escalating attempts to recover agency → admission of ignorance → willingness to borrow another person’s wisdom</strong>. The arc is not “knowledge is bad.” It asks whether Ithilrûnë can keep investigating without making decisive danger preferable to responsible uncertainty.</p>
      <h2 id="ithilrune-unresolved">What remains unresolved</h2>
      <p>The archive identifies the island as Voraketh and dates the crisis to September 2026, but it does not yet know the exact day, what the Maw is, who is trapped inside, who may be watching, who Derya Thorne is, why Delerium forms the Chain, what roles Talan and Physisia actually play, whether the Chain can be altered safely, or whether the proposed feast takes place.</p>`
  },
  {
    id: "sildithas", title: "Sildithas", category: "People", type: "Oathbound defender",
    image: "sildithas-portrait.png", imageLayout: "portrait-hero", imageAlt: "Sildithas, a green-skinned elven defender wearing a blue cloak and leafy mantle", imageCaption: "Sildithas — oathbound defender and keeper of the light.",
    dek: "Sildithas begins as an instrument of near-divine will. When the gods stop fitting a neat moral hierarchy, he discovers that an oath can still preserve mercy, hope, flourishing, and joy without pretending certainty.",
    tags: ["Sildithas", "Duty", "Death", "Shadow Roads", "Oath", "The Maw", "Faith", "Joy"],
    facts: { Trial: "Died and returned after the Plains of Trial", Method: "Listen first, act second", Crisis: "Divine hierarchy no longer explains itself", "Moral floor": "Mercy · flourishing · joy · courage · hope", Response: "Create a small good while horror remains" },
    sources: ["CHARACTER_BIBLE.md — expanded Sildithas profile and Chain/Maw conversation, supplied 23 Sep 2026", "Pasted markdown(20260909-025456).md — resurrection, responsibility, and the portal", "Pasted markdown(20260909-030027).md — retrieval from the portal", "docs/SILDITHAS_HISTORY.md — reconciled internal dossier"],
    body: `
      <p>Sildithas is a courteous, nature-aligned, oath-centered defender. His early faith rests on an orderly relationship between divinity and mortal action: he is an <strong>instrument of near-divine will</strong>, receiving power from higher beings and carrying it responsibly into the world. Fenumion does not destroy that faith. It steadily removes the simplicity of its hierarchy.</p>
      <p>His developing story moves from confidence in divine authority toward confidence in chosen moral commitments when divine authority becomes opaque. Mercy, hope, flourishing, beauty, courage, and joy remain actionable even when the gods do not explain themselves.</p>
      <h2 id="sildithas-preparation">Preparation as protection</h2>
      <p>By July 2024, Sildithas is organizing defense training at Pristinia’s wall. He recruits Papirak to summon real creatures for an exercise, and Papirak’s sudden lucidity exposes an old aversion to actual battle. Training is not spectacle for Sildithas. It is the work required before abstraction becomes bloodshed.</p>
      <h2 id="sildithas-trial">The Plains of Trial</h2>
      <p>Sildithas dies in the Plains and returns only hours later. He does not excuse the result: “The Plains of Trial took my measure, and I failed.” He does not blame chance or demand Ithilrûnë carry the failure alone. Their preparation was insufficient.</p>
      <p>This gives his later courage its cost. When he says danger is where he belongs, he is not romanticizing something he has never paid for. Danger has already killed him.</p>
      <h2 id="sildithas-shadow-roads">Duty without ownership</h2>
      <p>At the Shadow Roads, Ithilrûnë enters for knowledge. Sildithas enters because danger threatens others and he believes his place is before it. Coralyn says she does not think they should go. He does not shame or command her; he explains his own obligation and refuses to turn it into hers.</p>
      <p>Duty governs Sildithas without automatically authorizing him to govern somebody else. His courage is most defensible when it remains a demand he places on himself.</p>
      <h2 id="sildithas-maw">Listening at the Maw</h2>
      <p>The September 2026 Chain/Maw crisis on <a href="#voraketh">Voraketh</a> resists normal power and explanation. The Delerium Chain suppresses magic and dangerous constructs defend or repair it. The Maw consumes magic. A figure may be imprisoned inside, another may be watching, and intervention may be rescue or catastrophe.</p>
      <p>Sildithas follows advice attributed to Murr: <strong>listen first, act second</strong>. He asks how the Maw’s pull compares with the Shadow Roads, whether anyone attempted communication, whether the Chain can be renewed, whether its constructs possess finite resources, and whether one concentrated breach would be safer than repeated attacks. Patience is not passivity; it is how he tries to make action responsible.</p>
      <h2 id="sildithas-theology">When divine hierarchy stops being neat</h2>
      <p>Ithilrûnë admits that Talan’s apparent use of Delerium has shaken her understanding. Sildithas responds by exposing his own uncertainty. Since arriving through the Gate, the gods have seemed surprisingly person-like. He cannot tell whether his theology changed because he grew or because he finally saw divine beings clearly.</p>
      <p>He does not conclude that the gods are false, evil, or irrelevant. He separates uncertainty about divine caretakers from the commitments by which he intends to live. Talan’s apparent fear of the Maw becomes evidence to consider, not a verdict that ends moral inquiry.</p>
      <h2 id="sildithas-oath">The oath as a moral floor</h2>
      <p>When external authority becomes unreliable, Sildithas returns to his oath. <strong>Kindle the Light</strong> answers despair with mercy and forgiveness. <strong>Shelter the Light</strong> protects goodness, love, and flourishing life from annihilation. <strong>Preserve Your Own Light</strong> guards joy, song, laughter, beauty, and art. <strong>Be the Light</strong> makes courage and hope visible to people living in despair.</p>
      <p>The oath answers an epistemic problem. Sildithas may not know what the gods are doing, but he can still choose what kind of person he will be while searching for the truth. His faith becomes ethical without ceasing to be faith.</p>
      <h2 id="sildithas-feast">A feast beside unresolved horror</h2>
      <p>The group cannot solve the Maw. The island is hostile, their numbers are small, the Chain suppresses their abilities, and Ithilrûnë is visibly fraying. Sildithas does not pretend food will solve the structure. He proposes a feast because preserving joy is itself part of resisting what the island is doing to them.</p>
      <p>Food, companionship, beauty, and respite are not distractions from his oath. They are applications of it. He chooses to create a small good while the unresolved horror still exists.</p>
      <h2 id="sildithas-ithilrune">“Keep what is most truly you from flickering out.”</h2>
      <p>Sildithas begins the conversation by naming <a href="#ithilrune">Ithilrûnë</a> the company’s master of magic. When she admits how badly the island has shaken her, he neither offers empty reassurance nor competes with her by inventing a better theory. He shares his own theological uncertainty.</p>
      <p>The equality matters. Her epistemic crisis draws out his crisis of authority; his oath gives her permission to stop solving for a moment without treating her as weak. His farewell asks her to preserve the part of herself that makes solving anything worthwhile.</p>
      <h2 id="sildithas-relationships">Relationships and method</h2>
      <p>Ithilrûnë is his intellectual counterweight and trusted friend. Coralyn is a powerful ally whose refusal he respects even when choosing differently. Pappy is both companion and enormous physical asset. Murr’s advice continues to shape his method. Communion with Physisia has made divine authority more complicated, not less; Talan’s apparent fear informs Sildithas without automatically deciding for him.</p>
      <h2 id="sildithas-trajectory">Faith after certainty</h2>
      <p>His current movement is <strong>secure instrument of divine will → opaque or fallible divine caretakers → uncertainty about hierarchy → return to oath rather than certainty → moral action without complete metaphysical understanding</strong>. This is not apostasy. It may be a more mature faith, grounded in responsibility rather than the assumption that power is automatically correct.</p>
      <h2 id="sildithas-unresolved">What remains unresolved</h2>
      <p>The archive identifies the island as Voraketh and dates the Chain/Maw crisis to September 2026, but it does not identify the exact day. It also has not established what Sildithas learned while communing with Physisia, the fuller history of Murr, whether the feast occurs, or how his ethical faith will respond if a divine caretaker directly commands something his oath appears to reject.</p>`
  },
  {
    id: "aravil", title: "Aravil", category: "People", type: "Oathbound hunter",
    dek: "Separated from her Queen but not released from her oath, Aravil finds a second form of belonging by becoming useful to Pristinia.",
    tags: ["Aravil", "Queen", "Oath", "Pristinia"],
    facts: { Identity: "Subject separated from her Queen", Principle: "Distance does not annul duty", Mistake: "Acted without understanding the players", "New role": "Hunter for Pristinia" },
    sources: ["Pasted markdown(20260909-022330).md — Aravil, her Queen, and her oath", "Pasted markdown(20260918-182039).md — food pressure and belonging through hunting"],
    body: `
      <p>Aravil arrives hungry, lonely, and still defined by service. She describes herself as a tool separated from its artisan, but corrects Magnus when he assumes that means she wants a new master: her oath remains while she draws breath.</p>
      <h2 id="admitting-error">Admitting error</h2>
      <p>She openly says she involved herself in a conflict without knowing the people or their capabilities. Competence does not require pretending she was right. The admission becomes part of her posture toward a world she is still learning.</p>
      <h2 id="useful-belonging">Useful belonging</h2>
      <p>Later, Pristinia’s food shortage gives Aravil a local role. She recognizes that hunting is something she can contribute. This does not replace her Queen or erase the oath; it creates another relationship between who she is and the people around her.</p>`
  },
  {
    id: "jeane-rose", title: "Jéane Rose", category: "People", type: "Speedster; explorer; protector",
    dek: "Rose experiences thought, movement, curiosity, and friendship at speed—while carrying a slower and heavier obligation not to fail people again.",
    tags: ["Jéane Rose", "Speed", "Exploration", "Protection"],
    facts: { Power: "Extraordinary speed", Desire: "See and explore the world", Obligation: "Keep people safe", Tension: "Joy in movement beside fear of failure" },
    sources: ["Pasted markdown(20260909-031758).md — Coralyn, Tshuka, travel, and protection"],
    body: `
      <p>Rose’s speed structures her mind as well as her movement. Thoughts arrive and vanish quickly; curiosity becomes motion; a new detail can redirect the entire conversation. Her distractibility is therefore played as lived experience rather than an annotation attached to a power.</p>
      <h2 id="explore-protect">Explore and protect</h2>
      <p>She says she wants to see the world and explore, then pauses before adding that she wants to keep people safe. Exploration appears joyful. Protection carries obligation, connected to the fear that without her there may be no hope.</p>
      <h2 id="small-behaviors">Small behaviors</h2>
      <p>Rose repeats Tshuka’s name to memorize it, demonstrates silence by appearing behind Coralyn, and rejects teleportation because walking is more fun. Her powers repeatedly become social behavior rather than remaining combat description.</p>`
  },
  {
    id: "vaerik", title: "Vaerik", category: "People", type: "Old soldier; precision fighter",
    image: "assets/archive/vaerik.png", imageLayout: "portrait-hero", imageAlt: "Vaerik, a weathered dark-haired soldier in a black cloak and ornate gold armor", imageCaption: "Vaerik — the old soldier.",
    dek: "Vaerik turns capability into obligation: if he can carry the cost, he believes he has no right to stop—even when continuing burns away parts of him.",
    tags: ["Vaerik", "Duty", "Heih", "Self-sacrifice"],
    facts: { Identity: "Old soldier", Principle: "If I can, then I must", "First lost name": "Heih", Combat: "Precision and killing strokes" },
    sources: ["Pasted markdown(6).md — Vaerik combat and Heih", "Fenumion_Conversation_Catalogue.md — Vaerik synthesis and source map"],
    body: `
      <p>Vaerik is defined less by speeches than by forward motion. He wastes little movement, uses subtle magic, and looks for the killing stroke. The same precision governs his ethics: once he believes a burden can be carried, the fact that it will hurt him is not a reason to refuse it.</p>
      <h2 id="if-i-can">“If I can, then I must”</h2>
      <p>His duty is genuinely other-directed. He will burn himself to keep other people alive. The danger is that willingness to suffer can become a private grant of moral permission—first to destroy himself, then potentially to decide what costs a mission requires from everyone else.</p>
      <h2 id="heih">Heih and the names</h2>
      <p>Heih dies; Vaerik continues the mission, solves the immediate problem, carries the body, and later cuts the name into his arm. The act matters because his transformation has already taken other names from him. Memory becomes something he has to inscribe physically so relentless continuation cannot erase it.</p>
      <h2 id="old-soldier">An old soldier’s grammar</h2>
      <p>Fire, lost names, Second Wind, controlled violence, and the refusal to stop all point toward one wound: if there is anything left in him, he believes he must find it and spend it. Vaerik’s future test is not whether he can endure. It is whether he can accept that ability does not always create obligation.</p>`
  },
  {
    id: "arjahn", title: "Arjahn", category: "People", type: "Soldier; mapper; protector",
    dek: "Arjahn thinks beyond the first victory: routes, hazards, retreat, the next fight—and the relationships that must survive long enough to make any plan matter.",
    tags: ["Arjahn", "Pristinia", "Mapping", "Olokun", "Vanguard", "Babel-Ashur"],
    facts: { Method: "Soldier thinking", Priority: "Survive the second fight", Family: "Wife and children", Affiliation: "The Vanguard · May 2026", Strength: "Makes other people’s plans better" },
    sources: ["Pasted markdown(20260909-022826).md — cavern mapping and reconciliation", "Pasted markdown(20260919-145050).md — Arjahn and Olokun after repeated losses", "MASTER_TIMELINE.md — Babel-Ashur crisis, 5 May 2026"],
    body: `
      <p>Arjahn’s planning is biography. He looks for environmental hazards, defensible routes, monster territory, and the path home after the battle everyone is currently discussing. He is interested not only in reaching a target, but in whether the party can survive what happens afterward.</p>
      <h2 id="map">The map as protection</h2>
      <p>When Wren develops a way to gather information from the landscape, Arjahn does not compete for ownership. He asks who will draw what she learns and offers magic to improve the work. His instinct is collaborative: a good solution belongs to the group and should be made more survivable.</p>
      <h2 id="olokun">Anger carried forward</h2>
      <p>After Olokun lashes out at him for risking another death, Arjahn names what the fear has erased: he has a wife and children, understands the cost, and is trying to keep Olokun alive too. Days later he offers a joke about weaponized paintbrushes because he does not want anger to become their last exchange.</p>
      <h2 id="discipline">Fear, then discipline</h2>
      <p>The broader record remembers a protector who can be terrified, physically overwhelmed, or furious without ceasing to act like a soldier. Courage is not calmness. It is regaining enough discipline to stand, plan, and protect the person beside him.</p>
      <h2 id="vanguard">The Vanguard · May 2026</h2>
      <p>During the Babel-Ashur crisis, Arjahn was reported to be part of <a href="#vanguard">a vanguard that was losing</a>. This is the only confirmed Vanguard reference in the surviving record. It extends Arjahn’s history into an active front under severe pressure, but it does not identify his rank, mission, comrades, or eventual fate.</p>`
  },
  {
    id: "wren", title: "Wren", category: "People", type: "Druidic investigator",
    dek: "Wren’s core verb is understand: ask the land, test a claim, notice contradictions, and avoid pretending that inherited certainty is evidence.",
    tags: ["Wren", "Investigation", "Nature", "Zarathis"],
    facts: { "Core verb": "Understand", Method: "Environment as information network", Magic: "Communion rather than command", Habit: "Withhold conclusions when observation is unsafe" },
    sources: ["Pasted markdown(20260909-022826).md — mapping through clothes, plants, and Commune with Nature", "Pasted markdown(20260909-024010).md — Zarathian claims and cautious reporting"],
    body: `
      <p>Wren discovers solutions through the world around her. Old clothes become weatherproof route markers; mushrooms may become witnesses; Commune with Nature becomes a way to map danger. Her abilities do not arrive as a list from a character sheet. They arise from attention to the environment.</p>
      <h2 id="ask-the-earth">Ask the earth</h2>
      <p>When she communes, Wren presses a palm to the ground as if greeting an old friend and asks the mother of root and stone. The posture defines the magic: relationship, not extraction. Nature is not scenery around her adventure; it is another participant capable of answering.</p>
      <h2 id="epistemic-caution">Epistemic caution</h2>
      <p>In Zarathis she notices that guides accept cultural stories without testing their premises. She also realizes that some conclusions should not be spoken while the party may be watched. Understanding requires both skepticism and judgment about when evidence can safely be compared.</p>
      <h2 id="not-performance">Inquiry without performance</h2>
      <p>Wren shares Scribonia’s appetite for knowledge but not his need to display mastery. She investigates assumptions, looks for contradictions, and leaves room for other accounts. Her intelligence is strongest when it creates a network of people, plants, and observations rather than a hierarchy.</p>`
  },
  {
    id: "scribonia", title: "Scribonia", category: "People", type: "Magi; scholar; thri-kreen",
    image: "scribonia-portrait.png", imageLayout: "portrait-hero", imageAlt: "Scribonia, a pale moth-like thri-kreen scholar with four arms, patterned wings, writing tools, and a tall staff", imageCaption: "Scribonia — Magi, scholar, teacher, and seeker of dangerous knowledge.",
    dek: "Scribonia refuses to be reduced by anyone else’s category. His reason gives him courage before gods and tyrants—and makes it very hard for him to stop prosecuting an argument.",
    tags: ["Scribonia", "Knowledge", "Identity", "Aria", "Eugene", "Delerium"],
    facts: { Pronouns: "He / him", Identity: "Scribonia before every label", Strength: "Reason under intimidation", Appetite: "Useful knowledge and mastery", Institution: "Students and scholarly responsibility", Risk: "Argument becoming authority" },
    sources: ["Pasted markdown(20260909-023111).md — Scribonia confronts Aria", "Pasted markdown(20260909-023428).md — the masked newcomer and autonomy", "Pasted markdown(20260909-024010).md — Zarathian research", "CHARACTER_BIBLE.md and MASTER_TIMELINE.md — Eugene, the gemstone, students, and Delerium", "Fenumion High-Presence Character Context Set — consolidated Scribonia context"],
    body: `
      <p>Scribonia is a collector of useful knowledge. Where Wren asks how a culture knows its stories are true, he returns from its libraries with literacy rates, years of study, Papirak, Wish, and the metaphysics of truth. He thinks mastery is protective and that a sound argument remains unfinished until it is answered.</p>
      <h2 id="identity">“I am Scribonia”</h2>
      <p>When Aria tries to diminish him as a common moth, Scribonia refuses the premise. Moth, Magi, thri-kreen—other people may use any category they like. His identity does not depend on their permission. That self-possession lets him step toward a physically overwhelming opponent and challenge the hatred beneath Aria’s logic.</p>
      <h2 id="knowledge-and-freedom">Knowledge as freedom and leverage</h2>
      <p>Scribonia understands that ignorance creates dependence. His Delerium research, teaching, and willingness to confront powers such as Aria all grow from the conviction that understanding can create freedom. The danger is symmetrical: mastery can also become leverage over people who do not possess it.</p>
      <p>Aria makes that danger physical by trapping Scribonia in a gemstone in July 2025. Scholarship does not protect him from becoming an object inside somebody else’s strategy.</p>
      <h2 id="eugene-boundary">Eugene and a boundary he keeps</h2>
      <p>When Eugene receives a Delerium-channeling weapon, Scribonia feels envy. He has been entrusted with something Scribonia worked and suffered to understand. Scribonia does not convert that feeling into entitlement.</p>
      <div class="quote">I am not your teacher anymore, you do not owe me an explanation in every aspect of your life.<cite>Scribonia</cite></div>
      <p>The boundary matters because it is not automatic innocence. Scribonia still wants knowledge and control; here, he recognizes that mentorship does not make another person’s life an extension of his authority.</p>
      <h2 id="institution">Knowledge that outlives one scholar</h2>
      <p>Students and scholarly responsibility make Scribonia’s knowledge institutional rather than merely personal. What he teaches can protect people, create dangerous capability, or reproduce his own assumptions after he leaves the room.</p>
      <h2 id="growth">The capacity to yield</h2>
      <p>Some records show real growth: he recognizes that Gartina has more wisdom for a frightened newcomer and initially waits. The achievement is fragile. Minutes later, he is issuing commands and moral judgments again. Scribonia can identify that someone else is better suited to lead before his certainty drags him back into control.</p>
      <h2 id="last-word">The last word</h2>
      <p>Even after ordered to stop arguing with Aria, he preserves a final declaration that the issue is not dead. This is both character strength and collaborative hazard. Reason makes him difficult to intimidate; it can also persuade him that any conversation remains his until his position has been fully heard.</p>
      <h2 id="scribonia-open-record">The incomplete chronology</h2>
      <p>Scribonia’s earliest appearances, Academy history, full Delerium sequence, imprisonment and release, students, and later 2026 scenes remain incomplete. The stronger thematic model does not authorize the Codex to invent the missing transitions.</p>`
  },
  {
    id: "dale", title: "Dale", category: "People", type: "Musician; builder of ordinary continuities",
    dek: "Dale turns concern into courage, food, tools, shelter, and consultation without pretending care gives him control over another person’s grief.",
    tags: ["Dale", "Saray", "Gael", "Practical care"],
    facts: { Pattern: "Concern → practical care → consultation", Relationship: "Saray", Region: "Gael", Method: "Logistics that remain human" },
    sources: ["CHARACTER_BIBLE.md — Dale chronology and pattern", "MASTER_TIMELINE.md — Gael settlement and later expedition evidence", "RELATIONSHIPS.md — Dale and Saray"],
    body: `
      <p>Dale’s importance comes from the way care becomes material. He can sing courage into defenders, but he also notices bowls, spoons, lumber, shelter, and the need to ask displaced people what they actually want.</p>
      <h2 id="nienna">Nienna’s final choice</h2>
      <p>Dale sings courage into the defenders around Hope and is present for Nienna’s final sacrifice. Nienna says goodbye to “sweet Dale.” His answer preserves both admiration and unease instead of declaring that her death was simply correct.</p>
      <div class="quote">You’re foolish, Miss Nienna, but oh so brave.<cite>Dale</cite></div>
      <h2 id="saray">Care that does not seize the mind</h2>
      <p>After Nienna’s death, Saray blames herself. Dale supports her while recognizing that he cannot simply argue her out of guilt. He tells Adelia that Saray must reach the realization herself that nothing could have been done. His care respects an internal process he cannot own.</p>
      <h2 id="gael-work">Gael’s practical work</h2>
      <p>In the refugee settlement, Dale helps turn emergency survival toward civic continuity: food, eating tools, permanent housing, salvaged lumber, and direct consultation. The actions are humble beside Gael’s divine history, but they are how liberation becomes a place people can inhabit.</p>
      <h2 id="incomplete-record">The incomplete chronology</h2>
      <p>Dale’s strong pattern is established, but his full longitudinal history is not. The Codex preserves the repeated behavior without manufacturing a total biography from a handful of consequential scenes.</p>`
  },
  {
    id: "eugene", title: "Eugene", category: "People", type: "Scholar; reluctant bearer of dangerous knowledge",
    dek: "Eugene repeatedly names himself as a burden immediately before becoming the person who asks the useful question or carries the difficult knowledge.",
    tags: ["Eugene", "Scribonia", "Delerium", "Knowledge"],
    facts: { Fear: "Failure and burdening others", Pattern: "Self-doubt followed by competence", Mentor: "Scribonia", Trust: "Dangerous weapon and spellbook learning" },
    sources: ["CHARACTER_BIBLE.md — Eugene chronology", "RELATIONSHIPS.md — Scribonia and Eugene", "MASTER_TIMELINE.md — 2024–2026 knowledge events"],
    body: `
      <p>Eugene says he is afraid of failure and of becoming a burden. The archive’s answer is behavioral rather than reassuring: he doubts himself, then asks the question the room needs.</p>
      <h2 id="useful-questions">Competence after the disclaimer</h2>
      <p>During the Rahu secrecy crisis, Eugene says he is not good at thinking on his feet and then integrates Scribonia’s Delerium research into practical questions about Olo’s oath and Death. His low self-presentation is not evidence of low importance.</p>
      <p>In July 2025, he recognizes another shy person’s discomfort because he recognizes the pattern in himself. His insecurity becomes socially useful when it helps him notice somebody else rather than remaining only self-judgment.</p>
      <h2 id="dangerous-inheritance">Dangerous inheritance</h2>
      <p>A weapon capable of channeling Delerium appears in his cloak. Eugene doubts his worthiness; Scribonia privately regards him as brilliant. Later, Elenia materially invests in his spellbook. The recurring pressure is not whether he can accumulate knowledge, but whether he can experience himself as someone trusted to carry its responsibility.</p>
      <h2 id="mentor-boundary">Beyond teacher and student</h2>
      <p>Scribonia’s envy does not become a claim on Eugene’s life or every explanation he could provide. Their relationship preserves a meaningful boundary: instruction can shape a person without owning what that person later becomes.</p>
      <h2 id="magnus">Competence amid hostility</h2>
      <p>After Aria’s death and Death’s invocation of ownership over Magnus, Eugene attempts to heal Magnus while others’ trust is collapsing. The act does not prove a final judgment about Magnus. It shows Eugene acting usefully inside a crisis before certainty about the person in front of him is available.</p>`
  },
  {
    id: "saray", title: "Saray", category: "People", type: "Survivor of grief; Wrath’s final opponent",
    dek: "Saray carries guilt after Nienna’s death and later lands the final blow on Wrath; the history between those moments remains deliberately open.",
    tags: ["Saray", "Nienna", "Dale", "Wrath"],
    facts: { Wound: "Self-blame after Nienna’s death", Support: "Dale", "Known turning point": "Final blow against Wrath", Confidence: "Partial chronology" },
    sources: ["CHARACTER_BIBLE.md — Saray evidence and caution", "RELATIONSHIPS.md — Dale and Saray", "MASTER_TIMELINE.md — assault on Wrath"],
    body: `
      <p>Nienna’s death produces intense self-blame in Saray. Dale remains beside her without pretending that love gives him the power to decide when guilt is over.</p>
      <h2 id="wrath">The final blow</h2>
      <p>Saray later strikes the blow that defeats Wrath. That fact is consequential; the archive does not force it into a clean revenge story. The scenes connecting guilt to the battle have not yet been recovered well enough to establish that arc.</p>
      <div class="callout"><p><strong>Archival boundary:</strong> guilt and the final blow are established. Motive, healing, and the full sequence between them remain open.</p></div>`
  },
  {
    id: "casimir-alioth", title: "Casimir & Alioth", category: "People", type: "Loyalty under institutional judgment",
    dek: "One choice—choosing each other—becomes strength in Alioth’s account and failure in Ephraith’s.",
    tags: ["Casimir", "Alioth", "Rahu", "Loyalty", "Provenance"],
    facts: { Casimir: "Procedural thinker", Alioth: "Loyalty as strength", Institution: "Rahu", Status: "Partial chronology" },
    sources: ["CHARACTER_BIBLE.md — Casimir and Alioth", "RELATIONSHIPS.md — competing meanings of the Rahu trial", "MASTER_TIMELINE.md — Olo’s oath and Casimir’s method"],
    body: `
      <p>Casimir approaches constraints as structures to understand. Around Olo’s Rahu oath, he tests yes-or-no questions, Zone of Truth, silence, and the information a refusal itself might reveal.</p>
      <h2 id="trial">The same action, competing meanings</h2>
      <p>In a Rahu trial, Casimir and Alioth choose each other and fail. Alioth calls their loyalty a strength. Ephraith says they chose each other over Rahu. The action is stable; its meaning changes with the authority interpreting it.</p>
      <h2 id="provenance">Why provenance matters</h2>
      <p>The trial is an unusually clear example of the Codex’s evidence rule. An institutional verdict is historically real without becoming the only possible truth about the behavior it judged.</p>`
  },
  {
    id: "pappy", title: "Pappy", category: "People", type: "Druid-barbarian; plainspoken protector",
    dek: "A simple, good man placed inside conflicts where goodness does not guarantee safety or clear information.",
    tags: ["Pappy", "Rift", "Adelia", "Dumuzi"],
    facts: { Identity: "Voraketh druid-barbarian", Disposition: "Simple and good", Crisis: "Ambushed during Rift", Escape: "Adelia’s Gate" },
    sources: ["CHARACTER_BIBLE.md — Pappy record", "RELATIONSHIPS.md — Adelia and Pappy", "MASTER_TIMELINE.md — Rift dispute context"],
    body: `
      <p>Pappy is remembered through plainspoken care, hot springs, and a fundamentally good disposition. That simplicity does not keep him outside the setting’s hardest moral problems.</p>
      <h2 id="rift">The Rift ambush</h2>
      <p>Pappy joins the Rift alongside characters with very different moral commitments and is ambushed. Adelia senses betrayal and Gates him out. The event later becomes a dispute about what Adelia could know in character and what deeper mechanics permitted.</p>
      <h2 id="separate-layers">Character and governance</h2>
      <p>The physical rescue, the characters’ knowledge, the mechanical ruling, and the later out-of-character dispute are separate layers of evidence. The Codex preserves Pappy’s danger and escape without using sympathy to settle the governance question.</p>`
  },
  {
    id: "st-anky", title: "St. Anky", category: "People", type: "Adventurer; peace-linked figure",
    image: "st-anky-portrait.png", imageLayout: "portrait-hero", imageAlt: "St. Anky, a small dark-skinned gnome in a green hood and cloak, raising a wooden tankard", imageCaption: "St. Anky — adventurer, traveler, and remembered ally.",
    dek: "A recurring companion in journeys through ancient history, the Shadow Roads, and the later struggle to preserve peace between Rahu and Pristinia.",
    tags: ["St. Anky", "Nuru", "Rahu", "Pristinia", "Shadow Roads", "Babel-Ashur"],
    facts: { Encounters: "The Gate · Shadow Roads · Babel-Ashur era", Association: "Nuru; Rahu–Pristinia peace", Status: "Remembered as dead by May 2026", Record: "Fragmentary" },
    sources: ["MASTER_TIMELINE.md — Gate journey, Shadow Roads, and May 2026 remembrance", "CHARACTER_BIBLE.md — Nuru and the Rahu/Pristinia peace context", "Olokun_Ultimate_Character_History_and_Codex_Profile.md — relationship gaps and later remembrance"],
    body: `
      <p>St. Anky appears across several major thresholds in the recovered record. He travels with the group that witnesses the Gate’s construction in ancient Prima, later arrives at the Shadow Roads, and remains part of Olokun’s remembered circle during the Babel-Ashur crisis.</p>
      <h2 id="gate">Witness to the Gate’s construction</h2>
      <p>On 30 December 2024, St. Anky travels with Olokun, Cecil, Coralyn, and Fenwick into ancient Prima. The travelers encounter young Papirus, Cala, and Nuru while the Gate is being built. Their intervention takes the form of information—a map of the shattered world—rather than an attempt to rewrite the catastrophe outright.</p>
      <h2 id="shadow-roads">The Shadow Roads</h2>
      <p>St. Anky is present when the party enters the Shadow Roads on 14 September 2025. The recovered summary places his arrival alongside Ithilrûnë’s crossing and the emergence of another dark being, but his exact actions and knowledge during the encounter have not yet been recovered.</p>
      <h2 id="peace">Rahu, Pristinia, and Nuru</h2>
      <p>Later records associate Anky and Nuru with peace between Rahu and Pristinia. The surviving evidence does not yet establish Anky’s precise office, negotiations, or relationship with Olokun, so the Codex preserves the association without inventing the missing political history.</p>
      <h2 id="remembrance">Remembered among the dead</h2>
      <p>During the Babel-Ashur crisis of 5 May 2026, Olokun remembers Dale and Anky as dead. That remembrance establishes the loss but not its date, place, or cause. Those circumstances remain one of the open gaps in St. Anky’s history.</p>
      <div class="callout gold"><p><strong>Record boundary:</strong> St. Anky’s presence, peace association, and later death are supported. His origins, full relationship with Olokun, and the circumstances of his death remain unresolved.</p></div>`
  },
  {
    id: "thorn", title: "Thorn", category: "People", type: "Veilguard; returned survivor",
    dek: "Thorn belongs to the Veilguard, died on a Gael husk hunt, and later returned—while the mechanism connecting those facts remains unknown.",
    tags: ["Thorn", "Veilguard", "Gael", "Unresolved return"],
    facts: { Death: "Gael husk hunt", Aftermath: "Body left; cult ritual attempted", Return: "Alive by 19 Sep 2026", Belonging: "Veilguard" },
    sources: ["CHARACTER_BIBLE.md — Thorn chronology", "REGIONS_FACTIONS_INSTITUTIONS.md — Gael and Veilguard", "OPEN_QUESTIONS_AND_CONTRADICTIONS.md — return gap"],
    body: `
      <p>Thorn dies during a husk hunt in Gael. The team is forced to leave the body. A cult later attempts to use Thorn in a ritual aimed at one of Gael’s Shards. By September 19, 2026, Thorn is alive in Prima.</p>
      <div class="callout gold"><p><strong>Unresolved:</strong> the record does not yet establish how Thorn returned, what became of the ritual, or how those events connect.</p></div>
      <h2 id="veilguard">Belonging to the Veilguard</h2>
      <p>Thorn says, “I belong with the Veilguard, so I must return.” The wording establishes more than an assignment. By this point the Veilguard has become identity, obligation, and community.</p>
      <h2 id="ordinary-history">Ordinary institutional life</h2>
      <p>Thorn also carries news of Farkur and the Knights’ disappearance, Ryvyt’s response, Gael transport, farms, and harvest work. A person who passed through death and cult ritual still participates in the mundane systems by which regions continue.</p>`
  },
  {
    id: "cave-company", title: "The Delerium Cave Company", category: "People", type: "Ensemble record · 20 September 2026",
    dek: "Six people enter an unmapped cave and reveal themselves through fear, contamination, curiosity, song, care, and competing judgments about what danger requires.",
    tags: ["Di’trillio", "Pell", "Vessalia", "Moira Eshdin", "Djöhandrai", "Saoirse"],
    facts: { Date: "20 Sep 2026", Site: "Unmapped cave", Threats: "Contaminated corpse · crystals · malformed harpies", Status: "Unresolved" },
    sources: ["CHARACTER_BIBLE.md — cave ensemble records", "MASTER_TIMELINE.md — 20 September event", "OPEN_QUESTIONS_AND_CONTRADICTIONS.md — cave questions"],
    body: `
      <p>The cave record matters because nobody is reduced to evidence for the loudest person. Each response makes a different part of the danger legible while the larger mechanism remains unknown.</p>
      <div class="directory-grid">
        <section><h3>Di’trillio</h3><p>Recognizes contamination and shard fragments in the corpse while nearby violet crystals do not produce identical feedback. Decisive about collapsing the cave, yet gentle when Vessalia’s song creates risk.</p></section>
        <section><h3>Pell</h3><p>Frightened, practical, and still drawn toward dangerous understanding. The corpse becomes human history when he says it was somebody’s child and argues for burial.</p></section>
        <section><h3>Vessalia</h3><p>Already contaminated, cautious around the crystals, and attentive to Pell. She uses song to hold fear at bay; when it attracts attention, she accepts correction.</p></section>
        <section><h3>Moira Eshdin</h3><p>Immediately asks where the cave might connect and how corruption spreads. Her theory is useful and remains a theory rather than established geography.</p></section>
        <section><h3>Djöhandrai</h3><p>Wants to leave, then decides they must prevent the corpse’s fate from reaching someone else. Fear and obligation remain present together.</p></section>
        <section><h3>Saoirse</h3><p>Warns Pell based on her understanding of contamination, focuses the group, uses petal-based magic, and is preparing to teach at Prima’s Magic Academy.</p></section>
      </div>
      <h2 id="what-remains-unknown">What remains unknown</h2>
      <p>The crystals may not be Delerium. The corpse’s identity and contamination source are unknown. The cave’s connection to other sites is unproven. The malformed harpies’ origin is unresolved. Something deeper imitates Vessalia’s song; the record does not yet say what.</p>`
  },
  {
    id: "new-year-address", title: "The New Year Address", category: "History", type: "Two-page retrospective",
    dek: "A community address that remembers not only what heroes defeated, but what they built, healed, loved, and left behind.",
    tags: ["Primary source", "Community", "Pristinia", "Memory"],
    facts: { Format: "Two-page transcript", Voice: "A friend addressing the community", Thesis: "Players breathed life into a dimming world", Scope: "Places, battles, care, marriages, losses" },
    sources: ["New Year.pdf — complete two-page transcript"],
    body: `
      <p>The New Year address is less a summary of Fenumion than a gift to the people who made it. It remembers rolling hills, Void dragons, Pappy’s hot springs, Vysaeth’s tomb, Zarathis, Eovar, and Pristinia as places made meaningful by shared action.</p>
      <h2 id="breakers-binders">Breakers and binders</h2>
      <p>Wrath, Aionia, and a summoned Tiamat appear, but the speech immediately turns from destruction to repair: peace with the Rahu, tending wounded people in Eovar, raising Pristinia’s walls, making laws and festivals, and celebrating marriages. The heroic record asks what remains after victory.</p>
      <h2 id="people-remembered">People, not stat blocks</h2>
      <p>Cecil is remembered for patient attention to vines and leaves. Swiftfoot’s sacrifice, Elenia’s death and return, Gartina and Draegar’s romance, and the marriages of Dale with Saray and Adelia with Jiangshi all belong to the same history as cosmic battle.</p>
      <h2 id="thesis">The world’s stubborn hope</h2>
      <p>The address tells the players that they did more than oppose Death: they breathed life into a world that had begun to dim. Its final image—the strange, stubborn hope of a fading world—is the Codex’s clearest statement that authorship belongs to the community as well as the GM.</p>
      <p><a href="assets/archive/new-year-address.pdf" target="_blank" rel="noopener noreferrer">Open the complete two-page source transcript (PDF)</a>.</p>`
  },
  {
    id: "living-timeline", title: "Narrative History", category: "History", type: "Complete recovered event chronology",
    dek: "From the One Tree and the Great Fracture to the living campaign: every consequential event recovered from the current archive, searchable by name, place, person, and theme.",
    tags: ["Timeline", "Events", "Discovery", "Continuity"],
    facts: { Scope: "Complete recovered chronology", Ordering: "Causal history and player discovery", Coverage: "Ancient world through 2026", Rule: "Unresolved dates remain unresolved" },
    sources: ["Fenumion_Codex_Master_Timeline_2026-09-20.md — event chronology, evidence levels, and causal spines", "Fenumion Archive Catalogue — chronology and source anchors", "New Year.pdf — community retrospective"],
    body: `
      <p>The history is presented in causal order, but each event also records when modern adventurers discovered it. Exact dates are used only where the documents provide them; ancient, approximate, and unresolved dates are labeled instead of silently invented.</p>
      <div id="timeline-explorer" class="timeline-explorer" aria-live="polite"></div>
      <h2 id="narrative-arc">The narrative arc</h2>
      <p>Fenumion begins with an act of protection corrupted by authority. The gods turn the source of life into a weapon, open creation to Death, and then shatter the world to save what remains. Papirak, Paloma, The Before, Roderick, and Aria repeat that first pattern at human scale: love and safety become dangerous when one person claims the right to determine another person’s cost.</p>
      <p>The modern history begins differently. Adventurers build a wall, teach each other, map danger, carry memories forward, and sometimes refuse the offered sacrifice. Their victories matter because farms, food stores, marriages, memorials, and friendships survive beside them.</p>
      <h2 id="discovery-order">History changes when it is discovered</h2>
      <p>Roderick is first encountered through Vysaeth’s hostile account, then as Wrath, then through the Liar’s Delerium trade, and finally through Legend Lore. Papirak begins as a comic trainer in March 2024; his lucid seams appear in July; time travel reveals young Papirus in December; the truth of Paloma arrives much later. The timeline keeps those revelations attached to their discovery dates because later evidence does not erase the experience of not yet knowing.</p>
      <h2 id="date-policy">What “complete” means here</h2>
      <p>This is the complete consequential chronology recoverable from the current archive. It includes ancient causes, dated campaign events, later revelations, and major undated consequences. A missing day is treated as an archival limit, not permission to manufacture one.</p>`
  },
  {
    id: "community", title: "The Community as Protagonist", category: "History", type: "World structure",
    dek: "Fenumion’s longest arc belongs not to one hero, but to the community that remembers, rebuilds, argues, and makes room for the next arrival.",
    tags: ["Community", "Continuity", "Players", "Legacy"],
    facts: { Form: "Shared persistent campaign", Strength: "Relationships accumulate", Cost: "Continuity demands stewardship", Result: "The setting keeps other people’s fingerprints" },
    body: `
      <p>Individual characters may become legendary, but Fenumion’s durable protagonist is the community. It is the only participant present across every generation of quests, and it carries memory when any one character cannot.</p>
      <h2 id="fingerprints">Characters leave fingerprints</h2>
      <p>Institutions, buildings, alliances, taboos, griefs, and running arguments remain after their originators leave. A low-level newcomer can eventually become one of the setting’s defining figures because the world permits small actions to accumulate.</p>
      <h2 id="ordinary-scenes">Ordinary scenes do worldbuilding</h2>
      <p>A lunch can reveal a food shortage. A memorial can introduce someone to a person they never met. A disagreement about whether to rescue a body can expose an entire philosophy of agency. These scenes are not downtime between the real plot. They are how the world learns what the plot cost.</p>
      <p>The <a href="#new-year-address">New Year address</a> makes this explicit: killing Tiamat and surviving Wrath belong beside tending Eovar’s wounded, raising Pristinia’s walls, making laws and festivals, and celebrating relationships.</p>
      <h2 id="stewardship">The burden of stewardship</h2>
      <p>Persistent worlds are messy because memory is labor. Continuity has to be protected without becoming a cage, and new contributors need room to matter without erasing what came before. The Codex exists to make that history easier to enter.</p>`
  }
];

const archiveIndex = {
  timeline: [
    { title: "Ada creates reality and free beings", meta: "Primordial · before ordinary history", sort: "0000-00a", era: "Ancient world", kind: "Cosmological foundation", article: "fenumion", location: "Creation", people: "Ada", tags: ["creation", "free will", "stewardship"], summary: "Ada creates reality and persons with genuine free will. Divine authority is delegated stewardship; power alone never becomes ownership of another will." },
    { title: "The divine caretakers receive their domains", meta: "Primordial · exact sequence unresolved", sort: "0000-00b", era: "Ancient world", kind: "Divine order", article: "great-fracture", location: "Creation", people: "Cala; Nuru; Physisia; Aionia; Mya; Namo’o; Talan; Moirah", tags: ["gods", "domains", "caretakers"], summary: "Created divine caretakers receive domains including light, night, nature, time, hope, souls, justice, and fate. Their stewardship is great, but it is not ultimate ownership." },
    { title: "Etz Chaim sustains creation", meta: "First age · undated", sort: "0000-01", era: "Ancient world", kind: "Cosmic cause", article: "great-fracture", location: "Creation", people: "Ada; the gods", tags: ["One Tree", "life", "Sap"], summary: "The One Tree exists as the architecture of life and a source of divine strength before it becomes an object of conquest." },
    { title: "The gods struggle for the Tree’s power", meta: "First age · undated", sort: "0000-02", era: "Ancient world", kind: "Divine war", article: "great-fracture", location: "Etz Chaim", people: "Ada’s children", tags: ["divine war", "power", "authority"], summary: "Rivalry turns the source of life into something the divine order believes it may control." },
    { title: "Sap is corrupted into Delerium", meta: "First age · undated", sort: "0000-03", era: "Ancient world", kind: "Cosmic rupture", article: "delerium", location: "Etz Chaim", people: "Cala; Nuru; Death", tags: ["Delerium", "Sap", "corruption"], summary: "Cala and Nuru learn that the Tree’s Sap can be corrupted; Death enables the opening, but the gods retain responsibility for the choice." },
    { title: "Death enters creation", meta: "First age · undated", sort: "0000-04", era: "Ancient world", kind: "Cosmic rupture", article: "death-dumuzi", location: "The fracture; the Void", people: "Dumuzi; dead gods; the Wyrm", tags: ["Death", "Void", "Wyrm"], summary: "The corrupted wound gives Dumuzi a foothold. Dead gods are fed to the Wyrm and the divine war becomes an existential catastrophe." },
    { title: "The Great Fracture", meta: "First age · undated", sort: "0000-05", era: "Ancient world", kind: "World-shaping event", article: "great-fracture", location: "All creation", people: "The surviving gods", tags: ["shattering", "islands", "firebreak"], summary: "The gods deliberately break the plane into separated remnants, hiding survivors and slowing Death and the Wyrm at a terrible cost." },
    { title: "Delerium becomes a means of divine death", meta: "Persistent cosmological rule", sort: "0000-06", era: "Ancient world", kind: "Cosmological law", article: "delerium", location: "Creation", people: "The gods", tags: ["Delerium", "divine death", "cosmology"], summary: "The surviving record establishes that gods can be killed only through Delerium, one another, or power on a comparable scale." },
    { title: "Dumuzi’s bargains require a choice", meta: "Persistent cosmological rule", sort: "0000-07", era: "Ancient world", kind: "Metaphysical limit", article: "death-dumuzi", location: "Fenumion", people: "Dumuzi", tags: ["choice", "souls", "bargains"], summary: "Dumuzi may tempt, bargain, persuade, and frame the truth, but his own words preserve a crucial boundary: “You must choose me.” The exact mechanism remains unresolved." },
    { title: "Cala and Nuru commission the Gate", meta: "About 2,000 years before the present", sort: "1000-01", era: "Ancient world", kind: "Containment plan", article: "the-gate", location: "Prima", people: "Cala; Nuru; Papirus", tags: ["Gate", "Wish", "containment"], summary: "Young Papirus works beside Cala and Nuru on the structure and the plan to cut Prima away from spreading Delerium." },
    { title: "Papirak’s Wish isolates Prima", meta: "About 2,000 years before the present", sort: "1000-02", era: "Ancient world", kind: "Sacrifice", article: "papirak-paloma", location: "Prima", people: "Papirak; Paloma; Cala; Nuru", tags: ["Wish", "Prima", "Whose sacrifice?"], summary: "Papirak agrees to be broken by an extraordinary Wish; Paloma voluntarily becomes its substitute price and is erased in body, mind, and soul." },
    { title: "Namo’o removes Papirak’s memory", meta: "Ancient aftermath · undated", sort: "1000-03", era: "Ancient world", kind: "Mercy and violation", article: "papirak-paloma", location: "Prima", people: "Namo’o; Papirak; Paloma", tags: ["memory", "mercy", "souls"], summary: "The God of Souls fractures Papirak’s memory of Paloma so he can survive what she chose; the man remains, but his testimony does not." },
    { title: "The Before is consumed from below", meta: "Ancient Prima · undated", sort: "1000-04", era: "Ancient world", kind: "Civilizational fall", article: "the-before-melian", location: "The Before; Prima", people: "Melian’s people", tags: ["Delerium", "corruption", "ruin"], summary: "A civilization built over a Delerium vein tries to use its power while hostile creatures exploit the corruption beneath the city." },
    { title: "Endora dies and Roderick refuses the loss", meta: "Before Jul 2024 · exact date unresolved", sort: "2000-01", era: "Before the Calling", kind: "Personal catastrophe", article: "roderick-wrath", location: "Vysaeth’s kingdom", people: "Endora; Roderick; the Liar", tags: ["Endora", "resurrection", "Delerium"], summary: "The Liar trades Delerium to Roderick for Eldrin’s relic. Roderick uses it to return Endora, but what comes back is incomplete." },
    { title: "Vysaeth becomes a lich", meta: "Before Jul 2024 · exact date unresolved", sort: "2000-02", era: "Before the Calling", kind: "Preservation", article: "vysaeth", location: "The dead kingdom", people: "Vysaeth; Endora; Roderick", tags: ["lichdom", "legacy", "guardianship"], summary: "Endora’s brother abandons his humanity to protect the kingdom and its record from the threat he associates with Roderick." },
    { title: "Aria burns Talan’s temple", meta: "Before becoming Pride · exact date unresolved", sort: "2000-03", era: "Before the Calling", kind: "Origin", article: "aria-pride", location: "Aria’s island village", people: "Aria; her reported older brother; Talan", tags: ["Pride", "temple", "abandonment"], summary: "After failed prayers, winter, and flood, young Aria turns a failed seat of divine authority into a target and begins the path toward Pride." },
    { title: "The dormant Gate awakens", meta: "Early 2024 · approximate", sort: "2024-02", era: "2024 · The Calling", kind: "Return", article: "the-gate", location: "Prima", people: "The new adventurers", tags: ["Gate", "Calling", "Prima"], summary: "A mechanism quiet since the age when gods walked openly begins operating again as modern adventurers arrive." },
    { title: "Papirak meets the new adventurers", meta: "10 Mar 2024", sort: "2024-03-10", era: "2024 · The Calling", kind: "Arrival", article: "papirak-paloma", location: "Pristinia; Papirak’s dungeon", people: "Papirak; Quake; Uras; Jako", tags: ["GREEN", "training dungeon", "Prima"], summary: "The strange old wizard calls the newcomers green, leads them to a hut containing an impossible dungeon, and tells them not to die." },
    { title: "Elenia follows a possible call from Cala", meta: "Apr 2024", sort: "2024-04-01", era: "2024 · The Calling", kind: "Calling", article: "elenia", location: "Forest altar", people: "Elenia; Cala", tags: ["light", "wonder", "faith"], summary: "Uncertain whether the goddess truly called her, Elenia follows wonder to an altar and offers to carry light into dark places." },
    { title: "Pristinia’s wall is finished", meta: "Apr 2024", sort: "2024-04-15", era: "2024 · The Calling", kind: "Community construction", article: "pristinia", location: "Pristinia; Prima", people: "Nienna; Pristinia’s adventurers", tags: ["wall", "defense", "community"], summary: "Adventurers complete an ordinary defensive project whose material consequence returns during the summer assault." },
    { title: "Cala calls for heroes", meta: "May 2024", sort: "2024-05", era: "2024 · The Calling", kind: "Divine summons", article: "cala", location: "Fenumion", people: "Cala; the adventurers", tags: ["heroes", "gods", "war"], summary: "The goddess frames the crisis as a need for heroes while the recruits still lack the divine order’s older responsibility for it." },
    { title: "Elenia meets Mya", meta: "Jun 2024", sort: "2024-06", era: "2024 · The Calling", kind: "Divine relationship", article: "mya", location: "Fenumion", people: "Elenia; Mya", tags: ["Hope", "light", "wonder"], summary: "Mya tells Elenia to be a child of wonder and a light where darkness is strongest; Elenia answers by literally casting Light." },
    { title: "Evidence prevents an unjust Rahu execution", meta: "1 Jun 2024", sort: "2024-06-01", era: "2024 · The Calling", kind: "Civic intervention", article: "pristinia", location: "Pristinia; Prima", people: "Ada Tricks; Rahu authorities", tags: ["evidence", "justice", "Rahu"], summary: "An innocent person facing execution is spared when evidence enters the proceeding, an early example of ordinary process resisting institutional power." },
    { title: "Nienna’s expedition reaches Gael", meta: "By 12 Jun 2024", sort: "2024-06-11", era: "2024 · The Calling", kind: "Interregional expedition", article: "the-void", location: "The Void; Gael", people: "Nienna; Gartina; Quake; the expedition", tags: ["ship", "Great Tree seed", "Void dragons"], summary: "A chain involving a freed crew, an island-sized turtle, a Great Tree seed, and Death’s dragons culminates in the first recovered arrival in Gael; earlier exact dates remain unresolved." },
    { title: "Titan’s Watch reveals Death’s victory", meta: "12–13 Jun 2024", sort: "2024-06-12", era: "2024 · The Calling", kind: "Regional discovery", article: "gael", location: "Titan’s Watch; Gael", people: "Gartina; Nienna; the expedition", tags: ["Titans", "cathedral", "Death"], summary: "Ruined Titan statues, a decayed cathedral, and lifeless terrain show the adventurers what a land defeated by Death looks like." },
    { title: "Nienna testifies to soul-fed Void passage", meta: "Known by 13 Jun 2024", sort: "2024-06-13", era: "2024 · The Calling", kind: "First-person testimony", article: "the-void", location: "The Void", people: "Nienna", tags: ["travel", "unwilling souls", "provenance"], summary: "Nienna describes one safer crossing method that feeds unwilling souls to the Void’s inhabitants; the record does not establish it as the method for all travel." },
    { title: "Nienna orders a retreat when Jiangshi is lost", meta: "Jun 2024 · exact day unresolved", sort: "2024-06-20", era: "2024 · The Calling", kind: "Triage and loss", article: "nienna", location: "Gael; the Void", people: "Nienna; Jiangshi; Adelia; Bitoshi; Gartina", tags: ["retreat", "cowardice", "survival"], summary: "Adelia and Bitoshi blame Nienna for leaving Jiangshi, while Gartina argues that returning would probably have produced another unrecoverable death. The later sacrifice does not erase this earlier choice." },
    { title: "Olo accidentally frees a servant of Death", meta: "23 Jun 2024", sort: "2024-06-23", era: "2024 · The Calling", kind: "Unintended consequence", article: "olokun", location: "Burned forest", people: "Olokun; servant of Death", tags: ["curiosity", "mistake", "Death"], summary: "A conversation with a creature in a burned forest ends with Olo accidentally freeing a minion of Death, preserving an early example of curiosity creating consequences." },
    { title: "Olo helps de-escalate a tavern conflict", meta: "29 Jun 2024", sort: "2024-06-29", era: "2024 · The Calling", kind: "Social responsibility", article: "olokun", location: "Tavern", people: "Olokun; Scribonia", tags: ["de-escalation", "responsibility", "belonging"], summary: "Olo’s role around Scribonia shows social obligation developing before his later moral principles are fully articulated." },
    { title: "Vysaeth’s account of Roderick is found", meta: "7 Jul 2024", sort: "2024-07-07", era: "2024 · The Calling", kind: "Discovery", article: "vysaeth", location: "Vysaeth’s dead kingdom", people: "Vysaeth; Roderick; Endora", tags: ["journal", "testimony", "provenance"], summary: "The party reaches a dead kingdom and receives the first substantial—hostile and interested—account of Roderick and Endora." },
    { title: "Wrath makes his first offer", meta: "8 Jul 2024", sort: "2024-07-08", era: "2024 · The Calling", kind: "Confrontation", article: "roderick-wrath", location: "After Dale’s death", people: "Wrath; Dale; Quake; Elenia; Cala", tags: ["bargain", "resurrection", "choice"], summary: "Wrath appears beside grief and offers restoration through Death. Quake refuses; Elenia asks Cala for another way, and a diamond makes return possible." },
    { title: "Papirak teaches while forgetting", meta: "11 Jul 2024", sort: "2024-07-11", era: "2024 · The Calling", kind: "Character clue", article: "papirak-paloma", location: "Papirak’s home; Pristinia", people: "Papirak; Melian; Wren; Scribonia; Olokun", tags: ["fragmented memory", "teaching", "lost knowledge"], summary: "A chaotic lesson ends with Melian’s quiet assurance that Papirak used to be better, exposing tragedy beneath the comic trainer." },
    { title: "Olo states the boundary of consent", meta: "12 Jul 2024", sort: "2024-07-12", era: "2024 · The Calling", kind: "Moral development", article: "olokun", location: "Fenumion", people: "Olokun", tags: ["consent", "choice", "no"], summary: "Olo states in substance that when a person says no, the answer is no—an early explicit form of the principle that will define his later choices." },
    { title: "Sildithas organizes defense training", meta: "16 Jul 2024", sort: "2024-07-16", era: "2024 · The Calling", kind: "Preparation", article: "sildithas", location: "Pristinia’s wall", people: "Sildithas; Papirak", tags: ["training", "wall", "bloodshed"], summary: "Sildithas recruits Papirak to summon real creatures for a defense exercise; Papirak’s sudden lucidity reveals an old aversion to battle and real death." },
    { title: "Elenia protects Quake with Death Ward", meta: "18 Jul 2024", sort: "2024-07-18", era: "2024 · The Calling", kind: "Protection", article: "elenia", location: "Fenumion", people: "Elenia; Quake; Nienna", tags: ["Death Ward", "protection", "causal debt"], summary: "Elenia protects Quake because Quake previously saved Nienna and her, allowing an earlier act of care to determine a later use of divine power." },
    { title: "The Delerium assault reaches Pristinia", meta: "Jul 2024 · exact day unresolved", sort: "2024-07-20", era: "2024 · The Calling", kind: "Battle and contamination", article: "pristinia", location: "Pristinia; Prima", people: "Pristinia’s defenders", tags: ["siege", "haze", "wall"], summary: "The player-built wall holds the obvious blow while a Delerium-fed haze passes the defenses and leaves contamination inside the town." },
    { title: "The Gate opens for a divine coalition", meta: "30 Jul 2024", sort: "2024-07-30a", era: "2024 · The Calling", kind: "Coalition and summoning", article: "the-gate", location: "The Gate; Pristinia; Prima", people: "Talan; Namo’o; Nuru; Cala; Physisia; Aionia; Moirah; seven newcomers", tags: ["Gate", "gods", "summoning"], summary: "The divine caretakers intentionally open access across realms for allies. Seven newcomers arrive; their exact origins and degree of volition remain partly unresolved." },
    { title: "Talan refuses resurrection for Arjahn’s companion", meta: "30 Jul 2024", sort: "2024-07-30b", era: "2024 · The Calling", kind: "Divine judgment", article: "the-gate", location: "The Gate; Prima", people: "Talan; Aionia; Arjahn", tags: ["justice", "resurrection", "consequence"], summary: "Arjahn asks for the means to resurrect a companion. Talan refuses on grounds of consequence; Arjahn accepts the judgment, leaving open whether divine justice is applied upward as readily as downward." },
    { title: "Melian explains The Before", meta: "30 Aug 2024", sort: "2024-08-30", era: "2024 · The Calling", kind: "Testimony", article: "the-before-melian", location: "The Before; Prima", people: "Melian; the adventurers", tags: ["Delerium", "knowledge", "warning"], summary: "The party learns how a civilization was consumed by power it did not understand, gaining functional knowledge before the substance’s cosmic origin." },
    { title: "Olo tests the limits of a Rahu oath", meta: "21 Sep 2024", sort: "2024-09-21", era: "2024 · The Calling", kind: "Loyalty and conscience", article: "olokun", location: "Rahu sphere of influence", people: "Olokun; Eugene; Casimir; Scribonia", tags: ["Rahu", "Delerium", "secrecy"], summary: "Only weeks after becoming Rahu, Olo refuses to state a protected truth yet helps his friends discover it independently. Eugene’s useful questions belie his fear of becoming a burden." },
    { title: "The Liar’s trade enters the record", meta: "24 Oct 2024", sort: "2024-10-24", era: "2024 · The Calling", kind: "Revelation", article: "roderick-wrath", location: "The Liar’s prison", people: "The Liar; Roderick; Tutora Rhex; Elenia", tags: ["Eldrin’s relic", "Delerium", "Endora"], summary: "A historical source reveals that the Liar traded Roderick the Delerium crystal used to bring Endora back to life." },
    { title: "Legend Lore reframes Endora’s return", meta: "12 Nov 2024", sort: "2024-11-12", era: "2024 · The Calling", kind: "Revelation", article: "roderick-wrath", location: "Fenumion", people: "Endora; Roderick", tags: ["Legend Lore", "resurrection", "incomplete return"], summary: "The archive reveals that the resurrection did not restore Endora whole, turning an old tragedy into evidence about Delerium’s cost." },
    { title: "The assault on Wrath ends with Saray’s blow", meta: "21 Nov 2024", sort: "2024-11-21", era: "2024 · The Calling", kind: "Battle and consequence", article: "roderick-wrath", location: "Gael", people: "Wrath; Saray; Arjahn; Elenia; Dumuzi", tags: ["Wrath", "sacrifice", "understanding"], summary: "Arjahn offers himself, Wrath cuts Elenia, and Saray lands the final blow. Dumuzi cradles Roderick afterward; the person beneath Wrath becomes legible without becoming safe." },
    { title: "Wrath is defeated, but Gael remains dangerous", meta: "Late 2024", sort: "2024-12-01", era: "2024 · The Calling", kind: "Regional turning point", article: "gael", location: "Gael", people: "Gael’s defenders; Wrath", tags: ["liberation", "stragglers", "recovery"], summary: "Wrath’s defeat ends a dominant threat without producing instant civic safety. Stragglers remain, and liberation becomes the beginning of recovery rather than its completion." },
    { title: "The party witnesses the Gate’s construction", meta: "30 Dec 2024", sort: "2024-12-30", era: "2024 · The Calling", kind: "Time travel", article: "the-gate", location: "Ancient Prima", people: "Olokun; Cecil; Coralyn; St. Anky; Fenwick; Cala; Nuru; Papirus", tags: ["Aionia", "world map", "Moth effect"], summary: "Travelers meet young Papirus, Cala, and Nuru. Given one historical change, they take information—a map of the shattered world—rather than attempting to rewrite the catastrophe." },
    { title: "Aionia warns that one changed moment can ripple", meta: "Dec 2024", sort: "2024-12-31", era: "2024 · The Calling", kind: "Chronological warning", article: "the-gate", location: "Across time", people: "Aionia; the travelers", tags: ["time", "consequence", "history"], summary: "Time travel grants agency inside history rather than making history unreal. Aionia warns that even one alteration can propagate through everything that follows." },
    { title: "Adelia’s group leaves Gael", meta: "Before 24 Feb 2025 · destination unresolved", sort: "2025-02-01", era: "2025 · Truth and authority", kind: "Departure", article: "adelia-hope", location: "Gael", people: "Adelia; Elenia; Gartina; Dale; Scribonia", tags: ["departure", "Gael", "unresolved"], summary: "Adelia leaves Gael with a small group that definitely includes Elenia. Gartina remains with the refugees and forest; the destination is not established in the present record." },
    { title: "Gael’s refugees plan permanence", meta: "24 Feb 2025", sort: "2025-02-24", era: "2025 · Truth and authority", kind: "Settlement planning", article: "gael", location: "Tower; Crustacean Cove; Gael", people: "Gartina; Dale; Gael’s refugees", tags: ["shipwreck", "longhouse", "consultation"], summary: "Soup and emergency shelter give way to proposals for salvaging the crashed refugee ship, gathering material, and asking the refugees about a permanent settlement." },
    { title: "Hope, Stake, and Shadowangel Forest are present", meta: "Confirmed 24 Feb 2025", sort: "2025-02-24b", era: "2025 · Truth and authority", kind: "Regional state", article: "gael", location: "Gael", people: "Gartina; Dale", tags: ["restoration", "Hope", "Stake", "forest"], summary: "The three living places already exist before Adelia’s 2026 transformation, establishing that Gael’s ecological recovery was underway by early 2025." },
    { title: "Jiangshi comforts Adelia", meta: "Apr 2025", sort: "2025-04", era: "2025 · Truth and authority", kind: "Relationship", article: "jiangshi", location: "Fenumion", people: "Jiangshi; Adelia", tags: ["care", "shadows", "presence"], summary: "Jiangshi offers comfort without possession, establishing the ethic that will later shape how her own death and return are understood." },
    { title: "Ada Arrival Three brings Magnus, Dez, and Brianna", meta: "6 Apr 2025", sort: "2025-04-06", era: "2025 · Truth and authority", kind: "Arrival", article: "people-directory", location: "Prima", people: "Magnus; Dez; Brianna", tags: ["arrival", "Prima", "newcomers"], summary: "Magnus, Dez, and Brianna arrive in the discrete event remembered as Ada Arrival Three; it is not merged with the earlier Gate opening." },
    { title: "Elenia breaks the Rahu siege towers", meta: "2025 · exact date unresolved", sort: "2025-06", era: "2025 · Truth and authority", kind: "Siege", article: "elenia", location: "Pristinia; Prima", people: "Elenia; Rahu forces", tags: ["Rahu", "siege", "Savior of Pristinia"], summary: "During the Rahu siege, Elenia destroys the towers and becomes publicly remembered as the Savior of Pristinia, enlarging both her power and the responsibility attached to it." },
    { title: "Aria and Olokun contest attachment", meta: "Jul 2025", sort: "2025-07", era: "2025 · Truth and authority", kind: "Ideological conflict", article: "olokun", location: "Zarathis", people: "Aria; Olokun", tags: ["attachment", "protection", "agency"], summary: "Pride calls love a future weakness; Olokun answers that people make one another better without gaining ownership over the lives they love." },
    { title: "Aria traps Scribonia in a gemstone", meta: "15–16 Jul 2025", sort: "2025-07-15", era: "2025 · Truth and authority", kind: "Imprisonment", article: "aria-pride", location: "Fein Uaill", people: "Aria; Scribonia", tags: ["gemstone", "leverage", "Pride"], summary: "Aria imprisons Scribonia in a gemstone amid god-killing stakes. No release mechanism or later release event is asserted where the surviving record does not provide one." },
    { title: "Aria turns public memory against Adelia", meta: "5 Aug 2025", sort: "2025-08-05", era: "2025 · Truth and authority", kind: "Public confrontation", article: "aria-pride", location: "Zarathis", people: "Aria; Adelia; Olokun; Wren", tags: ["provenance", "crowd", "resurrection"], summary: "Aria uses cultural memory and Adelia’s resurrection history to move a crowd; private shared truth proves weaker than claims the audience can verify." },
    { title: "Three philosophies meet in a Zarathis garden", meta: "11 Aug 2025", sort: "2025-08-11", era: "2025 · Truth and authority", kind: "Philosophical encounter", article: "gartina", location: "Zarathis; Fein Uaill", people: "Gartina; Jiangshi; Tulaine", tags: ["gardening", "stewardship", "knowledge", "love"], summary: "Tulaine emphasizes attentive harmony, Gartina demands a specific code for intervention, and Jiangshi tests whether love requires conscious reciprocal choice. Their garden becomes a debate about stewardship and sacrifice." },
    { title: "Magnus and Aria discuss power and usefulness", meta: "6 Sep 2025", sort: "2025-09-06", era: "2025 · Truth and authority", kind: "Political relationship", article: "magnus", location: "Fenumion", people: "Magnus; Aria", tags: ["power", "alliance", "instrumentality"], summary: "Their exchange strengthens the recurring question of whether capability and shared enemies create trust—or merely make people useful to one another." },
    { title: "The party enters the Shadow Roads", meta: "14 Sep 2025", sort: "2025-09-14", era: "2025 · Truth and authority", kind: "Expedition", article: "coralyn", location: "Shadow Roads; the portal", people: "Ithilrûnë; Sildithas; Coralyn; Carmen; Brianna; Ghilsen; St. Anky", tags: ["portal", "dissent", "risk"], summary: "Ithilrûnë crosses for knowledge, Sildithas for duty, and Coralyn warns that they should not go. Brianna takes Ghilsen’s hand into the darkness." },
    { title: "Sildithas relays the earliest recovered Maw knowledge", meta: "21 Sep 2025", sort: "2025-09-21", era: "2025 · Truth and authority", kind: "Local testimony", article: "voraketh", location: "Voraketh", people: "Sildithas; Misrat; Carmen; Ithilrûnë", tags: ["Maw", "Destroyer", "local knowledge", "provenance"], summary: "Secondhand testimony describes a growing anomaly that consumes, attracts beasts, may connect to another island, and may summon something called the Destroyer. Behavior is established before explanation." },
    { title: "The Void becomes an exploration space", meta: "2025 · exact date unresolved", sort: "2025-10-01", era: "2025 · Truth and authority", kind: "Interregional exploration", article: "the-void", location: "The Void", people: "Aria / Pride; her expedition", tags: ["Void", "exploration", "artifact", "uncertainty"], summary: "Aria says her group explored the Void and failed to find what they sought. The target and any connection to an ancient temporal artifact remain unresolved." },
    { title: "Magnus asks whether ships could replace Void beasts", meta: "26 Oct 2025", sort: "2025-10-26", era: "2025 · Truth and authority", kind: "Travel inquiry", article: "the-void", location: "Interregional discussion", people: "Magnus; Míriel of the Emerald Veil", tags: ["ships", "Void beast", "travel traditions"], summary: "Magnus asks whether a Void beast is necessary if Void-sailing ships can be built. Míriel says her people have never crossed the Void, revealing uneven travel knowledge between developed cultures." },
    { title: "Paco pays the return from the Roads", meta: "After 14 Sep 2025 · exact day unresolved", sort: "2025-09-15", era: "2025 · Truth and authority", kind: "Sacrifice", article: "carmen", location: "Shadow Roads; Prima", people: "Paco; Carmen; Sildithas; Coralyn; Ithilrûnë", tags: ["forced pact", "return", "price"], summary: "Paco sacrifices himself so Carmen can bring the others home and returns changed, forcing Carmen to confront a debt she never consented for him to pay." },
    { title: "The Gate and Papirak history is pieced together", meta: "17 Oct 2025", sort: "2025-10-17", era: "2025 · Truth and authority", kind: "Historical synthesis", article: "papirak-paloma", location: "Fenumion", people: "Olokun; Eugene; Scribonia; Papirak; Cala; Nuru", tags: ["Gate", "Wish", "map"], summary: "The time-travel account, the realm’s isolation, and Papirak’s madness are discussed together, years before the complete price of the Wish is understood." },
    { title: "Eugene receives a Delerium-channeling weapon", meta: "17 Oct 2025", sort: "2025-10-17b", era: "2025 · Truth and authority", kind: "Dangerous inheritance", article: "eugene", location: "Beside fallen Grace", people: "Eugene; Scribonia", tags: ["Delerium", "weapon", "worthiness"], summary: "A sword capable of channeling moderate Delerium without harming its wielder appears in Eugene’s cloak. He doubts his worthiness while Scribonia privately recognizes his brilliance." },
    { title: "Talan kills Aria", meta: "6 Nov 2025", sort: "2025-11-06", era: "2025 · Truth and authority", kind: "Death", article: "aria-pride", location: "The Void battlefield", people: "Talan; Aria; Olokun; Dumuzi", tags: ["Pride", "Justice", "body"], summary: "A confrontation never intended as Aria’s final battle ends with Pride small at Talan’s feet. Dumuzi later asks for her body rather than simply taking it." },
    { title: "Death invokes ownership of Magnus", meta: "6 Nov 2025 · after Aria’s fall", sort: "2025-11-06b", era: "2025 · Truth and authority", kind: "Soul bond made physical", article: "magnus", location: "The Void battlefield", people: "Magnus; Dumuzi; Eugene; Wren; Scribonia; Olokun", tags: ["sold soul", "ownership", "trust", "Zarathians"], summary: "Magnus collapses and vomits after seeing his people dead. Dumuzi invokes the soul already belonging to him and drops Magnus; Eugene heals, Wren’s trust breaks, Scribonia rejects him, and Olokun resists treating the misguided as disposable." },
    { title: "High Lord Bowene ascends after Aria’s death", meta: "After 6 Nov 2025", sort: "2025-11-07", era: "2025 · Truth and authority", kind: "Political succession", article: "aria-pride", location: "Fein Uaill; Zarathis", people: "High Lord Bowene; Aria", tags: ["succession", "politics", "aftermath"], summary: "Bowene’s ascent makes political succession part of Pride’s long aftermath rather than allowing Aria’s death to function as a clean ending." },
    { title: "Magnus wins Zarathian political standing", meta: "Dec 2025 · process active by 2 Dec", sort: "2025-12-02", era: "2025 · Truth and authority", kind: "Political ascent", article: "magnus", location: "Zarathis; Fein Uaill", people: "Magnus; Adelia; Miriel; Gartina; Olokun", tags: ["election", "Silver Star", "Emerald Veil", "legitimacy"], summary: "Adelia supports Magnus, Miriel speaks for him, Emerald Veil nominates him despite his Silver Star identity, and divided support still produces a victory. Suspicions of manipulation remain attributed rather than proven." },
    { title: "Elenia defeats Magnus and refuses the duel’s final premise", meta: "6 Dec 2025", sort: "2025-12-06", era: "2025 · Truth and authority", kind: "Duel and judgment", article: "elenia", location: "Zarathis", people: "Elenia; Magnus; Gartina; Adelia; Olokun; Eugene", tags: ["Wipe Face", "mercy", "banishment"], summary: "Elenia prevails in a fight-to-the-death context and uses terrifying divine magic against Magnus, yet later says she did not want to kill him. The confrontation contributes to her banishment from Fein Uaill." },
    { title: "The war council rejects alliance with Death", meta: "Late 2025 · exact date unresolved", sort: "2025-12-20", era: "2025 · Truth and authority", kind: "Council decision", article: "aria-pride", location: "War council", people: "High Lord Bowene; Aria; Olokun; Scribonia; Jiangshi; Magnus", tags: ["Whose sacrifice?", "Death", "council"], summary: "Aria argues that victory requires pain. Olokun draws the boundary at his own pain, Scribonia challenges her logic, and Bowene removes alliance with Death from consideration." },
    { title: "The New Year address remembers what survived", meta: "Year-end retrospective · exact year unresolved", sort: "2025-12-31", era: "2025 · Truth and authority", kind: "Community memory", article: "new-year-address", location: "Fenumion", people: "The whole community", tags: ["walls", "marriages", "healing", "memory"], summary: "The record places Tiamat, Wrath, and Aionia beside Pristinia’s walls, Eovar’s wounded, food, laws, festivals, marriages, and the people who paid." },
    { title: "Olo chooses Wren and is killed by the Abyss", meta: "Jan 2026", sort: "2026-01-01", era: "2026 · Consequences", kind: "Triage, loss, and death", article: "olokun", location: "The Abyss; Kurayami", people: "Olokun; Wren; Aravil; Kurayami", tags: ["choice", "loss", "Abyss"], summary: "Under pressure, Olo chooses Wren over Aravil. Aravil is taken as a trophy, and the Abyss addresses Olo by name before killing him. The event remains a true triage loss, not a clean victory." },
    { title: "Arjahn resurrects Olo with Olo’s own gift", meta: "Jan 2026", sort: "2026-01-02", era: "2026 · Consequences", kind: "Resurrection and consequence", article: "arjahn", location: "The Abyss", people: "Arjahn; Olokun", tags: ["Scepter of Faith", "resurrection", "gift"], summary: "Arjahn uses the Scepter of Faith that Olo had earlier given him. An old act of generosity becomes the direct condition of Olo’s return and escape." },
    { title: "Jiangshi returns to the room where she was mourned", meta: "5 Jan 2026", sort: "2026-01-05", era: "2026 · Consequences", kind: "Return and accumulated memory", article: "common-man", location: "The Common Man; Pristinia", people: "Jiangshi; Adelia; Bitoshi; Daffodil; Oni", tags: ["memorial", "return", "tavern", "ordinary life"], summary: "Jiangshi recognizes the Common Man’s familiar scents and sounds while Bitoshi remembers arriving there for her memorial. The same room holds grief, return, newcomers, and ordinary conversation without erasing either history." },
    { title: "Elenia supplies ink for Eugene’s spellbook", meta: "15 Jan 2026", sort: "2026-01-15", era: "2026 · Consequences", kind: "Investment in knowledge", article: "elenia", location: "Fenumion", people: "Elenia; Eugene", tags: ["spellbook", "ink", "learning"], summary: "Elenia materially supports Eugene’s learning, evidence that others increasingly regard his growing capacity as worth investing in." },
    { title: "Magnus serves as a Zarathian cultural guide", meta: "27 Jan 2026", sort: "2026-01-27", era: "2026 · Consequences", kind: "Hospitality and cultural instruction", article: "magnus", location: "Zarathis; Fein Uaill", people: "Magnus; Adelia; Ghilsen; Miriel", tags: ["Silver Star", "hospitality", "tradition", "factions"], summary: "Over tea, Magnus warns against open divine service, explains Zarathian factions and reputation, offers lodging, and offers to speak to Miriel—showing cultural attachment and social competence beside his larger harms." },
    { title: "Olokun and Arjahn turn fear into a map", meta: "Mar 2026", sort: "2026-03", era: "2026 · Consequences", kind: "Conflict and repair", article: "arjahn", location: "The refuge and surrounding tunnels", people: "Olokun; Arjahn; Wren; Dale; Aravil", tags: ["mapping", "loss", "reconciliation"], summary: "Repeated near-deaths and Aravil’s disappearance make Olokun lash out. Arjahn defends his agency; days later they preserve the disagreement by working on the map together." },
    { title: "Babel-Ashur reaches a crisis of survival", meta: "5 May 2026", sort: "2026-05-05", era: "2026 · Consequences", kind: "Regional crisis", article: "babel-ashur", location: "Babel-Ashur", people: "Mya; Olokun; Arjahn; the Vanguard; Dale; Anky", tags: ["Babel-Ashur", "Mya", "Vanguard", "Shard", "survival"], summary: "A battered Mya insists that all lands are worth saving. Babel’s Shard is not simply a tree, Arjahn’s vanguard is losing, and the surviving choice is to pass strength onward or reunite and prove the gods wrong." },
    { title: "Brianna chooses sanctification", meta: "2026 · exact date unresolved", sort: "2026-06", era: "2026 · Consequences", kind: "Healing forward", article: "elenia", location: "Fenumion", people: "Brianna; Elenia; Mya; Adelia; Farkur; Magnus", tags: ["Delerium", "Sacrament", "Hope"], summary: "After Magnus forces Delerium into Brianna, Elenia calls Mya. Hope cleanses rather than removes the crystal, transforming the residue of violation without erasing what happened." },
    { title: "The Miracle of Fenumion follows accepted loss", meta: "2026 · exact date unresolved", sort: "2026-06-15", era: "2026 · Consequences", kind: "Contingent grace", article: "elenia", location: "Fenumion", people: "The adventurers", tags: ["Reincarnate", "miracle", "chance"], summary: "An unfudged one-in-250 Reincarnate result occurs only after the party has accepted loss and change. Its meaning is preserved without claiming Ada caused the roll." },
    { title: "Zombie pirates burn the Common Man", meta: "Before 29 Jul 2026 · exact date unresolved", sort: "2026-07-01", era: "2026 · Consequences", kind: "Civic destruction", article: "common-man", location: "The Common Man; Pristinia", people: "Common Man staff and patrons; zombie pirates", tags: ["tavern", "fire", "zombie pirates", "revenge"], summary: "Zombie pirates destroy a workplace and social institution accumulated through years of meals, music, memorial, labor, and returning patrons. The attackers remain largely at large; the precise date and casualties are unknown." },
    { title: "Prima expands while Fein begins a respite", meta: "29 Jul 2026", sort: "2026-07-29a", era: "2026 · Consequences", kind: "Regional aftermath", article: "pristinia", location: "Prima; Fein Uaill", people: "Jon; Miriel; Magnus", tags: ["expansion", "reconciliation", "institutions"], summary: "Pristinia expands, Pilgrim’s Hearth occupies the Common Man’s foundations, and Fein enters a period of peace and reconciliation without erasing its conflict or distrust of Magnus." },
    { title: "Babel-Ashur’s monsters close on the survivors", meta: "29 Jul 2026", sort: "2026-07-29b", era: "2026 · Consequences", kind: "Escalating regional threat", article: "babel-ashur", location: "Babel-Ashur", people: "Surviving natives; unpetrified warrior; the Knights", tags: ["monsters", "survivors", "Shard"], summary: "Hungrier monsters move closer. A small cave refuge, a surviving seed or Shard, and the Knights’ hunt stand between the remaining people and annihilation." },
    { title: "Mortals unmake a mountain", meta: "Aug 2026", sort: "2026-08", era: "2026 · Consequences", kind: "World-shaping battle", article: "elenia", location: "The mountain", people: "Elenia; Nymera; the expedition", tags: ["Earthquake", "storm", "biblical destruction"], summary: "Catastrophic weather, fissures, lava, floodwater, and avalanche make the landscape seem to claw at its own face; Elenia still looks for unknown people in the storm’s path." },
    { title: "The Rift ambush tests knowledge and rescue", meta: "2026 · exact date unresolved", sort: "2026-08z", era: "2026 · Consequences", kind: "Ambush and intervention", article: "pappy", location: "The Rift", people: "Pappy; Adelia; Magnus", tags: ["Rift", "Gate", "rescue", "disputed knowledge"], summary: "Pappy is ambushed and Adelia Gates him away. The rescue is established; what Adelia could know in character and which deeper mechanics supported the intervention remain part of a later dispute rather than a settled moral verdict." },
    { title: "Magnus restores Papirak’s memory", meta: "Sep 2026", sort: "2026-09-01", era: "2026 · Consequences", kind: "Violent revelation", article: "magnus", location: "Papirak’s home; Prima", people: "Magnus; Papirak; Paloma; Namo’o", tags: ["Time Ravage", "memory barrier", "knowledge"], summary: "Pursuing forbidden history, Magnus methodically breaks the mercy protecting Papirak’s mind and reconnects the fragments around the wife who had been erased." },
    { title: "Papirak walks into the flames", meta: "Sep 2026 · after Magnus leaves", sort: "2026-09-02", era: "2026 · Consequences", kind: "Death and lost history", article: "papirak-paloma", location: "Prima", people: "Papirak; Paloma; Magnus", tags: ["Immolation", "Atonement", "primary source"], summary: "Unable to survive the restored truth, Papirak chooses fire. His death is also the loss of a living witness whose historical memory had already been censored once." },
    { title: "Dumuzi and Velkyn disclose the Abyss’s losses", meta: "Sep 2026", sort: "2026-09-10", era: "2026 · Consequences", kind: "Revelation", article: "death-dumuzi", location: "Fenumion; the Abyss", people: "Dumuzi; Velkyn; Kurayami; Cthulhu", tags: ["Abyss", "truth", "blood", "Kurayami"], summary: "Velkyn describes Kurayami’s offer of power, while Dumuzi claims that his kind do not deceive and reports the destruction of the Abyss’s cavern kingdom. The statements remain attributed, not dismissed merely because of their source." },
    { title: "Gael develops an open-air market", meta: "By 19 Sep 2026", sort: "2026-09-19a", era: "2026 · Consequences", kind: "Economic development", article: "gael", location: "Gael", people: "Ale-chemy Knights; Ryvyt; Thorn; Marius", tags: ["market", "commerce", "organizations"], summary: "The Ale-chemy Knights establish a market divided by skill sets in a region Marius remembers as having almost no economy; Farkur and other Knights have vanished, but the source does not say what that means." },
    { title: "Safe known-person travel to Gael is available", meta: "Confirmed 19 Sep 2026", sort: "2026-09-19b", era: "2026 · Consequences", kind: "Interregional change", article: "gael", location: "Prima ↔ Gael", people: "Thorn; Ale-chemy Knights; unnamed transporter", tags: ["travel", "islands", "network"], summary: "Thorn says a friend can safely carry people they know to Gael from any island; the exact spell or mechanism remains unresolved." },
    { title: "Pilgrim’s Hearth returns ordinary social life", meta: "19 Sep 2026", sort: "2026-09-19c", era: "2026 · Consequences", kind: "Civic continuity", article: "common-man", location: "Pilgrim’s Hearth; Pristinia", people: "Thorn; Aurélia; Marius; Saoirse", tags: ["Common Man", "tavern", "rebuilding"], summary: "The successor tavern on the Common Man’s foundations functions as a place for tea, news, and social connection after destruction and rebuilding." },
    { title: "Prima’s Magic Academy is open", meta: "Confirmed 19 Sep 2026", sort: "2026-09-19d", era: "2026 · Consequences", kind: "Institutional development", article: "scribonia", location: "Pristinia; Prima", people: "Scribonia; Marius; Aurélia; Saoirse", tags: ["academy", "teaching", "magic"], summary: "Students identify Scribonia as their teacher, while Saoirse prepares lessons for a future turn teaching younger learners." },
    { title: "The Delerium cave answers Vessalia’s song", meta: "20 Sep 2026", sort: "2026-09-20", era: "2026 · Consequences", kind: "Unresolved discovery", article: "cave-company", location: "Unmapped cave", people: "Vessalia; Moira Eshdin; Di’trillio; Saoirse; Pell; Djöhandrai", tags: ["violet crystals", "Delerium", "harpies", "unresolved"], summary: "The party finds a contaminated corpse, strange tracks, violet crystals that do not all produce expected Delerium feedback, and malformed harpy-like creatures. Something deeper in the cave mimics Vessalia’s song; the crystals’ nature remains unknown." },
    { title: "Nienna gives herself so Hope can live", meta: "Modern era · exact date unresolved", sort: "9990-01", era: "Undated consequences", kind: "Voluntary sacrifice", article: "nienna", location: "Fenumion", people: "Nienna; Elenia; Hope", tags: ["sacrifice", "legacy", "one last time"], summary: "Afraid and wanting to live, Nienna spends her life to create an opportunity rather than a guaranteed victory; her absence continues to cause later choices." },
    { title: "Jiangshi dies and returns", meta: "Modern era · exact dates unresolved", sort: "9990-02", era: "Undated consequences", kind: "Death and return", article: "jiangshi", location: "The Shadowlands; Fenumion", people: "Jiangshi; Adelia; Namo’o", tags: ["souls", "memorial", "return"], summary: "Seven and a half months of death do not remove Jiangshi from relationship. Her return makes the world confront the difference between a dead body and a finished person." },
    { title: "Adelia gives herself for Hope", meta: "Modern era · exact date unresolved", sort: "9990-04", era: "Undated consequences", kind: "Ascension", article: "adelia-hope", location: "The Tree", people: "Adelia; Hope; Nienna; Jiangshi", tags: ["Hope", "Tree", "renewal"], summary: "A life repeatedly rebuilt after loss culminates in Adelia becoming part of the Tree so Hope can continue." },
    { title: "The Chain and Maw defeat Ithilrûnë’s working model", meta: "Sep 2026 · exact day unresolved", sort: "2026-09-21a", era: "2026 · Consequences", kind: "Epistemological crisis", article: "voraketh", location: "Voraketh; the Delerium Chain and Maw", people: "Ithilrûnë; Sildithas; Coralyn; Pappy", tags: ["Maw", "Delerium Chain", "Derya Thorne", "uncertainty"], summary: "A magic-consuming Maw, a Chain that suppresses power, dangerous constructs that defend or repair it, and an unidentified prisoner resist Ithilrûnë’s attempts to form a reliable model. Her explanations about Talan, Physisia, and the trapped figure remain explicitly unproven." },
    { title: "Sildithas proposes a feast beside the Maw", meta: "Sep 2026 · exact day unresolved", sort: "2026-09-21b", era: "2026 · Consequences", kind: "Oath and preservation", article: "sildithas", location: "Voraketh; beside the Chain and Maw", people: "Sildithas; Ithilrûnë; the island expedition", tags: ["oath", "feast", "joy", "moral uncertainty"], summary: "Unable to solve the Maw, Sildithas returns to an oath centered on mercy, flourishing, courage, and joy. He proposes a feast as a small good that preserves the people facing the unresolved horror, and Ithilrûnë agrees to follow his lead." },
    { title: "Pristinia answers hunger with a hunt", meta: "15 Dec 2024", sort: "2024-12-15a", era: "2024 · The Calling", kind: "Community consequence", article: "common-man", location: "The Common Man; Pristinia", people: "Farmer Frank; Herb; Aravil; Tobias", tags: ["food", "winter", "ecology", "civilian labor"], summary: "A tavern conversation exposes failed harvest help, an overworked farmer, and dwindling stores. A hunt forms while Herb limits it so immediate hunger does not destroy next year’s elk population." },
    { title: "Skye makes Lichen safe through music", meta: "15 Dec 2024", sort: "2024-12-15b", era: "2024 · The Calling", kind: "Belonging", article: "common-man", location: "The Common Man; Pristinia", people: "Skye; Lichen", tags: ["music", "money", "friendship", "First Forest"], summary: "Skye refuses most of a ten-gold gift worth roughly a year’s wages, learns who Lichen is, and connects a strange newcomer to the First Forest through music and conversation." }
  ],
  characters: [
    { title: "Adelia & Hope", meta: "Character record", article: "adelia-hope", image: "assets/archive/adelia.jpeg", summary: "Ascension, inheritance, and the life made possible by Nienna’s sacrifice." },
    { title: "Akarian", meta: "Guardian of Gael", article: "akarian", video: "assets/archive/akarian.mp4", summary: "A practical warrior remembered as the Guardian of a wounded region in recovery." },
    { title: "Aleister / Alastair", meta: "Character index", article: "people-directory", summary: "A spelling variant preserved from the source catalogue." },
    { title: "Aravil", meta: "Oathbound hunter", article: "aravil", summary: "Separated from her Queen but not from her oath; finds belonging through useful work in Pristinia." },
    { title: "Arjahn", meta: "Soldier and mapper", article: "arjahn", summary: "A disciplined protector who plans routes home and makes other people’s solutions stronger." },
    { title: "Brianna", meta: "Character sighting", article: "ghilsen", summary: "Ghilsen’s ‘Wifey’; enters the Shadow Roads holding him close and later confronts darkness pulled from her body." },
    { title: "Cecil", meta: "Character sighting", article: "new-year-address", summary: "A careful observer remembered for attention to individual vines and leaves; travels through time with Olokun." },
    { title: "Carmen", meta: "Character record", article: "carmen", image: "carmen-portrait.jpg", summary: "A deep gnome warlock whose ledger of obligation is tested by Paco’s unchosen sacrifice." },
    { title: "Coralyn", meta: "Aquatic adventurer", article: "coralyn", summary: "Explains cosmology through the sea and openly dissents when the Shadow Roads feel wrong." },
    { title: "Dale", meta: "Musician and practical caretaker", article: "dale", summary: "Turns concern into courage, food, shelter, tools, and consultation without trying to own another person’s grief." },
    { title: "Dez", meta: "Character sighting", article: "people-directory", summary: "A tavern-scene presence who repeatedly opens conversational space for Ghilsen and Magnus." },
    { title: "Elenia", meta: "Character record", article: "elenia", image: "elenia-portrait.png", summary: "A bearer of light whose devotion does not require moral blindness." },
    { title: "Gartina", meta: "Character record", article: "gartina", image: "gartina-portrait.png", summary: "A chef and protector for whom preparation is care—and can become self-blame." },
    { title: "Farkur", meta: "Character sighting", article: "people-directory", summary: "A rain-soaked adventurer with a mechanical wolf, a ready smile, and a distrust miracles do not simply erase." },
    { title: "Ghilsen Hendrickson", meta: "Former slave; adventurer", article: "ghilsen", summary: "Suspicion, freedom, and the hope that strength can prevent anyone from owning him again." },
    { title: "Ithilrûnë", meta: "Scholar and seeker", article: "ithilrune", summary: "Uses knowledge to preserve choice; the Maw forces her to admit ignorance and accept another person’s wisdom without abandoning her own." },
    { title: "Jéane Rose", meta: "Speedster and explorer", article: "jeane-rose", summary: "Experiences thought, friendship, travel, and the obligation to protect at extraordinary speed." },
    { title: "Jiangshi", meta: "Character record", article: "jiangshi", summary: "An adventurer returned from death whose story tests care, grief, and agency." },
    { title: "Magnus Niriin", meta: "Warlock, Silver Star, political figure", article: "magnus", image: "magnus-portrait.jpg", summary: "An ambitious Zarathian whose pursuit of leverage succeeds even as it deepens his dependence on Death and fractures trust." },
    { title: "Minerva", meta: "Character index", article: "people-directory", summary: "A player character preserved in the recovered catalogue." },
    { title: "Nienna", meta: "Character record", article: "nienna", image: "nienna-portrait.png", summary: "An absent presence whose sacrifice continues to act through the living." },
    { title: "Nymera", meta: "Character sighting", article: "elenia", summary: "A follower of Cala who questions why other devotees reach for violence when protection does not require it." },
    { title: "Olokun", meta: "Protector; Rahu; resurrected adventurer", article: "olokun", image: "olokun-poster.png", summary: "A deeply attached protector whose mature ethic separates care from ownership while fear keeps testing that boundary." },
    { title: "Pappy", meta: "Plainspoken protector", article: "pappy", summary: "A simple, good man whose Rift rescue exposes the boundary between character knowledge and later governance disputes." },
    { title: "Pelagia", meta: "Character index", article: "people-directory", summary: "A player character preserved in the recovered catalogue." },
    { title: "Quake", meta: "Character sighting", article: "roderick-wrath", summary: "Refuses Wrath’s bargain before its full danger is understood; protected by Elenia’s practiced memory of earlier loss." },
    { title: "Saray", meta: "Survivor of grief", article: "saray", summary: "Carries guilt after Nienna’s death and later lands the final blow against Wrath; the connecting chronology remains incomplete." },
    { title: "Rahn", meta: "Character sighting", article: "people-directory", summary: "A sparsely recorded flying adventurer preserved in the recovered scene catalogue." },
    { title: "St. Anky", meta: "Adventurer; peace-linked figure", article: "st-anky", image: "st-anky-portrait.png", summary: "A recurring companion associated with the Gate, the Shadow Roads, and peace between Rahu and Pristinia." },
    { title: "Scribonia", meta: "Magi and scholar", article: "scribonia", image: "scribonia-portrait.png", summary: "Self-defined before every label; brave in argument and often unable to relinquish the last word." },
    { title: "Selwyn", meta: "Character index", article: "people-directory", summary: "A player character preserved in the recovered catalogue." },
    { title: "Severina", meta: "Character index", article: "people-directory", summary: "A player character preserved in the recovered catalogue." },
    { title: "Sildithas", meta: "Oathbound defender", article: "sildithas", image: "sildithas-portrait.png", summary: "Meets uncertain divine authority by returning to an oath of mercy, flourishing, courage, and preserved joy." },
    { title: "Swiftfoot", meta: "Character sighting", article: "new-year-address", summary: "Remembered in the community retrospective for a sacrifice carried into shared history." },
    { title: "Thorn", meta: "Veilguard and returned survivor", article: "thorn", summary: "Dies on a Gael husk hunt, is later caught in a cult ritual, and returns by September 2026 through an unresolved mechanism." },
    { title: "Tshuka", meta: "Character index", article: "people-directory", summary: "A player character preserved in the recovered catalogue." },
    { title: "Vaelith", meta: "Character index", article: "people-directory", summary: "A player character preserved in the recovered catalogue." },
    { title: "Vaerik", meta: "Old soldier", article: "vaerik", image: "assets/archive/vaerik.png", summary: "Duty expressed as the conviction that if he can bear a burden, he must." },
    { title: "Wren", meta: "Druidic investigator", article: "wren", summary: "Asks the land, tests inherited stories, and treats understanding as a collective practice." },
    { title: "Alioth", meta: "Rahu trial participant", article: "casimir-alioth", summary: "Calls loyalty to Casimir a strength where Ephraith judges the same choice an institutional failure." },
    { title: "Aurélia / Night", meta: "Magic Academy student", article: "people-directory", summary: "A student by September 2026 whose fuller chronology still needs primary-source recovery." },
    { title: "Casimir", meta: "Procedural thinker", article: "casimir-alioth", summary: "Tests constraints, questions, silence, and institutional rules rather than trying to overpower them." },
    { title: "Di’trillio", meta: "Contamination-sensitive explorer", article: "cave-company", summary: "Reads the contaminated corpse and nearby crystals differently, then argues that the cave should be cleared or collapsed." },
    { title: "Djöhandrai", meta: "Cautious cave explorer", article: "cave-company", summary: "Wants to leave but chooses to help prevent the corpse’s fate from reaching others." },
    { title: "Marius Antares", meta: "Magic Academy student", article: "people-directory", summary: "Observes changes in Prima and voices a belief about Gael’s economy that remains attributed rather than established." },
    { title: "Moira Eshdin", meta: "Analytical cave explorer", article: "cave-company", summary: "Theorizes about the cave’s connections and corruption while keeping her claims at the level of character understanding." },
    { title: "Pell", meta: "Cave explorer", article: "cave-company", summary: "Frightened and practical; insists the corrupted corpse was somebody’s child and deserves burial." },
    { title: "Ryvyt", meta: "Knight-linked figure", article: "thorn", summary: "Reportedly took the Knights’ disappearance hard; fuller interpretation awaits a primary-source pass." },
    { title: "Saoirse", meta: "Mage and future teacher", article: "cave-company", summary: "Warns about contamination, uses petal-based magic, and prepares to teach at Prima’s Magic Academy." },
    { title: "Vessalia", meta: "Contaminated singer", article: "cave-company", summary: "Uses song to manage fear, accepts correction when it attracts danger, and remains attentive to Pell." }
  ],
  npcs: [
    { title: "Aria / Pride", meta: "Knight II of Death", article: "aria-pride", summary: "A daughter of Death whose philosophy treats attachment as future weakness.", image: "aria-pride-portrait.png" },
    { title: "High Lord Bowene", meta: "Political authority", article: "aria-pride", summary: "Stops a council’s pursuit of alliance with Death and eventually ends an argument Aria has dominated." },
    { title: "Cala", meta: "Divine figure", article: "cala", image: "assets/archive/cala-poster.png", summary: "A goddess of light and heroism who also carries responsibility for the old catastrophe." },
    { title: "Death / Dumuzi", meta: "Cosmic power", article: "death-dumuzi", summary: "A destroyer and bargainer constrained by the mortal soul’s need to choose.", image: "assets/archive/throne.png" },
    { title: "Draegar", meta: "Recurring figure", article: "gartina", summary: "Remembered beside Gartina in the community’s romantic history." },
    { title: "Endora", meta: "Roderick’s beloved", article: "roderick-wrath", summary: "A woman whose choices are repeatedly filtered through the people who tried to keep or preserve her." },
    { title: "Alessio", meta: "Common Man worker", article: "common-man", summary: "Works the tables, cleans mugs, and makes the tavern legible as a civilian workplace." },
    { title: "Farmer Frank", meta: "Pristinia farmer", article: "common-man", summary: "Carries the ordinary cost when promised harvest help does not return." },
    { title: "Herb", meta: "Common Man bartender", article: "herb", video: "herb-portrait.mp4", summary: "Local knowledge connecting food stores, regulars, labor needs, and ecological restraint." },
    { title: "Lichen", meta: "Pristinia newcomer", article: "people-directory", summary: "A visibly strange newcomer who learns that Skye can be a safe friend." },
    { title: "Melian", meta: "Witness of The Before", article: "the-before-melian", summary: "A survivor who answers catastrophe with preparation rather than denial." },
    { title: "Aionia", meta: "Goddess of time and space", article: "the-gate", summary: "Permits one tightly limited historical change; interference with time attracts consequences." },
    { title: "Eugene", meta: "Scholar and reluctant bearer", article: "eugene", summary: "Names himself as a burden immediately before asking the useful question or carrying difficult knowledge." },
    { title: "Mya", meta: "Goddess of Hope", article: "mya", image: "assets/archive/mya.jpeg", summary: "Follows Elenia, cleanses Brianna’s corrupted crystal, and makes a future through rather than around prior harm." },
    { title: "Namo’o", meta: "God of Souls", article: "namoo", summary: "A god whose act toward Papirak is both mercy and violation." },
    { title: "Paloma", meta: "Sacrifice and memory", article: "papirak-paloma", summary: "The wife who voluntarily became the complete price of Papirak’s Wish." },
    { title: "Papirak", meta: "Keeper of the Gate", article: "papirak-paloma", summary: "A savior whose erased memory returned two thousand years later." },
    { title: "Paco", meta: "Carmen’s companion", article: "carmen", summary: "His sacrifice turns obligation into a question about love, choice, and ownership." },
    { title: "Roderick / Wrath", meta: "Knight I of Death", article: "roderick-wrath", summary: "A duke and Knight whose history reaches the players in consequential fragments.", image: "assets/archive/wrath.gif" },
    { title: "Nuru", meta: "Divine power", article: "great-fracture", summary: "A secretive pragmatist who helped discover Delerium and bears responsibility for the catastrophe that followed." },
    { title: "Serra", meta: "Common Man barmaid", article: "common-man", summary: "A tavern worker whose observation about declining tips preserves the civilian economic effect of an adventurer’s absence." },
    { title: "Skye", meta: "Musician and safe friend", article: "common-man", summary: "Refuses to exploit Lichen’s generosity and connects a newcomer to the First Forest through music and conversation." },
    { title: "Talan", meta: "God of Justice and Order", article: "aria-pride", summary: "Aria’s childhood symbol of failed divine authority and the god who eventually kills her." },
    { title: "The Liar", meta: "Imprisoned divine figure", article: "roderick-wrath", summary: "Trades Delerium to Roderick for Eldrin’s relic, enabling Endora’s corrupted return." },
    { title: "Tutora Rhex", meta: "Dragon and historical witness", article: "roderick-wrath", summary: "Carries Elenia home from the Liar’s prison and preserves a source account of the Delerium trade." },
    { title: "Vysaeth", meta: "King, lich, witness", article: "vysaeth", summary: "A ruler whose testimony becomes an early lens on Roderick and Endora." }
  ],
  islands: [
    { title: "Fenumion & the Void", region: "World", parent: "World", type: "world geography", meta: "World · geography", article: "fenumion", summary: "Inhabited lands survive as separated pockets around the enormous, branching geographic and cosmological Void.", source: "Chronicle + world map", aliases: ["Shattered world"], image: "assets/archive/world-map.jpeg", level: "region" },
    { title: "The Void", region: "World", parent: "World", type: "interregional / cosmological location", meta: "World · interregional medium", article: "the-void", summary: "The dangerous space between shattered lands: barrier, predator-space, knowledge boundary, moral problem, and changing measure of connection.", source: "Consolidated location profile + scenes + testimony", aliases: ["Void"], image: "assets/archive/world-map.jpeg", level: "region" },
    { title: "Prima", region: "Prima", parent: "World", type: "major region", meta: "Prima · major region", article: "prima-pristinia", summary: "A hidden island containing Pristinia, The Gate, The Before, and an accumulated civic landscape.", source: "Scene + map", aliases: [], image: "assets/archive/pristinia.webp", level: "region" },
    { title: "Fein Uaill", region: "Fein Uaill", parent: "World", type: "major region", meta: "Fein Uaill · major region", article: "fein-uaill", summary: "The wider Zarathian region containing cities, estates, sacred sites, walls, libraries, and shores.", source: "Chronicle + map + images", aliases: ["Féin-Uaill", "Fein-Uaill"], image: "assets/archive/fein-uaill.jpeg", level: "region" },
    { title: "Gael", region: "Gael", parent: "World", type: "major region", meta: "Gael · major region", article: "gael", summary: "A harsh land liberated from Wrath whose small green center, Hope, marks the beginning of recovery.", source: "Scene + map + screenshots", aliases: [], image: "assets/archive/gael.jpeg", level: "region" },
    { title: "Eovar Harbor", region: "Eovar Harbor", parent: "World", type: "harbor settlement", meta: "Eovar Harbor · settlement", article: "eovar-harbor", summary: "A dense, defended port of roughly two thousand people, shaped by shipping and controlled water access.", source: "Chronicle + map + image", aliases: [], image: "assets/archive/eovar-harbor.jpeg", level: "region" },
    { title: "Babel-Ashur", region: "Babel-Ashur", parent: "World", type: "vast island", meta: "Babel-Ashur · major region", article: "babel-ashur", summary: "An enormous island defined by wild biomes and a vast central wound rather than one dominant city.", source: "Chronicle + map", aliases: ["Babel Ashur"], image: "assets/archive/babel-ashur.webp", level: "region" },
    { title: "Voraketh", region: "Voraketh", parent: "World", type: "isolated island", meta: "World · isolated island", article: "voraketh", summary: "A hostile island defined by suppressed power, sparse information, a self-maintained Delerium Chain, and the unresolved Maw.", source: "Consolidated location profile + scenes", aliases: [], level: "region" },
    { title: "The Maw", region: "Voraketh", parent: "Voraketh", type: "magic-consuming anomaly", meta: "Voraketh · anomaly", article: "voraketh", summary: "A growing anomaly that exerts deadly pull, consumes magic, and contains or is associated with an unidentified figure.", source: "Direct encounter + local testimony", aliases: ["Maw"], level: "site" },
    { title: "The Delerium Chain", region: "Voraketh", parent: "Voraketh", type: "containment structure", meta: "Voraketh · Delerium structure", article: "voraketh", summary: "A massive suppressive Chain that has been damaged and repaired while constructs defend or maintain its function.", source: "Direct observation + character testimony", aliases: ["Delerium Chain", "The Chain"], level: "site" },
    { title: "Greyward Littoral", region: "Babel-Ashur", parent: "Babel-Ashur", type: "coastal subregion", meta: "Babel-Ashur · southern shore", article: "grayward-littoral", summary: "Babel-Ashur’s named southern shore, mapped with a landing beach, safe routes, refuge, volcanic crystal, caverns, ruins, and sulphuric swamps.", source: "User-confirmed name + annotated map", aliases: ["Grayward Littoral", "Babel-Ashur Southern Coast", "Babel-Ashur Southern Shore", "Southern Coast", "Southern Shore"], image: "assets/archive/babel-ashur-southern-coast.webp", level: "subregion" },
    { title: "Reheva", region: "Other regions", parent: "World", type: "major region", meta: "World · named region", article: "visual-archive", summary: "The world map confirms Reheva as a named land; its internal geography has not yet been recovered here.", source: "World map", aliases: [], level: "region" },
    { title: "Rahu", region: "Other regions", parent: "World", type: "external polity", meta: "World · polity", article: "visual-archive", summary: "Rahu is represented in Pristinia by an embassy; its wider geography remains to be reconciled.", source: "Chronicle + image", aliases: [], level: "region" },

    { title: "Pristinia", region: "Prima", parent: "Prima", type: "settlement", meta: "Prima · settlement", article: "pristinia", summary: "A growing community whose walls, farms, taverns, public spaces, and memorials record player action.", source: "Scene + map + screenshots", aliases: [], image: "assets/archive/pristinia.webp", level: "settlement" },
    { title: "The Gate", region: "Prima", parent: "Prima", type: "ancient structure", meta: "Prima · ancient structure", article: "the-gate", summary: "The ancient mechanism that awakened when modern adventurers began arriving.", source: "Scene + screenshot", aliases: [], level: "site" },
    { title: "The Before", region: "Prima", parent: "Prima", type: "ruined city", meta: "Prima · ruined city", article: "the-before-melian", summary: "Melian’s home, destroyed when Delerium corrupted a civilization from beneath.", source: "Scene + screenshot", aliases: [], level: "site" },
    { title: "Oiche Arena", region: "Prima", parent: "Pristinia", type: "arena", meta: "Prima › Pristinia · arena", article: "pristinia", summary: "A named Pristinia arena confirmed by the settlement map.", source: "Map", aliases: ["Oíche Arena"], level: "site" },
    { title: "Melian’s House", region: "Prima", parent: "Pristinia", type: "residence", meta: "Prima › Pristinia · residence", article: "the-before-melian", summary: "Melian’s Pristinia residence is confirmed by the settlement map and connected scenes.", source: "Scene + map", aliases: [], level: "site" },
    { title: "Stella and Sola’s Shop", region: "Prima", parent: "Pristinia", type: "shop", meta: "Prima › Pristinia · shop", article: "pristinia", summary: "A Pristinia shop used in the Papirak and Melian record.", source: "Scene + map", aliases: ["Stella & Sola's Shop"], level: "site" },
    { title: "Public Square", region: "Prima", parent: "Pristinia", type: "civic space", meta: "Prima › Pristinia · civic space", article: "pristinia", summary: "A public gathering place confirmed by the map and screenshot directory.", source: "Map + screenshot", aliases: ["The Public Square"], level: "site" },
    { title: "The People’s Temple", region: "Prima", parent: "Pristinia", type: "temple", meta: "Prima › Pristinia · temple", article: "pristinia", summary: "A civic temple named on the Pristinia map.", source: "Map", aliases: ["People's Temple"], level: "site" },
    { title: "Pristinia Walls & Parapets", region: "Prima", parent: "Pristinia", type: "fortification", meta: "Prima › Pristinia · fortification", article: "pristinia", summary: "Player-built defenses whose later survival turned ordinary construction into persistent history.", source: "Scene + map + screenshot", aliases: ["Pristinia Walls", "Parapets of Pristinia", "The Wall"], level: "site" },
    { title: "Jon’s Tradehouse", region: "Prima", parent: "Pristinia", type: "tradehouse", meta: "Prima › Pristinia · tradehouse", article: "pristinia", summary: "A named commercial site confirmed by the Pristinia map.", source: "Map", aliases: ["Jon's Tradehouse"], level: "site" },
    { title: "The Common Man", region: "Prima", parent: "Pristinia", type: "tavern / civilian institution", meta: "Prima › Pristinia · tavern", article: "common-man", summary: "A workplace, newcomer threshold, memorial space, and civic information hub later burned by zombie pirates.", source: "Consolidated location profile + scenes + map", aliases: ["Common Man", "Common Man Tavern"], level: "site" },
    { title: "Adventurer’s District", region: "Prima", parent: "Pristinia", type: "district", meta: "Prima › Pristinia · district", article: "pristinia", summary: "A Pristinia district named on the map; one rendering resembles “Hoventurer’s District.”", source: "Map", aliases: ["Hoventurer's District", "Adventurers District"], level: "site" },
    { title: "Temple to Cala", region: "Prima", parent: "Pristinia", type: "temple", meta: "Prima › Pristinia · temple", article: "cala", summary: "A Pristinia temple dedicated to Cala and confirmed by the settlement map.", source: "Map", aliases: ["Cala Temple"], level: "site" },
    { title: "Breh’s Brewery", region: "Prima", parent: "Pristinia", type: "brewery", meta: "Prima › Pristinia · brewery", article: "pristinia", summary: "A named business confirmed by the Pristinia map.", source: "Map", aliases: ["Breh's Brewery"], level: "site" },
    { title: "Honest Shops", region: "Prima", parent: "Pristinia", type: "commercial quarter", meta: "Prima › Pristinia · shops", article: "pristinia", summary: "A commercial label preserved on the Pristinia map.", source: "Map", aliases: [], level: "site" },
    { title: "Pristinia Scroll Library", region: "Prima", parent: "Pristinia", type: "library", meta: "Prima › Pristinia · library", article: "pristinia", summary: "A library confirmed by the settlement map.", source: "Map", aliases: ["Scroll Library"], level: "site" },
    { title: "Archery Range", region: "Prima", parent: "Pristinia", type: "training site", meta: "Prima › Pristinia · training site", article: "pristinia", summary: "A social and training location confirmed by the map and supplied screenshot.", source: "Map + screenshot", aliases: [], level: "site" },
    { title: "Herb’s Greenhouses", region: "Prima", parent: "Pristinia", type: "food infrastructure", meta: "Prima › Pristinia · greenhouses", article: "pristinia", summary: "Food-growing infrastructure tied to the settlement’s ordinary economy and winter pressure.", source: "Scene + map", aliases: ["Herb's Greenhouses"], level: "site" },
    { title: "Gartina and Quake’s Estate", region: "Prima", parent: "Pristinia", type: "estate", meta: "Prima › Pristinia · estate", article: "gartina", summary: "An estate named for Gartina and Quake on the Pristinia map.", source: "Map", aliases: ["Gartina & Quake's Estate"], level: "site" },
    { title: "Pristinia Public Bathhouse", region: "Prima", parent: "Pristinia", type: "bathhouse", meta: "Prima › Pristinia · bathhouse", article: "pristinia", summary: "The supplied screenshot directory confirms the bathhouse as a Pristinia location.", source: "Screenshot directory", aliases: ["Public Bathhouse"], level: "site" },
    { title: "Crownspire Academy of Pristinia", region: "Prima", parent: "Pristinia", type: "academy", meta: "Prima › Pristinia · academy", article: "pristinia", summary: "The supplied screenshot directory confirms the academy; deeper history is not yet recovered.", source: "Screenshot directory", aliases: ["The Crownspire Academy"], level: "site" },
    { title: "Rahu Embassy", region: "Prima", parent: "Pristinia", type: "embassy", meta: "Prima › Pristinia · embassy", article: "papirak-paloma", summary: "Magnus returned here after restoring Papirak’s memory and before Papirak died.", source: "Scene + screenshot", aliases: [], level: "site" },
    { title: "Pilgrim’s Hearth", region: "Prima", parent: "Pristinia", type: "tavern / successor institution", meta: "Prima › Pristinia · tavern", article: "common-man", summary: "Built on the Common Man’s foundations and active by September 2026 as a place for tea, news, and ordinary social life.", source: "State of the World + scene + screenshot", aliases: ["The Pilgrim's Hearth", "Pilgrims Hearth"], level: "site" },
    { title: "Magic Academy", region: "Prima", parent: "Pristinia", type: "academy", meta: "Prima › Pristinia · academy", article: "scribonia", summary: "Open by September 19, 2026, with Scribonia teaching, Marius and Aurélia studying, and Saoirse preparing to teach.", source: "Direct scene", aliases: ["The Academy", "Prima Magic Academy"], level: "site" },
    { title: "The First Forest", region: "Prima", parent: "Prima", type: "forest", meta: "Prima · forest", article: "prima-pristinia", summary: "An active exploration and hunting location associated with Al-Shomer.", source: "Scene + screenshot", aliases: ["First Forest"], level: "site" },
    { title: "Ursa’s Rest", region: "Prima", parent: "Prima", type: "wilderness site", meta: "Prima · wilderness", article: "prima-pristinia", summary: "The screenshot directory confirms Ursa’s Rest as an exploration and hunting location.", source: "Screenshot directory", aliases: ["Ursa's Rest"], level: "site" },
    { title: "Old Earth Hills", region: "Prima", parent: "Prima", type: "hills", meta: "Prima · wilderness", article: "prima-pristinia", summary: "The screenshot directory confirms this landscape as an exploration and hunting site.", source: "Screenshot directory", aliases: [], level: "site" },
    { title: "The Lilly Patch", region: "Prima", parent: "Prima", type: "forest", meta: "Prima · forest", article: "prima-pristinia", summary: "A vividly colored forest location confirmed by the screenshot directory.", source: "Screenshot directory", aliases: ["Lilly Patch", "Lily Patch"], level: "site" },
    { title: "Alpine Forest", region: "Prima", parent: "Prima", type: "forest", meta: "Prima · forest", article: "prima-pristinia", summary: "A named forest location confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: [], level: "site" },

    { title: "Hope", region: "Gael", parent: "Gael", type: "living settlement", meta: "Gael · settlement", article: "gael", summary: "A tiny green beachhead of life whose physical presence argues that Gael can recover.", source: "Scene + map", aliases: ["Elenia and Adelia's Hope"], level: "settlement" },
    { title: "Stake", region: "Gael", parent: "Gael", type: "living settlement", meta: "Gael · settlement", article: "gael", summary: "A settlement visible from the Tower and already doing well by February 24, 2025.", source: "Contemporary scene", aliases: [], level: "settlement" },
    { title: "Verdelune", region: "Gael", parent: "Gael", type: "developing frontier", meta: "Gael · frontier", article: "gael", summary: "A developing frontier toward which some refugees moved by mid-2026 while Gael’s permanent infrastructure remained incomplete.", source: "Regional world-state record", aliases: [], level: "settlement" },
    { title: "Gael Open-Air Market", region: "Gael", parent: "Gael", type: "market", meta: "Gael · market", article: "gael", summary: "A specialized market created by the Ale-chemy Knights and operating by September 2026.", source: "First-person testimony", aliases: ["Ale-chemy Knights Market", "Open Air Market"], level: "site" },
    { title: "The Coast", region: "Gael", parent: "Gael", type: "coast", meta: "Gael · coast", article: "gael", summary: "A Gael location confirmed by the roleplay directory and supplied screenshot.", source: "Scene directory + screenshot", aliases: ["Coast"], level: "site" },
    { title: "The Library of Nuru", region: "Gael", parent: "Gael", type: "library", meta: "Gael · library", article: "gael", summary: "A Gael library confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Library of Nuru"], level: "site" },
    { title: "Tower of Gael", region: "Gael", parent: "Gael", type: "tower", meta: "Gael · tower", article: "gael", summary: "A principal Gael landmark visible in both the regional map and screenshot directory.", source: "Map + screenshot", aliases: ["The Tower of Gael"], level: "site" },
    { title: "Sanctum of the Wise", region: "Gael", parent: "Gael", type: "sanctum", meta: "Gael · sanctum", article: "gael", summary: "A named Gael interior confirmed by the roleplay directory and screenshot.", source: "Scene directory + screenshot", aliases: [], level: "site" },
    { title: "Shadow Angel Forest", region: "Gael", parent: "Gael", type: "forest", meta: "Gael · forest", article: "gael", summary: "A forest exploration location confirmed by the screenshot directory.", source: "Screenshot directory", aliases: [], level: "site" },
    { title: "Crustacean Cove", region: "Gael", parent: "Gael", type: "cove", meta: "Gael · cove", article: "gael", summary: "A coastal Gael location confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: [], level: "site" },
    { title: "The Cathedral and the Titans", region: "Gael", parent: "Gael", type: "cathedral complex", meta: "Gael · cathedral", article: "gael", summary: "A major Gael landmark represented by the Cathedral and Titan-related labels across map and screenshots.", source: "Map + screenshot", aliases: ["The Cathedral", "Cathedral and the Titans"], level: "site" },
    { title: "Titan’s Watch", region: "Gael", parent: "Gael", type: "fortified site", meta: "Gael · fortification", article: "gael", summary: "A monumental fortified location confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Titan's Watch"], level: "site" },
    { title: "The Road", region: "Gael", parent: "Gael", type: "route", meta: "Gael · route", article: "gael", summary: "A named route through Gael confirmed by the screenshot directory.", source: "Screenshot directory", aliases: [], level: "site" },
    { title: "Mage’s Ruin", region: "Gael", parent: "Gael", type: "ruin", meta: "Gael · ruin", article: "roderick-wrath", summary: "The first recovered appearance of the Red Lady, Endora; the scene does not establish her as hostile.", source: "Scene + map + screenshot", aliases: ["Mage's Ruin", "Mage's Ruins"], level: "site" },
    { title: "Vysaeth’s Tomb", region: "Gael", parent: "Gael", type: "tomb", meta: "Gael · tomb", article: "vysaeth", summary: "A major tomb complex confirmed by the Gael map and screenshot directory.", source: "Map + screenshot", aliases: ["Vysaeth's Tomb", "Vyselath's Tomb"], level: "site" },
    { title: "Citadel of Sorrow", region: "Gael", parent: "Gael", type: "citadel", meta: "Gael · citadel", article: "gael", summary: "A principal Gael landmark named on the regional map.", source: "Map", aliases: [], level: "site" },
    { title: "Plains of Trial", region: "Gael", parent: "Gael", type: "trial landscape", meta: "Gael · plains", article: "sildithas", summary: "The place where Sildithas died, returned hours later, and remembered having failed its measure.", source: "Scene + map", aliases: ["The Plains of Trial"], level: "site" },
    { title: "Underwater Temple", region: "Gael", parent: "Gael", type: "temple", meta: "Gael · temple", article: "gael", summary: "A submerged sacred site named on the Gael map.", source: "Map", aliases: ["The Underwater Temple"], level: "site" },

    { title: "Zarathis", region: "Fein Uaill", parent: "Fein Uaill", type: "civilization", meta: "Fein Uaill · civilization", article: "zarathis", summary: "A developed center organized around memory, mastery, and the boundary of one mortal life.", source: "Chronicle + map", aliases: ["Zerathis"], level: "settlement" },
    { title: "Caisleán na Brón", region: "Fein Uaill", parent: "Fein Uaill", type: "fortified place", meta: "Fein Uaill · fortified place", article: "fein-uaill", summary: "A major fortified place confirmed by the Fein Uaill map and screenshot directory.", source: "Map + screenshot", aliases: ["Caselean De Broin", "Caislean na Bron", "Caisleán De Bróin"], level: "site" },
    { title: "Ciaránach", region: "Fein Uaill", parent: "Fein Uaill", type: "sacred city", meta: "Fein Uaill · sacred city", article: "fein-uaill", summary: "The sacred nexus where Nuru killed Grace and Zarathian belief confronts divine failure.", source: "Chronicle + image", aliases: ["Ciaranach"], level: "settlement" },
    { title: "The Gates of Aelthor", region: "Fein Uaill", parent: "Fein Uaill", type: "city gate / battle site", meta: "Fein Uaill · battle site", article: "fein-uaill", summary: "The site where Aionia’s heavenly host killed civilians and burned the city before being driven back.", source: "Scene + map + screenshot", aliases: ["Gates of Aelthor", "Gates of Arthor"], level: "site" },
    { title: "Seraphis", region: "Fein Uaill", parent: "Fein Uaill", type: "city", meta: "Fein Uaill · city", article: "fein-uaill", summary: "A major settlement confirmed by the Fein Uaill map and supplied screenshot directory.", source: "Map + screenshot", aliases: [], level: "settlement" },
    { title: "The Titanwall of Eryndor", region: "Fein Uaill", parent: "Fein Uaill", type: "fortification", meta: "Fein Uaill · fortification", article: "fein-uaill", summary: "A monumental wall confirmed by the regional map and supplied screenshot directory.", source: "Map + screenshot", aliases: ["Titanwall of Eryndor", "Titanwall of Eanndor"], level: "site" },
    { title: "The Shard of Fein Uaill", region: "Fein Uaill", parent: "Fein Uaill", type: "monument / landmark", meta: "Fein Uaill · landmark", article: "fein-uaill", summary: "A named regional landmark confirmed by the supplied screenshot directory; the post text itself was deleted.", source: "Screenshot directory", aliases: ["Shard of Fein Uaill", "Rem Uaill"], level: "site" },
    { title: "The Radiant Bazaar of Zarathis", region: "Fein Uaill", parent: "Zarathis", type: "market", meta: "Fein Uaill › Zarathis · bazaar", article: "zarathis", summary: "A Zarathian market confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Radiant Bazaar"], level: "site" },
    { title: "Niriin Estate", region: "Fein Uaill", parent: "Fein Uaill", type: "estate", meta: "Fein Uaill · estate", article: "fein-uaill", summary: "A named estate confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: [], level: "site" },
    { title: "Aria’s Tomb", region: "Fein Uaill", parent: "Fein Uaill", type: "tomb", meta: "Fein Uaill · tomb", article: "aria-pride", summary: "Aria’s tomb lies in Fein Uaill proper; the regional record corrects the assumption that it is inside Ciaránach.", source: "Regional record + image", aliases: ["Aria's Tomb"], level: "site" },
    { title: "The Shining Shores", region: "Fein Uaill", parent: "Fein Uaill", type: "coast / settlement", meta: "Fein Uaill · shore", article: "fein-uaill", summary: "A named coastal place confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Shining Shores"], level: "site" },
    { title: "Thalanbor the Boundless Artwright’s Library", region: "Fein Uaill", parent: "Fein Uaill", type: "library", meta: "Fein Uaill · library", article: "fein-uaill", summary: "A monumental library confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Thalanbor's Library", "Artwright's Library"], level: "site" },
    { title: "The Feytouched Forest", region: "Fein Uaill", parent: "Fein Uaill", type: "forest", meta: "Fein Uaill · forest", article: "fein-uaill", summary: "A named forest confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Feytouched Forest"], level: "site" },
    { title: "Eshnunna of the Eternal Flame", region: "Fein Uaill", parent: "Fein Uaill", type: "sacred site", meta: "Fein Uaill · sacred site", article: "fein-uaill", summary: "A radiant sacred place confirmed by the supplied screenshot directory.", source: "Screenshot directory", aliases: ["Eshnunna"], level: "site" },
    { title: "Scribonia’s Teleportation Circle", region: "Fein Uaill", parent: "Sea of Dreams", type: "teleportation circle", meta: "Fein Uaill › Sea of Dreams · circle", article: "scribonia", summary: "An escape route unveiled after catastrophe; Mya later attributes Scribonia’s unmaking there to a divine or Void relic.", source: "Attributed scene + screenshot", aliases: ["Scribonia's Teleportation Circle in The Sea of Dreams", "Sea of Dreams"], level: "site" },

    { title: "Landing Beach", region: "Babel-Ashur", parent: "Greyward Littoral", type: "entry point", meta: "Babel-Ashur › Greyward Littoral · entry", article: "grayward-littoral", summary: "The marked coastal entry point on the annotated Greyward map.", source: "Annotated map", aliases: [], level: "site" },
    { title: "Safe Pathways", region: "Babel-Ashur", parent: "Greyward Littoral", type: "routes", meta: "Babel-Ashur › Greyward Littoral · routes", article: "grayward-littoral", summary: "Traversable routes explicitly marked safe on the annotated source map.", source: "Annotated map", aliases: ["Safe paths"], level: "site" },
    { title: "Skylight Refuge", region: "Babel-Ashur", parent: "Greyward Littoral", type: "shelter", meta: "Babel-Ashur › Greyward Littoral · shelter", article: "grayward-littoral", summary: "A refuge set within a rocky skylight chamber on the western side of the mapped coast.", source: "Annotated map", aliases: ["The Refuge", "Refuge"], level: "site" },
    { title: "Volcanic Crystal Well", region: "Babel-Ashur", parent: "Greyward Littoral", type: "natural feature", meta: "Babel-Ashur › Greyward Littoral · feature", article: "grayward-littoral", summary: "A volcanic crystal well marked near the northern source of the central watercourse.", source: "Annotated map", aliases: ["Crystal Well", "The Crystal Well"], level: "site" },
    { title: "Caverns Below", region: "Babel-Ashur", parent: "Greyward Littoral", type: "caverns", meta: "Babel-Ashur › Greyward Littoral · caverns", article: "grayward-littoral", summary: "Caverns marked along the northern highlands; deeper history is not yet recovered.", source: "Annotated map", aliases: ["Greyward Caverns", "Grayward Caverns", "Caverns"], level: "site" },
    { title: "Mineral Rock Face", region: "Babel-Ashur", parent: "Greyward Littoral", type: "rock formation", meta: "Babel-Ashur › Greyward Littoral · formation", article: "grayward-littoral", summary: "A mineral-rich rock face marked in the northwestern highlands.", source: "Annotated map", aliases: ["Mineral Face"], level: "site" },
    { title: "Unmarked Ruins", region: "Babel-Ashur", parent: "Greyward Littoral", type: "ruins", meta: "Babel-Ashur › Greyward Littoral · ruins", article: "grayward-littoral", summary: "Ruins marked on the eastern side of the coast; their name and deeper history remain unrecovered.", source: "Annotated map", aliases: ["Greyward Ruins", "Grayward Ruins", "Ruins"], level: "site" },
    { title: "Sulphuric Swamps", region: "Babel-Ashur", parent: "Greyward Littoral", type: "wetlands", meta: "Babel-Ashur › Greyward Littoral · swamps", article: "grayward-littoral", summary: "Sulphuric wetlands marked in the southeastern portion of the mapped shore.", source: "Annotated map", aliases: ["Greyward Swamps", "Grayward Swamps", "Swamps", "Sulfuric Swamps"], level: "site" }
  ]
};

const interactiveMaps = [
  {
    id: "world", title: "World", shortTitle: "World", image: "assets/archive/world-map.jpeg", width: 2048, height: 2048,
    alt: "Illustrated world map of Fenumion, showing separated lands around the branching Void",
    description: "The surviving world map places the recovered lands around the Void. Several landmasses remain unnamed or only partially documented.",
    pins: [
      { title: "Fein Uaill", x: 12, y: 49 },
      { title: "Gael", x: 83, y: 14 },
      { title: "Prima", x: 82, y: 83 },
      { title: "Babel-Ashur", x: 23, y: 83 },
      { title: "Reheva", x: 63, y: 67 }
    ]
  },
  {
    id: "pristinia", title: "Pristinia", shortTitle: "Pristinia", image: "assets/archive/pristinia.webp", width: 2048, height: 1536,
    alt: "Annotated civic map of Pristinia with walls, homes, businesses, temples, and public spaces",
    description: "A civic map of accumulated ordinary life: defenses, trade, worship, food, learning, and the tavern that became a vessel for communal memory.",
    pins: [
      { title: "Oiche Arena", x: 10, y: 7 },
      { title: "Melian’s House", x: 53, y: 7 },
      { title: "Stella and Sola’s Shop", x: 32, y: 14 },
      { title: "Public Square", x: 40, y: 28 },
      { title: "The People’s Temple", x: 61, y: 18 },
      { title: "Pristinia Walls & Parapets", x: 22, y: 39 },
      { title: "Jon’s Tradehouse", x: 48, y: 46 },
      { title: "The Common Man", x: 49, y: 54 },
      { title: "Adventurer’s District", x: 74, y: 57 },
      { title: "Temple to Cala", x: 61, y: 62 },
      { title: "Breh’s Brewery", x: 53, y: 70 },
      { title: "Archery Range", x: 35, y: 72 },
      { title: "Herb’s Greenhouses", x: 20, y: 73 },
      { title: "Pristinia Scroll Library", x: 48, y: 85 },
      { title: "Honest Shops", x: 63, y: 84 },
      { title: "Gartina and Quake’s Estate", x: 88, y: 68 }
    ]
  },
  {
    id: "gael", title: "Gael", shortTitle: "Gael", image: "assets/archive/gael.jpeg", width: 800, height: 800,
    alt: "Regional map of Gael showing Hope, ruins, the Plains of Trial, tombs, a tower, and an underwater temple",
    description: "Gael’s map makes recovery visible against the scale of catastrophe: Hope is a small green foothold among ruins, trials, tombs, and old strongholds.",
    pins: [
      { title: "Citadel of Sorrow", x: 45, y: 38 },
      { title: "Mage’s Ruin", x: 57, y: 37 },
      { title: "Plains of Trial", x: 59, y: 57 },
      { title: "Hope", x: 45, y: 66 },
      { title: "Vysaeth’s Tomb", x: 58, y: 72 },
      { title: "The Cathedral and the Titans", x: 69, y: 74 },
      { title: "Tower of Gael", x: 81, y: 69 },
      { title: "Underwater Temple", x: 68, y: 86 }
    ]
  },
  {
    id: "fein-uaill", title: "Fein Uaill", shortTitle: "Fein Uaill", image: "assets/archive/fein-uaill.jpeg", width: 2048, height: 2048,
    alt: "Regional map of Fein Uaill showing cities, a shard, the Titanwall, and the Gates of Aelthor",
    description: "The regional map separates Fein Uaill from Zarathis and preserves a network of cities, fortifications, sacred sites, and monumental boundaries.",
    pins: [
      { title: "Seraphis", x: 64, y: 32 },
      { title: "Zarathis", x: 49, y: 48 },
      { title: "Caisleán na Brón", x: 62, y: 61 },
      { title: "The Shard of Fein Uaill", x: 17, y: 69 },
      { title: "The Titanwall of Eryndor", x: 61, y: 70 },
      { title: "The Gates of Aelthor", x: 65, y: 91 }
    ]
  },
  {
    id: "eovar", title: "Eovar Harbor", shortTitle: "Eovar", image: "assets/archive/eovar-harbor.jpeg", width: 1066, height: 800,
    alt: "Map of Eovar Harbor showing a walled waterfront settlement, ships, and nearby farmland",
    description: "The harbor’s form is its history: ships, walls, a compact waterfront, controlled approaches, and agricultural support beyond the urban core.",
    pins: [{ title: "Eovar Harbor", x: 53, y: 49 }]
  },
  {
    id: "babel-ashur", title: "Babel-Ashur", shortTitle: "Babel-Ashur", image: "assets/archive/babel-ashur.webp", width: 2048, height: 2048,
    alt: "Full island map of Babel-Ashur dominated by wild biomes and a vast central crater",
    description: "An island organized visually around a central wound. Its southern coast opens into the more detailed expedition geography of Greyward Littoral.",
    pins: [
      { title: "Babel-Ashur", x: 53, y: 54 },
      { title: "Greyward Littoral", x: 58, y: 79 }
    ]
  },
  {
    id: "greyward", title: "Greyward Littoral", shortTitle: "Greyward", image: "assets/archive/babel-ashur-southern-coast.webp", width: 4096, height: 3072,
    alt: "Annotated expedition map of Greyward Littoral on Babel-Ashur’s southern coast",
    description: "The most operational map in the archive: it marks arrival, routes, refuge, resources, caverns, ruins, and hazardous wetlands.",
    pins: [
      { title: "Volcanic Crystal Well", x: 27, y: 9 },
      { title: "Caverns Below", x: 42, y: 11 },
      { title: "Mineral Rock Face", x: 18, y: 21 },
      { title: "Skylight Refuge", x: 7, y: 45 },
      { title: "Safe Pathways", x: 19, y: 64 },
      { title: "Unmarked Ruins", x: 88, y: 27 },
      { title: "Sulphuric Swamps", x: 86, y: 63 },
      { title: "Landing Beach", x: 48, y: 76 }
    ]
  }
];
const mappedLocationTitles = new Set(interactiveMaps.flatMap(map => map.pins.map(pin => pin.title)));

const navigationRegions = [
  {
    title: "Characters", article: "people-directory", glyph: "✦",
    branches: [
      { title: "Directory", items: [
        { label: "All characters", article: "people-directory", parent: true }
      ]},
      { title: "Artist gallery", items: [
        { label: "Ececilia emojis", article: "ececilia-emojis", parent: true }
      ]},
      { title: "Characters A–J", items: [
        { label: "Adelia & Hope", article: "adelia-hope" }, { label: "Akarian", article: "akarian" },
        { label: "Aravil", article: "aravil" }, { label: "Arjahn", article: "arjahn" },
        { label: "Carmen", article: "carmen" }, { label: "Casimir & Alioth", article: "casimir-alioth" },
        { label: "Coralyn", article: "coralyn" }, { label: "Dale", article: "dale" },
        { label: "Elenia", article: "elenia" },
        { label: "Eugene", article: "eugene" }, { label: "Gartina", article: "gartina" },
        { label: "Ghilsen", article: "ghilsen" }, { label: "Herb", article: "herb" }, { label: "Ithilrûnë", article: "ithilrune" },
        { label: "Jéane Rose", article: "jeane-rose" }, { label: "Jiangshi", article: "jiangshi" }
      ]},
      { title: "Characters N–W", items: [
        { label: "Nienna", article: "nienna" }, { label: "Olokun", article: "olokun" },
        { label: "Pappy", article: "pappy" }, { label: "Saray", article: "saray" },
        { label: "Scribonia", article: "scribonia" }, { label: "Sildithas", article: "sildithas" },
        { label: "St. Anky", article: "st-anky" }, { label: "Thorn", article: "thorn" }, { label: "Vaerik", article: "vaerik" },
        { label: "Wren", article: "wren" }
      ]},
      { title: "Groups & orders", items: [
        { label: "Delerium cave company", article: "cave-company" },
        { label: "The Vanguard", article: "vanguard" }
      ]},
      { title: "Death’s Knights", items: [
        { label: "Roderick / Wrath", article: "roderick-wrath" },
        { label: "Aria / Pride", article: "aria-pride" }
      ]},
      { title: "Gods & witnesses", items: [
        { label: "Cosmology & Metaphysics", article: "cosmology-guide", parent: true },
        { label: "Death / Dumuzi", article: "death-dumuzi" }, { label: "Cala", article: "cala" }, { label: "Mya", article: "mya" },
        { label: "Namo’o", article: "namoo" }, { label: "Papirak & Paloma", article: "papirak-paloma" },
        { label: "Vysaeth", article: "vysaeth" }, { label: "Magnus Niriin", article: "magnus" }
      ]}
    ]
  },
  {
    title: "Timeline", article: "living-timeline", glyph: "◷",
    branches: [
      { title: "Foundations", items: [
        { label: "Complete narrative history", article: "living-timeline", parent: true },
        { label: "Fenumion", article: "fenumion" }, { label: "Cosmology & Metaphysics", article: "cosmology-guide" },
        { label: "Themes of Fenumion", article: "themes" }, { label: "The Great Fracture", article: "great-fracture" },
        { label: "Delerium", article: "delerium" }
      ]},
      { title: "2024", items: [
        { label: "Pristinia’s wall", article: "pristinia" }, { label: "Wrath’s arrival", article: "roderick-wrath" },
        { label: "Melian explains The Before", article: "the-before-melian" }
      ]},
      { title: "2025–2026", items: [
        { label: "Aria / Pride", article: "aria-pride" }, { label: "The New Year Address", article: "new-year-address" },
        { label: "Community as Protagonist", article: "community" }
      ]}
    ]
  },
  {
    title: "Locations", article: "visual-archive", glyph: "⌖",
    branches: [
      { title: "Atlas", items: [
        { label: "All locations", article: "visual-archive", parent: true }
      ]},
      { title: "Prima", items: [
        { label: "Prima overview", article: "prima-pristinia", parent: true },
        { label: "Pristinia", article: "pristinia" }, { label: "The Common Man", article: "common-man" },
        { label: "The Gate", article: "the-gate" },
        { label: "The Before", article: "the-before-melian" }
      ]},
      { title: "Fein Uaill", items: [
        { label: "Fein Uaill overview", article: "fein-uaill", parent: true },
        { label: "Zarathis", article: "zarathis" }
      ]},
      { title: "Gael", items: [
        { label: "Gael overview", article: "gael", parent: true }
      ]},
      { title: "Other regions", items: [
        { label: "The Void", article: "the-void" }, { label: "Voraketh", article: "voraketh" },
        { label: "Eovar Harbor", article: "eovar-harbor" },
        { label: "Babel-Ashur", article: "babel-ashur" }, { label: "Greyward Littoral", article: "grayward-littoral" }
      ]}
    ]
  }
];

const archiveLinks = [
  { label: "The Living Archive", article: "conversation" },
  { label: "The Source Catalogue", article: "source-catalogue" },
  { label: "How to Read the Codex", article: "reading-the-codex" },
  { label: "Relationships in Motion", article: "relationships" },
  { label: "Memorable Quotes", article: "memorable-quotes" },
  { label: "Unresolved Record", article: "open-questions" },
  { label: "Map of the Archive", article: "archive-map" }
];

const articlePaths = new Map();
navigationRegions.forEach(region => {
  articlePaths.set(region.article, [region.title]);
  region.branches.forEach(branch => branch.items.forEach(item => {
    if (!articlePaths.has(item.article)) articlePaths.set(item.article, [region.title, branch.title, item.label]);
  }));
});
archiveLinks.forEach(item => articlePaths.set(item.article, ["Archive", item.label]));
articlePaths.set("world-index", ["World Index"]);
articlePaths.set("memorable-quotes", ["Archive", "Memorable Quotes"]);
articlePaths.set("cosmology-guide", ["Timeline", "Foundations", "Cosmology & Metaphysics"]);
articlePaths.set("themes", ["Timeline", "Foundations", "Themes of Fenumion"]);
articlePaths.set("relationships", ["Archive", "Relationships in Motion"]);
articlePaths.set("open-questions", ["Archive", "Unresolved Record"]);
articlePaths.set("visual-archive", ["Locations", "Location Atlas"]);
articlePaths.set("prima-pristinia", ["Locations", "Prima"]);
articlePaths.set("pristinia", ["Locations", "Prima", "Pristinia"]);
articlePaths.set("common-man", ["Locations", "Prima", "Pristinia", "The Common Man"]);
articlePaths.set("the-gate", ["Locations", "Prima", "The Gate"]);
articlePaths.set("the-before-melian", ["Locations", "Prima", "The Before"]);
articlePaths.set("fein-uaill", ["Locations", "Fein Uaill"]);
articlePaths.set("zarathis", ["Locations", "Fein Uaill", "Zarathis"]);
articlePaths.set("gael", ["Locations", "Gael"]);
articlePaths.set("the-void", ["Locations", "The Void"]);
articlePaths.set("voraketh", ["Locations", "Voraketh"]);
articlePaths.set("eovar-harbor", ["Locations", "Eovar Harbor"]);
articlePaths.set("babel-ashur", ["Locations", "Babel-Ashur"]);
articlePaths.set("grayward-littoral", ["Locations", "Babel-Ashur", "Greyward Littoral"]);

const subchannelMap = {
  "world-index": [
    { label: "Characters", article: "people-directory", summary: "Heroes, NPCs, gods, witnesses, and antagonists." },
    { label: "Timeline", article: "living-timeline", summary: "Events ordered by discovery and consequence." },
    { label: "Locations", article: "visual-archive", summary: "A searchable atlas of regions, settlements, sublocations, aliases, and evidence." }
  ],
  "people-directory": [
    { label: "Heroes", article: "gartina", summary: "Player characters and the relationships that carry their history." },
    { label: "Death’s Knights", article: "roderick-wrath", summary: "Wrath, Pride, and the lives behind their titles." },
    { label: "Gods & witnesses", article: "death-dumuzi", summary: "Divine powers and historical witnesses whose claims shape the record." },
    { label: "Relationships in Motion", article: "relationships", summary: "How bonds change through events, asymmetries, choices, and consequences." }
  ],
  "living-timeline": [
    { label: "Foundations", article: "great-fracture", summary: "The One Tree, divine failure, Delerium, and the shattering." },
    { label: "2024", article: "pristinia", summary: "Pristinia’s wall, Wrath’s arrival, and Melian’s testimony." },
    { label: "2025–2026", article: "aria-pride", summary: "Aria’s public power, death, Papirak’s reckoning, and the community’s later memory." },
    { label: "Unresolved Record", article: "open-questions", summary: "Chronology gaps, contradictions, and high-risk unknowns preserved without invention." }
  ],
  "cosmology-guide": [
    { label: "The Great Fracture", article: "great-fracture", summary: "Divine conflict, corrupted Sap, Death’s access, and the firebreak." },
    { label: "Death / Dumuzi", article: "death-dumuzi", summary: "Soul bargains, choice, and the truths told by an annihilative power." },
    { label: "Unresolved Record", article: "open-questions", summary: "The metaphysical mechanisms the evidence does not yet settle." }
  ],
  "relationships": [
    { label: "Olokun & Aria", article: "olokun", summary: "Love and personhood without ideological agreement or erased harm." },
    { label: "Dale & Saray", article: "dale", summary: "Care that remains beside guilt without claiming the right to end it." },
    { label: "Scribonia & Eugene", article: "eugene", summary: "Knowledge, mentorship, envy, independence, and boundary." }
  ],
  "magnus": [
    { label: "Death / Dumuzi", article: "death-dumuzi", summary: "The power that owns Magnus’s soul and can make that ownership physically decisive." },
    { label: "Zarathis", article: "zarathis", summary: "The culture Magnus calls his own and whose one-life principles his history challenges." },
    { label: "Papirak & Paloma", article: "papirak-paloma", summary: "The buried history Magnus recovers by breaking Papirak’s protective barrier." }
  ],
  "prima-pristinia": [
    { label: "Pristinia", article: "pristinia", summary: "Settlement, walls, farms, winter stores, and belonging." },
    { label: "The Common Man", article: "common-man", summary: "Pristinia’s accumulated civilian room and the foundations inherited by Pilgrim’s Hearth." },
    { label: "The Gate", article: "the-gate", summary: "Ancient mechanism and divine contingency." },
    { label: "The Before", article: "the-before-melian", summary: "Ruined city, Delerium vein, and Melian’s witness." }
  ],
  "pristinia": [
    { label: "The Common Man", article: "common-man", summary: "Work, music, hunger, memorial, destruction, and succession on the same foundations." },
    { label: "Prima overview", article: "prima-pristinia", summary: "The island’s settlements, ancient structures, and inherited wounds." }
  ],
  "common-man": [
    { label: "Pristinia", article: "pristinia", summary: "The growing settlement whose civilian pressures became visible inside the tavern." },
    { label: "Jiangshi", article: "jiangshi", summary: "Memorialized at the Common Man and later returned to its familiar sounds and scents." },
    { label: "Aravil", article: "aravil", summary: "A regular whose response to the tavern’s food crisis helps define her place in Pristinia." }
  ],
  "visual-archive": [
    { label: "Prima", article: "prima-pristinia", summary: "Pristinia, The Gate, The Before, and the island’s accumulated civic geography." },
    { label: "Fein Uaill", article: "fein-uaill", summary: "Zarathis, Caisleán na Brón, Ciaránach, walls, estates, libraries, and sacred sites." },
    { label: "Gael", article: "gael", summary: "Hope, trials, ruins, towers, forests, and a wounded landscape beginning to recover." },
    { label: "The Void", article: "the-void", summary: "Dangerous passage, predation, sacrifice, uneven knowledge, and changing connections between islands." },
    { label: "Voraketh", article: "voraketh", summary: "The Maw, the Delerium Chain, suppressed power, local testimony, and an investigation still without answers." }
  ],
  "fein-uaill": [
    { label: "Zarathis", article: "zarathis", summary: "A developed cultural center within the wider Fein Uaill region." },
    { label: "All Fein Uaill places", article: "visual-archive", summary: "Search every recovered city, estate, tomb, forest, wall, shore, and landmark." }
  ],
  "gael": [
    { label: "All Gael places", article: "visual-archive", summary: "Search Hope, the Tower, Plains of Trial, Mage’s Ruin, forests, coast, and more." }
  ],
  "the-void": [
    { label: "Fenumion", article: "fenumion", summary: "The world made playable through persistent history and separated lands." },
    { label: "Gael", article: "gael", summary: "The destination of Nienna’s dangerous early Void expedition." },
    { label: "Voraketh", article: "voraketh", summary: "An isolated island whose route and relationship to other interregional spaces remain unresolved." }
  ],
  "voraketh": [
    { label: "Ithilrûnë", article: "ithilrune", summary: "Knowledge fails to become a reliable model at the Chain and Maw." },
    { label: "Sildithas", article: "sildithas", summary: "Listening, divine uncertainty, and a feast beside unresolved horror." },
    { label: "Pappy", article: "pappy", summary: "Physical resilience becomes unusually valuable while the Chain suppresses magic." }
  ]
};

const byId = new Map(articles.map(article => [article.id, article]));
const hubPages = [
  { id: "people-directory", label: "Characters", detail: "Heroes · NPCs · Gods", image: "assets/archive/wrath.gif" },
  { id: "living-timeline", label: "Timeline", detail: "Causes · Events · Consequences", image: "assets/archive/abyss.png" },
  { id: "visual-archive", label: "Locations", detail: "Regions · Settlements · Landmarks", image: "assets/archive/world-map.jpeg" },
  { id: "memorable-quotes", label: "Quotes", detail: "Words the world remembers", image: "assets/archive/throne.png" },
  { id: "conversation", label: "Living Archive", detail: "Memory · Evidence · Consequence", image: "assets/archive/fein-uaill.jpeg" },
  { id: "reading-the-codex", label: "How to Read", detail: "Evidence · Perspective · Uncertainty", image: "assets/archive/pristinia.webp" }
];
const hubPageById = new Map(hubPages.map(page => [page.id, page]));
const navigation = document.querySelector("#navigation");
const articleContent = document.querySelector("#article-content");
const breadcrumbs = document.querySelector("#breadcrumbs");
const contents = document.querySelector("#contents");
const search = document.querySelector("#search");
const searchPanel = document.querySelector("#search-panel");
const searchResults = document.querySelector("#search-results");
const searchCount = document.querySelector("#search-count");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menu-button");
const searchToggle = document.querySelector("#search-toggle");
const scrim = document.querySelector("#scrim");

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}

function renderNavigation() {
  navigation.innerHTML = navigationRegions.map(region => `
    <section class="nav-region">
      <button class="nav-region-link" data-article="${region.article}" data-nav-article="${region.article}">
        <span class="nav-region-glyph" aria-hidden="true">${region.glyph}</span><strong>${region.title}</strong><span>›</span>
      </button>
      <div class="nav-region-tree">${region.branches.map(branch => `
        <details class="nav-branch">
          <summary>${branch.title}<span>${branch.items.length}</span></summary>
          <div>${branch.items.map(item => `
            <button class="nav-link ${item.parent ? "nav-parent" : "nav-child"}" data-article="${item.article}" data-nav-article="${item.article}"><span>${item.label}</span><span>›</span></button>`).join("")}</div>
        </details>`).join("")}</div>
    </section>`).join("") + `
    <section class="nav-group archive-links"><h2 class="nav-group-title">Archive reference</h2>${archiveLinks.map(item => `
      <button class="nav-link" data-article="${item.article}" data-nav-article="${item.article}"><span>${item.label}</span><span>›</span></button>`).join("")}</section>`;
}

function renderArticle(route, pushHash = true) {
  const [id, routeQuery = ""] = String(route || "").split("?");
  const routeParams = new URLSearchParams(routeQuery);
  const requestedMapId = routeParams.get("map") || "";
  const article = byId.get(id) || articles[0];
  const hubPage = hubPageById.get(article.id);
  document.body.classList.toggle("home-view", article.id === "world-index");
  document.body.classList.toggle("hub-view", Boolean(hubPage));
  document.body.classList.toggle("atlas-view", article.id === "visual-archive");
  const routeHash = `#${article.id}${article.id === "visual-archive" && requestedMapId ? `?map=${encodeURIComponent(requestedMapId)}` : ""}`;
  if (pushHash && location.hash !== routeHash) history.pushState(null, "", routeHash);
  document.title = `${article.title} — The Fenumion Codex`;
  const path = articlePaths.get(article.id) || [article.category, article.title];
  breadcrumbs.innerHTML = `Codex <span>·</span> ${path.join(' <span>·</span> ')}`;
  const facts = Object.entries(article.facts).map(([label, value]) => `<div class="fact"><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const allowAutoplay = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const heroClass = `article-hero${article.imageLayout ? ` ${article.imageLayout}` : ""}`;
  const mapHero = article.image && article.mapId
    ? `<figure class="${heroClass} map-linked-hero"><button type="button" class="article-map-link" data-open-map="${escapeHtml(article.mapId)}" aria-label="${escapeHtml(article.mapLinkLabel || `Explore the interactive ${article.title} map`)}"><img src="${article.image}" alt="${article.imageAlt || ""}"><span class="article-map-cta"><small>Interactive map</small><strong>${escapeHtml(article.mapLinkLabel || `Explore ${article.title}`)} <span aria-hidden="true">→</span></strong></span></button><figcaption>${article.imageCaption || "Image preserved in the Fenumion archive."}</figcaption></figure>`
    : "";
  const hero = article.video
    ? `<figure class="${heroClass}"><video ${allowAutoplay ? "autoplay " : ""}muted loop playsinline controls preload="metadata" poster="${article.image || ""}" aria-label="${article.videoAlt || article.title}"><source src="${article.video}" type="video/mp4">Your browser does not support this video.</video><figcaption>${article.videoCaption || "Video preserved in the Fenumion archive."}</figcaption></figure>`
    : mapHero || (article.image ? `<figure class="${heroClass}"><img src="${article.image}" alt="${article.imageAlt || ""}"><figcaption>${article.imageCaption || "Image preserved in the Fenumion archive."}</figcaption></figure>` : "");
  const sourceLedger = article.sources?.length ? `<details class="source-ledger"><summary><span>Documents used</span><strong>${article.sources.length}</strong></summary><ul>${article.sources.map(source => `<li>${escapeHtml(source)}</li>`).join("")}</ul></details>` : "";
  const subchannels = renderSubchannels(article.id);
  const hubSwitcher = hubPage ? `
    <nav class="hub-switcher" aria-label="Explore the Codex">
      ${hubPages.map(page => `<button class="gateway-tile${page.id === article.id ? " active" : ""}" data-article="${page.id}" style="--tile-image:url('${page.image}')"${page.id === article.id ? ' aria-current="page"' : ""}><span>${page.label}</span><small>${page.detail}</small></button>`).join("")}
    </nav>` : "";
  const atlasBanner = article.id === "visual-archive" ? `
    <section class="atlas-banner" aria-labelledby="interactive-maps-title">
      <div class="atlas-banner-copy">
        <p class="eyebrow">Interactive world atlas</p>
        <h2 id="interactive-maps-title">Explore Fenumion from the world outward</h2>
        <p>Choose a map, then hover or focus an area to reveal its marker and name. Tap markers on touch devices. Each location card separates recovered history from map-only evidence.</p>
      </div>
      <div id="interactive-atlas" class="interactive-atlas"></div>
    </section>` : "";
  articleContent.innerHTML = `
    <header class="article-header"${hubPage ? ` style="--hub-image:url('${hubPage.image}')"` : ""}>
      <p class="article-kicker">${article.type}</p>
      <h1>${article.title}</h1>
      <p class="dek">${article.dek}</p>
      <div class="article-meta">${article.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </header>
    ${hubSwitcher}
    ${atlasBanner}
    ${hubPage ? "" : hero}
    <div class="source-strip"><span>Archive basis</span><p>Drawn from preserved campaign scenes, chronicles, maps, and visual records.</p></div>
    ${sourceLedger}
    ${subchannels}
    <div class="lead-grid">
      <div class="article-body">${article.body}${renderRelated(article)}</div>
      <dl class="infobox"><h2 class="infobox-title">At a glance</h2>${facts}</dl>
    </div>`;
  if (article.id === "world-index") setupWorldBrowser();
  if (article.id === "visual-archive") { setupInteractiveAtlas(requestedMapId); setupLocationExplorer(); }
  if (article.id === "living-timeline") setupTimelineExplorer();
  document.querySelectorAll("[data-nav-article]").forEach(link => link.classList.toggle("active", link.dataset.navArticle === article.id));
  document.querySelectorAll(".nav-branch").forEach(branch => { branch.open = Boolean(branch.querySelector(`[data-nav-article="${article.id}"]`)); });
  buildContents();
  closePanels();
  window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function renderSubchannels(id) {
  const items = subchannelMap[id];
  if (!items?.length) return "";
  const label = id === "prima-pristinia" ? "Within Prima" : id === "pristinia" ? "Within Pristinia" : "Subchannels";
  return `<section class="subchannels" aria-label="${label}"><p class="eyebrow">${label}</p><div>${items.map(item => `
    <button class="subchannel-card" data-article="${item.article}"><strong>${item.label}</strong><span>${item.summary}</span><i aria-hidden="true">›</i></button>`).join("")}</div></section>`;
}

function setupWorldBrowser() {
  const bannerVideo = document.querySelector("#gateway-banner-video");
  const motionToggle = document.querySelector("#gateway-motion-toggle");
  if (bannerVideo && motionToggle) {
    const setMotion = playing => {
      if (playing) {
        bannerVideo.play().then(() => {
          motionToggle.textContent = "Pause motion";
          motionToggle.setAttribute("aria-pressed", "true");
        }).catch(() => {
          motionToggle.textContent = "Play motion";
          motionToggle.setAttribute("aria-pressed", "false");
        });
      } else {
        bannerVideo.pause();
        motionToggle.textContent = "Play motion";
        motionToggle.setAttribute("aria-pressed", "false");
      }
    };
    setMotion(!matchMedia("(prefers-reduced-motion: reduce)").matches);
    motionToggle.addEventListener("click", () => setMotion(bannerVideo.paused));
  }
  const browser = document.querySelector("#world-browser");
  if (!browser) return;
  const browserData = {
    characters: [...archiveIndex.characters, ...archiveIndex.npcs],
    timeline: archiveIndex.timeline,
    locations: archiveIndex.islands
  };
  let activeView = "characters";
  let direction = "asc";

  const render = () => {
    const items = [...browserData[activeView]].sort((a, b) => {
      const left = activeView === "timeline" ? a.sort : a.title;
      const right = activeView === "timeline" ? b.sort : b.title;
      return left.localeCompare(right) * (direction === "asc" ? 1 : -1);
    });
    const labels = { characters: "Characters", timeline: "Timeline", locations: "Locations" };
    browser.innerHTML = `
      <div class="browser-toolbar" role="toolbar" aria-label="Choose an archive view">
        <div class="browser-tabs">${Object.keys(labels).map(key => `<button class="browser-tab ${key === activeView ? "active" : ""}" data-view="${key}" aria-pressed="${key === activeView}">${labels[key]}<span>${browserData[key].length}</span></button>`).join("")}</div>
        <button class="sort-direction" data-sort-direction="${direction}" aria-label="Reverse sort order">${activeView === "timeline" ? "Chronological" : "A–Z"} <span>${direction === "asc" ? "↑" : "↓"}</span></button>
      </div>
      <div class="browser-summary"><strong>${items.length}</strong> ${labels[activeView].toLowerCase()} records · ${activeView === "timeline" ? "ordered by discovery" : "ordered by name"}</div>
      <div class="browser-grid ${activeView === "timeline" ? "timeline-view" : ""}">${items.map(item => `
        <button class="index-card" data-article="${item.article}">
          ${item.image ? `<img src="${item.image}" alt="" loading="lazy">` : item.video ? `<video src="${item.video}" muted loop playsinline preload="metadata" ${matchMedia("(prefers-reduced-motion: reduce)").matches ? "" : "autoplay"} aria-hidden="true"></video>` : `<span class="index-glyph" aria-hidden="true">${activeView === "timeline" ? "◷" : activeView === "characters" ? "✦" : "⌖"}</span>`}
          <span class="index-card-copy"><small>${item.meta}</small><strong>${item.title}</strong><span>${item.summary}</span></span>
        </button>`).join("")}</div>`;
  };

  browser.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) { activeView = viewButton.dataset.view; direction = "asc"; render(); return; }
    const sortButton = event.target.closest("[data-sort-direction]");
    if (sortButton) { direction = direction === "asc" ? "desc" : "asc"; render(); }
  });
  const gatewaySearch = document.querySelector("#gateway-search");
  if (gatewaySearch) gatewaySearch.addEventListener("input", event => {
    search.value = event.target.value;
    runSearch(event.target.value);
  });
  render();
}

function setupInteractiveAtlas(initialMapId = "") {
  const atlas = document.querySelector("#interactive-atlas");
  if (!atlas) return;
  const initialMap = interactiveMaps.find(map => map.id === initialMapId) || interactiveMaps[0];
  let activeMapId = initialMap.id;
  let activeLocationTitle = initialMap.pins[0]?.title || "";
  let hoverTimer = null;

  const findLocation = title => archiveIndex.islands.find(item => item.title === title);
  const linkedMapIds = new Map([["Gael", "gael"], ["Prima", "pristinia"], ["Pristinia", "pristinia"], ["Fein Uaill", "fein-uaill"]]);
  const syncMapRoute = () => history.replaceState(null, "", `#visual-archive?map=${encodeURIComponent(activeMapId)}`);

  const renderDetail = title => {
    const locationRecord = findLocation(title);
    if (!locationRecord) return;
    activeLocationTitle = title;
    atlas.querySelectorAll("[data-map-location]").forEach(button => {
      const active = button.dataset.mapLocation === title;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const detail = atlas.querySelector(".map-detail");
    const linkedMapId = linkedMapIds.get(locationRecord.title);
    const mapLayerLink = linkedMapId && linkedMapId !== activeMapId
      ? `<button type="button" class="map-layer-link" data-map-id="${linkedMapId}">Explore ${locationRecord.title === "Prima" ? "Prima / Pristinia" : escapeHtml(locationRecord.title)} map <span aria-hidden="true">⌖</span></button>`
      : "";
    detail.innerHTML = `
      <span class="map-detail-kicker">${escapeHtml(locationRecord.meta)}</span>
      <h3>${escapeHtml(locationRecord.title)}</h3>
      <p>${escapeHtml(locationRecord.summary)}</p>
      <span class="map-detail-source">Evidence · ${escapeHtml(locationRecord.source)}</span>
      ${mapLayerLink}
      <button type="button" class="map-history-link" data-article="${locationRecord.article}">Open location history <span aria-hidden="true">→</span></button>`;
  };

  const renderMap = () => {
    const map = interactiveMaps.find(candidate => candidate.id === activeMapId) || interactiveMaps[0];
    const landscape = map.width / map.height > 1.1;
    const mapCanvasWidth = landscape ? "min(100%, 96vh)" : "min(100%, 72vh)";
    const pins = map.pins.map(pin => ({ ...pin, record: findLocation(pin.title) })).filter(pin => pin.record);
    if (!pins.some(pin => pin.title === activeLocationTitle)) activeLocationTitle = pins[0]?.title || "";
    atlas.innerHTML = `
      <div class="map-switcher" role="tablist" aria-label="Choose a map">
        ${interactiveMaps.map(candidate => `<button type="button" role="tab" id="map-tab-${candidate.id}" class="map-switch ${candidate.id === map.id ? "active" : ""}" data-map-id="${candidate.id}" aria-controls="atlas-map-panel" aria-selected="${candidate.id === map.id}" tabindex="${candidate.id === map.id ? "0" : "-1"}">${escapeHtml(candidate.shortTitle)}<span>${candidate.pins.length}</span></button>`).join("")}
      </div>
      <div class="map-heading">
        <div><span class="eyebrow">Interactive map</span><h3>${escapeHtml(map.title)}</h3><p>${escapeHtml(map.description)}</p></div>
        <a href="${map.image}" target="_blank" rel="noreferrer">Open source map <span aria-hidden="true">↗</span></a>
      </div>
      <div class="map-workspace" id="atlas-map-panel" role="tabpanel" aria-labelledby="map-tab-${map.id}">
        <div class="map-frame">
          <div class="map-canvas" style="width:${mapCanvasWidth};aspect-ratio:${map.width} / ${map.height}">
            <img src="${map.image}" width="${map.width}" height="${map.height}" alt="${escapeHtml(map.alt)}" loading="eager">
            <div class="map-pin-layer" aria-label="Mapped locations in ${escapeHtml(map.title)}">
              ${pins.map((pin, index) => `<button type="button" class="map-pin ${pin.title === activeLocationTitle ? "active" : ""}" style="--pin-x:${pin.x}%;--pin-y:${pin.y}%" data-map-location="${escapeHtml(pin.title)}" aria-label="${escapeHtml(pin.title)}: ${escapeHtml(pin.record.summary)}" aria-pressed="${pin.title === activeLocationTitle}"><span class="map-pin-number" aria-hidden="true"><span class="map-pin-index">${index + 1}</span></span><span class="map-pin-label">${escapeHtml(pin.title)}</span></button>`).join("")}
            </div>
          </div>
        </div>
        <aside class="map-detail" aria-live="polite"></aside>
      </div>
      <div class="map-location-list" aria-label="Locations marked on ${escapeHtml(map.title)}">
        ${pins.map((pin, index) => `<button type="button" class="map-location-chip ${pin.title === activeLocationTitle ? "active" : ""}" data-map-location="${escapeHtml(pin.title)}" aria-pressed="${pin.title === activeLocationTitle}"><span>${index + 1}</span>${escapeHtml(pin.title)}</button>`).join("")}
      </div>`;
    if (activeLocationTitle) renderDetail(activeLocationTitle);
  };

  atlas.addEventListener("click", event => {
    const mapButton = event.target.closest("[data-map-id]");
    if (mapButton) {
      activeMapId = mapButton.dataset.mapId;
      activeLocationTitle = interactiveMaps.find(map => map.id === activeMapId)?.pins[0]?.title || "";
      syncMapRoute();
      renderMap();
      return;
    }
    const locationButton = event.target.closest("[data-map-location]");
    if (locationButton) renderDetail(locationButton.dataset.mapLocation);
  });
  atlas.addEventListener("pointerover", event => {
    const locationButton = event.target.closest(".map-pin[data-map-location]");
    if (!locationButton || locationButton.contains(event.relatedTarget)) return;
    clearTimeout(hoverTimer);
    const title = locationButton.dataset.mapLocation;
    hoverTimer = setTimeout(() => renderDetail(title), 140);
  });
  atlas.addEventListener("pointerout", event => {
    const locationButton = event.target.closest(".map-pin[data-map-location]");
    if (!locationButton || locationButton.contains(event.relatedTarget)) return;
    clearTimeout(hoverTimer);
    hoverTimer = null;
  });
  atlas.addEventListener("focusin", event => {
    const locationButton = event.target.closest("[data-map-location]");
    if (locationButton) renderDetail(locationButton.dataset.mapLocation);
  });
  atlas.addEventListener("keydown", event => {
    const mapButton = event.target.closest("[data-map-id]");
    if (mapButton && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const index = interactiveMaps.findIndex(map => map.id === mapButton.dataset.mapId);
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? interactiveMaps.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + interactiveMaps.length) % interactiveMaps.length;
      activeMapId = interactiveMaps[nextIndex].id;
      activeLocationTitle = interactiveMaps[nextIndex].pins[0]?.title || "";
      syncMapRoute();
      renderMap();
      atlas.querySelector(`[data-map-id="${activeMapId}"]`)?.focus();
      return;
    }
    const pinButton = event.target.closest(".map-pin[data-map-location]");
    if (pinButton && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
      const pins = [...atlas.querySelectorAll(".map-pin[data-map-location]")];
      const index = pins.indexOf(pinButton);
      const step = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = pins[(index + step + pins.length) % pins.length];
      next.focus();
      renderDetail(next.dataset.mapLocation);
    }
  });
  renderMap();
}

function setupLocationExplorer() {
  const explorer = document.querySelector("#location-explorer");
  if (!explorer) return;
  const regionOrder = ["Prima", "Fein Uaill", "Gael", "Voraketh", "Eovar Harbor", "Babel-Ashur", "World", "Other regions"];
  const regions = [...new Set(archiveIndex.islands.map(item => item.region))].sort((a, b) => regionOrder.indexOf(a) - regionOrder.indexOf(b));
  let activeRegion = "All regions";
  let direction = "asc";
  let query = "";
  let mappedOnly = false;

  explorer.innerHTML = `
    <div class="location-controls">
      <label class="location-search-shell">
        <span class="location-search-label">Search places</span>
        <span class="location-search-field"><span aria-hidden="true">⌕</span><input type="search" placeholder="Try Caisleán, Caselean, Gael, library…" autocomplete="off"></span>
      </label>
      <button class="location-mapped-toggle" type="button" aria-pressed="false"><span aria-hidden="true">⌖</span> On a map</button>
      <button class="location-sort" type="button" aria-label="Reverse alphabetical order">A–Z <span>↑</span></button>
    </div>
    <div class="location-filter-row" aria-label="Filter locations by region">
      ${["All regions", ...regions].map(region => `<button class="location-filter ${region === activeRegion ? "active" : ""}" type="button" data-region="${escapeHtml(region)}" aria-pressed="${region === activeRegion}">${escapeHtml(region)}</button>`).join("")}
    </div>
    <div class="location-results-summary"></div>
    <div class="location-results"></div>`;

  const input = explorer.querySelector("input");
  const results = explorer.querySelector(".location-results");
  const summary = explorer.querySelector(".location-results-summary");
  const sortButton = explorer.querySelector(".location-sort");
  const mappedToggle = explorer.querySelector(".location-mapped-toggle");

  const renderResults = () => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = archiveIndex.islands
      .filter(item => activeRegion === "All regions" || item.region === activeRegion)
      .filter(item => !mappedOnly || mappedLocationTitles.has(item.title))
      .filter(item => {
        const haystack = `${item.title} ${item.region} ${item.parent} ${item.type} ${item.meta} ${item.summary} ${item.source} ${(item.aliases || []).join(" ")}`.toLowerCase();
        return terms.every(term => haystack.includes(term));
      })
      .sort((a, b) => a.title.localeCompare(b.title) * (direction === "asc" ? 1 : -1));
    const grouped = filtered.reduce((groups, item) => {
      if (!groups.has(item.region)) groups.set(item.region, []);
      groups.get(item.region).push(item);
      return groups;
    }, new Map());
    const orderedGroups = [...grouped.entries()].sort((a, b) => {
      const aIndex = regionOrder.indexOf(a[0]);
      const bIndex = regionOrder.indexOf(b[0]);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });

    summary.innerHTML = `<strong>${filtered.length}</strong> place${filtered.length === 1 ? "" : "s"}${activeRegion === "All regions" ? ` across ${grouped.size} region${grouped.size === 1 ? "" : "s"}` : ` in ${escapeHtml(activeRegion)}`}${mappedOnly ? " · shown on an interactive map" : ""} · ${direction === "asc" ? "A–Z" : "Z–A"}`;
    results.innerHTML = filtered.length ? orderedGroups.map(([region, items]) => `
      <section class="location-region" aria-label="${escapeHtml(region)}">
        <header class="location-region-header"><h3>${escapeHtml(region)}</h3><span>${items.length} place${items.length === 1 ? "" : "s"}</span></header>
        <div class="location-grid">${items.map(item => `
          <button class="place-card ${item.level === "region" ? "region-card" : ""}" type="button" data-article="${item.article}">
            ${item.image ? `<img class="place-card-image" src="${item.image}" alt="" loading="lazy">` : `<span class="place-glyph" aria-hidden="true">⌖</span>`}
            <span class="place-copy">
              <span class="place-kicker">${escapeHtml(item.parent === item.region ? item.type : `${item.parent} · ${item.type}`)}</span>
              <strong>${escapeHtml(item.title)}${mappedLocationTitles.has(item.title) ? `<i class="place-map-badge">Mapped</i>` : ""}</strong>
              <span class="place-summary">${escapeHtml(item.summary)}</span>
              <span class="place-source">${escapeHtml(item.source)}</span>
            </span>
          </button>`).join("")}</div>
      </section>`).join("") : `<div class="location-empty"><strong>No recovered place matches that search.</strong><span>Try a region, landmark, building type, or alternate spelling.</span></div>`;
  };

  input.addEventListener("input", event => { query = event.target.value; renderResults(); });
  mappedToggle.addEventListener("click", () => {
    mappedOnly = !mappedOnly;
    mappedToggle.classList.toggle("active", mappedOnly);
    mappedToggle.setAttribute("aria-pressed", String(mappedOnly));
    renderResults();
  });
  sortButton.addEventListener("click", () => {
    direction = direction === "asc" ? "desc" : "asc";
    sortButton.innerHTML = `${direction === "asc" ? "A–Z" : "Z–A"} <span>${direction === "asc" ? "↑" : "↓"}</span>`;
    renderResults();
  });
  explorer.querySelector(".location-filter-row").addEventListener("click", event => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    activeRegion = button.dataset.region;
    explorer.querySelectorAll("[data-region]").forEach(candidate => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", active);
    });
    renderResults();
  });
  renderResults();
}

function setupTimelineExplorer() {
  const explorer = document.querySelector("#timeline-explorer");
  if (!explorer) return;
  const eras = [...new Set(archiveIndex.timeline.map(item => item.era))];
  let activeEra = "All eras";
  let direction = "asc";
  let query = "";

  explorer.innerHTML = `
    <div class="timeline-controls">
      <label class="timeline-search-shell">
        <span class="timeline-search-label">Search events</span>
        <span class="timeline-search-field"><span aria-hidden="true">⌕</span><input type="search" placeholder="Try Papirak, sacrifice, Prima…" autocomplete="off"></span>
      </label>
      <button class="timeline-sort" type="button" aria-label="Reverse timeline order">Oldest first <span>↑</span></button>
    </div>
    <div class="timeline-filter-row" aria-label="Filter timeline by era">
      ${["All eras", ...eras].map(era => `<button class="timeline-filter ${era === activeEra ? "active" : ""}" type="button" data-era="${escapeHtml(era)}" aria-pressed="${era === activeEra}">${escapeHtml(era)}</button>`).join("")}
    </div>
    <div class="timeline-results-summary"></div>
    <div class="timeline-results"></div>`;

  const input = explorer.querySelector("input");
  const results = explorer.querySelector(".timeline-results");
  const summary = explorer.querySelector(".timeline-results-summary");
  const sortButton = explorer.querySelector(".timeline-sort");

  const renderResults = () => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = archiveIndex.timeline
      .filter(item => activeEra === "All eras" || item.era === activeEra)
      .filter(item => {
        const haystack = `${item.title} ${item.meta} ${item.summary} ${item.era} ${item.kind} ${item.location} ${item.people} ${(item.tags || []).join(" ")}`.toLowerCase();
        return terms.every(term => haystack.includes(term));
      })
      .sort((a, b) => a.sort.localeCompare(b.sort) * (direction === "asc" ? 1 : -1));
    const grouped = filtered.reduce((groups, item) => {
      if (!groups.has(item.era)) groups.set(item.era, []);
      groups.get(item.era).push(item);
      return groups;
    }, new Map());

    summary.innerHTML = `<strong>${filtered.length}</strong> event${filtered.length === 1 ? "" : "s"}${activeEra === "All eras" ? ` across ${grouped.size} era${grouped.size === 1 ? "" : "s"}` : ` in ${escapeHtml(activeEra)}`} · ${direction === "asc" ? "oldest first" : "newest first"}`;
    results.innerHTML = filtered.length ? [...grouped.entries()].map(([era, items]) => `
      <section class="timeline-era" aria-label="${escapeHtml(era)}">
        <header class="timeline-era-header"><h3>${escapeHtml(era)}</h3><span>${items.length} event${items.length === 1 ? "" : "s"}</span></header>
        <div class="event-timeline">${items.map(item => `
          <button class="event-card" type="button" data-article="${item.article}">
            <span class="event-date">${escapeHtml(item.meta)}</span>
            <span class="event-copy">
              <span class="event-kind">${escapeHtml(item.kind)} <i>·</i> ${escapeHtml(item.location)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <span class="event-summary">${escapeHtml(item.summary)}</span>
              <span class="event-people"><b>People</b> ${escapeHtml(item.people)}</span>
              <span class="event-tags">${(item.tags || []).map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}</span>
            </span>
          </button>`).join("")}</div>
      </section>`).join("") : `<div class="timeline-empty"><strong>No recovered event matches that search.</strong><span>Try a character, location, theme, or consequence.</span></div>`;
  };

  input.addEventListener("input", event => { query = event.target.value; renderResults(); });
  sortButton.addEventListener("click", () => {
    direction = direction === "asc" ? "desc" : "asc";
    sortButton.innerHTML = `${direction === "asc" ? "Oldest" : "Newest"} first <span>${direction === "asc" ? "↑" : "↓"}</span>`;
    renderResults();
  });
  explorer.querySelector(".timeline-filter-row").addEventListener("click", event => {
    const button = event.target.closest("[data-era]");
    if (!button) return;
    activeEra = button.dataset.era;
    explorer.querySelectorAll("[data-era]").forEach(candidate => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", active);
    });
    renderResults();
  });
  renderResults();
}

function renderRelated(article) {
  const related = articles
    .filter(candidate => candidate.id !== article.id)
    .map(candidate => ({ article: candidate, score: candidate.tags.filter(tag => article.tags.includes(tag)).length + (candidate.category === article.category ? 1 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(({ article: item }) => `<button data-article="${item.id}"><small>Continue reading</small>${item.title}</button>`)
    .join("");
  return `<div class="related">${related}</div>`;
}

function buildContents() {
  const headings = [...articleContent.querySelectorAll(".article-body h2")];
  contents.innerHTML = headings.map(heading => `<button type="button" class="toc-link" data-section="${heading.id}">${heading.textContent}</button>`).join("");
}

function openSearch() {
  searchPanel.hidden = false;
  scrim.hidden = false;
  if (innerWidth <= 760) document.querySelector(".search-shell").classList.add("open");
}

function runSearch(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) { searchPanel.hidden = true; scrim.hidden = true; return; }
  const terms = normalized.split(/\s+/).filter(Boolean);
  const articleResults = articles.map(article => {
    const path = articlePaths.get(article.id) || [article.category, article.title];
    const haystack = `${path.join(" ")} ${article.title} ${article.category} ${article.type} ${article.dek} ${article.tags.join(" ")} ${(article.sources || []).join(" ")} ${article.body.replace(/<[^>]+>/g, " ")}`.toLowerCase();
    const titleMatch = article.title.toLowerCase().includes(normalized) ? 4 : 0;
    const tagMatch = article.tags.some(tag => tag.toLowerCase().includes(normalized)) ? 2 : 0;
    const allTermsMatch = terms.every(term => haystack.includes(term));
    return { article, path, score: titleMatch + tagMatch + (haystack.includes(normalized) ? 2 : 0) + (allTermsMatch ? 1 : 0) };
  }).filter(result => result.score);
  const matchedArticleTitles = new Set(articleResults.map(result => result.article.title.toLowerCase()));
  const indexGroups = [
    ["Characters", archiveIndex.characters],
    ["NPCs & divine figures", archiveIndex.npcs],
    ["Timeline", archiveIndex.timeline],
    ["Locations", archiveIndex.islands]
  ];
  const indexResults = indexGroups.flatMap(([group, items]) => items.map(item => {
    const haystack = `${group} ${item.title} ${item.meta} ${item.summary} ${item.era || ""} ${item.kind || ""} ${item.location || ""} ${item.people || ""} ${item.region || ""} ${item.parent || ""} ${item.type || ""} ${item.source || ""} ${(item.aliases || []).join(" ")} ${(item.tags || []).join(" ")}`.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(normalized) ? 4 : 0;
    const allTermsMatch = terms.every(term => haystack.includes(term));
    return {
      article: { id: item.article, title: item.title, type: item.meta, dek: item.summary },
      path: [group, item.title],
      score: titleMatch + (haystack.includes(normalized) ? 2 : 0) + (allTermsMatch ? 1 : 0)
    };
  })).filter(result => result.score && !matchedArticleTitles.has(result.article.title.toLowerCase()));
  const seen = new Set();
  const results = [...articleResults, ...indexResults]
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title))
    .filter(result => {
      const key = `${result.article.title.toLowerCase()}|${result.article.id}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  searchCount.textContent = `${results.length} result${results.length === 1 ? "" : "s"}`;
  searchResults.innerHTML = results.length ? results.map(({ article, path }) => `
    <button class="search-result" data-article="${article.id}"><small>${path.join(" → ")} · ${article.type}</small><strong>${highlight(article.title, normalized)}</strong><span>${highlight(article.dek, normalized)}</span></button>`).join("") : `<div class="empty-search">No character, event, location, or source matches “${escapeHtml(query)}”.</div>`;
  openSearch();
}

function highlight(text, query) {
  const escaped = escapeHtml(text);
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${safeQuery})`, "ig"), "<mark>$1</mark>");
}

function closePanels() {
  searchPanel.hidden = true;
  scrim.hidden = true;
  sidebar.classList.remove("open");
  document.querySelector(".search-shell").classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", event => {
  const mapTrigger = event.target.closest("[data-open-map]");
  if (mapTrigger) {
    renderArticle(`visual-archive?map=${encodeURIComponent(mapTrigger.dataset.openMap)}`);
    return;
  }
  const trigger = event.target.closest("[data-article]");
  if (trigger) {
    if (trigger.classList.contains("search-result")) {
      search.value = "";
      const gatewaySearch = document.querySelector("#gateway-search");
      if (gatewaySearch) gatewaySearch.value = "";
    }
    renderArticle(trigger.dataset.article);
  }
  const sectionTrigger = event.target.closest("[data-section]");
  if (sectionTrigger) document.getElementById(sectionTrigger.dataset.section)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
});
search.addEventListener("input", event => runSearch(event.target.value));
search.addEventListener("focus", () => { if (search.value) runSearch(search.value); });
document.querySelector("#close-search").addEventListener("click", closePanels);
scrim.addEventListener("click", closePanels);
menuButton.addEventListener("click", () => {
  const open = !sidebar.classList.contains("open");
  closePanels();
  sidebar.classList.toggle("open", open);
  scrim.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
});
searchToggle.addEventListener("click", () => { openSearch(); search.focus(); });
document.addEventListener("keydown", event => {
  if (event.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) {
    event.preventDefault();
    const gatewaySearch = document.querySelector("#gateway-search");
    if (gatewaySearch) gatewaySearch.focus();
    else { openSearch(); search.focus(); }
  }
  if (event.key === "Escape") {
    search.value = "";
    const gatewaySearch = document.querySelector("#gateway-search");
    if (gatewaySearch) gatewaySearch.value = "";
    closePanels();
  }
});
window.addEventListener("popstate", () => renderArticle(location.hash.slice(1), false));
window.addEventListener("hashchange", () => {
  const route = location.hash.slice(1);
  const [id] = route.split("?");
  if (byId.has(id)) renderArticle(route, false);
});

renderNavigation();
renderArticle(location.hash.slice(1) || "world-index", false);

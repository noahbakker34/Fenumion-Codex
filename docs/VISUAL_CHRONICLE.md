# Illustrated chronicle · 21 October 2026

The owner authorizes all seven proposed visual improvements. This release changes presentation and navigation while preserving canonical history and access rules.

1. Reading text uses Cormorant; controls and small labels use a system sans-serif stack. Vespasian remains the display face for titles. Form controls retain 16-pixel text and touch targets.
2. Five importance levels have distinct ornaments and accents. The seven World Changing events receive larger illustrated cards. Images come from existing public article or regional artwork, with a public archive fallback; they illustrate the record rather than reconstructing an event. No new art or claim is generated.
3. Narrative History uses the full reading area. Repeated context and facts remain available in a disclosure. Desktop filters form a compact sticky row; mobile controls remain in normal flow.
4. A native year/month navigator jumps to events in the current filtered results. It retains keyboard focus, existing filter URLs, dates, source labels, uncertainty and adjustment receipts. Month ornaments are decorative, not canonical divine insignia. The twelve-month key remains available.
5. Character articles and expanded profiles have portrait-led introductions, existing role labels and up to four existing public relationship links. Relationships retain their supplied wording. Missing roles, relationships or home regions are not invented.
6. Prima, Gael, Fein Uaill, Babel-Ashur, Voraketh and Verdelune have restrained accent colors and linked badges. Region selection uses existing explicit article facts, direct region articles or matching location-directory entries. It does not infer residence from participation in a quest. Existing maps, geography and artwork are unchanged.
7. The homepage has a visible title, three reading paths, the latest public World Changing event and three recent public quest records. Music, vault and approved-content controls share a compact header dock. Original control nodes and listeners preserve playback, sign-in, unlock and lock behavior.

Implementation: `site/codex-visual.js` and `site/codex-visual.css`, integrated through the existing article renderer and shared layout. Fenumion alone loads this visual layer; Gedankin retains its current presentation. The shared layout's workspace option is only selected for Narrative History. Cache versions: app/catalog254, styles175, article-layout2, visual1; reader3 and protected-media3 remain.

All content outside the homepage body compares equal with the previous release. Homepage metadata is equal. The 343 public events, 26 public veiled stubs, 73/159/77/27/7 ratings, 326 dated public events, 12 calendar adjustments, 580 records and 2,053 sections are preserved. The private vault payload SHA-256 remains `fc5a3a19bffc3ec4fac3de3ecad827c969976991e7b0e5f4cc649583348369ba`. No raw source, private payload or new media is published.

`scripts/check_visual_chronicle.cjs` adds functional visual coverage to the Pages gate: homepage event links, calendar jumps and focus, preserved routes/counts/source dates, six source-backed regional identities, character portraits/roles/relationships/dialogs, header spacing, utility controls, signed-out boundaries and 390/320-pixel layouts. Saved desktop and mobile screenshots are inspected. Local canonical, calendar, asset, syntax and whitespace checks pass, alongside timeline, reader, research, Rifts and supported/unsupported film regressions. Browser layout tests do not establish physical iPhone behavior; no iPhone is available.

Deployment receipt follows successful hosted gates and fresh anonymous live verification.

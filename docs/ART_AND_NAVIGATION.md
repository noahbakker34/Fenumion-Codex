# The Art of Fenumion and persistent navigation · 12 October 2026

The public `art-of-fenumion` gallery collects existing character portraits, place/map artwork, community art and public scene posters. Current collection: 226 distinct asset URLs. No new artwork or artist attribution is invented. Ececilia’s existing community credit and complete collection remain available. Images open at full size and every work links to its existing story. Search and collection filters use 24-item pages with lazy images and asynchronous decoding; protected records and embedded private media are excluded even after a keeper unlock.

The compact desktop rail shown in the user’s screenshot now persists at 78px across the Fenumion and Gedankin codices. The logo, world switches, guide button, icon spacing, colors and position stay consistent as readers navigate. Hover titles, accessible labels, focus states and contextual Fenumion active highlights accompany the icons. The art palette is available from Fenumion navigation and as a cross-world link in Gedankin. The rail scrolls independently on short screens. Mobile retains the familiar labeled drawer and full record trees.

Existing story pages, search, source access, world switching, vault authentication and mobile navigation remain available. App223, art-gallery1, shared layout10, Gedankin app26. Both worlds load the same latest shared style/font resources.

Chrome verified home, character, timeline, island, gallery and Gedankin pages; consistent rail geometry, tablet/mobile overflow, 226 unique public works, filters/search/pagination, full-size/story destinations, contextual navigation and exclusion of synthetic protected content after unlock. Existing NPC/character navigation regression checks passed. Desktop/mobile screenshots inspected; syntax and diff checks passed.

Regression: run `scripts/check_art_menu.cjs` against a local site preview with Playwright installed. Set `CODEX_BASE_URL` and `CHROME_PATH` if needed.

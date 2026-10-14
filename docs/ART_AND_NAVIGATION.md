# The Art of Fenumion and persistent navigation · 12 October 2026

The public `art-of-fenumion` gallery collects existing character portraits, place/map artwork, community art and public scene posters. Current collection: 226 distinct asset URLs. No new artwork or artist attribution is invented. Ececilia’s existing community credit and complete collection remain available. Images open at full size and every work links to its existing story. Search and collection filters use 24-item pages with lazy images and asynchronous decoding; protected records and embedded private media are excluded even after a keeper unlock.

The compact desktop rail shown in the user’s screenshot now persists at 78px across the Fenumion and Gedankin codices. The logo, world switches, guide button, icon spacing, colors and position stay consistent as readers navigate. Hover titles, accessible labels, focus states and contextual Fenumion active highlights accompany the icons. The art palette is available from Fenumion navigation and as a cross-world link in Gedankin. The rail scrolls independently on short screens. Mobile retains the familiar labeled drawer and full record trees.

Existing story pages, search, source access, world switching, vault authentication and mobile navigation remain available. App223, art-gallery1, shared layout10, Gedankin app26. Both worlds load the same latest shared style/font resources.

Chrome verified home, character, timeline, island, gallery and Gedankin pages; consistent rail geometry, tablet/mobile overflow, 226 unique public works, filters/search/pagination, full-size/story destinations, contextual navigation and exclusion of synthetic protected content after unlock. Existing NPC/character navigation regression checks passed. Desktop/mobile screenshots inspected; syntax and diff checks passed.

Regression: run `scripts/check_art_menu.cjs` against a local site preview with Playwright installed. Set `CODEX_BASE_URL` and `CHROME_PATH` if needed.

## Location opening · 14 October 2026

The Art of Fenumion now opens with a slow horizontal tour of up to sixteen existing public location scenes, above its title and original searchable collection. The selector gives different locations a turn before repeating another view; known atlas maps, map-labelled artwork and planning diagrams stay in the regular gallery. No new artwork, attribution, geography or lore is introduced.

Native horizontal scrolling moves at roughly 24 pixels per second with a seamless repeated track. Pause/resume control, hover and keyboard-focus pauses, touch/swipe interaction, reduced-motion default still view and offscreen/hidden-tab suspension keep the movement controllable. Duplicate tiles are hidden from assistive reading and removed from tab order while retaining pointer links to the same existing stories. Animation and observers are cleaned up on route changes.

Chrome checks passed for actual movement speed, pause/resume, hover pause, wrapping, reduced-motion stillness, responsive layout, valid story links, gallery search/filter preservation, synthetic private-art exclusion and route cleanup. Desktop/mobile screenshots inspected. Syntax and whitespace checks passed. Versions: art-gallery2, app228, shared layout12. Publication pending.

## Location-only large-image gallery · 14 October 2026

User requested the gallery beneath the scrolling opening contain large location images and no character section. The collector now includes only public location articles, their galleries and their location-scene posters. Location views precede maps/plans. Removed character portraits, community character art, non-location scenes, the collection selector and character/community wording from this page. Existing character dossiers and Ececilia’s dedicated collection remain unchanged.

The gallery uses one full-width column, natural image proportions with contained tall-image bounds, and twelve lazy-loaded works per page. Search, full-size image links, existing story links and the slow horizontal opening remain. Current collection: 106 unique public location assets.

Chrome verified location-only provenance, no character/category UI, large image widths, pagination/search, unchanged portrait/community records, protected exclusion and desktop/mobile overflow. Both screenshots inspected; no JavaScript errors. Syntax/diff checks passed. Art-gallery3/app229/layout13; publication pending.

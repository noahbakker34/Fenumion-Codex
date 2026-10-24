# Characters loading performance · 24 October 2026

The owner reports that Characters is very slow. A cold-cache Chrome profile with a four-times CPU slowdown finds the directory downloading full-size portraits and large CSS artwork: Wrath’s 6.4 MB GIF, the Guide tile’s 6.3 MB image, and several multi-megabyte illustrations. The dedicated directory already paginates 24 cards, while the homepage’s Characters tab creates the entire 257-person roster and eagerly preloads video metadata. Both entry points need the browsing fix; deferred article/search loading remains.

## Change

Both Characters views use static, proportionate WebP previews for public portraits; the directory’s Wrath header/sidebar illustration and small cross-Codex navigation tiles also use previews. The homepage Characters tab now paginates 24 cards, preserves its A–Z/reverse order and full roster, resets to the first page when switching/sorting, and leaves timeline/location views unchanged. Its off-screen character videos use preload=none. Original images, animations, individual character pages, dialogs and the art archive remain available at their existing quality. Full maps remain unchanged. Canonical records, identities, dates, relationships, quotes and every protected payload remain byte-identical.

A checked manifest covers 246 public artwork sources. The local Pillow generator preserves orientation and proportions, caps the long edge at 512 pixels without upscaling, uses the first frame for browsing animations and writes content-addressed output files. Original sources are never overwritten. Full-size fallback remains available if a mapping is absent; the coverage check catches missing/stale previews before publication. The catalog carries only the preview locations and dimensions. The CI check needs only Python’s standard library; it does not install Pillow or regenerate images. The new focused browser regression joins the existing cached harness. App265/catalog266; existing pagination styles are reused, with no stylesheet or lore changes.

## Measured comparison

Same local Chrome, viewport, cold cache, CPU slowdown and one-second post-readiness observation:

| Metric | Before | After |
|---|---:|---:|
| Initial images and CSS-initiated font downloads (decoded resource bytes) | 26,576,491 | 2,065,128 |
| All observed resources (decoded bytes) | 28,901,530 | 4,437,883 |
| Directory ready, single sample | 727 ms | 688 ms |
| Player filter plus Aerrow query, single sample | 241 ms | 205 ms |

Initial image/font bytes fall 92.2%, and total observed resource bytes fall 84.6%. These are local profiles, not promises of a particular connection’s load time. The main benefit is reduced transfer and animated-image work; the small timing difference is not evidence of a major JavaScript speedup. Generating all source previews reduces their aggregate encoded bytes from 115,224,597 to at most 8,060,272 (before any duplicate-output sharing). Raw CPU profiles and local measurement artifacts stay outside Git.

A separate homepage comparison with the same four-times CPU slowdown reduces character cards from 257 to 24 and browser descendant elements from 2,069 to 209. Three warm renders measure 220/229/210 ms before and 38/48/45 ms after (medians 220 → 45 ms). Cold readiness is 946 → 757 ms in one sample. This measures bounded rendering work, rather than claiming the same speed on every device.

## Verification

Original/output hashes, complete preview coverage, bounded dimensions and absence of stale preview assets pass. Content, calendar, portrait-evidence, encrypted-asset and syntax checks pass. Local Chrome verifies lightweight initial requests, one lazy directory body, no full-text search download, all 257 indexed people across every page, the 24-card cap, players/NPCs, aliases, empty results, original art on opening, keyboard focus, four widths and protected boundaries. Existing visual, reader/search and research suites pass. Desktop/mobile screenshots are inspected. Final content-addressed filenames receive the focused directory check again. The extended regression also visits every homepage character page, checks both sort directions, page resets, video preload behavior, other-view isolation and mobile fit. Existing timeline and date-specific homepage regressions pass. The earlier verification run is canceled before deployment when the homepage bottleneck is identified; the final source update combines both fixes. Publication and hosted/live receipt follow standing authorization.

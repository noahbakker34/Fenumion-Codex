# Codex performance · 11 October 2026

App221 preserves the existing content, routes, ranking, interface and source media files.

## Changes

- Cache normalized article/index text and names instead of processing the full archive on every search keystroke. Body changes invalidate their record cache, and rebuilding derived data after a vault update resets all search caches. Player-safe filtering still runs for each query.
- Cache quote extraction by source body, sharing it between search, quote groups and featured quotes. Source changes refresh it.
- Defer ambient video sources in eight rendered templates that supply poster fallbacks, including major hub backdrops, article heroes and location cards. Visible animation still loads normally. Reduced-motion and Save-Data readers avoid those MP4 requests; manual scene playback remains available.
- Evaluate whether a story scene is playing once per ambient observer batch.

No images or videos are recompressed or removed. No lore or vault payload changes.

## Evidence

Local headless Chrome, 1440px desktop and 390px mobile: 65 query/filter combinations produced identical result HTML and counts. Twenty warmed `Melian` searches had median elapsed time 41.5ms before and 1.8ms after (about 23× faster in this local check, not a general end-to-end loading benchmark). The reduced-motion timeline changed from one MP4 request to zero.

Normal decoded animation passed on home, timeline, atlas, factions, ethos, Shining Shores and Talan. Reduced-motion and Save-Data checks made zero MP4 requests across five representative routes. Explicit Aerrow scene playback, route cleanup, existing portrait and identity, responsive layout and protected empty records passed. Body/quote changes refresh search; a simulated authorized vault update refreshes search, and locking removes those results. No JavaScript errors. Desktop/mobile screenshots retained layout and artwork; differing pixels from animated thumbnails are not treated as exact image equality. Syntax and diff checks passed.

## Regression check

Start a local server serving `site/`, install Playwright in your development environment, then run:

```sh
CODEX_BASE_URL=http://127.0.0.1:8880/ node scripts/check_codex_efficiency.cjs
```

Set `CHROME_PATH` to use a system Chrome executable; otherwise Playwright uses its installed Chromium. The test uses only synthetic vault data in its isolated browser. It never updates the real vault.

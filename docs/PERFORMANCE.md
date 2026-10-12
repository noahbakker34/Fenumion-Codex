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


## Lossless mobile assets · 12 October 2026

The existing complete Cormorant Garamond and Vespasian fonts now have WOFF2 copies, preserving all glyphs, Unicode mappings, horizontal metrics, shaping and variation tables. Original TTF/OTF files and licenses remain available as CSS fallbacks. Font files shrink from 1,299,844 to 257,496 bytes (80.2%). The inline/logo-background PNG also has a pixel-identical lossless WebP copy: 512,044 to 398,566 bytes (22.2%); favicon/apple icon references retain the PNG. The large world-map JPEG was kept because a lossless WebP test was substantially larger. No media quality was reduced.

Slow-mobile trace: 390×844, 150ms latency, 200,000 bytes/s downstream, 4× CPU slowdown, cold browser. Local uncompressed server DOMContentLoaded measured 30.27s before and 26.32s after in single runs; this is diagnostic, not a statistical benchmark. The current production baseline was 11.22s because the CDN compresses text and fonts; live post-deployment measurement is recorded separately. Largest remaining costs include the main data bundle, full-size map and decorative banner. An architecture change to lazy-load all biographies was deliberately left out of this focused update.

Every glyph outline, mapping, metric and font layout/variation table was compared after conversion. Chrome confirmed identical text dimensions across both fonts and tested weights. The logo’s decoded RGBA pixels match exactly. Normal scene/background playback and reduced-motion behavior remain available.

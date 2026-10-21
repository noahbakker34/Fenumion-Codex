# Site-wide calendar, quote browser and Hellknights emblem · 21 October 2026

The owner requests Fenumion dates across the website, approves quote upgrades 1–5 only, and supplies the Hellknights faction emblem. The explicit clarification excludes adding quotations and favourites/copy/share tools. Standing authorization covers validation and publication.

## Calendar presentation

`site/fenumion-calendar.js` derives human-readable dates from the existing canonical month/year registry. Articles, source labels, quotations, directories, histories, dialogs, search results, notes, navigation and dynamically unlocked records share the formatter. The connected Gedankin pages use the same presentation while retaining their posting-date and unestablished in-world chronology qualifications. Their rules edition identifiers remain unchanged.

2024 remains Year 1, with January rollover. Known dates before the Gate within that year explicitly say “Year 1 · before the Final War”; earlier source years count backwards before the Final War without Year 0. Ranges, partial dates, approximate periods, report dates, source time zones and quest adjustments retain their recorded precision and meaning. A missing day is never supplied from a heading or sort key. Original source dates remain in canonical records and memory; source file names, URLs, section IDs, machine-readable timestamps and existing ISO routes retain their identities. Timeline year headings and the month key now use Fenumion labels throughout.

Search indexes accept both original and named dates. The atlas replaces its visible native date input with named day/month/year controls, validates leap days and preserves the original ISO route and cutoff behavior. Existing filters, date sorting and reset remain.

## Quote upgrades 1–5

The existing 38 selected lines and seven themes retain their exact wording, attribution, context, historical targets and original card anchors. A wider reading workspace, compact heading/navigation and optional collection introduction free space for readable cards and existing public speaker portraits.

The browser combines phrase search, speaker, theme, recording availability and theme/speaker/known-date ordering. Filter URLs survive reload. Undated attributions follow dated ones and remain explicitly undated. No date is borrowed from a nearby history.

“Read the moment” opens a keyboard-accessible dialog containing the approved context, known attribution date and connected profile/history. When the exact normalized line is present in an existing public history section, the dialog links to that section and its evidence references. Section-wide references are explicitly distinguished from an exact quotation-message locator. Incomplete locators remain labeled incomplete, with the existing collection references available. An event link requires a unique exact-line match. Context discovery does not load protected bodies, even in an unlocked session.

Existing recordings have explicit play/stop, elapsed/duration display, seeking and persistent voice volume. Opening the collection, hovering and focusing are silent by default. Hover playback is opt-in; explicit playback continues when pointer/focus leave the card. Voice playback pauses an active soundtrack and restores the same previously playing track when appropriate. Navigation, visibility changes and locking stop voices; rebuilding filters disposes old listeners and players. The four selected recorded lines use the existing six-file voice library without adding media.

## Supplied emblem and preservation

`site/assets/factions/hellknight-order.png` is the byte-identical 512×768 original supplied by the owner, SHA-256 `d59cfc08c7878190cd6f8d147b9d6cd7dd27db639c7a57c4d0c2d524e876b73e`. Only the Hellknight Order record’s image, alt text, caption and portrait layout are added, plus its dimensions entry. The faction page and directory share this asset. Its existing history and disbandment remain intact.

All 580 canonical histories, 2,053 section records, world/calendar metadata, 343 public events, 26 veiled stubs, source references, map coordinates and Gedankin source data are preserved. The complete private payload remains SHA-256 `fc5a3a19bffc3ec4fac3de3ecad827c969976991e7b0e5f4cc649583348369ba`. No raw transcript or private payload enters public Git.

## Verification and release

The release gate adds pure calendar checks and browser coverage for dates, atlas controls, quote filtering/context/audio and the supplied emblem. Coverage includes original-source immutability, rules-edition identifiers, preserved unknown dates, exact selection wording/anchors, no initial recording requests, focus, reload, mobile 390/320-pixel layouts, selector bounds within their fieldset and synthetic unlock/lock boundaries. Actual existing MP3 playback exercises seeking, volume and soundtrack pause; the local soundtrack fixture contains generated silence. Screenshots are saved and visually inspected. The complete existing reader/research/Rifts/timeline/visual/media suites remain in the release gate.

All local checks pass: canonical/build/calendar arithmetic, protected assets, syntax/whitespace, the new date and quote checks, existing reader/research/Rifts/timeline/visual regressions, and supported/unsupported protected and public Death media. A parsed preservation comparison and source-image byte comparison pass; desktop/mobile screenshots are inspected. Browser layout checks do not establish physical iPhone behavior; no iPhone is available.

Runtime: app/catalog255, common calendar1, quote browser/style1, reader4, reader-copy3, article-layout3, visual JS2/CSS3, perspectives/discoveries2, Gedankin runtime27. Styles175 and protected-media3 remain. Deployment and fresh anonymous live verification receipts follow the successful release.

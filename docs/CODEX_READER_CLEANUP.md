# Reader cleanup and bug scrub — 8 October 2026

Both public codices now prioritise the article over editorial apparatus.
Source ledgers and raw filename captions are no longer rendered. Research fields
remain in content records. Shared reader-copy rules remove file-processing
explanations, while keeping attributed beliefs, unresolved lore and exact quotes.

The Ethos retains all thirteen play principles; its appended editorial guide was
removed. Overview, atlas, people and timeline introductions were simplified.
The old quest-record URL still works, now showing named Adventures rather than
export/review statistics. Generated character and timeline dialog filler was
removed; substantive profiles and consequences remain. Related records,
relationship maps and location histories follow the main text. On narrow
screens, supporting facts follow the story rather than preceding it.

Functional fixes:
- Empty/unknown Fenumion fragments return to the world index instead of leaving
  the previous page visible.
- Gedankin quote-directory searches include group names; sort follows group,
  speaker and text, rather than reversing insertion order alone.
- Fenumion's slash shortcut respects selects and editable content.
- Gedankin's contents links honour reduced-motion settings.
- Missing facts no longer prevent Fenumion rendering.

Validation:
- 132 public Fenumion articles: internal links, source filename visibility,
  missing media, 390px overflow and runtime errors checked; no issues found.
- 149 Gedankin records: rendering, links, group coverage, quotations, search,
  and 320/390/768/1440px layout checks passed. Nine referenced media paths exist.
- Exact public quotation text compared before/after; unchanged.
- Magnus voice control tested inside its quote card; playback works.
- Empty/unknown routes, group filtering, sorting and mobile reading order tested.
- Papirak's protected route still shows the access gate; authentication and
  protected data handling were not modified.
- Mobile screenshots inspected for both worlds.

Raw transcripts, private ledgers and account identifiers were not added to the
published files. This is a reader/UI audit, not a claim to have rechecked every
lore statement or every browser/device.

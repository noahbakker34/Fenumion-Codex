# Restrained presentation polish · 10 November 2026

The owner asks for subtle improvements to make the site more professional. The existing fantasy lettering, colors, artwork and navigation remain the basis of the design. This pass changes presentation and fixes misleading previews; it adds no lore, record, asset or dependency.

## Presentation

- Reading paragraphs use a 72-character maximum instead of 78 and a slightly more open line height. Prose links have consistent underline spacing.
- Breadcrumbs use readable 12px interface lettering, sentence case and stronger secondary contrast. Summary fact labels also use 12px.
- Repetitive, noninteractive tag pills are hidden in hub headers. The actual navigation and filter controls remain.
- The character directory has a shorter introduction and a distinct “Browse the cast” section heading. Its prompt explains that a portrait opens a preview. The chronology overline becomes “Events across Fenumion,” avoiding an unsupported completeness claim.
- Character preview buttons distinguish a full profile, a related history and a character scene. Preview overlines and pet labels are simpler. Buttons retain their existing destinations and scene bookmarks.
- Evidence disclosures retain native keyboard behavior and wrap their labels at narrow widths. Their secondary text and preview buttons use consistent interface typography.

## Preview corrections

A person may be indexed through a shared history rather than a personal article. Previously, Quoth and others linked to the directory could inherit its “Living directory” status. Paco, indexed through Carmen, could inherit Carmen’s profile and relationships. Only a People article whose title matches the person’s name or established alias now supplies personal biography fields. Shared histories retain the selected person’s own summary and an explicitly labeled related-history link. Original portraits and the underlying records remain.

A delayed body response previously checked only the shared article ID. A slow Carmen response could consequently replace an already selected Paco preview. The guard now checks the selected person’s name as well as the route. No extra body or full-text request is needed for a shared-history preview.

The existing directory gate gains focused regressions for Quoth, Loistava, Paco, three aliased personal profiles and the delayed Carmen/Paco response. No extra workflow stage or dependency is introduced.

## Validation and boundaries

All 717 canonical content files retain their initial SHA-256 hashes. Catalog317/build `093f227f1a4f93ed` remains 662 records, 613 complete public bodies and 3,041 sections; all 269 people, 401 timeline objects, maps, quotes, media and private material remain untouched. Fenumion app275 and visual CSS15 replace app274 and visual CSS14. Shared reader-copy, Gedankin and the other runtime/style versions remain unchanged.

Content, runtime syntax, whitespace and calendar-display checks pass. The complete local directory, reader, visual chronicle and quote gates pass. These cover deferred bodies/search and lightweight artwork, all directory/homepage entries, pagination/filtering, original portraits, accurate shared previews, slow-response selection, reading and bookmark focus/reload, keyboard/skip navigation, source links, dates, quote wording and recordings, maps, synthetic authenticated overlays/relocking and empty protected stubs. Existing header checks cover locked and unlocked controls across eighteen widths.

Separate focused Chrome checks confirm the presentation copy, computed breadcrumb/fact size and paragraph rhythm, ordinary wheel scrolling without header clipping, preview fit and native evidence disclosure keyboard use at 1440px, 390px and 320px. No page script or public HTTP error is found. Eight desktop/mobile route pairs, two reading views and representative previews/disclosures are captured for before/after review. Authentication is simulated signed-out; physical-device and real-account login behavior are not claimed.

Private local proof and browser logs stay outside Git at `/Users/nbakker/.codex/visualizations/2026/10/16/01a14614-296d-7342-a94f-12b3a38500e4/professional-polish-2026-11-10`. Publication and production verification follow.

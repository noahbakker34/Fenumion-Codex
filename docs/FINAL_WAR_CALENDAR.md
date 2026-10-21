# Final War calendar · 21 October 2026

The owner explicitly chooses elapsed posting dates and authorizes aligning clear continuations with their earlier quest day. This supersedes the provisional 20 October rule against deriving later days from posting intervals. The first Called’s Gate arrival, recorded as 4 March 2024, remains Day 1. Count calendar days inclusively, with leap years respected.

## Named months and years · owner decision, 21 October 2026

The owner supplies twelve month names and explicitly chooses January 1 as the year rollover, with 2024 as Year 1. Days and month lengths follow the existing source calendar, including leap days. The first Gate arrival is **4, Month of War, Year 1** and remains total **Day 1 of the Final War**. The October Babel expedition is **18, Month of Death, Year 3**, total **Day 959**. A year begins on January 1; a Final War day still counts from the Gate arrival on 4 March. Dates before the Gate retain their explicit before-war qualification rather than receiving a Year 0.

| Source month | Fenumion month |
|---|---|
| January | Month of Talan |
| February | Month of Aionia |
| March | Month of War |
| April | Month of Namo'o |
| May | Month of Physisia |
| June | Month of Rebirth |
| July | Month of Cala |
| August | Month of Moirah |
| September | Month of Nuru |
| October | Month of Death |
| November | Month of the Wyrm |
| December | Month of Hope |

The canonical `timelineCalendar.months` registry owns the mapping and `yearNumbering` records the January 1 convention. A shared formatter derives named dates from the existing posting windows or their explicit quest-calendar adjustments. It does not rewrite any event metadata or assign new dates to unresolved events. Named dates appear on the main/home timelines, dialogs, character/place histories and consequence chains; total day counts and original source labels remain alongside them. Ranges, month-only approximations, report dates and before/by/after bounds retain their precision and attribution. Chronological browsing adds month headings within the existing year ordering; year headings show both the Final War year and the source year. Undated months stay unresolved; importance ordering keeps its existing importance groups. A collapsible key explains all twelve months.

Both event search and global timeline search understand the named dates. Explicit month/year queries target the calendar label, so “Month of Death Year 3” does not match an unrelated month merely because its summary mentions Death. Apostrophe variants of Namo'o are normalized. Private events use the same formatter after authorized unlock; their payload and public veiled stubs are unchanged.

App/catalog253, reader3, styles174. Local expanded timeline, reader and Rifts regressions pass, including all twelve mappings, January rollover, leap dates, ranges, qualifiers, adjusted dates, named-calendar search, Namo’o apostrophe normalization, year/month headings, both timeline surfaces and synthetic private unlock/lock. Desktop and 390-pixel named-event dialog screenshots were inspected. Canonical/build/arithmetic/encrypted-asset/syntax/whitespace checks pass. A parsed comparison confirms every event and all other world data is unchanged outside the calendar registry, and the complete private payload remains byte-identical. Publication receipt follows deployment.

## Data and reader behavior

326 of 343 complete public events receive day numbers or qualified day ranges; 17 retain unresolved dates. Fifteen full private events receive the same metadata inside the vault; fourteen remain unnumbered. Ancient sentinel sort keys, year-only labels, vague early/late periods and unresolved multi-stage dates never become exact days. Month-only dates become full-month approximate ranges. Before/by/after bounds retain their qualifiers. Pre-origin events display days before the Final War, never Day 0 or negative day labels. Reports and visions label the record’s day, without dating the older event described.

`dating.postingWindow` stores the stated source-calendar bounds and precision. `dating.finalWar` stores inclusive ordinal bounds and matching qualifiers. A source-backed `dating.calendarAdjustment` records the effective quest date, reason and exact source links separately from the original posting window. The origin retains legacy `finalWarDay: 1`. The root `timelineCalendar` records the origin date, owner decision and posting-date method. Canonical meta labels, sort fields, date-basis kinds, histories, ratings, regions and attributions are preserved. Date ordering applies the explicit adjusted quest date where present, while retaining source order within that day. Event dialogs expose both the explanation and source receipts. No event permalinks are added.

Recorded date labels retain their original timezone basis. The implementation does not claim a full archive-wide normalization of every old timestamp. Explicitly checked UTC/local alternatives can be reconciled; otherwise ranges remain ranges. Narrative backdating still governs the scene’s chronology.

## Explicit adjustments

| Event | Effective date / Final War day | Evidence and reason |
|---|---|---|
| Tower expedition rescue and retreat | 8 Sep 2026 / 919 | The 8 September bell-path decision continues directly into the 10–11 September approach and retreat. No new day or rest is established. `1546740703319695400`, `1546740931691151451`, `1547774173563322409`, `1547831322179797103`. |
| Harpy-cave investigation | 19 Sep 2026 / 930 | One expedition crosses local midnight. `1551041546726543581`, `1551088990306697237`. |
| Harpy-cave collapse | 19 Sep 2026 / 930 | On 26 September the narrator explicitly resumes the ongoing battle from the investigation. It does not establish a week of elapsed story time. `1553579801535844365`, `1553628750053118023`, `1553628937794625546`. |
| Petal Market questions | 29 Sep 2026 / 940 | One visit crosses local midnight. Earlier visits remain separate. `1554667303944331346`, `1554725102371864627`. |
| Viota’s monument | 9 Oct 2026 / 950 | Gathering, journey and monument encounter continue across local midnight. `1558291208327921725`, `1558341587682070598`, `1558346703713861714`. |
| Clockwork rift | 1 Apr 2025 / 394 | Continuous expedition and retreat; UTC midnight does not create a second New York day. `1356784259498770566`, `1356835720081309808`. |
| Ooze rift | 17 Apr 2025 / 410 | One encounter/closure across UTC midnight. `1362594104168419579`, `1362596680456736929`. |
| Abyssal rift | 3 Sep 2026 / 914 | Same continuous encounter as the creator-confirmed 3 September Cthulhu arrival. `1545218434596602037`, `1545260065345511508`, `1545261457724276846`. |
| Melian abduction investigation | 4 Jun 2025 / 458 | The 5 June source post expressly backdates the investigation to the previous day. The posting window separately records 5 June. `1380213378869628993`. |
| Babel salamander ambush, apparent-monster mist and Death’s offer (three events) | 18 Oct 2026 / 959 | One continuous expedition, entirely 18 October in New York, crossing into 19 October UTC. `1561530428257472644`, `1561550834787950674`, `1561572671660232718`, `1561588351830589551`. |

These are twelve adjusted event records. Related topics alone do not justify combining quests: the Petal Market and Viota visits retain separate opening dates. No missing long rest, travel duration or elapsed day is invented. The quest’s uneven river-time experience is not converted into a universal calendar rule.

## Review scope and source identity

This is a calendar review, not a fresh exhaustive reading of every corpus. The existing bounded quest, Rifts and Babel reviews supply context; this pass checks the continuation openings, resumptions and closing anchors used above, including the original main quest’s 7 September travel/forest sequence. Embedded editorial instructions, account metadata and raw transcript text are not copied into the site or Git.

- Main quest JSON: SHA-256 `109d61f559cc3dd5e4a072cf206c885e934ac197c3dcd001d17dcb050c2b03d6`.
- Quest continuation: SHA-256 `2c7aab84c6482f7d8590d46cab2f637eb638e3a6232713118a5c934ddb0182d0`.
- Rifts part 1: SHA-256 `028dc38cb855c80c44c30fb3382664143960b611e018a0db4a90c46bd17e3400`; part 2: `ade33ee7ec121ea84159006838b606d4f540f91d656a7d6a7de06626a7500faf`.
- Babel October source scope and hashes: `BABEL_OCTOBER_QUEST_REVIEW.md`.

## Verification

Python checks cover inclusive arithmetic, leap years, ranges, pre-origin ordinals, source-label parsing, unresolved placeholders and persisted adjustment integrity. Canonical validation recomputes all public ordinals; the private validator recomputes all private ordinals. Browser checks cover day labels, ranges/bounds, pre-war labels, reports, all twelve adjustments, retained source dates, day search, adjusted ordering, source immutability, unchanged event routes, filters and desktop/mobile layouts. All other parsed public-world fields and private-payload values compare equal to the prior release after excluding calendar metadata; protected public stubs remain unchanged.

App/catalog251, reader3, styles173. Local timeline, reader, research-journey and Rifts regressions pass. Desktop and 390/320-pixel controls and 390-pixel event-dialog screenshots were inspected; the adjusted date, original source window and explanation remain readable. All 26 distinct calendar-adjustment receipts match primary exports and the recorded source hashes match. Canonical content, encrypted assets, arithmetic, build, syntax and whitespace checks pass. Publication and live verification receipts follow deployment.


Public release `7800913ce629a1e96e083af30e831c1784fbdff4` deployed successfully in Pages run `39626246098`. All hosted gates pass, including browser and media regressions. After deployment, thirteen live runtime/catalog/search/record files match the tested build. Fresh anonymous Chrome checks pass for 326 calendar labels, twelve adjustments, Day 930/959 continuity, source receipts, day search, filters, histories and mobile layout. Real vault access returns 401/signin; protected bodies and stub metadata remain absent. Pages package: 800,967,363 bytes. Documentation receipts skip CI.

The matching private calendar upload and complete payload read-back comparison also pass. All non-calendar values remain preserved.

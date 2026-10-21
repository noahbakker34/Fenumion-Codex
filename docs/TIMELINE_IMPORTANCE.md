# Timeline importance · 20 October 2026

The owner requests five ordered importance levels and reader control over what is displayed. Each complete event now has an explicit integer `importance` in its canonical timeline record. The scale describes the documented reach of the event’s consequences; it is separate from evidence certainty, personal value and character prominence.

| Level | Name | Scope |
|---|---|---|
| 1 | Relational | An individual life, close bonds or a small company |
| 2 | Local | A settlement, institution or immediate community |
| 3 | Regional | An island, region or major regional power |
| 4 | Interregional | Connections or consequences across regions and realms |
| 5 | World Changing | The world’s structure, continuity or balance |

## Assignment discipline

All 343 public events have explicit reviewed values: 73 Relational, 148 Local, 89 Regional, 32 Interregional and one World Changing. A personal death or return can be Relational without being trivial; a settlement’s survival can be Local without being unimportant. Ratings can be revised as documented consequences become established.

Quest outcomes and narrator rulings take precedence over incompatible ambient claims. Message volume, a participant’s fame, cosmic terminology, the title of a scene, a proposed plan or an unproven theory do not establish wider consequences. An attributed account stays attributed. For example, Wrath’s defeat and Gael’s ecological recovery are Regional; the documented rift crossings are Interregional; Cthulhu’s established entry into Fenumion is World Changing. Gartina’s Miracle remains a personal restoration rather than receiving a global rating from its title.

The classification adds no historical claims: every existing title, date, sort key, summary, consequence, participant, location and source qualification is preserved. The public index’s veiled stubs have no importance metadata. Full private events receive the same integer field only in the authenticated vault payload. No raw source files or private event titles are introduced into public Git by this change.

## Reader behavior

Both Narrative History and the home page’s Timeline tab offer Importance, Show and Order controls. All levels is the default. Players may show the selected level and above, or only that level. The order can be oldest, newest, highest importance or lowest importance first. Ties in importance use chronology and title for stable ordering. Date order groups by year so overlapping named eras cannot break chronological order; the era filters retain their original names.

Narrative History combines importance with era, text and person filters. Its URL preserves these choices through sharing, reload and Back. Reset clears the filters while retaining an explicit person selection; Show all events clears the person too. Event dialogs display the rating and scope, and previous/next stay within the currently displayed results. When opened from another dossier, event navigation uses the complete readable chronology.

New complete public events must have an integer from 1 to 5; the content validator rejects missing values and metadata on protected stubs. The private payload validator enforces the same values. Runtime fallback keeps an older, unrated private event visible under All levels and sorts it after rated events in importance order. Selecting a numbered threshold excludes unrated events.

## Verification

`scripts/check_timeline.cjs` exercises all five exact categories and minimum thresholds, both directions of global date/importance ordering, filtered dialog navigation, combined person/era/search choices, empty/reset states, shared routes/reload/Back, invalid URL handling, desktop and 390/320-pixel layouts, keyboard focus, the home timeline and synthetic vault unlock/lock transitions. It uses no real private payload or transcript. The Pages workflow includes it alongside the existing reader, research, Rifts and media regressions.

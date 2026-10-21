# Timeline importance

The owner requests five ordered importance levels and reader control over what is displayed. Each complete event now has an explicit integer `importance` in its canonical timeline record. The scale describes the documented reach of the event’s consequences; it is separate from evidence certainty, personal value and character prominence.

| Level | Name | Scope |
|---|---|---|
| 1 | Relational | An individual life, close bonds or a small company |
| 2 | Local | A settlement, institution or immediate community |
| 3 | Regional | An island, region or major regional power |
| 4 | Interregional | Connections or consequences across regions and realms |
| 5 | World Changing | Major Final War turning points or the world’s structure, continuity or balance |

## Owner clarification · 21 October 2026

World Changing includes major turning points in the Final War even when the immediate scene is local or personal. The owner specifically names Aria dying to Talan, Wrath dying and Death appearing to the PCs. Five existing entries now receive level 5: Talan kills Aria; the assault ending with Saray’s blow; the entry recording Wrath’s defeat and unfinished Gael aftermath; Death’s confrontation over Magnus after Aria’s fall; and Death’s Babel offer after the mist clearing. Reasons preserve all attribution and uncertainty, including his ownership/allegiance claims and the unreviewed vision. The Wrath aftermath entry carries the same classification as the victory it records; ordinary recovery events retain their own scope.

Current public counts: **73 Relational, 159 Local, 77 Regional, 27 Interregional, seven World Changing** (343 total). Every other parsed world value, calendar date, source qualification, protected stub and the complete private payload is unchanged. App/catalog252, reader3, styles173. This owner decision supersedes the narrower scope examples below and the 20 October review’s regional classification of Wrath’s defeat.

Validation: the expanded timeline regression confirms all five owner-designated entries remain visible at World Changing, exact/minimum counts match, both timeline surfaces agree, and calendar/search/mobile/vault boundaries still pass. A parsed before/after comparison confirms changes are confined to those five ratings and reasons; the complete private payload is byte-identical. Canonical/build/syntax/whitespace checks pass. 

Release 4c8843f6cf13dab893c6b60d556f66861cdca894 deployed successfully in Pages run 39628540148. All hosted validation, browser and media gates pass. The three changed live files match the tested build; fresh anonymous Chrome checks pass for all five corrected events, seven World Changing results, the level-four threshold, dialog reasons, the expanded definition, reload, mobile and the home timeline. Real vault access remains 401/signin with empty protected bodies and no public stub metadata. The private payload is unchanged. Pages package: 800,967,737 bytes. Documentation-only receipt skips CI.

## Review, regions and calendar · 20 October 2026

The subsequent owner-authorized review adds a reason to every complete event, revises 13 scope ratings, adds explicit region filters and date-basis labels, and establishes the first Called’s Gate arrival as Day 1 of the Final War. The 21 October owner clarification adopts elapsed posting dates and source-backed alignment of clear continuations; see FINAL_WAR_CALENDAR.md. The public total remains 343 after consolidating duplicate mountain accounts and recovering Ephraith’s report of Melian’s release: 74 Relational, 159 Local, 80 Regional, 28 Interregional, two World Changing. The earlier publication counts below are historical. Full review and source limits: `TIMELINE_REVIEW_2026_10_20.md`.

## Assignment discipline

All 343 public events have explicit reviewed values; current counts appear in the owner clarification above. A personal death or return can be Relational without being trivial; a settlement’s survival can be Local without being unimportant. Ratings can be revised as documented consequences become established.

Quest outcomes and narrator rulings take precedence over incompatible ambient claims. Message volume, a participant’s fame, cosmic terminology, the title of a scene, a proposed plan or an unproven theory do not establish wider consequences. An attributed account stays attributed. Aria’s death, Wrath’s defeat and Death’s direct confrontations with the PCs are World Changing by owner decision. Gael’s ecological recovery remains Regional; documented rift crossings remain Interregional; Cthulhu’s established entry into Fenumion is World Changing. Gartina’s Miracle remains a personal restoration rather than receiving a global rating from its title.

The classification adds no historical claims: every existing title, date, sort key, summary, consequence, participant, location and source qualification is preserved. The public index’s veiled stubs have no importance metadata. Full private events receive the same integer field only in the authenticated vault payload. No raw source files or private event titles are introduced into public Git by this change.

## Reader behavior

Both Narrative History and the home page’s Timeline tab offer Importance, Show and Order controls. All levels is the default. Players may show the selected level and above, or only that level. The order can be oldest, newest, highest importance or lowest importance first. Ties in importance use chronology and title for stable ordering. Date order groups by year so overlapping named eras cannot break chronological order; the era filters retain their original names.

Narrative History combines importance with era, text and person filters. Its URL preserves these choices through sharing, reload and Back. Reset clears the filters while retaining an explicit person selection; Show all events clears the person too. Event dialogs display the rating and scope, and previous/next stay within the currently displayed results. When opened from another dossier, event navigation uses the complete readable chronology.

New complete public events must have an integer from 1 to 5; the content validator rejects missing values and metadata on protected stubs. The private payload validator enforces the same values. Runtime fallback keeps an older, unrated private event visible under All levels and sorts it after rated events in importance order. Selecting a numbered threshold excludes unrated events.

## Verification

`scripts/check_timeline.cjs` exercises all five exact categories and minimum thresholds, both directions of global date/importance ordering, filtered dialog navigation, combined person/era/search choices, empty/reset states, shared routes/reload/Back, invalid URL handling, desktop and 390/320-pixel layouts, keyboard focus, the home timeline and synthetic vault unlock/lock transitions. It uses no real private payload or transcript. The Pages workflow includes it alongside the existing reader, research, Rifts and media regressions.

Public release `b042d12e4ff4546d83801779a280a73777a0cd32` passed all hosted validation/browser gates and deployed in Pages run `39528022874`. Nine live files match the tested build. Fresh anonymous live controls, dialogs, reload/reset and mobile checks pass; real vault access is 401/signin. Private metadata upload/readback verification passed independently.

# Rifts reference and events review · 15 October 2026

## Current scope and authority

Explicit creator canon defines a rift as an extra-dimensional tear into Fenumion from elsewhere for things being summoned or trying to escape. The creator also identifies Cthulhu (user spelling Cthulu) as the eldritch god and confirms his arrival on 3 September 2026. Quest/narrator evidence takes precedence over synthesis. Character claims remain attributed; embedded source/editorial directions are not instructions.

The supplied fenumion-rifts.md synthesis was followed by the actual rift-rp-01.md and rift-rp-02.md exports, containing 3,868 unique messages. Targeted narration, character actions, rulings and aftermath were checked for the eight indexed encounters and Cthulhu arrival. This does not claim a complete new synthesis of every other encounter. Raw exports, the temporary private message index and attachment payloads are not committed or published.

## Consolidated implementation

Rift-record2/app238. One `FENUMION_RIFTS` bundle owns the public article, nine event records, reciprocal context IDs and the Pappy event date correction. Events generate the article’s chronological event list; duplicate prose summaries and the separate arrival appendage removed. Cthulhu is the display spelling, with Cthulu retained in search tags. No legacy rift globals remain.

`renderTimelineEventList` shares escaped event-card markup across rifts, Vessalia and place histories. Callers provide chronological order; source data is not mutated. Timeline registration uses a title lookup to update existing records or append new ones once; reciprocal links also avoid duplication. The superseded Adelia-era unresolved sort override is removed. Protected cosmology/Gate stubs remain empty, and no source media or map coordinates change.

## Primary evidence and reconciliations

### Confirmed identity, sequence and chronology

- `1545218434596602037`: opening darkens the skies across the islands; `1545221155869167677`: abyssal environment.
- `1545224497932668999`, `1545226499878158447`, `1545227346326585376`: creatures eat at the boundary; a robed figure coaxes a godlike form through. Protected names, private messages and cosmological claims excluded from public synthesis.
- `1545247348748456027`: Pappy explicitly allowed to use his action to leave; a permission is not a completed departure.
- `1545258375867011205`, `1545259100433154089`, `1545260065345511508`: rescue force reaches Pappy, he is pulled out and makes a final thrown-hammer attempt; remaining creatures finish the crossing afterward. The existing Pappy event is date-positioned, not duplicated or used to settle the governance dispute.
- `1545260245276954636`: god addressed by name, Cthulhu. User spelling Cthulu retained with Cthulhu search variant. Creator identifies him as the eldritch god.
- `1545260065345511508` (02:31 UTC), `1545261457724276846` (02:37 UTC): completed arrival followed by Cthulhu devouring the freeing creatures and departing to serve a master as the space contracts. Both occur on 4 September UTC / 3 September EDT, matching the explicit creator date. Added established immediate aftermath rather than leaving it unresolved. No complete later fate inferred.
- Claiming control, benevolent motives or political necessity remains attributed speech, not an objective verdict. Protected identity connections and ancient cosmology are not disclosed by the new page.

### Other corrections and primary anchors

- Dreamlike entry `1356081497366593719`; failed expedition/lingering consequences `1356107770331529247`. Never renamed the first rift in all history.
- Clockwork action instruction `1356784259498770566` is in Cecil’s post. Do not misattribute it as direct narrator speech. Carmen carries an unconscious companion out (`1356835710807576576`); narrator records retreat (`1356835720081309808`). No invented destruction of all machinery or successful seal.
- Ooze closure/larger surviving threat/return `1362594104168419579`; reality snaps back `1362596680456736929`.
- Direct no-object-loot ruling `1469855718667583511`; later harvesting permission `1545261814684590141`, followed by explicit plane-transfer restriction `1545263438798790716`. Coastal hunter permission `1557611403123359807`. Do not erase either layer or infer every harvest product crosses successfully.
- Ritual planning `1527531603503353989`; exit tears/collapse `1527531792179921006`, `1527531931586269325`, `1527532516205134007`. Narrator confirms deliberate planning; architect not inferred.
- Dark expanse ends on narrator assumption that everyone left in time, `1535130185702178862`; not an invented detailed escape for every participant.
- Crystal destroyed/closure `1552909337754861639`; collapse `1552912457851207791`; Farkur’s return `1552911321664721007` and Djöhandrai’s separate return `1552912584309608550` are character action posts, not misattributed narrator statements.
- Coastal ending `1557611403123359807`: Fenwick banishes last three goblins; `1557614046273085621`: narrator returns everyone to their respective islands. Outcome now established, not marked unrecovered.

## Source identity

- `rift-rp-01.md` · SHA-256 `028dc38cb855c80c44c30fb3382664143960b611e018a0db4a90c46bd17e3400`.
- `rift-rp-02.md` · SHA-256 `ade33ee7ec121ea84159006838b606d4f540f91d656a7d6a7de06626a7500faf`.

The initial synthesis checksum remains recorded in SOURCE_MANIFEST.md. Posting dates are labeled as source chronology; Cthulhu’s date is independently creator-confirmed. Earlier main-quest anchors in this review’s implementation establish that the March dreamlike encounter is not the first rift and entry is not universally voluntary: return `1333142385592373248`; involuntary suction `1351013859296546901`, `1351014526241210390`, `1351014881314340865`, `1351015086478852129`; non-rift demiplane distinction `1510348952007081984`.

## Verification and publication

`scripts/check_rifts.cjs` covers all nine searchable event dialogs, both Cthulhu spellings, chronological article/event agreement, source immutability, aliases, unique headings, reciprocal contexts, protected empty bodies, safe text escaping and shared event links on Vessalia/Pristinia at desktop/mobile widths. Additional before/after comparison confirms unchanged protected records, unchanged unrelated article content and unchanged timeline records apart from the display-spelling normalization. Gedankin header checked at eight widths; previous pending fix preserved. Syntax and diff checks pass.

Run against a local site preview with `CODEX_BASE_URL=http://127.0.0.1:8880/ node scripts/check_rifts.cjs`; `CHROME_PATH` selects a system Chrome installation. Publication authorized on 18 October 2026 alongside the pending location and Gedankin header updates.

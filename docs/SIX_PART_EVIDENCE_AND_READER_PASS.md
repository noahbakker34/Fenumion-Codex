# Evidence, campaign history and reader review · 17 October 2026

All work is local and unpublished. The user requested the six proposed follow-on passes and offered help recovering sources. Supplied notes and their editorial imperatives remain source material. Explicit user canon and established quest outcomes govern; statements inside a quest still retain their speakers.

## 1. Recover the inherited references

Recovered all 32 missing article-reference lists. The recovery ledger is `content/reference/source-recovery.json`; the previous missing-list exceptions in `known-gaps.json` are now empty. Scope matters: fourteen rules references, five testimony records, five map records, four navigation guides, three mixed histories and one quest-backed record have different kinds of evidence. A navigation guide cites its linked histories and cannot independently corroborate them. A map establishes its labels and relative depiction, not safe travel at every date.

Read both original Google rules sheets in bounded ranges after metadata checks. All 108 boon descriptions and the checked epic-advancement cells matched the existing canonical reference after whitespace/entity normalization. No game rule was changed. The source IDs and ranges are in the per-record recovery ledger. Original source sheets:

- [Blessings source](https://docs.google.com/spreadsheets/d/1Qk8H3SMq7-8_raesIkaPdNoq4XqgNsJpZRStwlg278o/edit)
- [Epic advancement source](https://docs.google.com/spreadsheets/d/1ACa6vnVEZLX_065nDRO7fkkBKk9BwEhpFKM2dYFtqK4/edit)

The bot-reader pointer led to the original 33-message location export. Its full recovery, hash, limits and resulting Hope scale correction are documented in `PLAYER_LOCATION_NOTES_REVIEW.md`. The full local Story Notes archive was also located and privately indexed; selected entries were checked. Neither archive was copied to Git. Private search indexes and bounded readbacks remain in `/tmp`.

## 2. Reconstruct selected people through scenes

Added 49 scene entries across 19 existing identities: Nienna, Adelia, Elenia, Gartina, Quake, Saray, Akarian, Ryvyt, Fenwick, Tobias, Melian, Scribonia, Wren, Severina, Sildithas, Coralyn, Rolen, Bowene and Magnus. Each entry states the observed action or attributed statement, knowledge at that stage, consequence, remaining limit and original receipt. The review ledger contains 67 distinct message anchors. New sequence dates are normalized UTC source-posting dates, not in-world dates. No rank or current living status is inferred from message volume or a later appearance.

The sequences are selected longitudinal bridges, not a claim that every appearance has been reconstructed. They retain quieter contributions: Saray’s decisive final shot, Quake’s protection and self-account of failed rescue, Rolen’s conditional recovery plan, Krone’s material help and Gartina’s choice to stay with refugees. Existing later outcomes, portraits and protected boundaries remain intact.

## 3. Review consequential claims

Added **Claims, Receipts & Limits** (`#claim-review`): 28 selected death/return, founding, leadership, war, restoration, chronology and geography conclusions. Each distinguishes checked original receipts from retained public synthesis. Corrections include:

- Bowene is already High Lord in August, before Aria’s death. The timeline no longer dates his first title to that death. His accession mechanism remains unknown.
- The exile receipt explicitly names Elenia, Aravil and Olokun; it does not name Magnus. Exact jurisdiction and full rationale remain open.
- Vysaeth’s journal explanation remains his self-account, not an independent moral verdict. Disposing of lich remains does not establish permanent death.
- Nienna’s July loss/return and September sacrifice remain separate. The Hallowing and December restoration retain collective labor.
- Kasiri’s contest victory, peer confidence in Severina and a later leadership decision remain distinct. A collaboration proposal does not merge Vanguard and Veilguard.
- The Silver Spire notice has an explicit July edit on its January post. Its present wording cannot date the name or opening to January.
- Vital Chain has a checked 15 January proposal stage; conditional branches are not completed institutions.

No new divine mechanism, concealed origin, identity merger, founder hierarchy or resurrection explanation was supplied to close a gap.

## 4. Expand the four campaigns

Four new histories connect regional events through participants’ changing knowledge and obligations:

- `#pristinia-campaign`: naming and arrival, distributed wall work, siege, disappearance and civic aftermath.
- `#gael-campaign`: expedition, living ground, distinct losses, Hallowing, Wrath’s defeat and the keeping of restored land.
- `#zarathis-campaign`: public memory, council choices, Aria’s death and the civic procedures and exile that follow.
- `#voraketh-campaign`: changing models, crossing proposals, surviving knowledge and investigation without a final explanation.

Each has four chapters with scoped evidence and links into existing histories. Regional articles, Connected Histories and Narrative History expose the routes. They connect established accounts and newly checked scenes without assigning the same evidence strength to every paragraph.

## 5. Make unresolved work useful

The Unresolved Record now exposes 23 questions with a known basis, missing evidence and next source to check. Region and text filters let readers follow a particular investigation. Earlier cosmology questions and the September cave uncertainties remain. A resolution-history section records which old gaps have narrowed rather than silently deleting their former uncertainty.

The queue includes Nienna’s earlier return, Elenia’s post-Wrath return, forest permanence, Hope’s incompatible dimensions, Bowene’s accession and exile jurisdiction, Aria’s sibling contradiction, the Miracle’s complete primary sequence, Common Man fire, Melian’s captivity transition, Eovar’s wider chronology, Silver Spire opening, Vital Chain branches, Knights/Veilguard transitions, Thorn’s return, Anky’s fatal expedition, distinct Voraketh mechanisms/identities, Dungeon restoration and quieter personal histories. No question is represented as answered merely because a plausible model exists.

## 6. Read the site as a visitor

References now render safe clickable primary/map/internal links. Research questions retain the chapter, search and deep-link system. Keyboard search supports arrow navigation to results and mobile Tab containment; closing returns focus to a visible trigger. Article navigation focuses its heading, and history navigation captures the reading position before any layout changes and restores it on return. Dimensions for 264 images already referenced by public records reserve their space before decoding; no artwork is altered. Choosing a research chapter hidden by a filter clears the filter before revealing it.

The slow-network audit exposed a first-search wait. Catalog/name matches now appear while full text loads; the status says that results are partial. Completion invalidates both relevant caches and refines results with full-text section matches. Failure keeps catalog results and offers retry. Clearing or replacing the query invalidates pending completion.

### Controlled mobile diagnostic

One cold run per environment after the final search change. Chrome, 390 × 844, reduced motion, 150 ms latency, 200 KiB/s download, CPU throttled ×4, cache disabled, authentication mocked unauthorized. The local preview used gzip for comparable compression; production was the currently deployed older implementation at `https://fenumion.com/#fenwick`. Times include each environment’s delivery behavior, so these are diagnostic observations, not a guaranteed deployment speedup or a field percentile.

| Measure | Local gzip preview | Current production |
|---|---:|---:|
| Initial script/CSS/article-data files | 13 | 42 |
| Initial encoded body bytes for those files | 329,991 | 804,664 |
| Heading available | 5.78 s | 10.72 s |
| First search result | 0.17 s | 0.29 s |
| Full-text search ready | 5.57 s | 0.31 s |
| Subsequent search | 0.05 s | 0.04 s |

Production loads its text upfront; the preview defers it. The initial byte count is about 59% lower, while a cold full-text query still needs the deferred index. First catalog results and full-text completion are intentionally reported separately. Images/fonts/media are outside these byte totals. An earlier uncompressed local run was slower; it is not used to claim a comparable production improvement. No production write, deployment or authentication change occurred.

## Verification

Canonical validation covers 572 records and 1,932 section metadata entries with no inherited missing reference lists. Review ledgers require valid public targets, receipts/bases and explicit limits; question IDs must exist in the public queue. Browser checks cover all 19 sequences, four campaigns, 28 claim cards, 23 research questions/filters, clickable references, exact-section search, progressive cold search, keyboard result selection, mobile focus/layout and reading-position history. The pre-existing reader suite also covers failed-load retry, stale/canceled searches, lazy bodies, supplemental indexes, atlas dates, media preservation and locked records. The reader, research journeys, identity merges, NPC navigation, art/menu and media-efficiency suites all passed in isolated sequential runs. Workflow YAML parsing, syntax, whitespace, deterministic generation and the 799.6 MB Pages-package guard passed. Desktop research and mobile scene screenshots were visually inspected. CI is configured but has not run on GitHub because nothing has been pushed.

Remaining research is the queue itself, not a claim of exhaustive verification of the 108,619-message quest archive or all 1,932 sections.

# Canonical public content

Each subject has one canonical record in `records/<article-id>.json`. The record owns its narrative, media references, facts, source list, summary and section evidence. Region, person and event directories in `reference/world.json` point to those IDs; they are indexes, not additional biographies. `reference/consequences.json` connects existing timeline entries without rewriting them.

This replaces the historical browser patch modules. Their public output was migrated after reader-copy normalization. All 566 existing article bodies and their artwork/video metadata were compared byte-for-byte before the migration; no lore or media was discarded. Existing source documents remain outside the repository where required. Raw transcript imports and keeper payloads do not belong here.

## Editing

1. Edit the subject’s record. Keep the ID stable. Update `facts` and `brief.status` together; keep historical status distinct from current certainty. Fifteen major dossiers have hand-selected section links in `brief.actions`; other summaries expose selected dated events without ranking their importance.
2. Preserve the body’s section IDs. Each H2 has corresponding `sections` metadata: title, reading chapter and evidence explanation. `mixed` is the conservative default. Use `quest` or `canon` only after checking the evidence; every stronger label needs sources. A claim inside a quest keeps its speaker.
3. Update directory metadata, aliases, source manifest and connected histories when affected. Posting dates are not automatically world dates. A temporal atlas selection filters dated records, not inferred place existence or reconstruction of map geometry.
4. Run `python3 scripts/check_content.py` and `python3 scripts/build_codex.py`. Serve `site/` after building. Generated `site/data/` is ignored and rebuilt in CI before packaging.
5. For reading/UI changes, run `scripts/check_reader.cjs` with Playwright installed and a local preview. Optional environment variables: `NODE_PATH`, `CHROME_PATH`, `CODEX_BASE_URL`.

Do not edit generated JSON or add a new runtime content-patching module. A record fetch owns that article body; search reads a separate deferred section index. Hashed output names prevent a cached catalog from accidentally pairing with another article version. Old versions are removed from the built output, so a reader with an obsolete catalog can retry after a refresh.

Protected scene descriptors, keys, playlists and posters belong only to the private authenticated payload. Public protected records must not acquire scene metadata. Long recordings can use opaque encrypted HLS objects, with on-demand playback and cleanup on locking/navigation. See `docs/PROTECTED_VIDEO.md`; the public test fixture is generated media and contains no campaign material.

## Known reference gaps

The 32 inherited missing article-reference lists have been recovered. `reference/source-recovery.json` records the source type and exact scope of each recovery; `reference/known-gaps.json` is now empty. A recovered reference list is not certification of every claim in an article. Maps, rules references and navigation retain their own evidence kinds. The validator fails new missing references, unknown destinations, duplicate identities, incompatible summary status, missing evidence explanations and protected public bodies.

The atlas deliberately omits partial/uncertain dates from exact-date queries. “No matching record” is not evidence that a place did not yet exist. Map pins and geometry remain unchanged.

## Focused evidence and research records

`reference/scene-review.json` records 87 selected scene conclusions across 28 people, each with message receipts and an explicit limit. Public scene narratives live in their canonical biographies. `reference/claim-review.json` tracks 34 high-impact conclusions and distinguishes newly checked receipts from retained synthesis. `reference/research-queue.json` contains 25 questions with known evidence, missing evidence and the next source to check; the Unresolved Record exposes each question. Keep these review ledgers and their public passages consistent. They are selected audits, not copies of raw sources or claims of archive exhaustion.

Four campaign histories connect Pristinia, Gael, Zarathis and Voraketh to those people, receipts and remaining questions. Source dates in the new sequences are UTC posting dates; earlier narratives may retain their explicitly identified local posting dates. Do not mistake the display difference for two events.

The 18 October recovery and Nienna follow-up now have 57 scene entries across 21 people and 29 claim reviews. Five research questions have explicit resolutions; former uncertainty is retained as history. `reference/canon-clarifications.json` records the owner’s Aria decisions and guards against importing the historical analogy as a fictional constitution. Return/death source dates and remaining limits: `docs/SEVEN_ANSWERS_SOURCE_RECONCILIATION.md`.

The subsequent direct-source five-person pass brings the local content to 578 records and 1,986 sections, with 75 scene entries across 25 people and 30 claim reviews. Existing Alioth directory identity now opens her individual record; the shared Casimir/Alioth history remains available. Source scope and remaining limits: `docs/FIVE_PERSON_RAW_SOURCE_REVIEW.md`.

The October Babel continuation brings the local content to 578 records and 2,003 sections, with 87 scenes across 28 people, 34 claims and 25 questions. The two 484-message packets duplicate one another and count as one source. Mist tests, distinct rescue contributions, continued Abyss activity and an attributed later Aria claim preserve discovery order and uncertainty. Scope and receipts: `docs/BABEL_OCTOBER_QUEST_REVIEW.md`.

# Biography reading order, regional hubs and publication efficiency

Owner authorization, 23 October 2026: apply the proposed clearer biography layout to Olokun, Elenia and Aria; strengthen regional pages as hubs; make the GitHub publication stage more efficient. Existing standing publication authorization applies.

## Reading changes

- Olokun and Elenia each have seven continuous chapters; Aria has six. Four selected existing facts introduce each person. Numbered chapter navigation and the contents panel follow this reading order.
- Canonical section text, references and evidence panels stay attached to their original anchors. Scene sequences, interactive relationship maps and source material remain available below the main narrative. Legacy section links reveal their destination and focus it, including nested appendices.
- Named relationship cards use existing relationship histories. Elenia's original named list keeps its wording and gains direct links. The layout does not infer new ties or rank testimony as fact.
- Aria's cultural authority remains distinct from Bowene's office; her recorded death remains distinct from Dumuzi's later unverified claim. Elenia's different returns and resurrection actions remain separate.
- One bounded follow-up to the immersive-copy pass: Elenia's mountain section uses “The mountain assault” instead of a Biblical comparison. The short narrator quotation repeating that comparison is omitted. The surrounding event, section destination, dating and evidence references remain intact.

Reading plans live in the three canonical records, separately from their original section metadata. The common reader applies them at render time; Bowene's existing layout continues working without a plan.

## Regional organization

Prima, Gael, Fein Uaill, Voraketh and Babel-Ashur gain an overview with regional map and timeline links, child places, six existing people, connected quest histories and four recent dated changes. Native disclosures retain the complete previous regional history and references. People are labeled as appearing in these histories, without inventing present residence or birthplace.

Place cards derive from the existing hierarchy. Eovar and Pristinia explicitly remain within Prima. Existing shared-history places open the regional history rather than looping back to the overview; an eager `hasRegionHub` flag supports this before the lazy regional body has loaded. No new person, place, coordinate, event or canon claim is created. Year-only/unresolved events remain in the full history and timeline rather than being assigned an artificial latest day. Compact event cards preserve available dating qualifiers; dialogs retain the full date basis.

`site/region-hubs.js` is a small opt-in renderer. Hub and biography classes reset when routes change. Contents panels show only the main biography or regional headings; old nested destinations remain addressable.

## GitHub workflow

The workflow retains every previous content, calendar, portrait, privacy, reader, research, Rifts, timeline, quotes, hierarchy, film and media gate, and adds the biography/regional regression.

- One checkout and one build replace three checkouts and builds. The artifact uploaded by verification is the artifact deployed by the separate lightweight deployment job.
- Sparse checkout omits only the approximately 645 MB music directory, already streamed from pinned URLs and previously omitted from the Pages package. All encrypted objects remain present for integrity and playback checks.
- Ubuntu 24.04's installed Google Chrome runs the browser checks. Pinned Playwright 1.62.1 is cached as a test harness. No Playwright browser or system dependency installation runs on every publication. The workflow prints the actual Chrome version.
- Source/workflow path filters skip documentation-only pushes. Manual full verification remains available, and pull requests run verification without deployment.
- Obsolete verification jobs can be canceled; an active deployment is protected from cancellation. Jobs and a cache-miss install have bounded timeouts. Pages artifacts retain one day of storage.
- Permissions remain scoped per job: verification reads the repository/Pages configuration; deployment receives only Pages publishing and identity-token permissions.

This is an elapsed-time and duplicate-work improvement. The repository is public, so standard GitHub-hosted runner execution is free under [GitHub's runner policy](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job). This review does not claim a measured reduction in billed credits or all storage charges. See the official [Ubuntu 24.04 image inventory](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md) for preinstalled Chrome. The harness is pinned, while Chrome follows runner-image updates and is covered by the same browser gates.

Previous successful run 39976565868, attempt 2: validate 37 seconds, reader 16 minutes 20 seconds, deploy 2 minutes 13 seconds. Job execution totaled 19 minutes 10 seconds, with additional queue time. Slow repeated system-package installation dominated the reader job. New hosted timings must be measured after publication rather than inferred from local checks.

## Verification before publication

581 records, 2,092 canonical sections, 532 complete public bodies. Catalog 1,210,410 bytes; deferred lazy bodies 3,500,319 bytes; deferred search 1,552,687 bytes. Build `2938b81322f61846`. Catalog262/runtime261/reader JS7/CSS4/region-hubs1.

Canonical validation, five Final War calendar tests, 73,194 display stability checks, encrypted-object checks, JavaScript syntax, YAML parsing and whitespace checks pass. A sparse-checkout fixture confirms all other inputs survive the negative music pattern. The workflow contract retains all previous browser command variants and exactly one checkout/build.

Existing reader, research journeys, visual chronicle and sitewide calendar browser regressions pass. The new regression verifies the three reading plans, original evidence/source destinations, relationship-map filtering, scene appendices, focus/reload, five hubs, every accessible child place, nested/shared histories, map and timeline links, event dialogs, nine widths from 1,440 to 320 pixels, route-style cleanup and protected empty bodies. Desktop/mobile screenshots are inspected. Local preview: temporary port58983.

Preservation against baseline `98757a7`: original Olokun/Aria narrative and all three source/identity/media/relationship fields compare equal; Elenia has only the bounded comparison removal above plus presentation metadata/fact selection. Removing `regionHub` leaves each regional record equal to baseline. `content/reference/world.json` is byte-for-byte unchanged, preserving calendar adjustments, events, importance and map data. No original media changes. The entire private `vault.json` remains unchanged (SHA-256 `fc5a3a19bffc3ec4fac3de3ecad827c969976991e7b0e5f4cc649583348369ba`). Raw transcripts remain outside Git.

Publication and live verification receipts follow the actual deployment.

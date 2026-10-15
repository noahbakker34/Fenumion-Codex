# Fenumion crafting and Skill Experience reference · 14 October 2026

## User direction and source

User identifies this as Fenumion homebrew crafting, distinct from blessings, and explicitly requests a subsection of Blessings. Implemented navigation grouping and related references without merging currencies or mechanics. The existing twelve blessing paths and levels26–30 reference remain unchanged.

Read-only Google Drive/Docs connector read of `Fenumion Skill Descriptions`, document `1o5ZDxJN3kMW737Z9NQEemu5sFAmbilNcX-zYHcG6Qxo`, tab `t.0`. Revision `AHj4eMSI9jZfagRNbLHupySg0OwMSTQH-fIldO4Evc4Qmrqa8L7sI6AIJKodVarFDN-iCqNSmxPz8Fkq8gh2iw`. Source URL: https://docs.google.com/document/d/1o5ZDxJN3kMW737Z9NQEemu5sFAmbilNcX-zYHcG6Qxo . Source document/sharing not edited. Parsed all seven trade sections and Switching Trade Skills, including all14 tables. Typography metadata and empty paragraphs excluded; vertical tabs normalized to line breaks and outer whitespace trimmed; substantive wording/numbers retained.

## Coverage and limits

Hunter, Smith, Craftsman, Scribe, Builder, Scout, Beast Whisperer. All share the recorded rank thresholds: Apprentice1,000; Journeyman4,000; Expert10,000; Master20,000. Original abilities, DCs, Help rules, modifiers, natural-one outcomes, loss rules, material matrices, durations, passive income, carrying/preapproval constraints and switching examples preserved.

No Skill XP award rates, daily experience earnings, starting-rank behavior or conversion into blessing costs invented. Trade roll restrictions remain as supplied; no extra boon interactions inferred. Mechanics are Fenumion-specific; Gedankin’s separate2024 rules are not modified.

Source ambiguities retained: CR25 appears in adjacent Hunter ranges; `3, Uncommon` retained; Smith parts table says `Exper Smith`; Craftsman bonus wording refers to a refining roll; Scribe intro says no scroll awarded despite later scroll phrasing. Cooldown wording and builder timing retained as written, not automatically reconciled. No calculator turns these into unsupported rulings.

## Implementation

`crafting-data.js?v=1`, app235. Nine routes: overview `fenumion-crafting`, seven `trade-*` pages and `switching-trade-skills`. Blessings sidebar has a Crafting & Skill Experience subsection. Overview links to crafting; each trade returns to crafting/related Blessings references. Existing rule-table styling supplies caption/header semantics and keyboard-focusable horizontal scrolling. No new character achievement, possession or lore event inferred from mechanical capabilities.

## Validation

Compared every paragraph and table cell to connector-derived source after documented whitespace normalization. Chrome checks all nine pages and Blessings at1440px/390px, source-exact rendered tables, sidebar/backlinks, search, unique headings, unchanged twelve paths, protected empty stubs and absence of script errors/overflow. Screenshots inspected; syntax/diff checks passed. Publication authorized on 14 October 2026 alongside the Gedankin and Pristinia location updates.

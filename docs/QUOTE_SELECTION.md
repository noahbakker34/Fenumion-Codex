# Memorable quotes — deliberate selection

## Reading workspace · 21 October 2026

The current canonical gallery contains 38 selected quotations across the same seven themes. The owner approves usability upgrades 1–5 only, expressly excluding new selections and favourites/copy/share tools. All 38 lines, attributions, contexts, targets and existing anchors are preserved. The updated workspace adds combined word/speaker/theme/recording filters, known-date sorting, public portraits, context dialogs with bounded source precision, and deliberate audio controls. Missing dates and scene locators remain explicit; an associated history is not proof of an exact quotation message. Current implementation: `site/codex-quotes.js`, `site/codex-quotes.css`, and shared audio in `site/app.js`. See SITEWIDE_CALENDAR_AND_QUOTES.md for verification and publication. The earlier selection checkpoint below is retained as history.

Reviewed all 147 accumulated quotation cards on 11 October 2026 at the user’s request. Retained 36 existing lines (76% fewer), keeping their original wording, speaker attribution, historical target and existing source provenance. No new dialogue was composed. The quotation index, character “In their own words” collections, search results and home-page rotation all derive from the same final gallery record.

## Selection standard

A selected line needs both a distinctive voice or memorable formulation and a clear connection to character identity, a consequential choice, grief, a lasting conflict or a historical turning point. Mere factual usefulness, an introduction, an instruction or presence in a newly imported dossier does not qualify it automatically. Repeated sentiments lose weaker examples. There is no quota requiring every character to have a quotation.

Routine greetings, transactional remarks, directions, isolated factual statements, thin jokes and overlapping excerpts were removed from the memorable-quotes selection. Existing historical prose and its evidentiary quotations remain intact where they explain events. Removed gallery lines are no longer reproduced automatically in character collections or search, or selected by the home-page rotation.

## Implementation

`site/quote-selection.js` is the reviewed selection, with a brief interpretive context for every line and seven shared themes. `site/app.js` applies it after legacy quotation imports and before rendering/indexing. This prevents importing a dossier from automatically promoting every excerpt into the memorable gallery. Context is explanation, not additional quoted speech. Sources retain their existing evidence trail; beliefs and institutional claims are not converted into objective truths.

Examples of retained distinctions: Wrath externalizes pain while Olokun refuses to; Dale chooses allies over the Hallowing; Nienna asks Hope’s survivors to carry her memory; Fenwick holds beauty and bodily fear together; Aria’s sacrifice, attachment and mortal-independence lines expose different aspects of her worldview. History selections include Bowene’s eulogy, Adelia’s restorative ambition and the Last Grove’s warning about unlimited union.

## Checks

Validated unique text/speaker/target combinations, valid targets, exact unchanged wording and attribution against the prior 147-record catalogue, seven nonempty themes, 36 context notes, matching selection count, shared character/search indexing, home-page rotation, quote navigation and responsive display. App version 208; stylesheet 164; selection version 1. Publication follows the standing user authorization.

# Gedankin Codex

Gedankin has a separate entry point at `/gedankin/`, linked by the Connected worlds switch in both sidebars. It shares Fenumion’s responsive styles and Garamond reading font, with its own sigil, landing page, navigation and search. Gedankin uses the 2024 ruleset, as specified by the world creator.

The new world loads only its own `data.js` and `app.js`. Fenumion’s public articles, timeline, quotations, login and private-vault integration are not loaded into Gedankin. Each world retains its own URL and browser history. No rule mechanics, world rulings, characters, geography or connection lore have been invented.

Add sourced lore in `site/gedankin/data.js`. Independent collections are `characters`, `locations`, `factions`, `events` and `quotes`, plus general `articles`. Records use stable `id`, `title`, `summary`/`dek`, `body`, `tags`, `facts` and optional image fields. Events may include `sort` and `meta`; quotes use `text`, `speaker`, `group`, optional `article` and `audio`. Directory pages, chronological sorting, article routes and filtered search derive from these collections. Empty sections intentionally explain that no records have been added yet.

Verified: both-way world switching from home and article pages, all section routes, isolated search, gateway search, browser Back, keyboard shortcuts, unknown routes, asset responses and layouts at 320, 390, 768 and 1440 pixels. Only the named rule baseline is stated; actual 2024 mechanics and approved options await supplied source material.

## Vaerik world correction — 8 October 2026

The world creator identifies Vaerik as a Gedankin character. His public biography, existing character-profile synthesis, portrait, source references and “If I can, then I must” quote now belong to Gedankin. His portrait moved to `site/gedankin/assets/vaerik.png`. Fenumion’s article, character directory, navigation and quote listings no longer include him. The legacy `/#vaerik` route redirects to `/gedankin/#vaerik` to preserve bookmarks. Source filenames retain their historical names and are not evidence of his world membership.

Verified his biography and portrait at all four layout widths, Gedankin’s character directory and character/quote search, the quote’s speaker link, removal from Fenumion’s search/listings and the legacy redirect. No dates or additional events were invented during the move.

# Gedankin Codex

Gedankin has a separate entry point at `/gedankin/`, linked by the Connected worlds switch in both sidebars. It shares Fenumion’s responsive styles and Garamond reading font, with its own sigil, landing page, navigation and search. Gedankin uses the 2024 ruleset, as specified by the world creator.

The new world loads only its own `data.js` and `app.js`. Fenumion’s public articles, timeline, quotations, login and private-vault integration are not loaded into Gedankin. Each world retains its own URL and browser history. No rule mechanics, world rulings, characters, geography or connection lore have been invented.

Add sourced lore in `site/gedankin/data.js`. Independent collections are `characters`, `locations`, `factions`, `events` and `quotes`, plus general `articles`. Records use stable `id`, `title`, `summary`/`dek`, `body`, `tags`, `facts` and optional image fields. Events may include `sort` and `meta`; quotes use `text`, `speaker`, `group`, optional `article` and `audio`. Directory pages, chronological sorting, article routes and filtered search derive from these collections. Empty sections intentionally explain that no records have been added yet.

Verified: both-way world switching from home and article pages, all section routes, isolated search, gateway search, browser Back, keyboard shortcuts, unknown routes, asset responses and layouts at 320, 390, 768 and 1440 pixels. Only the named rule baseline is stated; actual 2024 mechanics and approved options await supplied source material.

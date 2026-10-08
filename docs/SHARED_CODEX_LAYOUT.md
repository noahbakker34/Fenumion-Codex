# Shared codex layout

Fenumion and Gedankin use the same primary section order: Characters, Timeline,
Locations, Factions, Quotes, Guide. Both load `site/codex-layout.css` for their
sidebar introduction, map link, directory controls, cards and responsive hubs.
World-specific records, media and access controls remain in their own runtimes.

Gedankin directories support search, aliases and sorting. Its article structure
places sources and related records ahead of the chronicle. Fenumion now has a
public faction directory; protected records still pass through existing access
checks. Gedankin's 2024 rules remain available through its Guide.

Validation: Chrome checks at 320, 390, 768 and 1440px covered all six sections,
primary navigation, homepage tiles, horizontal overflow, mobile menu closure,
directory filtering/sorting, aliases, source presentation and Garamond body text.
No runtime errors were observed.

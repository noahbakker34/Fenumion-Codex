# Mobile navigation taps · 12 October 2026

A mobile user reported that the drawer was visible but its links could not be tapped. Their screenshot showed the Memorable Quotes page with an open drawer dimmed beneath the backdrop.

## Cause and change

Several themed pages give `.app-shell` `z-index: 2`, creating a stacking context. The fixed sidebar at `z-index: 75` remains inside that context, below the root-level scrim at `z-index: 60`. Chrome hit-testing confirmed that the scrim, rather than the sidebar link, received taps on Quotes, the guide, factions, the timeline and Krone.

The shared layout now sets the shell's z-index to auto only on narrow screens while a panel is open. This lets the existing fixed sidebar layer above the scrim while the page remains behind it. Desktop layout and closed-panel stacking are preserved. Both world entry points use shared layout version 11.

## Verification

Touch-enabled local Chrome verified actual link taps, resulting navigation, automatic drawer closure and backdrop dismissal on Memorable Quotes, the guide, visual atlas, factions, timeline, Krone and World Index. Additional Quotes checks passed at 360, 430 and 760px widths. The desktop rail remains 78px; Gedankin's mobile drawer and backdrop also work. No JavaScript errors; whitespace check passed. The 390px screenshot was visually reviewed. Local source files were served through browser request interception, with authentication requests mocked as unauthorized; no real vault data used or changed.

Publication pending.

# This Day in Fenumion

## Current behavior — exact anniversary correction

Owner explicitly requests that players see what happened TODAY in past years. This supersedes the rotating implementation documented below. Visual JS6/CSS10 matches the current campaign month/day, with year strictly earlier than the current year. The same existing exact-date, public-record and quest-adjustment checks apply. No different month/day, current-year record, arbitrary rotation, browse-day controls or nearby fallback is displayed. An empty anniversary says there are no precisely dated events recorded for this day in past years. An open page refreshes within one minute at the established campaign day boundary. Historical event dates remain in the Fenumion calendar, and the original supplied background remains unchanged.

Browser checks cover the actual first Called anniversary, no-match days, exact month/day plus prior-year filtering, adjusted quest dates, source qualifications and private boundaries, reload, midnight rollover, detailed event dialogs and six widths. No canonical data or source dates change. Live publication is authorized; a release receipt follows verification.


Release `7435d0f40d3a19cbc74145ec01347bbe84cadd75` deployed successfully in [Pages run 40001099065](https://github.com/noahbakker34/Fenumion-Codex/actions/runs/40001099065). All hosted gates pass. Five live entry/runtime/style/background/catalog files match tested bytes. Fresh anonymous live Chrome passes exact current month/day and prior-year filtering, empty days, reload, midnight rollover, quest adjustments, qualified-date exclusions, privacy, event dialogs and six widths. This receipt is documentation-only.

## Earlier implementation and release record

23 October 2026 — homepage feature requested by the owner. The owner subsequently clarified that this is a way for players to look back through server history, independent of today’s date. This replaces the initial month/day anniversary implementation.

The daily panel sits between the homepage category tiles and existing featured stories. It rotates through the complete set of eligible historical dates, one date per day, with a stable selection shared across visitors and reloads. The existing campaign day boundary sets rotation timing only; the selected historical date need not match today's month/day. Earlier and Later buttons cycle through recorded days, wrapping at the ends. Historical date/year labels use the established named Fenumion calendar. No current date, Today button or calendar picker appears. A page left open rotates within one minute at the day boundary unless the reader has begun browsing.

The panel reads the canonical public timeline through the existing reader context and authors no event prose. Eligibility requires a public, accessible, non-veiled, non-vault-only event attached to a public article, a recorded/canon date basis, and an exact single day with the `on` qualifier. The existing calendar helper selects an explicit quest adjustment before its posting window. Dates after the current campaign day are excluded. Sort fields never establish dates. Reports, visions marked as recollections, approximate dates, bounds and unresolved windows remain in Narrative History with their qualifications.

Each selection groups events on their full historical date, including the year. Up to three summaries appear, with remaining matches expandable. Every event opens the existing detailed dialog with evidence and source receipts. Only recorded days can be selected, so an archive with eligible dates always has history to show. An entirely empty archive shows a plain empty state and disables browsing.

Implementation: `site/codex-visual.js` and `.css`; entry versions JS5/CSS10. No dependency, network call, source import or raw transcript. Canonical content, calendar metadata, chronology, importance, maps, media and protected payload remain unchanged.

Validation: `scripts/check_this_day.cjs` checks recorded-day grouping, stable reload, daily rotation, Earlier/Later navigation, existing event dialogs, six widths (1440–320) and synthetic source qualifications that reject reports, bounds, ranges, unreviewed sort dates, future dates and protected records while honoring quest adjustments. The gate runs in the Pages workflow. The initial canonical/build/calendar/privacy and reader/illustrated-chronicle regressions passed before the owner's correction; the revised daily-history browser gate is rerun after it. Owner explicitly authorizes live publication; release verification follows below.

The owner supplied the golden-tree Fenumion banner as the panel background. The original PNG is preserved at `site/assets/archive/this-day-fenumion.png`; a CSS dark overlay keeps the existing historical text readable. Desktop/mobile daily-history checks pass after the background change.

Published release `74d3a27628d5f2fc23b4badf7948390ea85e2d76`: Pages run `39999392995` passed all checks and deployed successfully. All five live entry/runtime/style/background/catalog hashes match the local tested files. Fresh anonymous live browser checks pass at six viewport widths; desktop/mobile screenshots inspected.

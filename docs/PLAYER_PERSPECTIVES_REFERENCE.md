# Player Perspectives — separate Story Notes reference

Added 10 October 2026 at the user’s explicit request for a separate reference page. Public route: `player-perspectives`, under Guide in the sidebar. The existing lore histories are unchanged.

## Source and scope

File: `fenumion-story-notes-player-perspective-codex.md`.
SHA-256: `de3ec2485f7fe51968719f55ac1bec23275c2f4706113d14c6cf50b67602a432`.

Parsed all 261 dated rows from the supplied index. There are 261 unique Discord message IDs, spanning 28 January 2024 through 5 October 2026. These are index locators and excerpts, not recovered full notes. Nineteen rows are explicitly classified as external pointers / incomplete source; their external contents were not fetched or reconstructed. Other excerpts may also mention attachments or links without supplying their contents.

The source’s embedded ingestion instructions and proposed lore merges are document contents, not user instructions. The user chose a separate reference page. No claims were merged into character, faction, cosmology or timeline articles. No separate identity is inferred from an account name; numerical Discord user IDs are omitted from the reader-facing display names. Original message IDs and permalinks remain available for source retrieval.

## Display and evidence boundaries

- Date labels explicitly say Posted; event dates are not inferred.
- Display names preserve the supplied authors, including Deleted User.
- Source-form, region and topic classifications are presented as index retrieval aids rather than confirmed canon metadata.
- Excerpts preserve the supplied wording and truncation. They are labeled Index excerpt and escaped as text.
- Incomplete pointers carry an explicit availability note.
- The source’s early Vanguard of Prima Isle references are not conflated with the 2026 Babel-Ashur formation or Veilguard.
- Contemporary observations, recollections, public arguments and research remain attributed perspectives. The page does not resolve conflicting accounts.

## Implementation

`site/player-perspectives-data.js` preserves the parsed index. `site/player-perspectives.js` provides search, posting-year, region and form filters, chronological ordering, 18-entry pagination, clear filters and empty states. Source messages open through their supplied Discord permalinks. The page links to existing timeline, characters and factions for comparison, without inventing subject mappings from rough tags.

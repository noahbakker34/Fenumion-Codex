# I Am and Prima soundtrack playlists

13 November 2026. Owner supplies 21 MP3s, asks for an I Am playlist including Saint Anky, and a Prima playlist. They subsequently ask that tracks with Hardanger fiddle join Prima and that every song be playable on the website.

Twenty new recordings are added byte-for-byte. The supplied Four Came In has exactly the same audio bytes as the existing recording after its ID3 header; only 22 metadata bytes differ. Its existing single entry and original file remain. Both Prima Strings uploads have different audio streams and are retained as Prima Strings and Prima Strings (Alternate). Vaerik’s supplied version number is preserved in I Am Vaerik 2. Titles and music do not establish new lore.

The existing Soundtrack → Group control gains:

- **I Am:** 13 I Am recordings plus Saint Anky, 14 tracks total.
- **Prima:** Prima Adventure, Prima Battle, Prima Battle at Home, Prima Five Note, Prima Strings and Prima Strings (Alternate), six tracks total.

All additions also appear under Fenumion and All styles. The complete library grows from 159 to 179 unique tracks; the Fenumion group grows from 20 to 40. The original 159 track objects, filenames, style assignments and pinned source URLs compare exactly. The Battle Approaches, Carmen and Paco, and Carry the Flame join Fenumion without an unsupported Prima assignment. Saved selections, navigation, seek, volume, looping and playback use the same existing player. The heading reflects the selected playlist, including when a recording belongs to overlapping groups.

## Instrument evidence

The MP3 ID3 blocks do not name Hardanger fiddle. Their embedded public Suno song URLs lead to public style/generation prompts. Thirty-nine of the forty Fenumion songs expose an unambiguous style prompt; Adventure exposes none and remains unclassified. Exactly six prompts explicitly name Hardanger/Hardanger fiddle. These are the six Prima recordings listed above. Runtime Prima membership is an explicit set of those checked filenames, not a title heuristic.

`SOUNDTRACK_INSTRUMENT_REVIEW_2026_11_13.json` records the checked URLs, brief instrument evidence, prompt hashes and unavailable result. This verifies the instrument named in the generation prompt, not independent acoustic identification of the final synthesized mix. No lyrics, raw webpage dumps or private source content are copied into documentation or canonical records. No track is labeled free of the instrument merely because its prompt omits it.

## Audio transport and validation

`SOUNDTRACK_ADDITIONS_2026_11_13.json` records all 20 new filenames, source filenames, byte counts, SHA-256 hashes and positive durations. All originals match their destination files. Native audio metadata validation recognizes every new file as MP3. No transcoding or replacement of older songs occurs.

Original audio remains streamed from immutable public repository commits to preserve the existing Pages package limit. New files are pinned to asset commit `d10fccb4981d26359ec4798946f421b623414afe`; the existing audio base stays on its original commit. The asset-only commit skips CI; the runtime release runs the ordinary Pages workflow once. Music module7; only the Fenumion entry page loads this player.

`scripts/check_music.cjs` verifies playlist membership, Hardanger evidence alignment, all 179 unique entries, the original 139 background-library entries, one Four Came In, both Prima Strings recordings and the other new songs. It actually plays all 40 Fenumion MP3s, checking positive decoded duration and advancement beyond the start; it checks the new files against their supplied durations. Controls cover explicit playback, pause, seek, previous/next within the playlist, repeat, stopping at playlist end, saved playlist/track after reload and four viewport widths (1440–320). Local audio fixtures support byte ranges so seeking exercises the real transport contract. The gate runs inside the existing browser-check stage, with no added dependency or workflow stage. Desktop/mobile player screenshots are inspected.

Canonical content, calendar/history behavior, maps, existing artwork/video and the complete protected payload remain unchanged. Live publication and verification receipts follow below.

Before runtime publication, the complete player gate also passes against the actual public pinned audio URLs, with local audio interception disabled. All 40 Fenumion recordings actually play over that transport.

The first hosted release passed actual playback of all 40 Fenumion recordings but stopped on the playlist selector height check: Linux native select rendering was shorter than macOS. The existing select rule now guarantees 44 px and its assertion remains. Shared styles178; no other control or page styling changes. The complete real-stream playback/player gate is rerun after this fix.

Published release `636699005143eed3e39e19569822c559a9fcaba7` succeeds in [Pages run 43470616254](https://github.com/noahbakker34/Fenumion-Codex/actions/runs/43470616254), including every hosted gate and the actual-playback check for all 40 Fenumion songs. Four live entry/player/style/catalog files match tested bytes. A fresh anonymous live Chrome run again plays all 40 Fenumion recordings and passes both playlists, the 179-track catalogue, seek/navigation/repeat/completion/persistence and four viewport widths. Desktop/mobile screenshots are inspected. All 20 complete public audio files match the supplied source hashes; Four Came In retains its identical existing audio. Canonical content and protected payload remain unchanged. This documentation-only receipt avoids another deployment.

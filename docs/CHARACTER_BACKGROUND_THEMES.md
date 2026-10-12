# Character background themes · 11 October 2026

The user supplied five clips for thematic individual character backgrounds and asked to finish the NPC work first. The full 322-label NPC registry was published and byte-verified at commit `987af268dcaca87c2c2a9c01d0fc9ed02e03eae1` before this background work began.

## Visual assignments

31 existing public character dossiers receive decorative backgrounds. The themes are editorial visual associations; no clip establishes a deity’s identity, a real location, a character death, funeral attendance or event scale. Article text, citations and character portraits are preserved.

- Nature and journeys / golden path: Gartina, Dale, Aravil, Jéane Rose, Rolen, Akarian, Ghilsen, Farmer Scarlett.
- Wilderness and faith / sacred forest: Wren, Nymera, Murr, Hana, Scout Lilian.
- Magic and inquiry / arcane gate: Scribonia, Eugene, Ithilrûnë, Kasiri, Ryvyt, Huoth.
- Sea and cosmic uncertainty / astral sea: Carmen, Coralyn, Olokun, Roderick/Wrath, Vain, Saturnia, Magnus.
- Remembrance and loss / procession: Nienna, Saray, Melian, Papirak, Elenia.

Gartina’s selected mountain-path clip is lush, pine-covered nature. The forest clip has a strong sacred silhouette and is reserved for wilderness/faith themes. All five themes were inspected through extracted frame previews and actual Chrome playback.

## Loading and accessibility

Each video lasts about 5.209 seconds. Native AVFoundation export produces H.264, no audio, 24fps composition, about 800kbps, at most 960x540, with fast-start optimization. The five optimized MP4s total 2723756 bytes compared with 54714168 bytes of originals. Static JPEG posters come from inspected source frames.

Only the active theme is mounted. Sources are deferred with `data-src` and loaded on visibility; no character-background video request occurs with reduced motion, Save-Data or a 2G connection. Those modes keep the poster. Hidden tabs pause ambient video and visible tabs resume prior playback. Route changes pause old videos and remove the prior background. A themed character uses one backdrop rather than stacking the older Death backdrop. Decorative media is muted, loops, ignores pointer input and is hidden from assistive technology. Navigation, breadcrumbs, contents and text stay above the background.

## Verification

Chrome verified all 31 assignment targets exist and are public, decoded one representative of all five themes, checked muted/loop/preload behavior, active route cleanup, hidden-tab pause/resume, and zero MP4 requests in reduced-motion and Save-Data modes. Mobile 390px layout has no horizontal overflow. Desktop/mobile screenshots were inspected and layering repaired to keep navigation and breadcrumbs visible. No JavaScript errors. Syntax and diff checks passed.

Module `character-backgrounds.js?v=1`, app218, styles167. Authenticated vault and protected records are unchanged.

## Source receipt

- `the_gardener_A_giant_black_hole_in_the_midst_of_the_astral_se_24a38fd2-62d6-4afe-ba53-b5a1c2cf5e0e_1.mp4` → `astral-sea`: original SHA-256 `da56f340726426a56a9c5ed3ff2d4de6c4ff319f01e6366df0c4f577542db4b3`; optimized MP4 544187 bytes.
- `the_gardener_A_golden_worn_road_through_rolling_hills_a_fanta_9f9a611b-c6a2-4163-a510-50157dbd59c8_1.mp4` → `golden-path`: original SHA-256 `7a2aaa07e32c8b57c5a7d566ed5c937189fdaea7e027cd9336e36a410550fa76`; optimized MP4 550387 bytes.
- `the_gardener_Gate_flashing_with_arcane_lightning_--ar_11_--vi_6583134c-8659-4e8a-817c-95b18696729d_0.mp4` → `arcane-gate`: original SHA-256 `26c7a2881246108c9f9bc406795708565867ca5c9f386a11ffd7bb6624f7bcd7`; optimized MP4 551195 bytes.
- `the_gardener_Giant_elven_funeral_procession_tens_of_thousands_02c4651d-41e6-409a-83d1-4497ae8b5340_0.mp4` → `remembrance`: original SHA-256 `51f22ebb0d7e010b2ce18166d64f41c9dd83427237bb5e4565b432cc8604c4b6`; optimized MP4 545339 bytes.
- `the_gardener_The_shadow_of_a_god_in_a_forest_with_stark_contr_1ead0dab-1d2d-4089-9f3e-b75e512b5d02_0.mp4` → `sacred-forest`: original SHA-256 `b634a9b38ecc229e3281e1fd643490a7e4f5b8a31536d1364f919b6980e879a3`; optimized MP4 532648 bytes.

Visibility lifecycle also verified for a page opened while hidden: no initial video request, then normal playback on becoming visible. Reduced-motion changes apply to all ambient media, including dialogs.


## Talan video · 11 October 2026

User identifies the supplied battle-ready figure as Talan. Inspected source frames and Chrome playback. Added the sixth theme, `talan-order`, assigned only to the new focused public Talan dossier: one deferred animated background plus still-frame portrait, using the existing pause/static-fallback lifecycle. The dossier reuses already public Aria and Voraketh histories and retains Nuru’s creation claim as attributed testimony. No additional cosmology, birthplace or motive is inferred. A provisional prominence score of 84 uses public consequences/institution/relationships (5/4/4) plus recurrence13 from the verified 9-post census footprint; timestamps are posting dates. Talan stays unplaced.

32 public dossier background assignments; NPC directory 106, uniquely grouped, unplaced 52. Original video SHA-256 `d9abc767d7383a52fe0a02b4f659df4e174b21a215babadaac6bed478574bcf5`. H.264 406x540, 542,168 bytes, about 5.209 seconds, silent. App219, media146, backgrounds2; styles167. Chrome passed single decoded video, portrait and search/dialog, internal links, protected empty records, desktop/mobile layout and zero MP4 requests with reduced motion. Screenshots inspected; syntax and diff checks passed.


## Talan vs Aria scene · 11 October 2026

User identified the supplied crossed-swords confrontation as Talan vs Aria. Inspected extracted frames and added the shared scene to both public dossiers. The scene has native playback controls and preload none; ambient backgrounds pause during explicit scene playback. Existing portraits and histories are preserved. Visual depiction adds no chronology, dialogue, outcome or secret lore. Optimized silent H.264 810x540, 5.209 seconds, 526,805 bytes. Source `social_nbakker3437_Slow_motion_staredown_between_two_bitter_enemies__abd1a286-e0d2-4450-9c87-b9c588e2012f_0.mp4`, SHA-256 `973ed27d03f38a4a53e116b09164e4041e8b2ec93fda418f818fc350f645f6eb`. App220, media147, styles168.

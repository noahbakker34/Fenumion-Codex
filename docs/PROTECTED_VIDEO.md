# Protected video playback

Long recordings cannot be embedded efficiently into the single authenticated vault response. The existing store has a [25 MiB per-value limit](https://developers.cloudflare.com/kv/platform/limits/). The player now supports standard encrypted HLS, loaded only when an authorized reader presses Play. Short embedded clips continue to use their existing native players.

The private vault owns scene titles, captions, posters, playlists and encryption keys. Canonical public protected records remain empty. Public media storage contains only AES-128-CBC ciphertext, with independently generated IVs for each segment and opaque SHA-256 filenames. The authenticated vault remains the only source of the key. No client-side password or publicly embedded key grants access.

The player creates temporary key/playlist blobs after a play request, uses the pinned hls.js library or native HLS, and buffers a limited stretch of the recording. It pauses the soundtrack so dialogue stays audible and transfers the initiating control’s keyboard focus to native video controls when loading finishes. Navigating away or locking the vault destroys playback, cancels pending loads and revokes blob URLs. Reduced motion and data-saving preferences never cause this player to load automatically. Captions and historical statements retain their source authority separately from media display.

Encrypted objects live under `site/assets/protected-media/` in the repository. Production playback obtains those immutable objects through GitHub’s CORS-enabled raw asset host. The Pages artifact excludes that directory, just as it excludes the existing music directory; local preview serves it directly. Decryption secrets are never sent to that asset host. Each object stays well below GitHub’s per-file limit. No auth Worker endpoint, permission, credential or role change is involved.

The vendor script is downloaded from the official npm registry, pinned by its version and verified against the registry’s SHA-512 integrity before extraction. Its source, version, checksum and license are retained under `site/vendor/`. It is loaded only when needed.

Playback uses the library’s documented [HLS/MSE support](https://github.com/video-dev/hls.js/) and bounded buffer configuration. Local tests pass in Google Chrome and the release workflow’s pinned Chromium headless shell. Full private-film checks cover seeking, audio, layout and retry; the generated public fixture covers the release gate, soundtrack pause and native-control focus. Native Safari/iOS fallback is present but has not been independently exercised here.

## Verification and release

Run canonical validation and build, `scripts/check_protected_assets.py`, JavaScript syntax, and the original reader regressions. Browser verification must cover a locked route with no scene/media requests, an authorized route with no automatic streaming requests, explicit playback including sound, seeking, layout, failure/retry, navigation cleanup and vault locking. Private fixtures and keys stay outside this repository.

`scripts/check_protected_media.cjs` uses a generated blue-frame/sine-wave fixture and a freshly generated test key. It verifies real decryption/playback, lazy requests, soundtrack pause, keyboard focus, layout and locking without private data. It is included in the release browser gate. The public synthetic fixture is not campaign media. Full real-recording checks, quality comparisons and private payload checks are recorded only in the private workspace.

Before publishing, verify the public payload contains no private descriptors, keys, playlists, posters or plain source media. Publish the public runtime and encrypted objects first; publish the private payload only after those assets and runtime are available. This is a coordinated release, not permission to publish automatically.

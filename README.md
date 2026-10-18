# The Fenumion Codex

A living archive of Fenumion’s characters, history, cosmology, regions, institutions, relationships, and memorable words.

## Read the Codex

**[Open the live Fenumion Codex](https://fenumion.com/)**

Canonical article records are stored in [`content/records/`](content/records/). Build the deployable static site in [`site/`](site/) with `python3 scripts/build_codex.py` before previewing or publishing. Supporting editorial and historical records are stored in [`docs/`](docs/).

The complete main quest-channel export is tracked through [`docs/QUEST_ARCHIVE_INDEX.md`](docs/QUEST_ARCHIVE_INDEX.md), a checksum-backed ledger of 108,619 messages and 329 candidate review sessions. High-confidence scenes are being incorporated into the character, location, faction, and timeline records with their evidence boundaries intact. The 242 MB raw transcript remains outside the public repository so private conversation and protected lore are not republished wholesale.

## Development

```sh
python3 scripts/check_content.py
python3 scripts/build_codex.py
python3 -m http.server 8880 --directory site
```

See [`content/README.md`](content/README.md) for the editing and evidence model. Runtime checks use `scripts/check_reader.cjs` with Playwright.

## Publishing

Changes pushed to `main` are deployed to GitHub Pages by [the Pages workflow](.github/workflows/pages.yml).

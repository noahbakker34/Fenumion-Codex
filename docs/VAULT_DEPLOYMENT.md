# Spoiler Vault Deployment

Protected lore is not a visual-only feature. It must remain outside the public GitHub Pages files and be returned only by the authenticated Cloudflare Worker.

## Production layout

- Public site: `fenumion.com`
- Authentication and vault API: `auth.fenumion.com`
- Worker: `fenumion-auth`
- Worker KV binding: `VAULT`
- KV namespace: `fenumion-vault`
- KV key: `vault.json`

The Worker reads `env.VAULT.get("vault.json")` only after validating the Discord session and checking that the member has at least one role listed in `VAULT_ROLE_IDS`. That environment variable must contain only the Discord role IDs for **Alpha Team** and **World GM**.

## Safe update procedure

1. Build the complete JSON payload outside `site/` and outside Git-tracked paths.
2. Validate that it parses and contains an `articles` array before uploading it.
3. Upload the payload as the `vault.json` key in the `fenumion-vault` KV namespace.
4. Confirm that a request without a session receives `401` and no lore payload.
5. Sign in through the Codex with an authorized Discord account. Confirm that protected records load and that the Campaign tools link appears.
6. Sign out or test in a private browser session. Confirm that protected titles remain veiled and that the Campaign tools link is absent.

Never add the payload to `site/`, `app.js`, a public JSON file, an HTML data block, or repository history. The root `.gitignore` includes defensive rules for common vault payload paths, but the public-bundle audit is still required before every deployment.

## Public-bundle audit

Search the public source for protected narrative text, not merely protected IDs or placeholder titles. The browser must receive only public summaries, empty protected stubs, and the code needed to request the authenticated payload. Interface fog, hidden elements, or client-side passwords do not protect content already downloaded by the browser.

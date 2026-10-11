# Sepidar project checkpoint — 2026-10-11

This file is a handoff record for continuing the Sepidar restaurant platform in another ChatGPT conversation. Pair it with `CHECKPOINT-2026-10-11.md` in the admin/API repository.

## Repositories / branch
- Customer site: `hosseinasgari898989-dev/sepidar-restaurant-platform`
- Admin/API: `hosseinasgari898989-dev/sepidar-restaurant-panel`
- Continue on `feat/release-hardening-2026-10-11` in both repositories only.
- Customer production URL: https://hosseinasgari898989-dev.github.io/sepidar-restaurant-platform/
- Admin production URL: https://sepidar-restaurant-panel.willow-poppy-10df.workers.dev/panel/
- Current customer `index.html` content SHA on this branch: `89ab04d7a991793f217b7eae486878347deacc06`.

## Customer code already present on branch
- Anonymous visitor ID is sent in review, lead, and order API bodies. It is not a guarantee of identity or ban evasion prevention if the user removes browser storage/cookies.
- Prevents selectstart/contextmenu outside editable controls, while intended to keep form fields selectable.
- Food thumbnails and customization sheet can display a server-provided `image_url`; when a real photo exists, the 3D canvas is suppressed. Category `other` must use a real photo instead of the fallback 3D model.
- Cart line snapshot has fallback capture; modals/sheets include viewport and rounded-corner CSS fixes.
- Prior static syntax/brace checks passed only; no complete mobile browser or live production test has been certified.

## Project safety / status
- Do not merge or deploy until API, schema, storage binding, UI, and security paths pass tests.
- Check the paired admin/API checkpoint for the full backlog and current server routes/migration references.
- Back up before modifying files, fetch fresh SHA before each edit, and don't make destructive D1 changes.
- After code validation, use TinyFish for read-only live UI inspection and MagicPath for design explorations; MagicPath components are not part of the site unless explicitly adapted and integrated.
- The customer account/tracking/theme update previously showed a mismatch on a live smoke test; verify what the live site actually serves.

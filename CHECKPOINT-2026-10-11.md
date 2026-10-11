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

## Recovery checkpoint update (2026-10-11, after latest work)
Continue in this feature branch; production has not been changed or merged.

### Most recent customer change
- Customer `index.html` now scopes long-press selection prevention to interactive cards/controls rather than globally disabling selection for the entire page. Text selection remains enabled in inputs, textareas, selects, code/pre, and normal page copy.
- New customer content SHA: `75e69fa2c6a0f8d5e6a7efe6757bf753c1c90259`.
- Inline JS parse check passed and CSS brace balance is 0.

### Most recent panel/API changes
- QR responsive CSS + touch-selection guard.
- Admin product card/editor preview now shows a photo-required placeholder in category `other` instead of a 3D emoji substitute when a real image is missing.
- Demo QR no longer links to the real production customer site; it uses a deliberately non-routable `example.invalid` destination and displays local, synthetic preview cards instead of loading the production storefront. Opening the demo destination is disabled.
- Demo preview changes were copied into `worker/src/lib/panel-overrides.js` because the Worker serves embedded overrides before static assets. Current override map content SHA: `84d5b18d6b32d0d6784eb0bd53933c5a7cfcc77f`.
- Current panel source content SHAs: `worker/public/panel/index.html` = `d3b673a76b8e4422897e99902d5498f653f21ecd`; `worker/public/panel/panel.css` = `335fa76b44fc864f4b10c7524abe63fb716a79c5`; `worker/public/panel/js/views/menu.js` = `6d70127edfdb88be497f31bf13cc34884bdab5c6`; `worker/public/panel/js/views/qr.js` = `3d4df9016b138fe1969612dab58c87379924fdb1`; `worker/public/panel/js/demo.js` = `ec770a73554fc4b57af31dc23dbf0bbe72ff75c4`.
- Current panel/API content SHAs: `worker/src/routes/panel.js` = `42e6385c8852a913426374e0dea6cf8a1766c7f8`; `worker/src/routes/public.js` = `789acc2c88cf856c797cb9897b8664476fd86ba8`; `worker/src/lib/panel-overrides.js` = `84d5b18d6b32d0d6784eb0bd53933c5a7cfcc77f`.
- Syntax checks (module exports/imports normalized for a parse-only check) passed for the core Worker files and panel JS sources; CSS braces balanced. These are static checks, not a successful production or visual-browser test.

### Verified safe/readonly findings
- Live D1 schema has the token-lifecycle and review-ban/limits tables/columns/indexes. A read-only inspection found no active item in category `other`; no DB rows were changed by these inspections.
- Worker config path is `worker/wrangler.jsonc`. It has the D1 binding and `SESSION_TTL_HOURS: "8"`, but no active `FOOD_IMAGES` R2 binding.
- Cloudflare API could not list/create an R2 bucket because R2 must first be enabled from the Cloudflare Dashboard (Cloudflare error 10042). Therefore real photo uploads are NOT ready in production. The upload route intentionally reports unavailable until the binding is configured.
- TinyFish's wallet is out of funds; the live interaction smoke test was not started. No substitute claim of visual verification should be made.
- MagicPath design mock was generated and built, but is not part of the site; component ID `459966707872710656`, revision `459966707872710657`.

## Immediate continuation steps
1. Re-fetch latest file SHAs before editing. Re-run small batches of syntax checks and verify all modified `worker/public/panel/*` strings are byte-identical to `PANEL_OVERRIDES`.
2. Recreate/update `PANEL_OVERRIDES` after any further public-panel asset change.
3. Finish the theme audit, especially any remaining light-mode hardcoded backgrounds in the customer page, without rewriting large blocks blindly.
4. Check that admin review deletion/ban buttons map to implemented server routes and are shown in the admin UI.
5. Check token/session lifecycle and server-side rate limits against handlers, not only UI.
6. To finish real image upload, owner must enable R2 in Cloudflare, create/confirm bucket `sepidar-food-images`, then add `r2_buckets` binding in `worker/wrangler.jsonc`. Do not deploy before this setup is verified.
7. Create draft PRs only after the static audit completes; no merge, deploy, or live writes yet.


## Continuation update after mobile-app crash (2026-10-11)
- Before the latest customer UI tweak, backed up the exact current `index.html` to `backups/2026-10-11/index-before-theme-grid-fix.html` (backup commit `87e4752d14d0a733f25805b2c0e2dec4d8530430`).
- Corrected the theme chooser layout from three desktop columns to two because the chooser exposes only light/dark. The small-screen rule still collapses it to one column. Current `index.html` content SHA: `3e1d0aafa5c6bbd54e4849dddecca76b82214048`; commit `fecc998d2f9da888252cb15a0688da43e339101d`.
- Revalidated current customer page: inline JavaScript parse check passes; CSS braces balanced; exactly two theme choices (`light`, `dark`) and three accent choices (`orange`, `mint`, `violet`). No warm/mild theme option labels remain; the one Persian `آرام` occurrence is a food-rotation comment, not a theme.
- Production still has not been changed; branch changes are not certified as live. Browser visual testing is still outstanding.

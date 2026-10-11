# Sepidar continuation checkpoint — 2026-10-11

Primary checkpoint and detailed task list:
https://github.com/hosseinasgari898989-dev/sepidar-restaurant-panel/blob/feat/release-hardening-2026-10-11/CHECKPOINT_2026-10-11.md

Customer repo: `hosseinasgari898989-dev/sepidar-restaurant-platform`
Working branch: `feat/release-hardening-2026-10-11`
Production URL: https://hosseinasgari898989-dev.github.io/sepidar-restaurant-platform/

Customer `index.html` has prior feature-branch commit `e3fab6e5514cb2b190d71a4aa13a526f960edcfe` with visitor request IDs, safer long-press behavior outside input controls, uploaded-image rendering, photo-only behavior for category “other”, mobile modal sizing, and a cart image snapshot fix. These are branch changes, not a confirmed production deployment. Syntax checks previously passed, but this does not count as full application/live testing.

Continue on the feature branch only. Inspect current branch files before editing. Do not merge/deploy until dark theme/accent consistency, anti-spam server logic, token lifecycle, QR layout, R2 upload/storage, reviewer moderation, dynamic categories, demo isolation, and responsive UI have been reviewed and tested. No destructive D1 changes and no real orders/public spam during tests.


## Follow-up changes on 2026-10-11 (feature branch only)
- Replaced the hero floating labels/orbits with one CSS-built 3D burger on a plate; removed the JavaScript that changed the hero food to the first menu emoji.
- Removed the customer display-name/profile section and renamed the header action to `تنظیمات سایت`; order tracking and appearance preferences remain.
- Customer review cards support featured styles, click animation and thumbs-up/thumbs-down counts using the anonymous browser ID. The vote endpoint depends on panel migration `0005_review_reactions_and_featured.sql` and matching Worker route.
- The app branch's new code was syntax-checked, but these changes have not been deployed or interactively tested. Keep the branch separate until panel API, D1 migration, and customer UI are validated together.


## Final continuation update — 2026-10-11
- Customer hero is now designed as one CSS-generated dimensional burger on its plate, without hero orbit/floating labels; customer-name/profile UI is removed and the header action routes to site appearance settings while preserving order tracking and appearance controls.
- Review cards now include per-browser 👍/👎 counts and manager-highlight styles/interaction. Customer's procedural food renderer receives optional visual-effect codes configured for category customization options in the admin panel.
- Static parse check passed for the current inline customer script after the latest renderer edits. Full mobile/desktop interactive verification is still pending; this is a feature-branch build only, not deployed to production.
- Vote/highlight functionality depends on Worker route changes plus D1 migration 0005. Coordinate the release and test both sides together.


- The latest customer renderer commit maps configurable 3D effects per food family; e.g. cheese/tomato/mushroom/egg/jalapeño for compatible 3D food models, and hide chicken/sausage only for compatible chicken-sandwich/hot-dog models. The customer inline script passed static syntax parsing. Not deployed to production.

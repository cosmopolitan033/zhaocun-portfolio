# Showcase review, version 2

Static review hub for CURRENT and FORME. This branch does not change the approved production portfolio.

Build sibling repositories `zhaocun-current` and `zhaocun-forme` on `codex/immersive-review-v2` with `npm run build -- --base=./`. Put their output in `current/` and `forme/` under this hub's output folder. Copy both public font folders into root `fonts/` (the shared DM Sans files are identical), then deploy the assembled folder to Netlify.

Images are real browser captures of the two review candidates. The deployment is recorded in `deployment.json` after upload.

# Nicaragua Trip Website — Deployment Guide

**Live URL: https://mnr2cwc.github.io/mnr2cwc3.github.io/**

## How this is set up (and why)

The repo is `mnr2cwc/mnr2cwc3.github.io`. The repo name doesn't exactly match the owner name (`mnr2cwc` vs `mnr2cwc3`), so GitHub treats it as an ordinary **project page**, served under the `/mnr2cwc3.github.io/` subpath — not at `https://mnr2cwc3.github.io/`, which is an unrelated domain that doesn't exist.

GitHub Pages here is set to **"Deploy from a branch" → `main` → `/` (root)**, which means Pages serves whatever is committed at the repo root, as-is. So the project is arranged to put the *built* site at the repo root:

```
app/                  ← Vite source lives here
  index.html            (page template)
  src/                  (components, pages, data)
  public/               (404.html, .nojekyll)

index.html            ← BUILD OUTPUT (served by Pages)
assets/index.js       ← BUILD OUTPUT
assets/index.css      ← BUILD OUTPUT
404.html              ← BUILD OUTPUT (SPA fallback)
.nojekyll             ← BUILD OUTPUT (tells Pages to skip Jekyll)
```

Build output is committed on purpose — that's what makes branch-based Pages work without touching any settings.

## Making changes

Edit source under `app/`:
- **Itinerary data**: `app/src/data/itinerary.js`
- **Pages**: `app/src/pages/*.vue`
- **Navigation**: `app/src/components/Navigation.vue`

Then just commit and push:

```bash
git add -A
git commit -m "Update: description of changes"
git push
```

The `Build site` GitHub Action rebuilds from `app/` and commits the refreshed output back to `main` automatically. (Pushes it makes don't re-trigger the workflow, so it can't loop.)

If you'd rather build locally before pushing — or the Action ever fails — this does the same thing:

```bash
npm run build
git add -A && git commit -m "Rebuild" && git push
```

## Local development

```bash
npm run dev
```

Open **http://localhost:5173/mnr2cwc3.github.io/** (the base path matches production).

## Optional: cleaner setup

Two ways to simplify later, both requiring a GitHub settings change:

**A. Switch Pages to the "GitHub Actions" source.** Settings → Pages → Source → *GitHub Actions*. Then build output no longer needs committing, and `app/` could move back to the repo root. This is the more conventional setup — worth doing if the settings page cooperates.

**B. Rename the repo to exactly `mnr2cwc.github.io`.** It'd then be served at the root domain `https://mnr2cwc.github.io/` and `base` could become `/`. Note this would collide with the site already published there ("The Gang Goes to Indonesia"), so only do it if replacing that is intended.

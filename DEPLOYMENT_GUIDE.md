# Nicaragua Trip Website — Deployment Guide

Your repo is `mnr2cwc/mnr2cwc3.github.io`, owned by the **mnr2cwc** account. Because the repo name (`mnr2cwc3.github.io`) doesn't exactly match the owner's username (`mnr2cwc`), GitHub does **not** treat it as a special root user-page. It's a normal project page, served at:

**`https://mnr2cwc.github.io/mnr2cwc3.github.io/`**

(`https://mnr2cwc3.github.io/` is a different, unrelated domain — that's why it showed "Site not found.") The site is configured to match the correct subpath.

## One-time GitHub Settings (do this first)

1. Go to `https://github.com/mnr2cwc/mnr2cwc3.github.io/settings/pages`
2. Under "Build and deployment" → **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
   - As of the last check, this was still on the legacy branch-based builder, which serves the raw, unbuilt `index.html` straight from the repo (that's why the page was blank — the browser can't resolve the `import 'vue'` statement in raw source without a bundler).
3. Save. No branch selection needed — `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

## Watch the Deploy

1. Push: `git push`
2. Go to the **Actions** tab, watch "Deploy to GitHub Pages" finish green (~1–2 min)
3. Visit: **https://mnr2cwc.github.io/mnr2cwc3.github.io/**

## Local Development

```bash
cd "/home/sfuser/Documents/Nicaragua Trip"
npm run dev
```

Open http://localhost:5173/mnr2cwc3.github.io/ (matches the deployed subpath base).

Edit content in:
- **Itinerary data**: `src/data/itinerary.js`
- **Pages**: `src/pages/*.vue`
- **Navigation**: `src/components/Navigation.vue`

After making changes:

```bash
git add -A
git commit -m "Update: description of changes"
git push
```

GitHub Actions rebuilds and redeploys automatically.

## Build for Production

```bash
npm run build
```

Output goes to `dist/` (gitignored — only source is committed; Actions builds fresh on every push).

## If you'd rather have it at the root domain

Renaming the repo to exactly `mnr2cwc.github.io` (matching your username) would make GitHub treat it as the special root user-page, served at `https://mnr2cwc.github.io/`. That would replace whatever is currently live there (the "Gang Goes to Indonesia" site), so only do this if that's fine to overwrite/merge. If you do this, change `base` back to `/` in `vite.config.js` and `src/router/index.js`, and revert the `pathSegmentsToKeep` in `public/404.html` to `0`.

# Nicaragua Trip Website — Deployment Guide

Your repo is `mnr2cwc/mnr2cwc3.github.io` — a **user GitHub Pages repo** (special name `<username>.github.io`). That means it's served at the **root** of `https://mnr2cwc3.github.io/`, not at a subpath. The site is configured to match that.

## One-time GitHub Settings (this is likely why it's broken right now)

1. Go to `https://github.com/mnr2cwc/mnr2cwc3.github.io/settings/pages`
2. Under "Build and deployment" → **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
   - If it's currently set to "Deploy from a branch", that's the cause of the Jekyll error you saw — GitHub was trying to build the raw repo with Jekyll instead of using our Vite build via the Actions workflow.
3. Save. No branch selection is needed — the workflow at `.github/workflows/deploy.yml` handles the build and deploy automatically on every push to `main`.

## Watch the Deploy

1. Push your changes: `git push`
2. Go to the **Actions** tab in the repo
3. Watch the "Deploy to GitHub Pages" run — should finish green in 1–2 minutes
4. Site goes live at: **https://mnr2cwc3.github.io/**

## Local Development

```bash
cd "/home/sfuser/Documents/Nicaragua Trip"
npm run dev
```

Open http://localhost:5173/ (no subpath — matches the root-deployed base).

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

Output goes to `dist/` (gitignored — only the source is committed; Actions builds fresh on every push).

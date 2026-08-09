# Nicaragua Trip Website — Deployment Guide

Your Vue + Vite itinerary website is ready to deploy! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a **public** repository named `nicaragua-trip-2026`
3. Do NOT initialize it with any files (no README, .gitignore, or license)
4. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repo, GitHub will show you commands. Run:

```bash
cd "/home/sfuser/Documents/Nicaragua Trip"
git remote add origin https://github.com/YOUR_USERNAME/nicaragua-trip-2026.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repo at `https://github.com/YOUR_USERNAME/nicaragua-trip-2026`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch** (if not already selected)
   - Branch: **gh-pages** (should appear after the first Actions run)
   - Click **Save**

## Step 4: Watch GitHub Actions Build

1. Go to the **Actions** tab in your repo
2. You should see a workflow run titled "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1–2 minutes)
4. Once it's complete and green ✓, your site is live!

## Step 5: View Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/nicaragua-trip-2026/
```

## Local Development

To make changes locally:

```bash
cd "/home/sfuser/Documents/Nicaragua Trip"
npm run dev
```

Then open http://localhost:5173/nicaragua-trip-2026/ in your browser.

Edit files in `src/` and see changes live. The main content is in:
- **Itinerary data**: `src/data/itinerary.js`
- **Timeline component**: `src/components/TripTimeline.vue`
- **Activity options**: `src/components/LocationOptions.vue`
- **Styles & layout**: `src/App.vue`

After making changes, commit and push:

```bash
git add -A
git commit -m "Update: description of changes"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy.

## Build for Production

To generate the production bundle:

```bash
npm run build
```

Output is in the `dist/` folder (already set up in `.gitignore`).

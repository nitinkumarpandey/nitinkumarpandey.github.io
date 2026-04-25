# Nitinkumar Pandey Portfolio

Modern resume portfolio for GitHub Pages, built with React, Vite, and custom responsive CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production site is generated in `dist`.

## Deploy To GitHub Pages

### Option 1: GitHub Actions

This repo includes `.github/workflows/deploy.yml`.

1. Push the repo to GitHub.
2. Go to `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main`, or run the workflow manually from the `Actions` tab.

### Option 2: gh-pages Branch

For a project page such as `https://your-username.github.io/repository-name/`:

```bash
npm run deploy
```

The Vite `base` is set to `./`, so assets and the PDF resume resolve correctly from both user pages and project pages.

## Resume Asset

The downloadable resume is stored at:

```text
public/Nitinkumar-Pandey-Resume.pdf
```

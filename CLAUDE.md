# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume / portfolio for Edward Cahyadi. Self-contained static site — single `index.html` with React 18 and Babel Standalone loaded via CDN. No build step, no framework, no backend. Deployed on Vercel as static files.

## Local preview

No install or build. Serve the repo root with any static file server:

```bash
python3 -m http.server 3000
# or
npx serve .
```

Open http://localhost:3000.

## Architecture

**Entry point:** `index.html`
- Preloads Google Fonts (Inter Tight, JetBrains Mono, Fraunces)
- Inline splash screen: canvas animation that draws a constellation shaped like a capital "E", with pulses animating along its edges
- Loads React 18, ReactDOM 18, and Babel Standalone from unpkg
- Script order at bottom: `src/data.js` → `src/tools.jsx` → `src/bg_particles.jsx` → `src/app.jsx`
- JSX files are served as `type="text/babel"` and compiled in-browser — no bundler

**Source files (`src/`):**
- `app.jsx` — main app. Components for rotating phrases, Seoul clock, typing indicator, resume sections
- `tools.jsx` — agent-style UI tools that query the CV data
- `bg_particles.jsx` — animated background particles
- `data.js` — all CV content. Attached to `window.PORTFOLIO_DATA`. This is the single source of truth for person info, experience, links, languages, etc. Edit this file to update resume content
- `styles.css` — all styling. No Tailwind, no preprocessor

**Design tokens:** `index.html` has a `window.__TWEAKS` block between `EDITMODE-BEGIN`/`EDITMODE-END` markers for accent color, density, and hero style — intended to be rewritten by a host/editor.

**Screenshots:** `screenshots/` holds design iteration references — not shipped to the page.

## Deployment

Vercel, static. `vercel.json` sets `framework: null` and disables build/install commands so the repo root is served directly. No `package.json` — if one is added in the future, Vercel will try to detect a framework; keep it explicit.

## Content updates

To update the resume, edit `src/data.js`. No build required — reload the page. `?v=` query strings in `index.html` on each `src/*` reference act as cache busters; bump them if pushing a change and seeing stale CDN caching.

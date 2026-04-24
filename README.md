# Edward Cahyadi — Resume

Personal resume / portfolio. Self-contained static site: one HTML file, React via CDN, Babel Standalone for inline JSX (no build step).

## Local preview

Any static file server works. Examples:

```bash
# Python
python3 -m http.server 3000

# Node (no install)
npx serve .
```

Then open http://localhost:3000.

## Structure

- `index.html` — entry point, splash animation, script loaders
- `src/app.jsx` — main app component
- `src/tools.jsx` — interactive UI tools (agent-style queries over CV data)
- `src/bg_particles.jsx` — background particle animation
- `src/data.js` — CV content (person, experience, projects, skills)
- `src/styles.css` — all styling
- `screenshots/` — design iteration reference images

## Deploy

Deployed on Vercel as a static site. `vercel.json` explicitly disables framework detection so the repo root is served as-is.

If the Vercel project was previously configured for Next.js, reset the **Framework Preset** to **Other** in the project's dashboard settings — `vercel.json` overrides this on new deploys, but an existing cached build command may need clearing.

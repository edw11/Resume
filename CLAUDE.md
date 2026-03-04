# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/resume website for Edward Cahyadi, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, and **Sanity v4** as a headless CMS. Deployed on Vercel.

## Commands

- `npm run dev` — Start dev server with Turbopack (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint (next/core-web-vitals + next/typescript)

## Architecture

**Routing:** Uses Next.js App Router with a route group `(root)` for the main pages:
- `/` — Home page (Hero, Project list, Footer) — server component fetching from Sanity
- `/info` — About/experience page (server wrapper + client component with loading state)
- `/projects/[slug]` — Dynamic project detail pages using `Journal` component
- `/admin` — Embedded Sanity Studio for content management

**Data:** All content is managed via **Sanity CMS**:
- `sanity/schemas/` — Schema definitions (project, siteSettings)
- `sanity/queries.ts` — GROQ queries
- `sanity/fetch.ts` — Fetch functions with ISR (60s revalidation) and fallback defaults
- `sanity/types.ts` — TypeScript interfaces
- `sanity/client.ts` — Sanity client configuration
- `sanity/image.ts` — `urlFor()` helper for Sanity image URLs

**Images:** Project images are stored in Sanity CMS. Static assets (noise.png, loader.svg, fonts) remain in `public/`. The `urlFor()` helper from `sanity/image.ts` generates CDN URLs from Sanity image references.

**Fonts:** Neue Montreal loaded as local font files from `public/fonts/`, plus Gloock from Google Fonts (imported in `globals.css`).

**Styling:** Tailwind with custom colors (`def`, `dark_grey`, `whiteAlt`, `grayAlt`, `exoticBlue`, etc.), custom animations (`bounce-color`, `slideUp`), and a `glass` CSS class for glassmorphism effects. Uses `@designbycode/tailwindcss-text-shadow` plugin. Gradient hover effects use CSS custom properties (`--gradient-start`, `--gradient-end`) via the `.grad` class.

**Analytics:** Vercel Analytics integrated in root layout.

**CMS:** Sanity Studio is embedded at `/admin` via `next-sanity`. Content types:
- `project` — Portfolio project entries with card fields, detail fields, and explanation sections
- `siteSettings` — Singleton for personal info, hero text, links, skills, about sections, and experience

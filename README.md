# shaungonsalves.github.io

Personal portfolio site built with React, Vite, TypeScript, Tailwind CSS, and GSAP. Content is driven by typed data modules so you can update your resume without touching layout code.

## Prerequisites

- Node.js 22+ (matches CI)
- npm

## Scripts

| Command | Description |
|--------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint (`src/` and config; vendored assets ignored) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run deploy` | Runs `predeploy` (build) then publishes `dist/` to the `gh-pages` branch via `gh-pages` |

## Editing content

- **Resume body (experience, skills, education, etc.):** [`src/assets/resumeData.ts`](src/assets/resumeData.ts)
- **Hero headline (header card):** [`src/assets/headerData.ts`](src/assets/headerData.ts)
- **PDF download:** place `resume.pdf` at [`src/assets/pdf/resume.pdf`](src/assets/pdf/resume.pdf) (typed in [`src/assets/pdf/resume.pdf.d.ts`](src/assets/pdf/resume.pdf.d.ts))
- **Page metadata (title, Open Graph):** [`index.html`](index.html)
- **Static assets copied to site root:** [`public/`](public/) (e.g. [`public/favicon.svg`](public/favicon.svg))

## Deployment (GitHub Pages)

This repo uses the [`gh-pages`](https://github.com/tschaub/gh-pages) package to push `dist/` to the `gh-pages` branch. Ensure GitHub Pages is set to deploy from that branch (or your chosen source). User/org pages at `https://shaungonsalves.github.io/` typically use the `master` or `main` branch for source and publish built assets from `gh-pages`.

## Legacy folders

[`vendor/`](vendor/) and [`gulpfile.js`](gulpfile.js) are leftovers from an older static toolchain. The Vite app **does not** import them; the live site is produced only from `npm run build`. Do not delete without confirming nothing else in your workflow references those paths.

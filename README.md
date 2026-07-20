# Arrrepentimiento

A static site for the collective **Arrrepentimiento**, built with React, React Router,
[vite-react-ssg](https://github.com/daydreamer-riri/vite-react-ssg) for pre-rendering,
and [vanilla-extract](https://vanilla-extract.style/) for styling.

There is no dynamic content — every route is pre-rendered to static HTML at build time and
can be deployed to any static host (JamStack).

## Setup

```bash
yarn install
```

## Development

Start the dev server on http://localhost:3555

```bash
yarn dev
```

## Build

Generate the static site into `dist/`:

```bash
yarn build   # alias: yarn generate
```

Preview the production build locally:

```bash
yarn preview
```

## Project structure

```
src/
  assets/        images (bg, covers, collages, …)
  components/    block / card / organism UI + icons, media embeds, text renderer
  lib/           data access (getWorks/getPosts/getNotes) and link helpers
  pages/         route components (Home, Works, About, Work/Post/Note detail, …)
  resources/     static content data (works, posts, notes, links)
  styles/        vanilla-extract theme tokens + global styles
  types/         shared TypeScript types
  routes.tsx     React Router route table (+ getStaticPaths for SSG)
  main.tsx       vite-react-ssg entry
```

## Notes

- Routes: `/`, `/about`, `/works`, `/work/:id`, `/post/:id`, `/note/:id`, `/redirect/arr012`.
- Per-page `<title>` is managed by `PageHead` (react-helmet-async, via vite-react-ssg).
- Google Analytics (gtag.js) is loaded in `index.html`; page views are sent on route change
  from `Layout.tsx`.

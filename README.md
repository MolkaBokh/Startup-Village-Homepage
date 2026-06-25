# Startup Village Menzah

Standalone Next.js project containing **only** the Startup Village Menzah page,
extracted verbatim from the main site. The page is served at `/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Notes

- The page is rendered at `/`. The old path `/startup-village-menzah` redirects to `/`.
- All images are loaded remotely from the main site repo
  (`raw.githubusercontent.com/MolkaBokh/Startup-Village-Homepage/main/…`),
  so there are no local image assets to manage.
- Styling: the page sections use a self-contained scoped stylesheet
  (`.menzah-page`); the header/footer use Tailwind v4 (`src/app/globals.css`).

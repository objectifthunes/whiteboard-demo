# whiteboard-demo

Next.js (App Router, Turbopack) showcase for the [`@objectifthunes/whiteboard`](https://www.npmjs.com/package/@objectifthunes/whiteboard) component library.

Live at https://objectifthunes.github.io/whiteboard-demo/.

## Local dev

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Build / static export

```bash
pnpm build
```

`next build` runs with `output: 'export'` and emits a static site to `out/`. CI deploys that folder to GitHub Pages.

## Updating the whiteboard version

Bump `@objectifthunes/whiteboard` in `package.json` and `pnpm install`. Every release of the lib should be exercised here.

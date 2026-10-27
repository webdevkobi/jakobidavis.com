# jakobidavis.com

Personal professional site for Jakobi Davis. Built with [Astro](https://astro.build),
static output, plain CSS, minimal JavaScript.

## Stack

| Layer   | Service             | Job                                                  |
|---------|---------------------|------------------------------------------------------|
| Code    | GitHub              | Source of truth. Every push to `main` deploys.       |
| Compute | Cloudflare Workers  | Builds the site on push and serves it from the edge. |
| DNS     | Cloudflare          | Domain, SSL, email routing, protection.              |

## Run it locally

Requires Node 22.12 or newer (`node -v` to check, install from nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:4321. Edits to `src/` reload instantly.

## Pages

| Path            | File                             |
|-----------------|----------------------------------|
| `/`             | `src/pages/index.astro`          |
| `/projects/`    | `src/pages/projects/index.astro` |
| `/projects/...` | `src/pages/projects/[...slug].astro` |
| `/models/`      | `src/pages/models.astro`         |
| `/about/`       | `src/pages/about.astro`          |
| `/writing/`     | `src/pages/writing.astro`        |
| `/credentials/` | `src/pages/credentials.astro`    |
| `/resume/`      | `src/pages/resume.astro`         |
| `/contact/`     | `src/pages/contact.astro`        |
| 404             | `src/pages/404.astro`            |

## Where things live

- `src/content/projects/` : one markdown file per project. Add a file, get a page.
  The block order on the page is fixed, so the prose for each block lives in
  frontmatter. `src/content.config.ts` is the schema and the build fails if a
  field is missing.
- `src/data/site.json` : name, email, links, nav, booking URL, resume date.
- `src/data/carbon-price.json` : the numbers behind the slider on `/models/`.
- `src/data/civil.json` : the Civil foundations row on the projects page.
- `src/layouts/Base.astro` : head, fonts, header, footer.
- `src/styles/global.css` : colors, type, shared components.
- `public/papers/` : project PDFs. `public/figures/` : project images.
- `public/logo/` : brand SVGs. `public/resume.pdf` : the resume.
- `wrangler.jsonc` : Cloudflare Workers deploy config.
- `docs/SETUP.md` : one-time GitHub and Cloudflare setup.

## Content still to fill in

Anything written as `TODO:` in a data or content file renders on the page in a
visibly unfinished style, so it cannot ship unnoticed. Search for it:

```bash
grep -rn "TODO:" src/
```

## Adding a project

1. Copy an existing file in `src/content/projects/`.
2. Set `order` to where it should appear.
3. Fill every field. The build tells you if one is missing.
4. Put the PDF in `public/papers/` and point `downloads` at it.

## Deploy

Push to `main`. Cloudflare rebuilds and ships in about a minute.

To deploy from your laptop instead: `npm run build && npx wrangler deploy`.

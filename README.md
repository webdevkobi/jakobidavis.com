# jakobidavis.com

Personal portfolio for Jakobi Davis. Built with [Astro](https://astro.build).

## Stack

| Layer   | Service                     | Job                                              |
|---------|-----------------------------|--------------------------------------------------|
| Code    | GitHub                      | Source of truth. Every push to `main` deploys.   |
| Compute | DigitalOcean App Platform   | Builds the site and serves it to visitors.       |
| DNS     | Cloudflare                  | Points jakobidavis.com at DigitalOcean. Email routing, SSL, protection. |

## Run it locally

Requires Node 22.12 or newer (`node -v` to check, install from nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:4321. Edits to `src/` reload instantly.

## Where things live

- `src/pages/index.astro` : the homepage. Content arrays at the top of the file.
- `src/layouts/Base.astro` : page shell, title, SEO tags, fonts.
- `src/styles/global.css` : colors, type, spacing.
- `public/` : static files (favicon, images, resume PDF).
- `.do/app.yaml` : DigitalOcean deploy config.
- `docs/SETUP.md` : one-time GitHub, DigitalOcean, and Cloudflare setup.

## Deploy

Push to `main`. DigitalOcean rebuilds and ships in about a minute.

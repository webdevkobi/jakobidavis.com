# One-time setup

Do these in order. Each step depends on the one before it.

Everything lives in one place now: GitHub holds the code, Cloudflare builds it,
serves it, and handles DNS. There is no second hosting provider to wire up.

## 1. Push the code to GitHub

1. Go to github.com/new. Name the repo `jakobidavis.com`. Leave it **empty** (no README, no .gitignore). Private or public, your call.
2. In a terminal inside this folder:

```bash
git remote add origin https://github.com/webdevkobi/jakobidavis.com.git
git push -u origin main
```

If the remote is already added (`git remote -v` shows `origin`), just push.

## 2. Move DNS to Cloudflare

1. Sign in at dash.cloudflare.com and click **Add a domain**. Enter `jakobidavis.com`. Pick the **Free** plan.
2. Cloudflare gives you two nameservers (like `xxx.ns.cloudflare.com`).
3. Go to wherever you bought the domain and replace its nameservers with those two.
4. Wait for Cloudflare to email you that the domain is active. Usually under an hour, can take up to 24.

You can do step 3 while the domain is still pending. The Worker in step 3 does
not need DNS to exist yet.

## 3. Create the Worker from the repo

This connects GitHub to Cloudflare so every push to `main` builds and deploys.

1. In the Cloudflare dashboard: **Compute (Workers) > Create > Import a repository**.
2. Authorize Cloudflare's GitHub app and pick `webdevkobi/jakobidavis.com`, branch `main`.
3. Confirm the build settings. They should read:
   - **Build command:** `npm ci && npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** `/`
4. Add one build variable so Cloudflare uses the right Node: **NODE_VERSION** = `22`.
5. Click **Create and deploy**.

The rest (worker name, what to serve) comes from `wrangler.jsonc` in this repo.
It points Cloudflare at the `dist/` folder Astro builds. You don't configure that
in the dashboard.

When it finishes you get a URL like `jakobidavis.<your-subdomain>.workers.dev`.
Open it and confirm the site loads.

## 4. Connect the domain

Because DNS is already on Cloudflare, this is two clicks and no CNAME copying.

1. Open the Worker, then **Settings > Domains & Routes > Add > Custom domain**.
2. Enter `jakobidavis.com`. Cloudflare creates the DNS record and issues the certificate for you.
3. Repeat for `www.jakobidavis.com`.
4. Wait for both to show as **Active**. Usually a minute or two.

Both names now serve the same site. If you'd rather have `www` redirect to the
bare domain instead of serving a duplicate, skip adding the `www` custom domain
and instead add a **Rules > Redirect Rules** entry: hostname equals
`www.jakobidavis.com` → dynamic redirect to
`concat("https://jakobidavis.com", http.request.uri.path)`, status 301.

## 5. Email at your domain (optional, free)

Cloudflare **Email > Email Routing**. Create `hello@jakobidavis.com` and forward it to your real inbox. Cloudflare adds the DNS records for you.

## Deploying by hand (optional)

You should not need this, since pushing to `main` is the normal path, but to ship from
your laptop:

```bash
npm run build
npx wrangler deploy
```

The first run opens a browser to log in to Cloudflare.

## Done

From now on: edit, commit, push. Cloudflare rebuilds and the live site updates on
its own, usually inside a minute.

## Notes

- **Custom 404:** `wrangler.jsonc` is set to serve a `404.html` when one exists. Add `src/pages/404.astro` and Astro will generate it.
- **Preview URLs:** Cloudflare builds pull requests too, and comments a preview URL on the PR.
- **Rollback:** the Worker's **Deployments** tab lists every version; you can promote an older one without touching git.

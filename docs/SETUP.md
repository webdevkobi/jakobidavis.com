# One-time setup

Do these in order. Each step depends on the one before it.

## 1. Push the code to GitHub

1. Go to github.com/new. Name the repo `jakobidavis.com`. Leave it **empty** (no README, no .gitignore). Private or public, your call.
2. In a terminal inside this folder:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/jakobidavis.com.git
git push -u origin main
```

## 2. Move DNS to Cloudflare

1. Sign in at dash.cloudflare.com and click **Add a domain**. Enter `jakobidavis.com`. Pick the **Free** plan.
2. Cloudflare gives you two nameservers (like `xxx.ns.cloudflare.com`).
3. Go to wherever you bought the domain and replace its nameservers with those two.
4. Wait for Cloudflare to email you that the domain is active. Usually under an hour, can take up to 24.

## 3. Deploy on DigitalOcean

1. In the DigitalOcean dashboard: **Create > App Platform**.
2. Connect GitHub and pick the `jakobidavis.com` repo, branch `main`.
3. DO detects a static site. Confirm build command `npm ci && npm run build` and output directory `dist`.
4. Choose the **Static Site** plan (free tier covers this).
5. Deploy. You get a temporary URL like `jakobidavis-xxxxx.ondigitalocean.app`. Check it loads.

## 4. Connect the domain

1. In the DO app: **Settings > Domains > Add Domain**. Enter `jakobidavis.com`. Choose **"You manage your domain"** (because Cloudflare does).
2. DO shows you a CNAME target (your `.ondigitalocean.app` address).
3. In Cloudflare **DNS > Records**, add:

| Type  | Name | Target                               | Proxy        |
|-------|------|--------------------------------------|--------------|
| CNAME | `@`  | `jakobidavis-xxxxx.ondigitalocean.app` | DNS only (gray cloud) |
| CNAME | `www`| `jakobidavis-xxxxx.ondigitalocean.app` | DNS only (gray cloud) |

4. Repeat **Add Domain** in DO for `www.jakobidavis.com`.
5. Wait for DO to show the domains as **Active** with a certificate issued.
6. Optional, after it works: flip both records to **Proxied** (orange cloud) and set Cloudflare **SSL/TLS** mode to **Full (strict)**. Leave them gray until DO finishes issuing the certificate.

## 5. Email at your domain (optional, free)

Cloudflare **Email > Email Routing**. Create `hello@jakobidavis.com` and forward it to your real inbox. Cloudflare adds the DNS records for you.

## Done

From now on: edit, commit, push. The live site updates on its own.

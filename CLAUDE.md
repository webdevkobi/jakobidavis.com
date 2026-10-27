# jakobidavis.com

## Deployment

- **Hosting:** Cloudflare Workers (static assets), project name `jakobidavis`, connected to this GitHub repo through Workers Builds.
- **Every push to `main` automatically builds (`npm run build`) and deploys (`npx wrangler deploy`) to production** at jakobidavis.com and www.jakobidavis.com. Pushing to `main` = going live.
- Pushes to any other branch get their own preview URL and do not touch production.
- The GitHub Actions workflow (`.github/workflows/build.yml`) is only a build check. It does not deploy.
- **Default workflow:** preview locally, Jakobi approves, then commit and push straight to `main`. Use a branch only when he asks for one or the change is risky.
- **Rollback:** revert the commit and push, or use Rollback under Deployments in the Cloudflare dashboard.

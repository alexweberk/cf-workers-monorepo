# Cloudflare Workers Monorepo ( pnpm workspaces )

A minimal template for running **multiple Cloudflare Workers** in a single repository using **pnpm workspaces**.
Each Worker lives in its own folder under `workers/`, with its own `wrangler.toml`, while tool versions and the lock-file are shared at the repo root.

---

## Prerequisites

| Tool         | Minimum version           | Install / docs                                        |
| ------------ | ------------------------- | ----------------------------------------------------- |
| **Node.js**  | 18 LTS                    | <https://nodejs.org>                                  |
| **pnpm**     | 8.x                       | `npm i -g pnpm`                                       |
| **wrangler** | added as a dev-dependency | <https://developers.cloudflare.com/workers/wrangler/> |

---

## Quick start

```bash
# clone & install deps
git clone <your-repo-url>
cd cf-workers-monorepo
pnpm install

# run a single Worker (e.g. "worker-a")
pnpm --filter worker-a dev          # http://localhost:8787

# run every Worker in parallel
pnpm run dev:all

# deploy all Workers
pnpm run deploy:all

# generate types for all Workers
pnpm run cf-typegen:all
```

### Adding a new Worker

When adding a new Worker, you can use the following command to add it to the monorepo:

```bash
pnpm create cloudflare@latest ./apps/<<worker-name>>
```

Then change the port it runs on in the `dev` script in the `package.json` file.

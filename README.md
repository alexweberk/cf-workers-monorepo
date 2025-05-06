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

# run a single Worker (e.g. "hello")
pnpm --filter hello dev          # http://localhost:8787

# run every Worker in parallel
pnpm run dev:all
```

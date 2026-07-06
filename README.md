# AIB — African Insurance Brokers Website

Corporate website for **AIB (African Insurance Brokers Limited)** — a specialist insurance broker providing risk advisory, market placement, and claims advocacy across energy, marine, aviation, and engineering infrastructure sectors.

**Developer:** Alfred Ayilara Pur
**Repository:** [github.com/AlfredPur01/insurance](https://github.com/AlfredPur01/insurance)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) v1 (React 19, SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) v1 (file-based) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Build Tool | [Vite](https://vitejs.dev/) 7 + Nitro (node-server preset) |
| Database | [Turso](https://turso.tech/) (serverless SQLite) via [Drizzle ORM](https://orm.drizzle.team/) + @libsql/client |
| Package Manager | [pnpm](https://pnpm.io/) 10.x |
| Deployment | Node.js + PM2 + Nginx (VPS) |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, stats, CTA |
| `/services` | Services — risk advisory, market execution, claims advocacy |
| `/industries` | Industries — overview of all four sectors |
| `/industries/energy` | Energy sector detail page |
| `/industries/marine` | Marine sector detail page |
| `/industries/aviation` | Aviation sector detail page |
| `/industries/engineering-infrastructure` | Engineering & Infrastructure detail page |
| `/claims-advocacy` | Claims advocacy service page |
| `/about` | About AIB |
| `/contact` | Contact & consultation request form |

---

## Project Structure

```
insurance/
├── src/
│   ├── assets/              # Images and logos
│   ├── components/
│   │   ├── site/            # Layout components (Header, Footer, PageHero, etc.)
│   │   └── ui/              # shadcn/ui primitives
│   ├── db/
│   │   ├── schema.ts        # Drizzle table definitions
│   │   └── index.ts         # DB connection singleton
│   ├── routes/              # File-based pages (TanStack Router)
│   │   ├── __root.tsx       # Root layout (Header + Footer)
│   │   ├── index.tsx        # Home page
│   │   ├── industries/
│   │   │   ├── index.tsx    # Industries overview
│   │   │   ├── energy.tsx
│   │   │   ├── marine.tsx
│   │   │   ├── aviation.tsx
│   │   │   └── engineering-infrastructure.tsx
│   │   └── contact.tsx
│   └── server/
│       ├── contact.ts       # submitContactForm server function
│       └── enquiry.ts       # submitEnquiryForm server function
├── deploy/
│   ├── ecosystem.config.cjs # PM2 process config
│   ├── nginx.conf           # Nginx reverse-proxy + SSL config
│   └── DEPLOY.md            # Step-by-step VPS deployment guide
├── drizzle.config.ts        # Drizzle Kit config
├── vite.config.ts           # Vite + Nitro config (node-server preset)
└── pnpm-workspace.yaml
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.x (`npm install -g pnpm`)

### Install & run locally

```bash
git clone https://github.com/AlfredPur01/insurance.git
cd insurance

pnpm install

# Start the dev server (uses a local SQLite file — no Turso account needed)
pnpm dev
```

For form submissions to persist in local dev, run `pnpm db:push` once first to create the local DB tables.

The app runs at `http://localhost:5173` (or the next available port).

---

## Database

Form submissions are stored in [Turso](https://turso.tech/) — a serverless SQLite service that works on Vercel, Cloudflare, and any Node.js VPS. Locally it falls back to a file-based SQLite database (no account needed for development).

| Table | Purpose |
|---|---|
| `contact_submissions` | General contact form submissions from `/contact` |
| `industry_enquiries` | Industry-specific enquiry form submissions |

### Setup (production)

1. Create a Turso database (`turso db create aib`)
2. Get the URL (`turso db show aib --url`) and an auth token (`turso db tokens create aib`)
3. Set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` as environment variables in Vercel
4. Apply the schema once: `TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... pnpm db:push`

See [`deploy/DEPLOY.md`](deploy/DEPLOY.md) for full instructions.

### Useful DB commands

```bash
# Sync schema to DB (run after schema changes)
pnpm db:push

# Generate SQL migration files
pnpm db:generate

# Open Drizzle Studio (visual DB browser)
pnpm db:studio
```

---

## Build

```bash
pnpm build
```

Output is written to `.output/`. The server entry point is `.output/server/index.mjs`.

---

## Deployment (VPS)

See [`deploy/DEPLOY.md`](deploy/DEPLOY.md) for the full step-by-step guide.

**Summary:**

1. Pull code, run `pnpm install --frozen-lockfile`
2. Run `pnpm db:push` to create/update DB tables
3. Run `pnpm build`
4. Start with PM2: `pm2 start deploy/ecosystem.config.cjs`
5. Configure Nginx using `deploy/nginx.conf` (replace `yourdomain.com`)
6. Obtain SSL certificate: `certbot --nginx -d yourdomain.com`

The app runs on port `3000` by default (configurable in `deploy/ecosystem.config.cjs`). Nginx proxies port `443` → `3000`.

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `TURSO_DATABASE_URL` | `file:./data/aib.db` | Turso DB URL (`libsql://...`) or local file path |
| `TURSO_AUTH_TOKEN` | _(none)_ | Turso auth token (required for cloud DB, not local) |
| `PORT` | `3000` | Port the Node.js server listens on (VPS only) |
| `NODE_ENV` | `development` | Set to `production` for production builds |

---

## Contact

**AIB — African Insurance Brokers Limited**
- **Head Office:** No 27a Babatunde Jose, Off Adetokunbo Ademola, Victoria Island, Lagos, Nigeria
- **Branch Office:** 55/57 Apara Road, GRA Phase II, Port Harcourt, Rivers State, Nigeria
- **Phone:** +234 9131036089 / +234 8087281548
- **Email:** info@aibltd.insure

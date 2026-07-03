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
| Database | SQLite via [Drizzle ORM](https://orm.drizzle.team/) + better-sqlite3 |
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

# Create the SQLite database tables
pnpm db:push

# Start the dev server
pnpm dev
```

The app runs at `http://localhost:5173` (or the next available port).

---

## Database

Form submissions are persisted to a local SQLite file (`./data/aib.db` by default).

| Table | Purpose |
|---|---|
| `contact_submissions` | General contact form submissions from `/contact` |
| `industry_enquiries` | Industry-specific enquiry form submissions |

### Useful DB commands

```bash
# Sync schema to DB (run after schema changes)
pnpm db:push

# Generate SQL migration files
pnpm db:generate

# Open Drizzle Studio (visual DB browser)
pnpm db:studio
```

To use a custom DB path, set the `DATABASE_PATH` environment variable:

```bash
DATABASE_PATH=/var/data/aib/aib.db pnpm db:push
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
| `DATABASE_PATH` | `./data/aib.db` | Absolute path to the SQLite database file |
| `PORT` | `3000` | Port the Node.js server listens on |
| `NODE_ENV` | `development` | Set to `production` for production builds |

---

## Contact

**AIB — African Insurance Brokers Limited**
- **Head Office:** No 27a Babatunde Jose, Off Adetokunbo Ademola, Victoria Island, Lagos, Nigeria
- **Branch Office:** 55/57 Apara Road, GRA Phase II, Port Harcourt, Rivers State, Nigeria
- **Phone:** +234 9131036089 / +234 8087281548
- **Email:** info@aibltd.insure

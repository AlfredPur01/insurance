# Deployment Guide

## Database — Turso (required before first deploy)

This app uses [Turso](https://turso.tech/) — a serverless SQLite service that works on
Vercel, Cloudflare, and any Node.js server (VPS).

```bash
# 1. Install the Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# 2. Sign up / log in
turso auth login

# 3. Create a database
turso db create aib

# 4. Get the connection URL
turso db show aib --url
# → libsql://aib-<username>.turso.io

# 5. Create an auth token
turso db tokens create aib
# → <token>
```

Set these two values as environment variables in both Vercel (dashboard → Settings →
Environment Variables) and your VPS (`deploy/ecosystem.config.cjs`):

| Variable | Value |
|---|---|
| `TURSO_DATABASE_URL` | `libsql://aib-<username>.turso.io` |
| `TURSO_AUTH_TOKEN` | `<token from step 5>` |

### Apply the DB schema (once, after creating the database)

```bash
TURSO_DATABASE_URL=libsql://aib-<username>.turso.io \
TURSO_AUTH_TOKEN=<token> \
pnpm db:push
```

---

## Vercel deployment

Push to GitHub — Vercel redeploys automatically.
Add the two Turso env vars in Vercel dashboard → Settings → Environment Variables.

---

## VPS deployment (one-time setup)

```bash
# 1. Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Install pnpm + PM2
npm install -g pnpm pm2

# 3. Install Nginx + Certbot
sudo apt install -y nginx certbot python3-certbot-nginx
```

### VPS — every release

```bash
git pull origin main
pnpm install --frozen-lockfile
pnpm build

# First deploy
pm2 start deploy/ecosystem.config.cjs
pm2 save && pm2 startup   # follow printed command

# Subsequent deploys
pm2 reload aib-website
```

### Nginx config

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/aib
# Edit and replace yourdomain.com
sudo nano /etc/nginx/sites-available/aib
sudo ln -s /etc/nginx/sites-available/aib /etc/nginx/sites-enabled/aib
sudo nginx -t && sudo systemctl reload nginx
```

### SSL certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Local development

```bash
# Uses a local SQLite file (no Turso account needed)
pnpm dev

# To test with Turso locally:
TURSO_DATABASE_URL=libsql://... TURSO_AUTH_TOKEN=... pnpm dev
```

### Drizzle Studio (inspect DB)

```bash
# Local file DB
pnpm db:studio

# Turso cloud DB
TURSO_DATABASE_URL=libsql://... TURSO_AUTH_TOKEN=... pnpm db:studio
```

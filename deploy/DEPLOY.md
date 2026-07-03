# VPS Deployment Guide

## One-time VPS setup

```bash
# 1. Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Install pnpm
npm install -g pnpm

# 3. Install PM2
npm install -g pm2

# 4. Install Nginx + Certbot
sudo apt install -y nginx certbot python3-certbot-nginx

# 5. Create data directory for SQLite
sudo mkdir -p /var/data/aib
sudo chown $USER:$USER /var/data/aib
```

## Deploy (every release)

```bash
# On the VPS — pull latest code
git pull origin main

# Install dependencies
pnpm install --frozen-lockfile

# Create/update DB tables from schema
pnpm db:push

# Build the app (outputs to .output/)
pnpm build

# Start (first time) or reload (subsequent deploys)
pm2 start deploy/ecosystem.config.cjs   # first time
pm2 reload aib-website                  # subsequent deploys

# Save PM2 process list so it survives reboots
pm2 save
pm2 startup   # follow the printed command to enable on boot
```

## SSL certificate (first time only)

```bash
# Replace yourdomain.com with your actual domain
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Nginx config

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/aib
# Edit the file and replace yourdomain.com with your actual domain
sudo nano /etc/nginx/sites-available/aib

sudo ln -s /etc/nginx/sites-available/aib /etc/nginx/sites-enabled/aib
sudo nginx -t          # verify config
sudo systemctl reload nginx
```

## Environment variables

Set in `deploy/ecosystem.config.cjs`:
- `PORT` — port the Node.js server listens on (default 3000)
- `DATABASE_PATH` — absolute path to the SQLite file (default `/var/data/aib/aib.db`)

## Drizzle Studio (inspect DB on VPS)

```bash
# On VPS — opens a browser UI to view/edit submissions
DATABASE_PATH=/var/data/aib/aib.db pnpm db:studio
```

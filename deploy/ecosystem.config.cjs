module.exports = {
  apps: [
    {
      name: "aib-website",
      script: ".output/server/index.mjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        // Set this to an absolute path outside the app directory so the DB
        // survives redeployments: e.g. /var/data/aib/aib.db
        DATABASE_PATH: "/var/data/aib/aib.db",
      },
    },
  ],
};

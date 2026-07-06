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
        // Turso database credentials — set these before starting
        TURSO_DATABASE_URL: "libsql://your-db-name.turso.io",
        TURSO_AUTH_TOKEN: "your-turso-auth-token",
      },
    },
  ],
};

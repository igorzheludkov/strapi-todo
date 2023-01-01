// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "0.0.0.0"),
      port: env.int("DATABASE_PORT", $PORT),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    debug: false,
  },
});

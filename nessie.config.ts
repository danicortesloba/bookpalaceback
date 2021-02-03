import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie/mod.ts";
import type { ConnectionOptions } from "https://deno.land/x/postgres@v0.4.6/connection_params.ts";

/** These are the default config options. */
const clientOptions: ClientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
  experimental: true,
};

/** Select one of the supported clients */
const clientPg = new ClientPostgreSQL(clientOptions, {
  database: "bookpalace",
  hostname: "localhost",
  port: 5432,
  user: "danielacortes"
});

export const pgOptions: ConnectionOptions = {
  database: "bookpalace",
  hostname: "localhost",
  port: 5432,
  user: "danielacortes"
};


/** This is the final config object */
const config = {
  client: clientPg,
  // Defaults to false, if you want the query builder exposed in migration files, set this to true.
  exposeQueryBuilder: false,
};

export default config;

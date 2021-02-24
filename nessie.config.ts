import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie/mod.ts";
import type { ConnectionOptions } from "https://deno.land/x/postgres@v0.4.6/connection_params.ts";

const clientConfig: ClientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
  experimental: true,
};

const connectionConfig: ConnectionOptions = {
  database: "postgres",
  hostname: "localhost",
  password: "mysecretpassword",
  port: 5432,
  user: "postgres",
};

const config = {
  client: new ClientPostgreSQL(clientConfig, connectionConfig),
  exposeQueryBuilder: false,
};

export default config;

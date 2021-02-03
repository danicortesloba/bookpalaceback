import { Application } from "https://deno.land/x/oak/mod.ts";
import { registerRoutes } from "./controller/index.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";
import { pgOptions } from './nessie.config.ts';

const port = 8000;
const app = new Application();

registerRoutes(app);

const client = new Client(pgOptions)
await client.connect();

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port });

import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
    user: "danielacortes",
    database: "bookpalace",
    hostname: "localhost",
    port: 5432,
});
await client.connect();
export default client;
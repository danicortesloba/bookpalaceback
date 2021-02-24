import { Client } from "https://deno.land/x/postgres/mod.ts";
import { makeBookRepository } from "./bookRepository.ts";

const dbClient = new Client({
  database: "postgres",
  hostname: "localhost",
  password: "mysecretpassword",
  port: 5432,
  user: "postgres",
});

await dbClient.connect();

export const bookRepository = makeBookRepository({ dbClient });

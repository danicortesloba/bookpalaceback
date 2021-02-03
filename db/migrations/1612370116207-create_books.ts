import { AbstractMigration, Info, ClientPostgreSQL } from "https://deno.land/x/nessie/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";
// import Dex from "https://deno.land/x/dex/mod.ts";

export default class ExperimentalMigration extends AbstractMigration {
  /** Runs on migrate */
  async up(info: Info): Promise<void> {
    this.client.query("CREATE TABLE table1 (id int)");
    console.log("Table created")
  }

  /** Runs on rollback */
  async down(info: Info): Promise<void> {
  }
}

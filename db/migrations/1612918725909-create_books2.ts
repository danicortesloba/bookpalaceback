import { AbstractMigration, Info } from "https://deno.land/x/nessie/mod.ts";
// import Dex from "https://deno.land/x/dex/mod.ts";

export default class ExperimentalMigration extends AbstractMigration {
  /** Runs on migrate */
  async up(info: Info): Promise<void> {
    await this.client.query("CREATE TABLE books(id SERIAL PRIMARY KEY, title VARCHAR(500) NOT NULL, author_id int, genre_id int)");
  }

  /** Runs on rollback */
  async down(info: Info): Promise<void> {
  }
}

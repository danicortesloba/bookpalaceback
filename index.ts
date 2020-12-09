import { Application } from "https://deno.land/x/oak/mod.ts";
import { registerRoutes } from "./controller/index.ts";

const port = 8000;
const app = new Application();

registerRoutes(app);

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port });

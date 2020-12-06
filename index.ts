import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const app = new Application();

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world!";
});

app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port });

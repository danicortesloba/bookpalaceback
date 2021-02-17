import { Router } from "https://deno.land/x/oak/mod.ts";
import { makeHelloWorld } from "./controller.ts";
import { getAllBooks } from "./book-controller.ts"
import { helloWorldService } from "../service/index.ts";

const router = new Router();
export const helloWorldController = makeHelloWorld(router, helloWorldService);

export const registerRoutes = (app: any) => {
  helloWorldController();

  app.use(router.allowedMethods());
  app.use(router.routes());
};

router
  .get("/books", getAllBooks)
  // .get("/books/:id", getBookDetails)
  // .post("/books", createBook)
  // .put("/books/:id", updateBook)
  // .delete("/books/:id", deleteBook)

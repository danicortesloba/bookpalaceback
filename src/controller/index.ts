import { Router } from "https://deno.land/x/oak/mod.ts";
import { makeBookController } from "./bookController.ts";
import { bookService } from "../service/index.ts";

const router = new Router();
export const bookController = makeBookController({ bookService });

export const registerRoutes = (app: any) => {
  app.use(router.allowedMethods());
  app.use(router.routes());
};

router.get("/books", bookController.getAllBooks);

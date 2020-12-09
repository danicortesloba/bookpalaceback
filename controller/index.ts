import { makeHelloWorld } from "./controller.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { helloWorldService } from "../service/index.ts";

const router = new Router();
export const helloWorldController = makeHelloWorld(router, helloWorldService);

export const registerRoutes = (app: any) => {
  helloWorldController();

  app.use(router.allowedMethods());
  app.use(router.routes());
};

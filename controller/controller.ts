import { Router } from "https://deno.land/x/oak/mod.ts";

export const makeHelloWorld = (router: Router, service: any) => {
  return () => {
    router.get("/", (ctx) => {
      ctx.response.headers.set("Access-Control-Allow-Origin", "*");
      ctx.response.body = service.getHelloWorld();
    });
  };
};

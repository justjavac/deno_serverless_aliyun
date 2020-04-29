import {
  ServerRequest,
  listenAndServe,
} from "https://deno.land/std@v0.41.0/http/server.ts";

async function handler(req: ServerRequest): Promise<void> {
  const rid: string = req.headers.get("x-fc-request-id") ?? "unknow";
  console.log(`FC Invoke Start RequestId: ${rid}`);
  req.respond({ body: req.body });
}

const port = Deno.env("FC_SERVER_PORT") ?? "9000";
listenAndServe(`:${port}`, handler);
console.log("FunctionCompute Deno runtime inited.");

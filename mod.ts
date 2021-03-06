import {
  listenAndServe,
  ServerRequest,
} from "https://deno.land/std@0.82.0/http/server.ts";

function handler(req: ServerRequest): void {
  // 获取 request id
  const rid: string = req.headers.get("x-fc-request-id") ?? "unknow";

  // 记录日志
  console.log(`FC Invoke Start RequestId: ${rid}`);

  // 实现 echo 服务：原样返回用户的请求
  req.respond({ body: req.body });
}

// 从环境变量获取端口号
const port = Deno.env.get("FC_SERVER_PORT") ?? "9000";

// 监听网络请求，并处理
listenAndServe(`:${port}`, handler);

// 记录启动日志
console.log("FunctionCompute Deno runtime inited.");

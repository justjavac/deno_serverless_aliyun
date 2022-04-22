import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

function handler(req: Request): Response {
  // 获取 request id
  const rid: string = req.headers.get("x-fc-request-id") ?? "unknow";

  // 记录日志
  console.log(`FC Invoke Start RequestId: ${rid}`);

  // 实现 echo 服务：原样返回用户的请求
  return new Response(req.body);
}

// 从环境变量获取端口号
const port = Deno.env.get("FC_SERVER_PORT") ?? "9000";

// 监听网络请求，并处理
serve(handler, { port: parseInt(port) });

// 记录启动日志
console.log("FunctionCompute Deno runtime inited.");

const server = Deno.listen({ port: 9000 });

// 记录启动日志
console.log("FunctionCompute Deno runtime inited.");

for await (const conn of server) {
  handle(conn);
}

async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // 获取 request id
    const rid: string = requestEvent.request.headers.get("x-fc-request-id") ?? "unknow";

    // 记录日志
    console.log(`FC Invoke Start RequestId: ${rid}`);

    await requestEvent.respondWith(
      new Response(requestEvent.request.body, {
        status: 200,
      }),
    );
  }
}

# deno_serverless_aliyun

Deno + Serverless = Awesome

## 背景

目前阿里云的函数计算服务只支持 Nodejs、Python、PHP、Java、.Net。本项目使用阿里云的 custom runtime 功能开发了可运行
Deno 的 Serverless 环境。

## 使用

首先安装官方命令行工具
[Serverless Devs](https://docs.serverless-devs.com/serverless-devs/install):

```shell
npm install @serverless-devs/s -g
```

或

```shell
yarn global add @serverless-devs/s
```

安装成功后运行
[`s config`](https://docs.serverless-devs.com/serverless-devs/command/config) 配置
Account ID、Access Key ID、Secret Access Key、Default Region Name。

克隆（或下载）本仓库:

```shell
git clone git@github.com:justjavac/deno_serverless_aliyun.git
```

## 部署

```shell
cd deno_serverless_aliyun
s deploy
```

自定义部署:

1. 使用 Deno 打包 TypeScript 文件。这一步是可选的，提前打包文件而不是在运行时再编译可以提升 Deno Serverless 的冷启动性能。

   ```shell
   deno task build
   ```

2. 构建 Deno Serverless 运行环境：

   ```shell
   s build
   ```

3. 部署

   ```shell
   s deploy
   ```

## 测试

部署完成后我们可以测试刚才的函数。

```shell
s invoke --event "Hello World"
```

控制台输出:

```plain
...
FC Invoke Result:
Hello World
```

第一次运行时函数需要冷启，会稍微有点慢。

```plain
Duration: 11.31 ms, Billed Duration: 12 ms, Memory Size: 512 MB, Max Memory Used: 41.50 MB
Duration: 1.66 ms, Billed Duration: 2 ms, Memory Size: 512 MB, Max Memory Used: 41.62 MB
Duration: 1.41 ms, Billed Duration: 2 ms, Memory Size: 512 MB, Max Memory Used: 41.87 MB
Duration: 1.50 ms, Billed Duration: 2 ms, Memory Size: 512 MB, Max Memory Used: 42.25 MB
Duration: 1.41 ms, Billed Duration: 2 ms, Memory Size: 512 MB, Max Memory Used: 42.50 MB
```

### 许可协议

[deno_serverless_aliyun](https://github.com/justjavac/deno_serverless_aliyun) 基于
MIT 许可协议发布。详细信息可以查看 [LICENSE](./LICENSE) 文件。

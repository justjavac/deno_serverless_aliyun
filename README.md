# deno_serverless_aliyun

[![tag](https://img.shields.io/github/release/justjavac/deno_serverless_aliyun)](https://github.com/justjavac/deno_serverless_aliyun/releases)
[![Build Status](https://github.com/justjavac/deno_serverless_aliyun/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_serverless_aliyun/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_serverless_aliyun)](https://github.com/justjavac/deno_serverless_aliyun/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.0.2-green.svg)](https://github.com/denoland/deno)

Deno + Serverless = Awesome

## 背景

目前阿里云的函数计算服务只支持 Nodejs、Python、PHP、Java、.Net。本项目使用阿里云的 custom runtime 功能开发了可运行 Deno 的 Serverless 环境。

## 使用

首先安装官方命令行工具 [funcraft](https://github.com/alibaba/funcraft):

```shell
npm install @alicloud/fun -g
```

或

```shell
yarn global add @alicloud/fun
```

安装成功后运行 `fun config` 配置 Account ID、Access Key ID、Secret Access Key、Default Region Name。

克隆（或下载）本仓库:

```shell
git clone git@github.com:justjavac/deno_serverless_aliyun.git
```

## 部署

使用 make 部署:

```shell
cd deno_serverless_aliyun
make deploy
```

自定义部署:

1. 使用 Deno 打包 TypeScript 文件。这一步是可选的，提前打包文件而不是在运行时再编译可以提升 Deno Serverless 的冷启动性能。

    ```shell
    deno bundle mod.ts server.js
    ```

2. 构建 Deno Serverless 运行环境：

    ```shell
    fun build
    ```

3. 部署

    ```shell
    fun deploy -y
    ```

## 测试

部署完成后我们可以测试刚才的函数。

```shell
fun invoke -e "Hello World"
```

控制台输出:

```plain
...
FC Invoke Result:
Hello World
```

第一次运行时函数需要冷启，会稍微有点慢。

```plain
Duration: 5.58 ms, Billed Duration: 100 ms, Memory Size: 512 MB, Max Memory Used: 9.10 MB
Duration: 1.28 ms, Billed Duration: 100 ms, Memory Size: 512 MB, Max Memory Used: 9.19 MB
Duration: 0.86 ms, Billed Duration: 100 ms, Memory Size: 512 MB, Max Memory Used: 9.96 MB
Duration: 0.98 ms, Billed Duration: 100 ms, Memory Size: 512 MB, Max Memory Used: 9.96 MB
Duration: 0.97 ms, Billed Duration: 100 ms, Memory Size: 512 MB, Max Memory Used: 9.96 MB
```

### 许可协议

[deno_serverless_aliyun](https://github.com/justjavac/deno_serverless_aliyun) 基于 MIT 许可协议发布。详细信息可以查看 [LICENSE](./LICENSE) 文件。

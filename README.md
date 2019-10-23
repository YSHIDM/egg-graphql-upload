# egg-graphql-upload

## 目的

集成egg、egg-graphql，提供上传文件功能

## 尝试

1. 在egg中使用graphql 上传文件，尝试egg-graphql未果，使用graphql-upload 和koa-middleware-apollo 成功。
2. egg-graphql提供接口路径为"/graphql"，koa-middleware-apollo 中间件提供接口路径在"/"。
3. 上传文件接口和其他接口ctx.req.body 不同，互相干扰，所以修改了koa-middleware-apollo 中间件。
4. 尝试修改egg-graphql 目录后，覆盖了koa-middleware-apollo 提供的接口。

## 现状
1. egg-graphql提供接口路径为"/graphql"，koa-middleware-apollo 中间件提供接口路径在"/"，可以同时使用。

## 项目使用方式
```
npm i
npm run dev
```
使用Altair 工具测试上传文件，使用方式见官方文档，填写路径 127.0.0.1:7002 访问singleUpload 接口（因为是框架测试，所以只有该接口可以正常使用）。
填写路径 127.0.0.1:7002/graphql 访问其他接口。

![use altair](/doc/use_altair.png)
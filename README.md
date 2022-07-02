# react-koa-tempalte

基于 Node / TypeScript 的全栈项目模板，前端使用 react，后端使用 koa。

包含如下功能：

**项目**

- 使用 typescript
- 使用 yarn 管理依赖
- 一键启动、打包前后端
- 路径别名: `@ => src/`
- 添加 eslint 检查
- 包含使用了 HTTP 接口的 TODO 示例
- 包含登录鉴权的示例

**前端**

- 使用 vite 构建项目
- 添加 react、react-router-dom
- 添加 react-vant 组件库
- 添加 tailwindcss
- 已配置路由懒加载
- 基于 fetch 的 HTTP 请求封装

**后端**

- 使用 koa 构建项目
- 添加 router、logger、bodyParser、static 中间件
- 前端 history 模式适配
- 添加 [joi](https://joi.dev/) 进行参数校验
- 添加 koa-jwt 和 jsonwebtoken 进行登录鉴权
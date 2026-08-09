# NextClass Landing Agent Guidance

本仓库是 NextClass 的客户端渲染宣发/下载单页，使用 React/JSX/Vite/Tailwind。它分发 Android APK，并在当前工作树中读取版本日志；它不是 App 源码仓库。

## 开始任务前

1. 如果父工作区存在，读取 `../AGENTS.md`、`../CONTEXT-MAP.md`、`../UBIQUITOUS_LANGUAGE.md` 和兄弟项目 `../NextClass/CONTEXT.md`。
2. 读取本仓库 `CONTEXT.md`、`README.md` 与 `PRODUCT.md`。
3. 使用 `$nextclass-project-context`；UI/UX 任务在本目录使用 `$impeccable`。
4. 先运行 `git status --short`。当前仓库可能已有用户对 `src/App.jsx`、`src/components/ChangelogSection.jsx` 和 `public/NextClass.apk` 的改动，必须保留。

## 边界

- `/NextClass.apk` 是用户下载契约；除非任务明确是构建/发布 App，不覆盖 `public/NextClass.apk`。
- Marketing copy、手机 mockup 和 `PRODUCT.md` 不能证明 App 功能已实现；跨仓库核对源码。
- 生产 changelog 请求依赖 `/sb`，但本仓库没有 rewrite/proxy/deploy 配置；不要假设托管平台。
- 不读取、回显或提交 `.env` 值。浏览器只能使用 publishable/anon key，绝不使用 service-role key。
- 所有绝对 `/...` 资源路径默认站点部署在域名根；改变 Vite `base` 或子路径部署时必须验证 APK、logo、锚点和 `/sb`。

## 验证

```powershell
npm run lint
npm run build
```

当前没有测试脚本。交付时分别报告 lint/build 结果；不得因基线 lint 失败而声称验证通过，也不要未经请求修复无关用户代码。


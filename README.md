# NextClass Landing

NextClass 的宣发、版本日志和 Android APK 下载站，面向中国大陆高校学生。产品目标与视觉原则见 `PRODUCT.md`；本文件是当前技术架构、跨仓库契约和开发命令入口。

## 技术栈与运行形态

- JavaScript/JSX、React 19、Vite 8、Tailwind CSS 4、Lucide React。
- `src/main.jsx` 在 StrictMode 中挂载 `src/App.jsx`。
- 纯客户端单页：没有 React Router、SSR/SSG、服务端代码、全局状态库或测试框架。
- Vite 只配置 React 与 Tailwind 插件；没有 `base`、proxy 或部署适配。

具体版本以 `package.json`/`package-lock.json` 为准。Vite 8 的 Node engine 约束也以 lockfile 为准；仓库自身尚未声明 `engines`。

## 页面结构

当前 `App.jsx` 顺序：

```text
Navbar
└─ main
   ├─ HeroSection
   ├─ FeaturesSection
   └─ ChangelogSection
Footer
```

- Navbar 是 sticky 导航，滚动后切换背景与阴影。
- Hero 和 Navbar 的下载按钮都指向同源绝对路径 `/NextClass.apk`。
- Features 是硬编码营销条目。
- PhoneMockup 是用 JSX/CSS 和硬编码课程构造的视觉模型，不读取 App 源码或真实数据。
- ChangelogSection 是当前工作树的一部分：浏览器 mount 后读取 Supabase REST，开发态直连，生产态先请求 `/sb/rest/v1/changelogs?select=*`，失败后尝试直连，再失败显示静态 fallback。
- Footer 的 ICP 文本仍是占位符，不能当作备案事实。

页面使用 `#hero`、`#features`、`#changelog` 锚点，没有业务路由。

## 样式与资源

- Tailwind utilities 是主要样式层；`src/index.css` 只维护 reset、中文系统字体、滚动条、分隔线和 PhoneMockup 浮动动画。
- `index.html` 提供 `zh-CN`、title、description、keywords、favicon 和 viewport；营销正文由客户端 JS 渲染。
- 当前没有 canonical、Open Graph、Twitter Card、JSON-LD、robots、sitemap、analytics 或 `prefers-reduced-motion` 处理。
- `index.html` 仍请求未被 CSS 使用的 Inter Google Font。
- 所有静态/API 路径均以 `/` 开头，因此当前代码假定部署在域名根。子路径部署会影响 logo、APK 与 `/sb`。

`PRODUCT.md` 的设计原则是移动优先、高对比、无横向滚动/裁切、清晰胜过装饰、保持 APK 下载逻辑。它描述意图，不代表当前实现自动满足无障碍或功能要求。

## 跨仓库契约

### APK

`public/NextClass.apk` 是站点的发布物，来源应为兄弟仓库 `NextClass/android/app/build/outputs/apk/...`。仓库内没有自动复制、校验、签名验证或统一版本脚本。

只有用户明确要求 App 发布时才覆盖 APK。至少同时核对：

- App `package.json` version。
- Android `versionCode`/`versionName` 与实际构建类型。
- Hero 下载标签。
- 版本日志条目。
- `/NextClass.apk` 下载可用性和文件确实发生预期变化。

当前这些版本 surface 已有不一致，不能任选一个作为统一真相。

### Changelog 与 `/sb`

当前组件需要 `VITE_SUPABASE_URL`、`VITE_SUPABASE_ANON_KEY` 或源码中的 publishable fallback；不得输出任何实际值，也不得加入 service-role key。

生产态首选同源 `/sb`，但本仓库没有 Vercel/Netlify/Cloudflare rewrite 或 CI/deploy 配置。兄弟 App 仓库存在 `vercel.json`，不证明 Landing 的托管环境会采用它。修改 changelog 时必须把部署代理视为未在本仓库定义的外部依赖。

App 仓库 workflow 可写 `changelogs` 表；schema、RLS、CORS 和线上可用性均不在本仓库内，不能凭空补全。

## 功能事实与营销边界

- `PRODUCT.md` 证明目标用户是中国大陆高校学生，产品强调纯净、无广告、移动优先和 APK 转化。
- `index.html` 的 SEO 文案偏向北京化工大学，而 PRODUCT 面向全国高校；这是待产品确认的定位差异。
- Landing 的 Feature Claim 不是 App 能力证据。例如 App 当前静态学校列表为 28 项，Excel/PDF/ICS 入口未接线，因此不能把“1000+ 所高校”或文件导入写成已验证能力。
- Hero 标签、changelog fallback、Landing npm version 与 Android version 没有统一来源。
- 实际部署平台、域名、ICP备案、APK 签名和远端 changelog 内容无法从本仓库确认。

## 开发与验证

所有命令从本目录运行：

```powershell
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

当前没有 `test`、typecheck、format、CI 或 E2E 命令。最新验证中生产构建成功，但 lint 因 `ChangelogSection.jsx` 的未使用 `index` 参数报告 1 个 `no-unused-vars` 错误。交付时必须报告真实结果，不能把 build 成功等同于 lint 通过。

## 开发要领

1. 先保留当前 dirty worktree；`src/App.jsx`、`src/components/ChangelogSection.jsx` 与 APK 可能包含用户未提交工作。
2. UI 改动在本目录运行 `$impeccable`，以 `PRODUCT.md` 为产品/品牌输入；不要从 workspace 根运行其 context helper。
3. 任何文案改动都区分 **Feature Claim** 与已验证 App 功能。
4. 下载按钮、文件名和绝对 URL 是发布契约，视觉重构不能破坏。
5. Changelog 变化同时验证开发直连、生产 `/sb` 假设和静态 fallback；没有授权不写线上数据。
6. SEO/无障碍变更检查 JS 关闭时内容、用户缩放、reduced motion、横向溢出和移动断点，但不要在无关任务中顺手改写产品设计。

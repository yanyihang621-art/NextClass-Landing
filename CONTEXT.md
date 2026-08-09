# NextClass Landing Domain

NextClass Landing 负责解释产品并把用户引导到 Android 安装包。实现和开发边界见 `README.md`，品牌意图见 `PRODUCT.md`。

## Language

**Landing Site（宣发站）**：
向潜在用户说明 NextClass 并提供 Android 下载入口的网页产品。
_Avoid_: App、Web 版课表

**Download CTA（下载入口）**：
指向当前站点所分发 APK 的用户操作入口。
_Avoid_: 应用商店链接、自动安装

**APK Artifact（APK 发布物）**：
由 NextClass App Android 工程构建、复制到 Landing 后供下载的安装文件。
_Avoid_: 网站构建产物、源码

**Feature Claim（功能宣称）**：
Landing 对产品能力的营销描述；只有 App 源码和验证结果才能证明其实际支持程度。
_Avoid_: 已验证功能、验收标准

**Changelog Entry（版本日志条目）**：
按版本、日期和变更项展示的一组 App 更新说明。
_Avoid_: Git commit、发布证明

**Phone Mockup（手机模型）**：
用于解释产品体验的静态视觉演示，不是 App 运行实例或截图证据。
_Avoid_: 真机预览、嵌入 App

## Relationships

- 一个 **Landing Site** 可以有多个 **Download CTA**，但它们应指向同一个 **APK Artifact**。
- **Feature Claim** 可以描述 App，但不能替代跨仓库验证。
- **Changelog Entry** 可以描述版本变化，但不证明 **APK Artifact** 已同步。
- **Phone Mockup** 只服务于展示，不与 App 数据或组件自动同步。


# termana 落地页

termana 是一个本地优先的终端项目启动器桌面应用（macOS / Windows），本仓库是其官方落地页（中英双语）。

产品一句话：在一个面板里管理多个项目，为每个项目绑定一个 coding agent（Claude Code、Codex、Aider、OpenCode），内置 AGENTS.md 上下文编辑器，一键启动终端并进入项目。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Astro 4（`astro ^4.16.18`，纯静态输出，`compressHTML`、`inlineStylesheets: 'auto'`） |
| 语言 | TypeScript `^5.7.2`（`astro check`） |
| 样式 | Tailwind CSS 3（`tailwindcss ^3.4.17`，经 `@astrojs/tailwind` 集成） |
| Markdown | `@astrojs/mdx` 集成（已启用） |
| i18n | Astro 内置 i18n 配置（`en` / `zh`，默认 `en` 不带前缀）+ 自维护字典 `src/i18n/ui.ts` 与站点常量 `src/i18n/site.ts` |
| SEO | 手动维护的 `public/sitemap.xml`（sitemap 集成已停用）、`robots.txt`、`llms.txt` / `llms-full.txt`（GEO）、OG 图 |
| 包管理器 | npm（仓库带 `package-lock.json`） |
| 共享设计包 | `@bay/landing-ui`（`github:bayernjf/landing-ui#v1.1.0`） |

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 开发服务器（默认 http://localhost:4321；也可用 npm start）
npm run build      # 生产构建（输出到 dist/）
npm run preview    # 预览生产构建
npm run check      # 类型检查（astro check）
```

## 项目结构

```text
termana-landing/
├── public/
│   ├── _headers / _redirects     # Cloudflare Pages 安全头、缓存与 URL 规范化
│   ├── robots.txt / sitemap.xml  # sitemap 为手动维护的静态文件
│   ├── llms.txt / llms-full.txt  # AI 引擎抓取入口（GEO）
│   ├── favicon.svg / og.jpg
├── src/
│   ├── components/               # 页面区块：Hero、Features、AgentCompare、ContextEditor、
│   │                             # Download、FAQ、Roadmap、Header、Footer
│   ├── i18n/
│   │   ├── ui.ts                 # en / zh 扁平字典（所有 UI 文案的单一来源）
│   │   └── site.ts               # SITE / APP 站点级常量（SEO、JSON-LD、llms.txt 共用的事实源）
│   ├── layouts/
│   │   └── Base.astro            # 基础布局
│   ├── pages/                    # 路由（见下文）
│   └── styles/
│       └── global.css            # Tailwind 全局样式
├── astro.config.mjs              # site、i18n、tailwind、mdx 配置
├── DEPLOY.md                     # 部署指南（Cloudflare Pages）
└── package.json
```

## 路由说明

i18n 配置为 `locales: ['en', 'zh']`、`defaultLocale: 'en'`、`prefixDefaultLocale: false`：英文在根路径，中文带 `/zh` 前缀。

| 路径 | 说明 |
|------|------|
| `/` | 英文首页（Hero、Features、AgentCompare、ContextEditor、Download、FAQ、Roadmap） |
| `/privacy`、`/terms` | 英文隐私政策 / 服务条款 |
| `/zh` | 中文首页 |
| `/zh/privacy`、`/zh/terms` | 中文隐私政策 / 服务条款 |
| `/404` | 404 页面 |

## 共享设计包

本仓库使用共享设计包 `@bay/landing-ui`（`github:bayernjf/landing-ui#v1.1.0`）：
- 图标统一走 `@bay/landing-ui/components/Icon.astro`（内联 Lucide SVG，无运行时依赖）
- 设计令牌来自 `@bay/landing-ui/styles/tokens.css`（`--lui-*`），品牌色在 `src/styles/global.css` 以 `:root { --lui-accent }` 覆盖
- 包版本以 git tag 管理；升级时改 `package.json` 中的 tag 后重新 `npm install`

## 部署

部署指南见仓库内的 [DEPLOY.md](./DEPLOY.md)，要点：

- **Cloudflare Pages** 直连 Git（纯静态，无后端）：Framework preset `Astro`，构建命令 `npm run build`，输出目录 `dist`，环境变量 `NODE_VERSION=20`
- 推送 `main` 自动构建发布，PR 自动生成预览 URL
- 当前站点 URL 为 `https://termana.bayjf.com`（`astro.config.mjs` 的 `SITE_URL`）；绑定自定义域名时需按 DEPLOY.md 同步修改 `src/i18n/site.ts`、`robots.txt`、`sitemap.xml`、`llms.txt` 等文件中的域名

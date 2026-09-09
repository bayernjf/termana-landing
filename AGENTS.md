# AGENTS.md — termana-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
termana 落地页：本地优先的终端项目启动器桌面应用（macOS / Windows）官方站点（中英双语）。
产品在一个面板里管理多个项目，为每个项目绑定一个 coding agent（Claude Code、Codex、Aider、OpenCode），
内置 AGENTS.md 上下文编辑器，一键启动终端并进入项目。

## 技术栈
> 以 `package.json` 为准：Astro 7（`^7.2.0`）+ Tailwind CSS 4（`@tailwindcss/vite`）+ `@astrojs/mdx`。
> README 里写的 Astro 4 / Tailwind 3 已过时。

| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（纯静态，`compressHTML`、`inlineStylesheets: 'auto'`） |
| i18n | `en` 默认无前缀，`zh` 走 `/zh/`；字典 `src/i18n/ui.ts`，站点常量 `src/i18n/site.ts` |
| SEO | **手动维护**的 `public/sitemap.xml`（sitemap 集成已停用）、`robots.txt`、`llms.txt` / `llms-full.txt` |
| 共享包 | `@bay/landing-ui` |
| 包管理 | npm |

## 常用命令
```bash
npm install
npm run dev       # localhost:4321（也可 npm start）
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- `src/i18n/site.ts` 是 SITE / APP 常量的**唯一事实源**（SEO、JSON-LD、llms.txt 共用），改站点信息先改这里。
- `public/sitemap.xml` 手工维护，新增页面后必须手动补条目。
- `public/_headers`、`public/_redirects` 控制 Cloudflare Pages 的安全头、缓存与 URL 规范化。
- 部署细节见 `docs/DEPLOYMENT.md` 与仓库内 `DEPLOY.md`（push `main` 自动发布）。

## 不要做的事
- 不要以为 sitemap 会自动更新（它是手工文件）。
- 不要在页面里硬编码站点 URL（走 `src/i18n/site.ts`）。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。

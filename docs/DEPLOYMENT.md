# 部署 — termana-landing

更新时间：2026-09-09

## 站点信息
- 当前站点 URL：`https://termana.bayjf.com`（`astro.config.mjs` 的 `SITE_URL`）
- 技术栈：**以 `package.json` 为准** —— Astro 7（`^7.2.0`）+ Tailwind CSS 4（`@tailwindcss/vite`）
  + `@astrojs/mdx`；README 里写的 Astro 4 / Tailwind 3 是旧版本遗留
- i18n：`en` 默认无前缀，`zh` 走 `/zh/`；字典在 `src/i18n/ui.ts`，站点常量在 `src/i18n/site.ts`
- 包管理器：npm

## 构建
```bash
npm install
npm run dev       # localhost:4321（也可 npm start）
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## Cloudflare Pages（直连 Git，纯静态无后端）
| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 20` |

推送 `main` 自动构建发布，PR 自动生成预览 URL。详细指南见仓库内 `DEPLOY.md`。

## 静态托管相关文件
- `public/_headers`、`public/_redirects`：Cloudflare Pages 安全头、缓存与 URL 规范化。
- `public/robots.txt`、`public/sitemap.xml`：sitemap 集成已停用，**sitemap.xml 为手动维护**。
- `public/llms.txt`、`public/llms-full.txt`：GEO 入口。

## 注意点
- 绑定 / 更换自定义域名时必须同步修改：
  `src/i18n/site.ts`、`astro.config.mjs`、`public/robots.txt`、`public/sitemap.xml`、`public/llms*.txt`。
- `sitemap.xml` 是手工文件，新增页面后记得手动补条目。

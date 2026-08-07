# Handoff — termana-landing

更新时间：2026-08-08

## 项目概况
Termana 产品落地页。Astro 7 + Tailwind CSS v4 静态站点，中英双语，
部署于 Cloudflare Pages（站点：https://termana-landing.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `b1b3d9d` build: upgrade to Astro 7 and Tailwind CSS v4
- `502ef7c` feat(legal): add privacy, terms and 404 pages
- `2277c62` docs: add README with project overview
- `7ee3b93` docs: update deployment notes

## 注意点
- OG 图只有一张默认图（public/og.jpg），无中英分版。
- robots.txt、sitemap 已就位；构建通过；提交仅在本地。

## 下一步
1. （可选）补充中英双语 PNG OG 图。
2. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
3. 部署后验证 og:image、robots.txt、sitemap、法务页面。

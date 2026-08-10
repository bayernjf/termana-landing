# 部署 termana-landing

## 方案：Cloudflare Pages 直连 Git（纯静态，无后端）

### 1. 推送到 GitHub
```bash
cd termana-landing
git init
git add .
git commit -m "init: termana landing (Astro + i18n + SEO/GEO)"
# 在 GitHub 新建公开 repo: termana-landing
git remote add origin git@github.com:<your-org>/termana-landing.git
git branch -M main
git push -u origin main
```

### 2. Cloudflare Pages 配置
1. 登录 Cloudflare Dashboard → Pages → Create a project → Connect to Git
2. 选择 `termana-landing` 仓库
3. 构建配置：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 22 或更高（环境变量 `NODE_VERSION=22`，Astro 7 要求 Node >= 22.12.0）
4. 环境变量（可选）：
   - `NODE_VERSION` = `22`
5. Save and Deploy

### 3. 后续自定义域名
Pages 项目 → Custom domains → Add domain → 按提示添加 CNAME。
绑定后需同步修改：
- `astro.config.mjs` 的 `SITE_URL`
- `src/i18n/site.ts` 的 `SITE.url`
- `public/robots.txt` 与 `public/sitemap.xml` 里的域名
- `public/llms.txt` 与 `public/llms-full.txt` 里的链接
重新推送即生效。

### 4. 替换 GitHub 仓库地址
上线前把以下文件里的 `your-org/termana` 替换为真实仓库地址：
- `src/i18n/site.ts`（SITE.repo / SITE.releases / SITE.docs / SITE.changelog）
- `public/llms.txt`
- `public/llms-full.txt`

### 5. 本地验证
```bash
npm install
npm run dev      # 开发预览 http://localhost:4321
npm run build    # 生产构建到 dist/
npm run preview  # 预览生产构建
npm run check    # 类型检查（0 errors / 0 warnings / 0 hints）
```

### 部署特性
- 推送 `main` 自动构建发布
- PR 自动生成预览 URL
- `public/_headers`：CSP、安全头、静态资源长缓存
- `public/_redirects`：URL 规范化
- 纯静态，零服务端，Cloudflare Pages 免费额度足够

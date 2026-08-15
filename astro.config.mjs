import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// 落地页站点 URL — 暂用 Cloudflare Pages 默认域名，后续绑定自定义域名时改这里
const SITE_URL = 'https://termana.bayjf.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    mdx(),
    // sitemap 改用手动静态 public/sitemap.xml（页面少且固定，更可控）
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

// 站点级常量 — 所有 SEO/GEO/JSON-LD 引用同一份事实源
// 改这里即同步生效到 <head>、llms.txt、结构化数据

export const SITE = {
  name: 'termana',
  // 与 astro.config.mjs 的 site 保持一致
  url: 'https://termana-landing.pages.dev',
  // GitHub 仓库（用户后续替换为实际地址）
  repo: 'https://github.com/your-org/termana',
  // GitHub Releases 下载入口
  releases: 'https://github.com/your-org/termana/releases',
  docs: 'https://github.com/your-org/termana#readme',
  changelog: 'https://github.com/your-org/termana/releases',
  license: 'Not yet licensed',
  // 联系邮箱（替换为真实地址）
  email: 'hello@termana.dev',
  twitter: '@termana_dev',
} as const;

export const APP = {
  name: 'termana',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: ['macOS', 'Windows'],
  offers: {
    price: '0',
    priceCurrency: 'USD',
  },
  // 一句话产品定义 — 给 AI 抓取用，所有页面里至少出现一次
  oneLiner: {
    en: 'termana is a local-first terminal project launcher that manages multiple projects in one panel and binds a coding agent (Claude Code, Codex, Aider, OpenCode) to each, with a built-in AGENTS.md context editor.',
    zh: 'termana 是一个本地优先的终端项目启动器：在一个面板里管理多个项目，为每个项目绑定一个 coding agent（Claude Code、Codex、Aider、OpenCode），并内置 AGENTS.md 上下文编辑器。',
  },
  supportedAgents: ['Claude Code', 'Codex', 'Aider', 'OpenCode'],
  platforms: ['macOS', 'Windows'],
} as const;

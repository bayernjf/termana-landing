// i18n 类型与索引
// 所有 UI 文案的单一来源，组件按 locale 取值，避免散落字符串

export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'site.title': 'termana | Terminal Project Launcher for Coding Agents',
    'site.description':
      'termana is a local-first terminal project launcher. Manage multiple projects in one panel, bind a coding agent (Claude Code, Codex, Aider, OpenCode) to each, and launch with one click. Built-in AGENTS.md context editor.',

    'nav.features': 'Features',
    'nav.compare': 'Compare',
    'nav.context': 'AGENTS.md',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.roadmap': 'Roadmap',
    'nav.docs': 'Docs',
    'nav.github': 'GitHub',

    'hero.badge': 'Local-first · Agent-neutral · v1',
    'hero.title': 'One panel for every coding agent.',
    'hero.subtitle':
      'termana is a terminal project launcher for people who live in the terminal. Manage multiple projects, bind a coding agent to each, and launch with one click: the terminal opens, cd\'s into the project, and starts the agent.',
    'hero.cta.download': 'Download',
    'hero.cta.viewSource': 'View on GitHub',
    'hero.platforms': 'macOS · Windows · Local-first, no account',

    'features.title': 'Why termana',
    'features.subtitle':
      'In a multi-agent world, each CLI agent vendor only manages its own config. termana sits in the seams between agents: a project control layer that belongs to no single vendor.',

    'download.title': 'Download termana',
    'download.subtitle':
      'Pick your platform. termana is local-first: no account, no cloud, no server. Config is a TOML file on disk.',
    'download.macos': 'Download for macOS',
    'download.windows': 'Download for Windows',
    'download.other': 'Other builds',
    'download.detected': 'Detected platform',

    'compare.title': 'termana vs. per-agent tools',
    'compare.subtitle':
      'Each agent vendor only manages its own config. termana occupies the seams between agents: the one position no single vendor will own.',

    'context.title': 'AGENTS.md, made effortless',
    'context.subtitle':
      'AGENTS.md is the agent-neutral context standard: Codex, OpenCode, Cline and new Aider read it directly; Claude Code reads it via a one-line @AGENTS.md pointer. termana is its editor: file is the source of truth, no sync, no drift.',

    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Common questions about termana, written so they can be quoted directly.',

    'roadmap.title': 'Roadmap',
    'roadmap.subtitle': 'Where termana is heading.',

    'footer.tagline': 'A terminal project launcher for people who live in the terminal.',
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': 'All rights reserved.',
  },

  zh: {
    'site.title': 'termana | 面向 Coding Agent 的终端项目启动器',
    'site.description':
      'termana 是一个本地优先的终端项目启动器。在一个面板里管理多个项目，为每个项目绑定一个 coding agent（Claude Code、Codex、Aider、OpenCode），点一下即可启动。内置 AGENTS.md 上下文编辑器。',

    'nav.features': '功能',
    'nav.compare': '对比',
    'nav.context': 'AGENTS.md',
    'nav.download': '下载',
    'nav.faq': 'FAQ',
    'nav.roadmap': '路线图',
    'nav.docs': '文档',
    'nav.github': 'GitHub',

    'hero.badge': '本地优先 · Agent 中立 · v1',
    'hero.title': '一个面板，管住所有 coding agent。',
    'hero.subtitle':
      'termana 是给「活在终端里」的人做的项目启动器。管理多个项目、为每个项目绑定一个 coding agent、点一下就启动——自动开终端、cd 进目录、跑起绑定的 agent。',
    'hero.cta.download': '下载',
    'hero.cta.viewSource': '在 GitHub 查看',
    'hero.platforms': 'macOS · Windows · 本地优先，无需账号',

    'features.title': '为什么是 termana',
    'features.subtitle':
      '在多 agent 的世界里，每个 CLI agent 厂商只管自己的配置。termana 占据 agent 之间的缝隙——一个不属于任何单一厂商的项目控制层。',

    'download.title': '下载 termana',
    'download.subtitle':
      '选择你的平台。termana 本地优先——无账号、无云、无服务。配置就是磁盘上的一个 TOML 文件。',
    'download.macos': '下载 macOS 版',
    'download.windows': '下载 Windows 版',
    'download.other': '其他构建',
    'download.detected': '检测到平台',

    'compare.title': 'termana 与各 agent 自带工具对比',
    'compare.subtitle':
      '每个 agent 厂商只管自己的配置。termana 占据 agent 之间的缝隙——这是唯一不会被单一厂商吃掉的位置。',

    'context.title': 'AGENTS.md，顺手就好',
    'context.subtitle':
      'AGENTS.md 是 agent 中立的上下文标准——Codex、OpenCode、Cline、新版 Aider 直接读它；Claude Code 用一行 @AGENTS.md 指针即可导入。termana 是它的编辑器：文件即正本，无同步、无 drift。',

    'faq.title': '常见问题',
    'faq.subtitle': '关于 termana 的常见问题，以可被直接引用的方式撰写。',

    'roadmap.title': '路线图',
    'roadmap.subtitle': 'termana 接下来的方向。',

    'footer.tagline': '给「活在终端里」的人做的项目启动器。',
    'footer.product': '产品',
    'footer.resources': '资源',
    'footer.legal': '法律',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.copyright': '保留所有权利。',
  },
} as const;

// 从 URL 路径推断当前语言
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

// 在当前语言下取一个翻译 key
export function t(lang: Lang, key: keyof typeof ui['en']): string {
  return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
}

// 跨语言路径前缀
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 与 termana 桌面端一致的暗色石墨蓝灰调
        ink: {
          50: '#f5f7fa',
          100: '#e6ebf2',
          200: '#c5cfe0',
          300: '#9babc4',
          400: '#6b7e9e',
          500: '#4a5d7e',
          600: '#364864',
          700: '#28374d',
          800: '#1d2937',
          900: '#141c28',
          950: '#0c1219',
        },
        accent: {
          DEFAULT: '#5fd1c5',
          soft: '#7fe3d8',
          deep: '#3aa89c',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
          },
        },
      },
    },
  },
  plugins: [],
};

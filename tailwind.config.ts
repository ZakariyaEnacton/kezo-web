import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F8FAFB',
        'black': '#1A1B25',
        'green': '#008522',
        'white': "#FFFFFF",
        'third': '#ECEFF3',
        'secondary': '#818898',
        'tert': '#DFE1E7',
        'feed': "#666D80",
        'icon-bg': '#DDF3EF',
        'icon_bg_2': '#F0FBFF',
        'icon_bg_3': '#FFF6E0',
        "admin": "#36394A",
        "exit": "#DF1C41",
        'cals': '#272835',
        'select': '#F6F8FA',
        'paper': '#116B97',
        'waste': '#966422'
      },
      boxShadow: {
        'header': '0px 25px 60px 0px rgba(142, 142, 142, 0.12);',
        'button': '0px 0px 0px 1px #126F2A, 0px 1px 4px 0px rgba(33, 56, 52, 0.50);',
        'share': ' 0px 0px 0px 1px rgba(18, 55, 105, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.24);',
        'cal': '0px 0px 0px 1px #ECECED, 0px 6px 40px 0px rgba(182, 182, 182, 0.12);',
        'menu': '0px 0px 0px 1px rgba(9, 25, 72, 0.30), 0px 1px 2px 0px rgba(18, 55, 105, 0.08)',
        'search': '0px 0px 0px 3px #D8F2DF, 0px 2px 4px 0px rgba(9, 25, 72, 0.08);',
        "danger": "0px 0px 0px 1px #B62D47, 0px 1px 4px 0px rgba(33, 56, 52, 0.50);"
      },
      container: {
        screens: {
          'DEFAULT': '1320px'
        },
        center: true
      },
      letterSpacing: {
        tightest: '-0.44px',
        tighter: '-0.24px',
        tight: '0.72px'
      },
      fontSize: {
        '4xl': '44px'
      },
      fontWeight: {
        'medium': '250'
      },
      borderWidth: {
        DEFAULT: '1px'
      }
    },
  },
  plugins: [],
}
export default config

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
        'top': '#ECEFF3'
      },
      boxShadow: {
        'header': '0px 6px 40px 0px rgba(182, 182, 182, 0.12);',
        'button': '0px 0px 0px 1px #126F2A, 0px 1px 4px 0px rgba(33, 56, 52, 0.50);'
      },
      container: {
        screens: {
          'DEFAULT': '1320px'
        },
        center: true
      },
      letterSpacing: {
        tightest: '-0.44px'
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

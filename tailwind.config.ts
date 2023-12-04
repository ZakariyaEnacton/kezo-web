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
      },
      boxShadow: {
        'header': '0px 6px 40px 0px rgba(182, 182, 182, 0.12);'
      },
      container: {
        screens: {
          'DEFAULT': '1320px'
        },
        center: true
      }
    },
  },
  plugins: [],
}
export default config

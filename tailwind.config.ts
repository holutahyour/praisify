import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth': 'url("images/auth/auth.jpg")',
      },
      colors: {
        'primary': "rgb(var(--color-primary-dark-rgb) / <alpha-value>)"
      }
    },
  },
  plugins: [],
}
export default config

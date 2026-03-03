import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#003fb1',
        brandOrange: '#ff8723',
      },
    },
  },
  plugins: [],
} satisfies Config;
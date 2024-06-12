import defaultTheme from 'tailwindcss/defaultTheme'
import { join } from 'node:path'

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@attraction/config/attraction-preset')],
  mode: 'jit',
  darkMode: ['selector', '.dark'],
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
  ],
  prefix: 'ds-',
  theme: {
    fontFamily: {
      sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

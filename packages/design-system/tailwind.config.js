/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@attraction/config/attraction-preset')],
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

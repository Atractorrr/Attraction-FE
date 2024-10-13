import defaultTheme from 'tailwindcss/defaultTheme'
import { $variable } from '@attraction/ds-core'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        ...defaultTheme.screens,
      },
      colors: {
        gray: {
          50: $variable.color.gray050,
          100: $variable.color.gray100,
          200: $variable.color.gray200,
          300: $variable.color.gray300,
          400: $variable.color.gray400,
          500: $variable.color.gray500,
          600: $variable.color.gray600,
          700: $variable.color.gray700,
          800: $variable.color.gray800,
          900: $variable.color.gray900,
        },
        red: {
          50: $variable.color.red050,
          100: $variable.color.red100,
          200: $variable.color.red200,
          300: $variable.color.red300,
          400: $variable.color.red400,
          500: $variable.color.red500,
          600: $variable.color.red600,
          700: $variable.color.red700,
          800: $variable.color.red800,
          900: $variable.color.red900,
        },
        yellow: {
          50: $variable.color.yellow050,
          100: $variable.color.yellow100,
          200: $variable.color.yellow200,
          300: $variable.color.yellow300,
          400: $variable.color.yellow400,
          500: $variable.color.yellow500,
          600: $variable.color.yellow600,
          700: $variable.color.yellow700,
          800: $variable.color.yellow800,
          900: $variable.color.yellow900,
        },
        green: {
          50: $variable.color.green050,
          100: $variable.color.green100,
          200: $variable.color.green200,
          300: $variable.color.green300,
          400: $variable.color.green400,
          500: $variable.color.green500,
          600: $variable.color.green600,
          700: $variable.color.green700,
          800: $variable.color.green800,
          900: $variable.color.green900,
        },
        blue: {
          50: $variable.color.blue050,
          100: $variable.color.blue100,
          200: $variable.color.blue200,
          300: $variable.color.blue300,
          400: $variable.color.blue400,
          500: $variable.color.blue500,
          600: $variable.color.blue600,
          700: $variable.color.blue700,
          800: $variable.color.blue800,
          900: $variable.color.blue900,
        },
      },
      ...defaultTheme.colors,
    },
  },
  plugins: [],
}

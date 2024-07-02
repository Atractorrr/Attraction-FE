'use client'

import { createContext, useContext } from 'react'
import { RealTheme, Theme } from './type'

interface ThemeContextState {
  currentTheme: Theme
  realTheme: RealTheme
  setTheme: (theme: Theme) => void
}

const themeState: ThemeContextState = {
  currentTheme: 'system',
  realTheme: 'light',
  setTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextState>(themeState)

export default function useTheme() {
  return useContext(ThemeContext)
}

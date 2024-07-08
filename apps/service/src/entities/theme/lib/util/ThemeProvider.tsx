'use client'

import { PropsWithChildren, useMemo } from 'react'
import { ThemeContext, useThemeSetting } from '../../model'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { currentTheme, realTheme, setTheme } = useThemeSetting()
  const themeState = useMemo(
    () => ({ currentTheme, realTheme, setTheme }),
    [currentTheme, realTheme, setTheme],
  )

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  )
}

'use client'

import { PropsWithChildren } from 'react'
import { ThemeContext, useThemeSetting } from '../../model'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { currentTheme, realTheme, setTheme } = useThemeSetting()

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ currentTheme, realTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

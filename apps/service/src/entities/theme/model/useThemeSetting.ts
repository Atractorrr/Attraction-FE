'use client'

import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { RealTheme, Theme } from './type'
import { THEME_NAME } from '../constant'

function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'system'
  }
  return (localStorage.getItem('theme') as Theme | null) ?? 'system'
}

export default function useThemeSetting() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getCurrentTheme())
  const [realTheme, setRealTheme] = useState<RealTheme>('light')

  const setLightTheme = () => {
    document.body.classList.remove('dark')
    document.body.classList.remove('ds-dark')
    setRealTheme('light')
  }
  const setDarkTheme = () => {
    document.body.classList.add('dark')
    document.body.classList.add('ds-dark')
    setRealTheme('dark')
  }

  useEffect(() => {
    if (currentTheme === 'dark') {
      setDarkTheme()
      return
    }
    if (
      currentTheme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkTheme()
      return
    }
    setLightTheme()
  }, [currentTheme])

  const setTheme = useCallback(
    (theme: Theme) => {
      setCurrentTheme(theme)
      localStorage.setItem('theme', theme)
      if (theme !== currentTheme) {
        toast.success(`테마가 변경되었어요 (${THEME_NAME[theme]})`)
      }
    },
    [currentTheme],
  )

  return { currentTheme, realTheme, setTheme }
}

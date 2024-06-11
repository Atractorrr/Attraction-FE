'use client'

import { Button } from '@attraction/design-system/dist'
import { useState } from 'react'
import { useClickedOutsideOfElement } from '@/shared/lib'
import { MoonStarOutline, SunOutline } from '@attraction/icons'
import { Theme, useTheme } from '../model'

interface ThemeDropdownProps {
  theme: Theme
  setTheme: (type: Theme) => void
}

const btns: Array<[Theme, string]> = [
  ['system', '시스템 테마'],
  ['light', '밝은 테마'],
  ['dark', '어두운 테마'],
]

function ThemeDropdown({ theme, setTheme }: ThemeDropdownProps) {
  return (
    <ul className="absolute -right-12 z-20 mt-2 min-w-40 rounded-lg border border-gray-100 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
      {btns.map(([type, label]) => (
        <li key={type}>
          <Button
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg py-2 pl-3 pr-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setTheme(type)}>
            {label} {theme === type && '(선택됨)'}
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default function ThemeDropdownBtn() {
  const { currentTheme, realTheme, setTheme } = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownAreaRef = useClickedOutsideOfElement(() => setMenuOpen(false))

  return (
    <div
      ref={(node) => {
        dropdownAreaRef.current = node
      }}
      className="relative">
      <Button
        title="테마 변경"
        className="flex size-12 items-center justify-center rounded-lg border border-gray-100 bg-white p-1 text-xl transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700"
        onClick={() => setMenuOpen((prev) => !prev)}>
        {realTheme === 'dark' ? <MoonStarOutline /> : <SunOutline />}
      </Button>
      {isMenuOpen && (
        <ThemeDropdown
          theme={currentTheme}
          setTheme={(theme: Theme) => {
            setTheme(theme)
            setMenuOpen(false)
          }}
        />
      )}
    </div>
  )
}

'use client'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import { MoonStarOutline, SunOutline } from '@attraction/icons'
import { Theme, useTheme } from '../model'

const themeBtns: Array<[Theme, string]> = [
  ['system', '시스템 테마'],
  ['light', '밝은 테마'],
  ['dark', '어두운 테마'],
]

export default function ThemeDropdownBtn() {
  const { currentTheme, realTheme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          title="테마 변경"
          className="flex size-12 items-center justify-center rounded-lg border border-gray-100 bg-white p-1 text-xl transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700">
          {realTheme === 'dark' ? <MoonStarOutline /> : <SunOutline />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuRadioGroup value={currentTheme}>
          {themeBtns.map(([theme, label]) => (
            <DropdownMenuRadioItem
              key={theme}
              value={theme}
              title={`테마 변경: ${label}`}
              onClick={() => setTheme(theme)}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

'use client'

import { Button } from '@attraction/design-system'
import { useEffect, useRef, useState } from 'react'
import { useClickedOutsideOfElement } from '@/shared/lib'
import { SunOutline } from '@attraction/icons'
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

function IconMoon() {
  // TODO: Icon 패키지 사용 (달 아이콘)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M20.366 2.124c-.328-.832-1.504-.832-1.83 0l-.429 1.09l-1.084.429c-.83.328-.83 1.504 0 1.832l1.084.43l.428 1.089c.327.832 1.503.832 1.83 0l.429-1.09l1.084-.429c.83-.328.83-1.504 0-1.832l-1.084-.43zm-.916.406l.415 1.055c.1.254.3.455.554.556l1.057.418l-1.057.419a.984.984 0 0 0-.554.555l-.415 1.055l-.414-1.055a.984.984 0 0 0-.554-.555l-1.057-.419l1.057-.418a.984.984 0 0 0 .554-.556zm-2.952 5.417c-.327-.833-1.503-.833-1.83 0l-.155.393l-.39.155c-.83.328-.83 1.504 0 1.833l.39.154l.155.394c.327.832 1.503.832 1.83 0l.155-.394l.39-.154c.83-.329.83-1.505 0-1.833l-.39-.155zm-.915.405l.141.36c.1.253.3.455.554.555l.364.144l-.364.144a.984.984 0 0 0-.554.556l-.141.36l-.141-.36a.984.984 0 0 0-.554-.556l-.364-.144l.364-.144a.984.984 0 0 0 .554-.555z" />
        <path d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802M1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12" />
      </g>
    </svg>
  )
}

export default function ThemeDropdownBtn() {
  const { currentTheme, realTheme, setTheme } = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownBtnAreaRef = useRef<HTMLDivElement | null>(null)
  const isClicked = useClickedOutsideOfElement(dropdownBtnAreaRef)

  useEffect(() => {
    if (isClicked) {
      setMenuOpen(false)
    }
  }, [isClicked])

  return (
    <div ref={dropdownBtnAreaRef} className="relative">
      <Button
        title="테마 변경"
        className="flex size-12 items-center justify-center rounded-lg border border-gray-100 bg-white p-1 text-xl transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700"
        onClick={() => setMenuOpen((prev) => !prev)}>
        {realTheme === 'dark' ? <IconMoon /> : <SunOutline />}
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

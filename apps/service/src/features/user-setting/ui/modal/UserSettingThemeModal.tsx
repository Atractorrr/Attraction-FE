/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import { THEME_LIST, Theme, useTheme } from '@/entities/theme'
import { CheckOutline } from '@attraction/icons'
import { useEffect, useState } from 'react'

interface UserSettingThemeModalType {
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
}

export default function UserSettingTheme({
  setModalValue,
}: UserSettingThemeModalType) {
  const { currentTheme } = useTheme()
  const [activeTheme, setActiveTheme] = useState<Theme>('system')

  useEffect(() => setActiveTheme(currentTheme), [currentTheme])
  useEffect(() => setModalValue(activeTheme), [activeTheme, setModalValue])

  return (
    <div className="mb-5 block">
      {THEME_LIST.map(([theme, themeLabel]) => {
        return (
          <p key={theme} className="peer flex items-center gap-4 peer-[]:mt-4">
            <span className="relative size-6">
              <input
                type="radio"
                name={theme}
                value={theme}
                className={`size-full cursor-pointer appearance-none rounded-full border-2 transition-colors disabled:cursor-auto ${
                  activeTheme === theme
                    ? 'border-gray-700 bg-gray-700 dark:border-gray-50 dark:bg-gray-50'
                    : 'border-gray-100 dark:border-gray-600'
                }`}
                checked={activeTheme === theme}
                onChange={() => setActiveTheme(theme)}
              />
              {activeTheme === theme && (
                <CheckOutline className="absolute inset-0 m-auto size-4 rounded-md font-bold text-white dark:text-gray-700" />
              )}
            </span>
            <label
              htmlFor={theme}
              className="cursor-pointer whitespace-nowrap text-lg"
              onClick={() => setActiveTheme(theme)}>
              {themeLabel}
            </label>
          </p>
        )
      })}
    </div>
  )
}

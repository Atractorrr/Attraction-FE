'use client'

import { ChevronRightOutline } from '@attraction/icons'

interface UserSettingItemType {
  title: string
  subTitle?: string
  openModalHandler?: () => void
  bottomSubTitle?: boolean
  icon: 'none' | 'chevron' | 'toogle'
}

export default function UserSettingItem({
  title,
  subTitle,
  openModalHandler,
  bottomSubTitle = false,
  icon,
}: UserSettingItemType) {
  const Component = !openModalHandler ? 'div' : 'button'

  return (
    <Component
      type="button"
      title={title}
      className={`flex w-full items-center justify-between gap-5 rounded-lg p-3 transition-colors ${
        !openModalHandler
          ? ''
          : 'hover:bg-gray-50 active:bg-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-700'
      }`}
      onClick={() => openModalHandler?.()}>
      <div className="flex flex-col gap-2 gap-y-1">
        <p className="text-left font-medium">{title}</p>
        {bottomSubTitle && (
          <p className="break-keep text-left text-gray-500 dark:text-gray-400">
            {subTitle}
          </p>
        )}
        {!bottomSubTitle && (
          <p className="block break-keep text-left text-gray-500 sm:hidden dark:text-gray-400">
            {subTitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        {!bottomSubTitle && (
          <p className="hidden break-keep text-left text-gray-500 sm:block dark:text-gray-400">
            {subTitle}
          </p>
        )}
        {icon === 'chevron' && (
          <ChevronRightOutline className="size-5 shrink-0" />
        )}
      </div>
    </Component>
  )
}

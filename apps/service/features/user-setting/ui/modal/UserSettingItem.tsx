'use client'

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChevronRightOutline } from '@attraction/icons'

interface UserSettingItemType {
  title: string
  subTitle?: string
  setActiveModal?: React.Dispatch<React.SetStateAction<boolean>>
  bottomSubTitle?: boolean
  icon: 'none' | 'chevron' | 'toogle'
}

export default function UserSettingItem({
  title,
  subTitle,
  setActiveModal,
  bottomSubTitle = false,
  icon,
}: UserSettingItemType) {
  return (
    <button
      type="button"
      disabled={!setActiveModal}
      className="flex w-full items-center justify-between"
      onClick={() => setActiveModal!(true)}>
      <div className="flex flex-col gap-2">
        <p className="text-start font-medium">{title}</p>
        {bottomSubTitle && <p className="size-sm text-gray-500">{subTitle}</p>}
        {!bottomSubTitle && (
          <p className="size-sm block text-start text-gray-500 sm:hidden">
            {subTitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        {!bottomSubTitle && (
          <p className="size-sm hidden text-start text-gray-500 sm:block">
            {subTitle}
          </p>
        )}
        {icon === 'chevron' && (
          <ChevronRightOutline className="size-5 shrink-0" />
        )}
      </div>
    </button>
  )
}

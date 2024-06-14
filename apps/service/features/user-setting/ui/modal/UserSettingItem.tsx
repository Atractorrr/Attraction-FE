'use client'

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChevronRightOutline } from '@attraction/icons'

interface UserSettingItemType {
  title: string
  subTitle?: string
  setActiveModal?: React.Dispatch<React.SetStateAction<boolean>>
  bottomSubTitle?: boolean
}

export default function UserSettingItem({
  title,
  subTitle,
  setActiveModal,
  bottomSubTitle = false,
}: UserSettingItemType) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between"
      onClick={() => setActiveModal!(true)}>
      <div className="flex flex-col gap-2">
        <p className="font-medium">{title}</p>
        {bottomSubTitle && <p className="size-sm text-gray-500">{subTitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        {!bottomSubTitle && <p className="size-sm text-gray-500">{subTitle}</p>}
        <ChevronRightOutline className="size-5 shrink-0" />
      </div>
    </div>
  )
}

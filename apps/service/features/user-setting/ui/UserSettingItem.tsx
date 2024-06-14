'use client'

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChevronRightOutline } from '@attraction/icons'
import { ReactNode, useState } from 'react'

interface UserSettingItemType {
  title: string
  subTitle?: string
  Dialog?: ReactNode
  Drawer?: ReactNode
  bottomSubTitle?: boolean
}

export default function UserSettingItem({
  title,
  subTitle,
  Dialog,
  Drawer,
  bottomSubTitle = false,
}: UserSettingItemType) {
  const [activeModal, setActiveModal] = useState(false)
  const [isMobile] = useState(false)
  return (
    <div
      className="flex cursor-pointer items-center justify-between"
      onClick={() => setActiveModal(true)}>
      <div className="flex flex-col gap-2">
        <p className="font-medium">{title}</p>
        {bottomSubTitle && <p className="size-sm text-gray-500">{subTitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        {!bottomSubTitle && <p className="size-sm text-gray-500">{subTitle}</p>}
        <ChevronRightOutline className="size-5 shrink-0" />
      </div>

      {isMobile && activeModal ? Drawer : Dialog}
    </div>
  )
}

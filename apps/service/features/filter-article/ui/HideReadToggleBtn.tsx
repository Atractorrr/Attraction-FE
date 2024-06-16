'use client'

import { Button } from '@attraction/design-system/dist'
import { CheckOutline } from '@attraction/icons'

interface HideReadToggleBtnProps {
  isRead: boolean
  toggleHideFn: () => void
}

export default function HideReadToggleBtn({
  isRead,
  toggleHideFn,
}: HideReadToggleBtnProps) {
  return (
    <Button
      className={`flex items-center justify-center gap-2 rounded-lg py-2 pl-3 pr-4 transition-colors ${
        isRead
          ? 'bg-gray-700 text-gray-50 dark:bg-gray-50 dark:text-gray-700'
          : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
      }`}
      title={`읽은 아티클 ${isRead ? '보기' : '숨김'}`}
      onClick={toggleHideFn}>
      <CheckOutline />
      <span className="whitespace-nowrap text-sm xs:text-base">
        읽은 아티클 숨김
      </span>
    </Button>
  )
}

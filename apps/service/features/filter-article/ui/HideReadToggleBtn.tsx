'use client'

import { Button } from '@attraction/design-system'

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
      className={`flex items-center justify-center gap-2 rounded-lg py-2 pl-3 pr-4 ${
        isRead
          ? 'bg-gray-700 text-gray-50 dark:bg-gray-50 dark:text-gray-700'
          : 'bg-gray-50 dark:bg-gray-700'
      }`}
      onClick={toggleHideFn}>
      <svg
        // TODO: Icon 패키지 사용 (check 아이콘)
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21.03 5.72a.75.75 0 0 1 0 1.06l-11.5 11.5a.747.747 0 0 1-1.072-.012l-5.5-5.75a.75.75 0 1 1 1.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 0 1 1.06 0"
        />
      </svg>
      <span className="xs:text-base whitespace-nowrap text-sm">
        읽은 아티클 숨김
      </span>
    </Button>
  )
}

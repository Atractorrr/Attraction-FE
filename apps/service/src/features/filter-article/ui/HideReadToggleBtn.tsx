'use client'

import { CheckOutline } from '@attraction/icons'
import FilterButton from './FilterButton'

interface HideReadToggleBtnProps {
  isRead: boolean
  toggleHideFn: () => void
}

export default function HideReadToggleBtn({
  isRead,
  toggleHideFn,
}: HideReadToggleBtnProps) {
  return (
    <FilterButton
      active={isRead}
      title={`읽은 아티클 ${isRead ? '보기' : '숨김'}`}
      onClick={toggleHideFn}>
      <CheckOutline />
      <span className="whitespace-nowrap pr-1 text-sm xs:text-base">
        읽은 아티클 숨김
      </span>
    </FilterButton>
  )
}

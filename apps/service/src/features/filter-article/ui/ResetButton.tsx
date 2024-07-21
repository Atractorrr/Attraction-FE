'use client'

import { RefreshOutline } from '@attraction/icons'
import FilterButton from './FilterButton'

interface ResetButtonProps {
  reset: () => void
}

export default function ResetButton({ reset }: ResetButtonProps) {
  return (
    <FilterButton title="초기화" onClick={reset}>
      <RefreshOutline className="text-lg xs:text-xl" />
      <span className="whitespace-nowrap pr-1 text-sm xs:text-base">
        초기화
      </span>
    </FilterButton>
  )
}

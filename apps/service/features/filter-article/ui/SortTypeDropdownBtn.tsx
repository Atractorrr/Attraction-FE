'use client'

import { useCallback, useState } from 'react'
import { Button } from '@attraction/design-system'
import { ChevronDownOutline } from '@attraction/icons'

import { SortType } from '@/entities/user-article'
import { useClickedOutsideOfElement } from '@/shared/lib'

export interface SortTypeDropdownProps {
  sortType: SortType
  setSortType: (type: SortType) => void
}

export const btns: Array<[SortType, string]> = [
  ['asc', '최신순'],
  ['desc', '오래된순'],
]

function SortTypeDropdown({ sortType, setSortType }: SortTypeDropdownProps) {
  return (
    <ul className="absolute -left-2 z-20 mt-2 min-w-40 rounded-lg border border-gray-100 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
      {btns.map(([type, label]) => (
        <li key={type}>
          <Button
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg py-2 pl-3 pr-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setSortType(type)}>
            {label} {sortType === type && '(선택됨)'}
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default function SortTypeDropdownBtn({
  sortType,
  setSortType,
}: SortTypeDropdownProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownAreaRef = useClickedOutsideOfElement(() => setMenuOpen(false))
  const setSortTypeAndMenu = useCallback(
    (type: SortType) => {
      setSortType(type)
      setMenuOpen(false)
    },
    [setSortType],
  )

  return (
    <div
      ref={(node) => {
        dropdownAreaRef.current = node
      }}
      className="relative">
      <Button
        className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 px-3 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        onClick={() => setMenuOpen((prev) => !prev)}>
        <span className="whitespace-nowrap">
          {sortType === 'desc' ? '오래된순' : '최신순'}
        </span>
        <ChevronDownOutline className={isMenuOpen ? 'rotate-180' : ''} />
      </Button>
      {isMenuOpen && (
        <SortTypeDropdown
          sortType={sortType}
          setSortType={setSortTypeAndMenu}
        />
      )}
    </div>
  )
}

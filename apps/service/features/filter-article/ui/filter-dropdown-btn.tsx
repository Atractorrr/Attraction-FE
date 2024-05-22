import { useEffect, useRef, useState } from 'react'
import { Button } from '@attraction/design-system'

import {
  CategoryDropdown,
  CategoryDropdownProps,
} from './category-dropdown-btn'
import { SortTypeDropdownProps, btns } from './sort-type-dropdown-btn'
import { useClickedOutsideOfElement } from '@/shared/lib'

type FilterDropdownProps = CategoryDropdownProps & SortTypeDropdownProps

function FilterDropdown({
  sortType,
  setSortType,
  userId,
  selectedCategories,
  setCategory,
  resetCategory,
}: FilterDropdownProps) {
  return (
    <ul className="absolute -left-2 z-10 mt-2 w-[86vw] rounded-lg border border-gray-200 bg-white px-3 py-4 sm:w-96 dark:border-gray-700 dark:bg-gray-800">
      <li>
        <h3 className="mb-2 whitespace-nowrap px-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          카테고리
        </h3>
        <CategoryDropdown
          userId={userId}
          selectedCategories={selectedCategories}
          setCategory={setCategory}
          resetCategory={resetCategory}
        />
      </li>
      <li>
        <h3 className="mb-2 mt-4 whitespace-nowrap px-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          정렬
        </h3>
        <div className="flex flex-wrap gap-2 pb-1">
          {btns.map(([type, label]) => (
            <Button
              key={type}
              className={`whitespace-nowrap rounded-3xl px-4 py-2 ${
                sortType === type
                  ? 'bg-gray-700 text-gray-50 dark:bg-gray-100 dark:text-gray-700'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
              onClick={() => setSortType(type)}>
              {label}
            </Button>
          ))}
        </div>
      </li>
    </ul>
  )
}

export default function FilterDropdownBtn({
  sortType,
  setSortType,
  userId,
  selectedCategories,
  setCategory,
  resetCategory,
}: FilterDropdownProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownBtnAreaRef = useRef<HTMLDivElement>(null)
  const isOutOfClicked = useClickedOutsideOfElement(dropdownBtnAreaRef)

  useEffect(() => {
    if (isOutOfClicked) setMenuOpen(false)
  }, [isOutOfClicked])

  return (
    <div ref={dropdownBtnAreaRef} className="relative">
      <Button
        className={`xs:text-xl flex items-center justify-center gap-2 rounded-lg  px-3 py-2 text-lg  ${
          selectedCategories.length > 0
            ? 'bg-blue-50 text-blue-400 dark:bg-blue-700'
            : 'bg-gray-50 dark:bg-gray-700'
        }`}
        onClick={() => setMenuOpen((prev) => !prev)}>
        <svg
          // TODO: Icon 패키지 사용 (필터 아이콘)
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M9.5 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z" />
            <path
              strokeLinecap="round"
              d="M11 7H6M3 7H2m11 10h5m3 0h1M2 17h4M22 7h-4"
            />
          </g>
        </svg>
        <span className="xs:text-base whitespace-nowrap pr-1 text-sm">
          필터
        </span>
      </Button>
      {isMenuOpen && (
        <FilterDropdown
          userId={userId}
          selectedCategories={selectedCategories}
          setCategory={setCategory}
          resetCategory={resetCategory}
          sortType={sortType}
          setSortType={setSortType}
        />
      )}
    </div>
  )
}

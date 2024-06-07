import { useCallback, useState } from 'react'
import { Button } from '@attraction/design-system'

import { useClickedOutsideOfElement } from '@/shared/lib'
import { AdjustmentHorizontalOutline } from '@attraction/icons'
import { NewsletterCategory } from '@/shared/type'
import { SortType } from '@/entities/user-article'
import { CategoryDropdown, CategoryDropdownProps } from './CategoryDropdownBtn'
import { SortTypeDropdownProps, btns } from './SortTypeDropdownBtn'

type FilterDropdownProps = CategoryDropdownProps & SortTypeDropdownProps

function FilterDropdown({
  sortType,
  setSortType,
  userId,
  selectedCategory,
  setCategory,
  resetCategory,
}: FilterDropdownProps) {
  return (
    <ul className="absolute -left-2 z-20 mt-2 w-[86vw] rounded-lg border border-gray-100 bg-white px-3 py-4 sm:w-96 dark:border-gray-700 dark:bg-gray-800">
      <li>
        <h3 className="mb-2 whitespace-nowrap px-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          카테고리
        </h3>
        <CategoryDropdown
          userId={userId}
          selectedCategory={selectedCategory}
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
              className={`whitespace-nowrap rounded-3xl px-4 py-2 transition-colors ${
                sortType === type
                  ? 'bg-gray-700 text-gray-50 dark:bg-gray-100 dark:text-gray-700'
                  : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
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
  selectedCategory,
  setCategory,
  resetCategory,
}: FilterDropdownProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownAreaRef = useClickedOutsideOfElement(() => setMenuOpen(false))
  const setCategoryAndCloseMenu = useCallback(
    (category: NewsletterCategory) => {
      setCategory(category)
      setMenuOpen(false)
    },
    [setCategory],
  )
  const resetCategoryAndCloseMenu = useCallback(() => {
    resetCategory()
    setMenuOpen(false)
  }, [resetCategory])
  const setSortTypeAndCloseMenu = useCallback(
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
        className={`xs:text-xl flex items-center justify-center gap-2 rounded-lg px-3  py-2 text-lg transition-colors ${
          selectedCategory
            ? 'bg-gray-700 text-gray-50 dark:bg-gray-50 dark:text-gray-700'
            : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
        title="필터 설정"
        onClick={() => setMenuOpen((prev) => !prev)}>
        <AdjustmentHorizontalOutline />
        <span className="xs:text-base whitespace-nowrap pr-1 text-sm">
          필터
        </span>
      </Button>
      {isMenuOpen && (
        <FilterDropdown
          userId={userId}
          selectedCategory={selectedCategory}
          setCategory={setCategoryAndCloseMenu}
          resetCategory={resetCategoryAndCloseMenu}
          sortType={sortType}
          setSortType={setSortTypeAndCloseMenu}
        />
      )}
    </div>
  )
}

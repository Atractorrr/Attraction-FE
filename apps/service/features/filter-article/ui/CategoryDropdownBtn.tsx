'use client'

import { useState } from 'react'
import { Button } from '@attraction/design-system'
import {
  ExclamationCircleOutline,
  RefreshOutline,
  TagOutline,
} from '@attraction/icons'
import { useUserCategoriesQuery } from '@/entities/user-article'
import { NewsletterCategory } from '@/shared/type'
import { useClickedOutsideOfElement } from '@/shared/lib'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { LoadingSpinner } from '@/shared/ui'

export interface CategoryDropdownProps {
  userId: string | number
  selectedCategories: NewsletterCategory[]
  setCategory: (category: NewsletterCategory) => void
  resetCategory: () => void
}

export function CategoryDropdown({
  userId,
  selectedCategories,
  setCategory,
  resetCategory,
}: CategoryDropdownProps) {
  const { data, isLoading, isError } = useUserCategoriesQuery({
    userId,
  })

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <p className="flex items-center justify-center gap-1 p-3 text-lg text-red-400 sm:justify-start dark:text-red-300">
          <ExclamationCircleOutline />
          <span className="text-base">카테고리를 불러오지 못했어요</span>
        </p>
      )}
      {data && (
        <ul className="flex flex-wrap gap-2">
          {data.length === 0 && (
            <p className="flex items-center justify-center gap-1 p-3 text-lg text-gray-500 sm:justify-start dark:text-gray-400">
              <ExclamationCircleOutline />
              <span className="text-base">구독한 뉴스레터가 없어요</span>
            </p>
          )}
          {data.map((category) => (
            <li key={category}>
              <Button
                className={`whitespace-nowrap rounded-3xl px-4 py-2 transition-colors ${
                  selectedCategories.some(
                    (categories) => categories === category,
                  )
                    ? 'bg-gray-700 text-gray-50 dark:bg-gray-100 dark:text-gray-700'
                    : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
                onClick={() => setCategory(category)}>
                {NEWSLETTER_CATEGORY[category]}
              </Button>
            </li>
          ))}
          {selectedCategories.length > 0 && (
            <li>
              <Button
                className="flex items-center justify-center gap-2 rounded-3xl bg-blue-50 px-4 py-2 text-xl text-blue-400 dark:bg-blue-800 dark:text-blue-300"
                onClick={resetCategory}>
                <RefreshOutline />
                <span className="whitespace-nowrap pr-1 text-base">초기화</span>
              </Button>
            </li>
          )}
        </ul>
      )}
    </>
  )
}

export default function CategoryDropdownBtn({
  userId,
  selectedCategories,
  setCategory,
  resetCategory,
}: CategoryDropdownProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownAreaRef = useClickedOutsideOfElement(() => setMenuOpen(false))

  return (
    <div
      ref={(node) => {
        dropdownAreaRef.current = node
      }}
      className="relative">
      <Button
        className={`flex items-center justify-center rounded-lg py-2 pl-3 pr-4 text-xl transition-colors ${
          selectedCategories.length > 0
            ? 'bg-blue-50 text-blue-400 dark:bg-blue-800 dark:text-blue-300'
            : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
        title="카테고리 변경"
        onClick={() => setMenuOpen((prev) => !prev)}>
        <TagOutline />
        <span className="mx-2 whitespace-nowrap text-base">카테고리</span>
        <span
          className={`text-sm ${
            selectedCategories.length > 0
              ? 'text-blue-400'
              : 'text-gray-500 dark:text-gray-400'
          }`}>
          {selectedCategories.length}
        </span>
      </Button>
      {isMenuOpen && (
        <div className="absolute -left-2 z-20 mt-2 w-96 rounded-lg border border-gray-100 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
          <CategoryDropdown
            userId={userId}
            selectedCategories={selectedCategories}
            setCategory={setCategory}
            resetCategory={resetCategory}
          />
        </div>
      )}
    </div>
  )
}

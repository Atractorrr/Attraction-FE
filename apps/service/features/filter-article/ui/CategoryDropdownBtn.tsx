'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@attraction/design-system'
import { useUserCategoriesQuery } from '@/entities/user-article'
import { NewsletterCategory } from '@/shared/type'
import { useClickedOutsideOfElement } from '@/shared/lib'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { TagOutline } from '@attraction/icons'

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
      {isLoading && (
        <p className="flex w-full items-center justify-center p-8 text-2xl text-gray-500">
          <svg
            // TODO: Icon 패키지 or 공용 컴포넌트 사용 (스피너)
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <rect width={6} height={14} x={1} y={4} fill="currentColor">
              <animate
                id="svgSpinnersBarsScaleFade0"
                fill="freeze"
                attributeName="y"
                begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
                dur="0.75s"
                values="1;5"
              />
              <animate
                fill="freeze"
                attributeName="height"
                begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
                dur="0.75s"
                values="22;14"
              />
              <animate
                fill="freeze"
                attributeName="opacity"
                begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
                dur="0.75s"
                values="1;0.2"
              />
            </rect>
            <rect
              width={6}
              height={14}
              x={9}
              y={4}
              fill="currentColor"
              opacity={0.4}>
              <animate
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBarsScaleFade0.begin+0.15s"
                dur="0.75s"
                values="1;5"
              />
              <animate
                fill="freeze"
                attributeName="height"
                begin="svgSpinnersBarsScaleFade0.begin+0.15s"
                dur="0.75s"
                values="22;14"
              />
              <animate
                fill="freeze"
                attributeName="opacity"
                begin="svgSpinnersBarsScaleFade0.begin+0.15s"
                dur="0.75s"
                values="1;0.2"
              />
            </rect>
            <rect
              width={6}
              height={14}
              x={17}
              y={4}
              fill="currentColor"
              opacity={0.3}>
              <animate
                id="svgSpinnersBarsScaleFade1"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBarsScaleFade0.begin+0.3s"
                dur="0.75s"
                values="1;5"
              />
              <animate
                fill="freeze"
                attributeName="height"
                begin="svgSpinnersBarsScaleFade0.begin+0.3s"
                dur="0.75s"
                values="22;14"
              />
              <animate
                fill="freeze"
                attributeName="opacity"
                begin="svgSpinnersBarsScaleFade0.begin+0.3s"
                dur="0.75s"
                values="1;0.2"
              />
            </rect>
          </svg>
        </p>
      )}
      {isError && (
        <p className="flex items-center justify-center gap-1 py-2 text-lg text-red-400 sm:justify-start">
          <svg
            // TODO: Icon 패키지 사용 (경고 아이콘)
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base">카테고리를 불러오지 못했어요</span>
        </p>
      )}
      <ul className="flex flex-wrap gap-2">
        {data?.categories.map((category) => (
          <li key={category}>
            <Button
              className={`whitespace-nowrap rounded-3xl px-4 py-2 transition-colors ${
                selectedCategories.some((categories) => categories === category)
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
              <svg
                // TODO: Icon 패키지 사용 (초기화 아이콘)
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.364 3.058a.75.75 0 0 1 .75.75V8.05a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.36a7.251 7.251 0 1 0 2.523 3.822a.75.75 0 1 1 1.45-.387a8.75 8.75 0 1 1-2.84-4.447v-2.48a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap pr-1 text-base">초기화</span>
            </Button>
          </li>
        )}
      </ul>
      {/* 
        // TODO: submit 버튼 회의 후 적용
        <div className="mt-4 flex gap-2">
          <Button className="w-1/3 rounded bg-gray-50 px-3 py-2 text-center dark:bg-gray-700">
            취소
          </Button>
          <Button className="w-2/3 rounded bg-gray-700 px-3 py-2 text-center text-white dark:bg-gray-100">
            적용
          </Button>
        </div> 
      */}
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
  const dropdownBtnAreaRef = useRef<HTMLDivElement>(null)
  const isOutOfClicked = useClickedOutsideOfElement(dropdownBtnAreaRef)

  useEffect(() => {
    if (isOutOfClicked) setMenuOpen(false)
  }, [isOutOfClicked])

  return (
    <div ref={dropdownBtnAreaRef} className="relative">
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

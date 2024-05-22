'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@attraction/design-system'

import {
  NewsletterCategory,
  NEWSLETTER_CATEGORY,
  useUserCategoriesQuery,
} from '@/entities/article'
import { useClickedOutsideOfElement } from '@/shared/lib'

export type CategoryDropdownProps = {
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
              className={`whitespace-nowrap rounded-3xl px-4 py-2 ${
                selectedCategories.some((categories) => categories === category)
                  ? 'bg-gray-700 text-gray-50 dark:bg-gray-100 dark:text-gray-700'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
              onClick={() => setCategory(category)}>
              {NEWSLETTER_CATEGORY[category]}
            </Button>
          </li>
        ))}
        {Object.values(selectedCategories).some((e) => e) && (
          <li>
            <Button
              className="flex items-center justify-center gap-2 rounded-3xl bg-blue-50 px-4 py-2 text-xl text-blue-400 dark:bg-blue-700 dark:text-blue-300"
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
        className={`flex items-center justify-center rounded-lg py-2 pl-3 pr-4 text-xl ${
          selectedCategories.length > 0
            ? 'bg-blue-50 text-blue-400 dark:bg-blue-700 dark:text-blue-300'
            : 'bg-gray-50 dark:bg-gray-700'
        }`}
        onClick={() => setMenuOpen((prev) => !prev)}>
        <svg
          // TODO: Icon 패키지 사용 (카테고리 아이콘 없음)
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.238 2.799c-.614.081-1.372.255-2.45.504l-1.229.284c-.91.21-1.538.356-2.017.52c-.463.159-.725.315-.922.513c-.198.197-.354.459-.513.922c-.164.479-.31 1.106-.52 2.017l-.284 1.228c-.249 1.079-.423 1.837-.504 2.451c-.08.598-.061 1.003.045 1.371c.105.368.304.721.688 1.186c.395.478.944 1.029 1.727 1.812l1.83 1.83c1.359 1.359 2.326 2.324 3.158 2.958c.814.622 1.41.855 2.015.855c.606 0 1.201-.233 2.016-.855c.831-.634 1.799-1.6 3.158-2.959c1.36-1.36 2.325-2.327 2.96-3.158c.62-.815.854-1.41.854-2.016c0-.605-.233-1.2-.855-2.015c-.634-.832-1.6-1.8-2.959-3.159l-1.83-1.83c-.782-.782-1.333-1.331-1.81-1.726c-.466-.384-.819-.583-1.187-.688c-.368-.106-.773-.124-1.37-.045m-.196-1.487c.717-.095 1.346-.092 1.98.09c.635.182 1.17.513 1.728.973c.54.446 1.14 1.046 1.891 1.797l1.896 1.896c1.31 1.31 2.348 2.348 3.05 3.27c.724.947 1.163 1.859 1.163 2.924c0 1.066-.439 1.978-1.162 2.925c-.703.922-1.74 1.96-3.051 3.27l-.08.08c-1.31 1.31-2.348 2.348-3.27 3.05c-.947.724-1.86 1.163-2.925 1.163c-1.065 0-1.977-.439-2.925-1.162c-.921-.703-1.959-1.74-3.27-3.051L4.173 16.64c-.75-.75-1.351-1.351-1.797-1.89c-.46-.559-.791-1.094-.973-1.728c-.182-.635-.185-1.264-.09-1.981c.091-.694.283-1.522.521-2.556l.3-1.303c.2-.863.362-1.567.555-2.128c.202-.587.455-1.08.871-1.496c.416-.416.91-.67 1.496-.87c.561-.194 1.265-.356 2.128-.555l1.303-.3c1.034-.24 1.862-.43 2.556-.522M9.49 7.995a1.25 1.25 0 1 0-1.768 1.768A1.25 1.25 0 0 0 9.49 7.995m-2.828-1.06a2.75 2.75 0 1 1 3.889 3.889a2.75 2.75 0 0 1-3.89-3.89M19.05 10.99a.75.75 0 0 1 0 1.06l-6.979 6.98a.75.75 0 0 1-1.06-1.06l6.978-6.98a.75.75 0 0 1 1.061 0"
            clipRule="evenodd"
          />
        </svg>
        <span className="mx-2 whitespace-nowrap text-base">카테고리</span>
        <span
          className={`text-sm ${
            selectedCategories.length > 0
              ? 'text-blue-500'
              : 'text-gray-500 dark:text-gray-400'
          }`}>
          {selectedCategories.length}
        </span>
      </Button>
      {isMenuOpen && (
        <div className="absolute -left-2 z-10 mt-2 w-96 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
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

'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Checkbox } from '@attraction/design-system'
import { useUserCategoriesSuspenseQuery } from '@/entities/user-article'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { GuideTxt, LoadingSpinner } from '@/shared/ui'
import type { CategorySelectProps } from './CategoryButton'

interface CategorySelectForDrawerProps extends CategorySelectProps {
  close: () => void
}

function UserCategorySelect({
  selectedCategory,
  setCategory,
  close,
}: CategorySelectForDrawerProps) {
  const { data } = useUserCategoriesSuspenseQuery()

  return (
    <>
      <li className="flex px-3">
        <Checkbox
          className="block w-full rounded-lg p-2 transition-colors active:bg-gray-50 dark:active:bg-gray-700"
          checked={!selectedCategory}
          onChange={() => {
            setCategory(undefined)
            close()
          }}
          label="전체"
        />
      </li>
      {data.map((category) => (
        <li key={category} className="flex px-3">
          <Checkbox
            className="block w-full rounded-lg p-2 transition-colors active:bg-gray-50 dark:active:bg-gray-700"
            checked={category === selectedCategory}
            onChange={() => {
              setCategory(category)
              close()
            }}
            label={NEWSLETTER_CATEGORY[category]}
          />
        </li>
      ))}
    </>
  )
}

export default function CategorySelectForDrawer(
  props: CategorySelectForDrawerProps,
) {
  return (
    <ErrorBoundary
      fallback={
        <div className="scrollbar-hidden h-[48vh] overflow-y-auto px-5 py-16">
          <GuideTxt
            title="카테고리를 불러오지 못했어요"
            sub="동일한 현상이 지속된다면 관리자에게 문의해주세요"
          />
        </div>
      }>
      <ul className="scrollbar-hidden h-[48vh] overflow-y-auto">
        <Suspense fallback={<LoadingSpinner />}>
          <UserCategorySelect {...props} />
        </Suspense>
      </ul>
    </ErrorBoundary>
  )
}

'use client'

import {
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from '@attraction/design-system/dist'
import { useUserCategoriesQuery } from '@/entities/user-article'
import { NewsletterCategory } from '@/shared/type'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { LoadingSpinner, WarnTxt } from '@/shared/ui'

export interface CategoryDropdownProps {
  userId: string | number
  selectedCategory?: NewsletterCategory
  setCategory: (category?: NewsletterCategory) => void
}

export default function CategoryDropdown({
  userId,
  selectedCategory,
  setCategory,
}: CategoryDropdownProps) {
  const { data, isLoading, isError } = useUserCategoriesQuery({
    userId,
  })

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <div className="p-3">
          <WarnTxt content="카테고리를 불러오지 못했어요" color="red" />
        </div>
      )}
      {data && (
        <>
          {data.length === 0 && <WarnTxt content="구독한 뉴스레터가 없어요" />}
          <DropdownMenuRadioGroup value={selectedCategory ?? 'all'}>
            {data.length > 0 && (
              <DropdownMenuRadioItem
                value="all"
                title="카테고리 선택: 전체"
                onClick={() => setCategory(undefined)}>
                전체
              </DropdownMenuRadioItem>
            )}
            {data.map((category) => (
              <DropdownMenuRadioItem
                key={category}
                title={`카테고리 선택: ${NEWSLETTER_CATEGORY[category]}`}
                value={category}
                onClick={() => setCategory(category)}>
                {NEWSLETTER_CATEGORY[category]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </>
      )}
    </>
  )
}

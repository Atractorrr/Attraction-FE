'use client'

import {
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from '@attraction/design-system/dist'
import { RefreshOutline } from '@attraction/icons'
import { useUserCategoriesQuery } from '@/entities/user-article'
import { NewsletterCategory } from '@/shared/type'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { LoadingSpinner, WarnTxt } from '@/shared/ui'

export interface CategoryDropdownProps {
  userId: string | number
  selectedCategory?: NewsletterCategory
  setCategory: (category: NewsletterCategory) => void
  resetCategory: () => void
}

export default function CategoryDropdown({
  userId,
  selectedCategory,
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
        <WarnTxt content="카테고리를 불러오지 못했어요" color="red" />
      )}
      {data && (
        <>
          {data.length === 0 && <WarnTxt content="구독한 뉴스레터가 없어요" />}
          <DropdownMenuRadioGroup value={selectedCategory}>
            {data.map((category) => (
              <DropdownMenuRadioItem
                key={category}
                title={`카테고리 선택: ${NEWSLETTER_CATEGORY[category]}`}
                value={category}
                onClick={() => setCategory(category)}>
                {NEWSLETTER_CATEGORY[category]}
              </DropdownMenuRadioItem>
            ))}
            {!!selectedCategory && (
              <DropdownMenuItem title="카테고리 초기화" onClick={resetCategory}>
                <RefreshOutline className="text-lg" />
                <span className="ml-2 whitespace-nowrap">초기화</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuRadioGroup>
        </>
      )}
    </>
  )
}

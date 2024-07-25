'use client'

import type { PropsWithChildren } from 'react'
import {
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import { useUserCategoriesQuery } from '@/entities/user-article'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { LoadingSpinner, WarnTxt } from '@/shared/ui'
import type { CategorySelectProps } from './CategoryButton'

interface CategoryDropdownProps extends PropsWithChildren<CategorySelectProps> {
  open?: boolean
  onOpenChange?: (status: boolean) => void
}

export default function CategoryDropdown({
  selectedCategory,
  setCategory,
  open,
  onOpenChange,
  children,
}: CategoryDropdownProps) {
  const { data, isLoading, isError } = useUserCategoriesQuery({ enabled: open })

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        {isLoading && <LoadingSpinner />}
        {isError && (
          <div className="p-3">
            <WarnTxt content="카테고리를 불러오지 못했어요" color="red" />
          </div>
        )}
        {data &&
          (data.length <= 0 ? (
            <div className="p-3">
              <WarnTxt content="구독한 뉴스레터가 없어요" type="info" />
            </div>
          ) : (
            <DropdownMenuRadioGroup value={selectedCategory ?? 'all'}>
              <DropdownMenuRadioItem
                value="all"
                title="카테고리 선택: 전체"
                onClick={() => setCategory(undefined)}>
                전체
              </DropdownMenuRadioItem>
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
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

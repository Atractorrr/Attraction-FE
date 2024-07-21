'use client'

import { PropsWithChildren, useState } from 'react'
import { ChevronDownOutline, TagOutline } from '@attraction/icons'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@attraction/design-system'
import { useCheckDevice } from '@/shared/lib'
import type { NewsletterCategory } from '@/shared/type'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import FilterButton from './FilterButton'
import CategoryDropdown from './CategoryDropdown'
import CategorySelectForDrawer from './CategorySelectForDrawer'

export interface CategorySelectProps {
  selectedCategory?: NewsletterCategory
  setCategory: (category?: NewsletterCategory) => void
}

function DropdownToDrawer({
  children,
  ...props
}: PropsWithChildren<CategorySelectProps>) {
  const { isMobileView } = useCheckDevice()
  const [isOpen, setOpen] = useState(false)
  const close = () => setOpen(false)

  if (isMobileView) {
    return (
      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>카테고리 선택</DrawerTitle>
          </DrawerHeader>
          <CategorySelectForDrawer {...props} close={close} />
          <DrawerFooter>
            <DrawerClose asChild>
              <button
                type="button"
                title="닫기"
                className="w-full whitespace-nowrap rounded-lg bg-gray-50 px-6 py-3 transition-colors active:bg-gray-100 xs:text-lg md:px-10 dark:bg-gray-700 dark:active:bg-gray-600"
                onClick={close}>
                닫기
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <CategoryDropdown {...props} open={isOpen} onOpenChange={setOpen}>
      {children}
    </CategoryDropdown>
  )
}

export default function CategoryButton({ ...props }: CategorySelectProps) {
  return (
    <DropdownToDrawer {...props}>
      <FilterButton active={!!props.selectedCategory} title="카테고리 변경">
        <TagOutline className="text-lg xs:text-xl" />
        <span className="whitespace-nowrap text-sm xs:text-base">
          {props.selectedCategory
            ? NEWSLETTER_CATEGORY[props.selectedCategory]
            : '카테고리'}
        </span>
        <ChevronDownOutline className="text-base" />
      </FilterButton>
    </DropdownToDrawer>
  )
}

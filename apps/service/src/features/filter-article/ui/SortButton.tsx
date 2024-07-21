'use client'

import { PropsWithChildren, useState } from 'react'
import { SORT_LABEL, SORT_MENU, SortType } from '@/entities/user-article'
import { ChevronDownOutline } from '@attraction/icons'
import {
  Checkbox,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@attraction/design-system'
import { useCheckDevice } from '@/shared/lib'
import FilterButton from './FilterButton'

interface SortButtonProps {
  sortType: SortType
  setSortType: (type: SortType) => void
}

function DropdownToDrawer({
  sortType,
  setSortType,
  children,
}: PropsWithChildren<SortButtonProps>) {
  const { isMobileView } = useCheckDevice()
  const [isOpen, setOpen] = useState(false)
  const close = () => setOpen(false)

  if (isMobileView) {
    return (
      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>아티클 정렬</DrawerTitle>
          </DrawerHeader>
          <ul className="scrollbar-hidden h-[48vh] overflow-y-auto">
            {SORT_MENU.map(([type, label]) => (
              <li key={type} className="flex px-3">
                <Checkbox
                  className="block w-full rounded-lg p-2 transition-colors active:bg-gray-50 dark:active:bg-gray-700"
                  checked={type === sortType}
                  onChange={() => {
                    setSortType(type)
                    close()
                  }}
                  label={label}
                />
              </li>
            ))}
          </ul>
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
    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuRadioGroup value={sortType}>
          {SORT_MENU.map(([type, label]) => (
            <DropdownMenuRadioItem
              key={type}
              value={type}
              title={`정렬: ${label}`}
              onClick={() => setSortType(type)}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function SortButton({ ...props }: SortButtonProps) {
  return (
    <DropdownToDrawer {...props}>
      <FilterButton title="정렬 기준 변경">
        <span className="whitespace-nowrap text-sm xs:text-base">
          {SORT_LABEL[props.sortType]}
        </span>
        <ChevronDownOutline className="text-base" />
      </FilterButton>
    </DropdownToDrawer>
  )
}

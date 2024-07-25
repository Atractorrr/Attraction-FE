'use client'

import { Suspense, useCallback, useState, type PropsWithChildren } from 'react'
import {
  CheckOutline,
  ChevronDownOutline,
  EnvelopeOpen2Outline,
} from '@attraction/icons'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@attraction/design-system'
import {
  useUserNewslettersQuery,
  type NewsletterItem,
} from '@/entities/user-article'
import { useCheckDevice } from '@/shared/lib'
import {
  GuideTxt,
  LoadingSpinner,
  NewsletterAvatar,
  NewsletterSelect,
  WarnTxt,
} from '@/shared/ui'
import { ErrorBoundary } from 'react-error-boundary'
import FilterButton from './FilterButton'

interface NewsletterSelectButtonProps {
  selectedNewsletter?: NewsletterItem
  setNewsletter: (newsletter?: NewsletterItem) => void
}

function SubscribeNewsletters({
  selectedNewsletter,
  setNewsletter,
  withDrawer,
}: NewsletterSelectButtonProps & { withDrawer?: boolean }) {
  const { data } = useUserNewslettersQuery()

  if (data.length <= 0 && withDrawer) {
    return (
      <li>
        <GuideTxt
          title="구독한 뉴스레터가 없어요"
          sub="뉴스레터를 구독해 보세요"
          className="px-5 py-16"
        />
      </li>
    )
  }

  if (data.length <= 0) {
    return (
      <li>
        <WarnTxt content="구독한 뉴스레터가 없어요" type="info" />
      </li>
    )
  }

  return data.map((newsletter) => {
    const isSelected = selectedNewsletter?.id === newsletter.id
    return (
      <li key={newsletter.id} className={withDrawer ? 'peer peer-[]:mt-1' : ''}>
        <button
          type="button"
          onClick={() => setNewsletter(isSelected ? undefined : newsletter)}
          className={`relative block w-full ${withDrawer ? 'rounded-lg' : 'rounded'} pr-8 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700`}>
          <NewsletterSelect>
            <NewsletterAvatar
              url={newsletter.thumbnailUrl}
              name={newsletter.name}
              size={withDrawer ? 'lg' : 'md'}
            />
            <NewsletterSelect.Name className={withDrawer ? '' : 'text-sm'}>
              {newsletter.name}
            </NewsletterSelect.Name>
          </NewsletterSelect>
          {isSelected && (
            <CheckOutline
              className={`absolute inset-y-0 right-3 my-auto ${withDrawer ? 'size-5 text-xl' : 'size-4 text-base'}`}
            />
          )}
        </button>
      </li>
    )
  })
}

function DropdownToDrawer({
  children,
  ...props
}: PropsWithChildren<NewsletterSelectButtonProps>) {
  const { isMobileView } = useCheckDevice()
  const [isOpen, setOpen] = useState(false)
  const close = () => setOpen(false)
  const setNewsletter: typeof props.setNewsletter = useCallback(
    (newsletter) => {
      props.setNewsletter(newsletter)
      close()
    },
    [props],
  )

  if (isMobileView) {
    return (
      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>뉴스레터별 조회</DrawerTitle>
          </DrawerHeader>
          <ErrorBoundary
            fallback={
              <div className="scrollbar-hidden h-[48vh] overflow-y-auto px-5 py-16">
                <GuideTxt
                  title="뉴스레터를 불러오지 못했어요"
                  sub="동일한 현상이 지속된다면 관리자에게 문의해주세요"
                />
              </div>
            }>
            <Suspense fallback={<LoadingSpinner />}>
              <ul className="scrollbar-hidden h-[48vh] overflow-y-auto px-3">
                <SubscribeNewsletters
                  {...props}
                  setNewsletter={setNewsletter}
                  withDrawer
                />
              </ul>
            </Suspense>
          </ErrorBoundary>
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
      <DropdownMenuContent className="w-64">
        <ErrorBoundary
          fallback={
            <div className="py-3 pr-3">
              <WarnTxt content="뉴스레터를 불러오지 못했어요" color="red" />
            </div>
          }>
          <Suspense fallback={<LoadingSpinner />}>
            <ul className="scrollbar-hidden max-h-[23rem] overflow-y-auto">
              <SubscribeNewsletters {...props} setNewsletter={setNewsletter} />
            </ul>
          </Suspense>
        </ErrorBoundary>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function NewsletterSelectButton({
  ...props
}: NewsletterSelectButtonProps) {
  return (
    <DropdownToDrawer {...props}>
      <FilterButton
        active={(props.selectedNewsletter?.id ?? -1) >= 0}
        title="뉴스레터별 조회">
        <EnvelopeOpen2Outline className="text-lg xs:text-xl" />
        <span className="whitespace-nowrap text-sm xs:text-base">뉴스레터</span>
        <ChevronDownOutline className="text-base" />
      </FilterButton>
    </DropdownToDrawer>
  )
}

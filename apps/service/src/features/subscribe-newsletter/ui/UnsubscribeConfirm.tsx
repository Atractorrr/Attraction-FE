'use client'

import { PropsWithChildren, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@attraction/design-system'
import { WarnTxt } from '@/shared/ui'
import { SubscribeButtonProps, useSubscribeNewsletter } from '../model'

export default function UnsubscribeConfirm({
  children,
  newsletterName,
  newsletterId,
}: PropsWithChildren<SubscribeButtonProps>) {
  const [isOpen, setOpen] = useState(false)
  const { mutate: unsubscribe } = useSubscribeNewsletter({
    newsletterId,
    type: 'unsubscribe',
    onSuccess: () => setOpen(false),
  })

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="space-y-3 p-1">
            <DialogTitle>뉴스레터 구독 중단하기</DialogTitle>
            <DialogDescription>
              어트랙션 서비스 내에서 더 이상 해당 뉴스레터의 아티클을 받지
              않아요
            </DialogDescription>
          </div>
          <p className="!mt-4 pb-1">
            <WarnTxt
              content="이메일 구독 취소는 현재 개발 중이에요"
              color="red"
            />
          </p>
        </DialogHeader>
        <DialogFooter>
          <button
            type="button"
            title="취소하기"
            className="h-12 whitespace-nowrap rounded-lg bg-gray-50 px-5 py-2 text-center transition-colors hover:bg-gray-100 xs:w-auto dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setOpen(false)}>
            취소하기
          </button>
          <button
            type="button"
            className="block h-12 grow whitespace-nowrap rounded-lg bg-gray-700 p-2 text-center font-medium text-gray-50 transition-colors hover:bg-gray-800 disabled:!bg-gray-50 disabled:!text-gray-400 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100 dark:disabled:!bg-gray-700 dark:disabled:!text-gray-500"
            title={`구독 중단하기: ${newsletterName}`}
            onClick={() => unsubscribe()}>
            구독 중단하기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

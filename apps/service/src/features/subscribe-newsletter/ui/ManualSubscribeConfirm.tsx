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
import { useAuth } from '@/entities/auth'
import { copy } from '@/shared/lib'
import { WarnTxt } from '@/shared/ui'
import { SubscribeButtonProps, useSubscribeNewsletter } from '../model'

export default function ManualSubscribeConfirm({
  children,
  newsletterName,
  newsletterId,
  subscribeLink,
}: PropsWithChildren & SubscribeButtonProps) {
  const { userEmail, userNickname } = useAuth()
  const [isOpen, setOpen] = useState(false)
  const { mutate: subscribe } = useSubscribeNewsletter({
    newsletterId,
    onSuccess: () => setOpen(false),
  })

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="space-y-3 p-1">
            <DialogTitle>뉴스레터 구독하러 가기</DialogTitle>
            <DialogDescription>
              해당 뉴스레터는 직접 구독해야하는{' '}
              <span className="whitespace-nowrap">뉴스레터에요 😢</span>
            </DialogDescription>
          </div>
          <p className="!mt-4 pb-1">
            <WarnTxt
              content="구독하러 가기 버튼을 누르면 자동으로 이메일을 복사해드려요!"
              type="info"
              color="blue"
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
            title={`구독하러 가기: ${newsletterName}`}
            onClick={async () => {
              await copy(userEmail ?? '이메일을 가져오는데 실패했어요 ㅠ')
              window.open(
                subscribeLink.includes('stibee')
                  ? `${subscribeLink}?email=${userEmail ?? 'user@gmail.com'}&name=${userNickname ?? 'user'}`
                  : subscribeLink,
              )
              subscribe()
            }}>
            구독하러 가기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

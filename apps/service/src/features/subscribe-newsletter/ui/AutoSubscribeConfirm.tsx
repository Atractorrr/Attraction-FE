'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Checkbox,
  DialogDescription,
} from '@attraction/design-system'
import Link from 'next/link'
import { SubscribeButtonProps, useSubscribeNewsletter } from '../model'

export default function AutoSubscribeConfirm({
  children,
  newsletterId,
  newsletterName,
  subscribeLink,
  isAgreePersonalInfoCollection,
  isAgreeAdInfoReception,
}: PropsWithChildren<SubscribeButtonProps>) {
  const [isOpen, setOpen] = useState(false)
  const [checkPrivacy, setPrivacy] = useState(false)
  const [checkMarketing, setMarketing] = useState(false)
  const { mutate: subscribe } = useSubscribeNewsletter({
    newsletterId,
    type: 'subscribe',
    onSuccess: () => setOpen(false),
  })

  useEffect(() => {
    setPrivacy(!isAgreePersonalInfoCollection)
    setMarketing(!isAgreeAdInfoReception)
  }, [isAgreePersonalInfoCollection, isAgreeAdInfoReception])

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>뉴스레터 구독하기</DialogTitle>
          <DialogDescription>
            새로운 뉴스레터를 만날 준비가 되셨나요?
          </DialogDescription>
        </DialogHeader>
        <div className="px-1 pb-3 pt-4">
          {isAgreePersonalInfoCollection && (
            <p>
              <Checkbox
                label={
                  <>
                    (필수){' '}
                    <Link
                      href={subscribeLink}
                      target="_blank"
                      title={`새창이동: 개인정보 수집 및 이용 약관 (${newsletterName})`}
                      className="underline">
                      개인정보 수집 및 이용
                    </Link>
                    에 동의합니다.
                  </>
                }
                onChange={() => setPrivacy((prev) => !prev)}
              />
            </p>
          )}
          {isAgreeAdInfoReception && (
            <p className="mt-1">
              <Checkbox
                label={
                  <>
                    (필수){' '}
                    <Link
                      href={subscribeLink}
                      target="_blank"
                      title={`새창이동: 광고성 정보 수신 약관 (${newsletterName})`}
                      className="underline">
                      광고성 정보 수신
                    </Link>
                    에 동의합니다.
                  </>
                }
                onChange={() => setMarketing((prev) => !prev)}
              />
            </p>
          )}
        </div>
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
            className="block h-12 grow rounded-lg bg-gray-700 p-2 text-center font-medium text-gray-50 transition-colors hover:bg-gray-800 disabled:!bg-gray-50 disabled:!text-gray-400 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100 dark:disabled:!bg-gray-700 dark:disabled:!text-gray-500"
            title={`구독하기: ${newsletterName}`}
            onClick={() => subscribe()}
            disabled={!(checkPrivacy && checkMarketing)}>
            구독하기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

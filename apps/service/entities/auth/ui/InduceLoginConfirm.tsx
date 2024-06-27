'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
} from '@attraction/design-system'
import { GOOGLE_OAUTH_URL } from '@/shared/constant'

interface InduceLoginConfirmProps extends PropsWithChildren {
  open?: boolean
  onOpenChange?: (status: boolean) => void
}

export default function InduceLoginConfirm({
  children,
  open,
  onOpenChange,
}: InduceLoginConfirmProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {!!children && (
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      )}
      <AlertDialogContent
        onEscapeKeyDown={() => {
          if (children) {
            setTimeout(() => {
              document.body.style.pointerEvents = ''
            }, 500)
          }
        }}>
        <AlertDialogHeader>
          <AlertDialogTitle>로그인이 필요한 서비스에요</AlertDialogTitle>
          <AlertDialogDescription>
            로그인 하러 가시겠어요?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onOpenChange?.(false)}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Link href={GOOGLE_OAUTH_URL} title="로그인 하러가기">
              <span className="hidden whitespace-nowrap xs:inline">
                로그인 하러가기
              </span>
              <span className="inline whitespace-nowrap xs:hidden">로그인</span>
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

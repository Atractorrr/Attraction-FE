'use client'

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
import { logout } from '../lib'

interface LogoutConfirmProps extends PropsWithChildren {
  open?: boolean
  onOpenChange?: (status: boolean) => void
}

export default function LogoutConfirm({
  children,
  open,
  onOpenChange,
}: LogoutConfirmProps) {
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
          <AlertDialogTitle>로그아웃 하시겠어요?</AlertDialogTitle>
          <AlertDialogDescription>
            서비스 이용에 불편한 점이 있다면 언제든 이야기 해주세요!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel title="취소" onClick={() => onOpenChange?.(false)}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction title="로그아웃" onClick={logout}>
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

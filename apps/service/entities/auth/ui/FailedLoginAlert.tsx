'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@attraction/design-system'

export default function FailedLoginAlert() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const isFailedLogin = params.has('failedLogin')
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isFailedLogin) {
      router.replace(pathname)
      setOpen(true)
    }
  }, [router, pathname, isFailedLogin])

  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그인에 실패했어요</AlertDialogTitle>
          <AlertDialogDescription>
            동일한 현상이 계속될 경우 관리자에게 문의 부탁드려요
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => router.push('/sign-in')}>
            다시시도
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

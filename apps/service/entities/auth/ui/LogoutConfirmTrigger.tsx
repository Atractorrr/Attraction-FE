'use client'

import { PropsWithChildren, Component } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from '@attraction/design-system'
import { logout } from '../lib'

export default class LogoutConfirmTrigger extends Component<PropsWithChildren> {
  componentWillUnmount() {
    setTimeout(() => {
      document.body.style.pointerEvents = 'all'
    }, 500)
  }

  render() {
    const { children } = this.props

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>로그아웃 하시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              서비스 이용에 불편한 점이 있다면 언제든 이야기 해주세요!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={logout}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
}

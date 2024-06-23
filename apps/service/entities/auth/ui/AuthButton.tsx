'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import {
  CogOutline,
  MemberOutline,
  ArrowLeftStartOnRectangleOutline,
} from '@attraction/icons'
import { useAuth } from '../model'
import LogoutConfirmTrigger from './LogoutConfirmTrigger'

export default function AuthButton() {
  const router = useRouter()
  const { isLogin } = useAuth()

  return isLogin ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          // TODO: 프로필 사진 삽입
          type="button"
          className="flex size-12 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800">
          <MemberOutline className="text-xl text-gray-500 dark:text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem
          title="마이페이지 이동"
          onClick={() => router.push('/mypage')}>
          <MemberOutline className="text-lg" />
          <span className="ml-2">마이페이지</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          title="개인설정 페이지 이동"
          onClick={() => router.push('/setting')}>
          <CogOutline className="text-lg" />
          <span className="ml-2">개인설정</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutConfirmTrigger>
          <button
            type="button"
            className="flex w-full items-center justify-start rounded px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            title="로그아웃">
            <ArrowLeftStartOnRectangleOutline className="text-lg text-red-400 dark:text-red-300" />
            <span className="ml-2 text-red-400 dark:text-red-300">
              로그아웃
            </span>
          </button>
        </LogoutConfirmTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link
      href="/sign-in"
      title="로그인 페이지 이동"
      className="flex h-12 w-auto items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3 text-blue-400 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:text-blue-300 dark:hover:border-gray-700 dark:hover:bg-gray-700">
      <MemberOutline className="size-6" />
      <span className="pr-1 text-lg">로그인</span>
    </Link>
  )
}

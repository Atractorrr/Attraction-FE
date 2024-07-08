'use client'

import Link from 'next/link'
import { MemberOutline } from '@attraction/icons'
import { useCheckDevice } from '@/shared/lib'
import { GOOGLE_OAUTH_URL } from '@/shared/constant'
import { useAuth } from '../model'
import ProfileDropdown from './ProfileDropdown'

export default function AuthButton() {
  const { isLogin } = useAuth()
  const { isVisited } = useCheckDevice()

  return isLogin ? (
    <ProfileDropdown />
  ) : (
    <Link
      href={isVisited ? GOOGLE_OAUTH_URL : '/sign-in'}
      title="로그인 페이지 이동"
      className="flex h-12 w-auto items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3 text-blue-400 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:text-blue-300 dark:hover:border-gray-700 dark:hover:bg-gray-700">
      <MemberOutline className="size-6" />
      <span className="pr-1 text-lg">로그인</span>
    </Link>
  )
}

'use client'

import Link from 'next/link'
// import Image from 'next/image'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import { MemberOutline } from '@attraction/icons'

interface AuthButtonProps {
  isLogin: boolean
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    // TODO: 아이콘 패키지에 추가 (로그아웃 아이콘)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M14.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.524.525-.79 1.17-.929 1.928c-.135.737-.161 1.638-.167 2.72a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399c-.277.277-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008c.006 1.082.032 1.983.167 2.72c.14.758.405 1.403.93 1.928c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116h1.11c1.368 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.121-.9-.38-1.658-.982-2.26c-.602-.602-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z"
      />
      <path
        fill="currentColor"
        d="M15 11.25a.75.75 0 0 1 0 1.5H4.027l1.961 1.68a.75.75 0 1 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 1 1 .976 1.14l-1.96 1.68z"
      />
    </svg>
  )
}

export default function AuthButton({ isLogin }: AuthButtonProps) {
  const signOutHandler = async () => {
    await fetch('/api/auth/sign-out', {
      method: 'DELETE',
    })
    window.location.reload()
  }

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
        <DropdownMenuItem title="로그아웃" onClick={signOutHandler}>
          <LogoutIcon className="text-lg" />
          <span className="ml-2">로그아웃</span>
        </DropdownMenuItem>
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

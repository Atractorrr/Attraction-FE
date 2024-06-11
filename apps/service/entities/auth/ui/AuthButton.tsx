'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@attraction/design-system/dist'
import { MemberOutline } from '@attraction/icons'
import { useClickedOutsideOfElement } from '@/shared/lib'
import Image from 'next/image'

interface AuthButtonProps {
  isLogin: boolean
}

function AuthButtonDropdown() {
  const signOutHandler = async () => {
    await fetch('/api/auth/sign-out', {
      method: 'DELETE',
    })

    window.location.reload()
  }

  return (
    <ul className="absolute -bottom-16 -right-2 z-20 mt-2 w-[86vw] rounded-lg border border-gray-100 bg-white p-2 sm:w-52 dark:border-gray-700 dark:bg-gray-800">
      <li>
        <Button
          onClick={signOutHandler}
          className="block w-full rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700"
          title="로그아웃">
          로그아웃
        </Button>
      </li>
    </ul>
  )
}

export default function AuthButton({ isLogin }: AuthButtonProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownAreaRef = useClickedOutsideOfElement(() => setMenuOpen(false))

  return isLogin ? (
    <div
      ref={(node) => {
        dropdownAreaRef.current = node
      }}
      className="relative flex">
      <Button
        type="button"
        className="size-12 overflow-hidden rounded-lg border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800"
        onClick={() => setMenuOpen((prev) => !prev)}>
        <Image
          className="size-full"
          width={64}
          height={64}
          src="/images/default-1x1.jpg"
          alt="profile"
        />
      </Button>
      {isMenuOpen ? <AuthButtonDropdown /> : null}
    </div>
  ) : (
    <Link
      href="/sign-in"
      className="flex h-12 w-auto items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3 text-blue-400 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:text-blue-300 dark:hover:border-gray-700 dark:hover:bg-gray-700">
      <MemberOutline className="size-6" />
      <span className="pr-1 text-lg">로그인</span>
    </Link>
  )
}

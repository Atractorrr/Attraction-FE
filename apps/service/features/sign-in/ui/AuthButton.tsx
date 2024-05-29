'use client'

import { useClickedOutsideOfElement } from '@/shared/lib'
import { Button } from '@attraction/design-system'
import { MemberOutline } from '@attraction/icons'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface AuthButtonProps {
  isLogin: boolean
}

function AuthButtonDropdown() {
  return (
    <ul className="absolute -left-2 z-20 mt-2 w-[86vw] rounded-lg border border-gray-100 bg-white px-3 py-4 sm:w-96 dark:border-gray-700 dark:bg-gray-800">
      <li>로그아웃</li>
    </ul>
  )
}

export default function AuthButton({ isLogin }: AuthButtonProps) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const dropdownBtnAreaRef = useRef<HTMLDivElement>(null)
  const isOutOfClicked = useClickedOutsideOfElement(dropdownBtnAreaRef)

  useEffect(() => {
    if (isOutOfClicked) setMenuOpen(false)
  }, [isOutOfClicked])

  return isLogin ? (
    <div ref={dropdownBtnAreaRef} className="relative">
      <Button
        type="button"
        className="size-12 rounded-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800"
        onClick={() => setMenuOpen((prev) => !prev)}
      />
      {isMenuOpen ? <AuthButtonDropdown /> : null}
    </div>
  ) : (
    <Link
      href="/sign-in"
      className="flex h-12 w-28 items-center justify-center gap-x-1 rounded-lg border border-gray-100 bg-white px-4 py-3 text-blue-400 dark:border-gray-800 dark:bg-gray-700">
      <MemberOutline className="size-6" />
      <p className="text-lg">로그인</p>
    </Link>
  )
}

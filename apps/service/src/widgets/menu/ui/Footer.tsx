'use client'

import Link from 'next/link'
import { ADMIN_EMAIL, TEAM_NAME } from '@/shared/constant'
import { MouseEventHandler } from 'react'

interface FooterProps {
  handleMenuClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function Footer({ handleMenuClick }: FooterProps) {
  return (
    <footer className="w-full break-keep text-center text-sm text-gray-500 dark:text-gray-400">
      <ul className="mb-2 flex items-center justify-center">
        <li>
          <Link
            href="/policy/service"
            className="hover:text-blue-400 dark:hover:text-blue-300"
            title="이용약관 보기"
            onClick={handleMenuClick}>
            이용약관
          </Link>
        </li>
        <li className="mx-3 h-3 w-px bg-gray-100 dark:bg-gray-700" />
        <li>
          <Link
            href="/policy/privacy"
            className="hover:text-blue-400 dark:hover:text-blue-300"
            title="개인정보처리방침 보기"
            onClick={handleMenuClick}>
            개인정보처리방침
          </Link>
        </li>
      </ul>
      <p>고객지원: {ADMIN_EMAIL}</p>
      <p className="mt-6">&copy; 2024 {TEAM_NAME}</p>
    </footer>
  )
}

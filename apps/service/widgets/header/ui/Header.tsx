'use client'

import { AuthButton } from '@/entities/auth'
import { ThemeDropdownBtn } from '@/features/set-theme/ui'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

const getTitle = (pathname: string) => {
  if (pathname === '/') {
    return '홈'
  }
  const target = [
    ['/inbox', '뉴스레터 보관함'],
    ['/newsletter', '뉴스레터 소개'],
    ['/mypage', '마이페이지'],
    ['/discover', '탐색'],
  ].find(([path]) => pathname.startsWith(path))
  return target ? target[1] : '어트랙션'
}

export default function Header({ isLogin }: { isLogin: boolean }) {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()

  return (
    <header
      className={`bg-gray-50 pb-6 pt-12 md:mb-6 md:bg-transparent md:py-0 dark:bg-gray-900 md:dark:bg-transparent ${
        segments.some((s) => s === 'article') ? 'hidden md:block' : ''
      }`}>
      <div className="flex flex-wrap items-center justify-between gap-5 pl-6 pr-5 md:pl-2 md:pr-0">
        <h3 className="whitespace-nowrap text-xl font-bold md:text-2xl">
          {getTitle(pathname)}
        </h3>
        <div className="flex items-center justify-end gap-2">
          <ThemeDropdownBtn />
          <AuthButton isLogin={isLogin} />
        </div>
      </div>
    </header>
  )
}

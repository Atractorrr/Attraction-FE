'use client'

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

export default function Header() {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()

  return (
    <header
      className={`bg-white pb-6 pt-20 md:mb-6 md:bg-transparent md:py-0 dark:bg-gray-800 md:dark:bg-transparent ${
        segments.some((s) => s === 'article') ? 'hidden md:block' : ''
      }`}>
      <div className="flex items-center justify-between gap-5 px-6 md:px-2">
        <h3 className="whitespace-nowrap text-xl font-bold md:text-2xl">
          {getTitle(pathname)}
        </h3>
      </div>
    </header>
  )
}

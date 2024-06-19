'use client'

import {
  usePathname,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { BarsOutline, ChevronLeftOutline } from '@attraction/icons'
import { AuthButton } from '@/entities/auth'
import { ThemeDropdownBtn } from '@/features/set-theme'
import { useCheckDevice } from '@/shared/lib'
import MobileHeaderBtn from './MobileHeaderBtn'

const getTitle = (pathname: string) => {
  if (pathname === '/') {
    return '홈'
  }
  const target = [
    ['/inbox-bookmark', '북마크한 아티클'],
    ['/inbox', '뉴스레터 보관함'],
    ['/newsletter', '뉴스레터 소개'],
    ['/mypage', '마이페이지'],
    ['/setting', '개인설정'],
    ['/discover', '탐색'],
  ].find(([path]) => pathname.startsWith(path))
  return target ? target[1] : '어트랙션'
}

export default function Header() {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()
  const router = useRouter()
  const { isMobileView } = useCheckDevice()

  if (isMobileView && segments.length > 1) {
    return (
      <header className="mt-[60px]">
        <div className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex size-full items-center justify-between p-2 pr-4">
            <div className="flex items-center justify-start gap-2">
              <MobileHeaderBtn
                icon={<ChevronLeftOutline />}
                label="뒤로가기"
                onClick={router.back}
              />
              <h3 className="whitespace-nowrap text-lg font-medium">
                {getTitle(pathname)}
              </h3>
            </div>
            <MobileHeaderBtn
              icon={<BarsOutline className="text-2xl" />}
              label="메뉴 열기"
            />
          </div>
        </div>
      </header>
    )
  }
  return (
    <header
      className={`pb-6 pt-12 md:mb-6 md:py-0 ${
        segments.some((s) => s === 'mypage') ? 'hidden md:block' : ''
      }`}>
      <div className="flex flex-wrap items-center justify-between gap-5 pl-6 pr-5 md:pl-2 md:pr-0">
        <h3 className="whitespace-nowrap text-xl font-bold md:text-2xl">
          {getTitle(pathname)}
        </h3>
        <div className="flex items-center justify-end gap-2">
          <ThemeDropdownBtn />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}

'use client'

import { useRouter, useSelectedLayoutSegments } from 'next/navigation'
import { ChevronLeftOutline } from '@attraction/icons'
import { AuthButton, useAuth } from '@/entities/auth'
import { ThemeDropdownBtn } from '@/features/set-theme'
import { useCheckDevice } from '@/shared/lib'
import { useTitle } from '../lib'
import MobileHeaderBtn from './MobileHeaderBtn'
import MobileHeaderMenuBtn from './MobileHeaderMenuBtn'

export default function Header() {
  const segments = useSelectedLayoutSegments()
  const router = useRouter()
  const { isMobileView } = useCheckDevice()
  const { isLogin } = useAuth()
  const title = useTitle()

  if (isMobileView && segments.length > 1) {
    return (
      <header className="mt-[60px]">
        <div className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex size-full items-center justify-between gap-4 p-2 pr-4">
            <div className="flex w-[calc(100%-3.5rem)] grow items-center justify-start gap-2">
              <MobileHeaderBtn
                icon={<ChevronLeftOutline />}
                label="뒤로가기"
                onClick={router.back}
              />
              <h3 className="w-[calc(100%-3.5rem)] truncate text-lg font-medium">
                {title}
              </h3>
            </div>
            {isLogin && <MobileHeaderMenuBtn />}
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
          {title}
        </h3>
        <div className="flex items-center justify-end gap-2">
          <ThemeDropdownBtn />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ChevronLeftOutline, MemberOutline } from '@attraction/icons'
import { AuthButton, ShouldReissueTokenGuide, useAuth } from '@/entities/auth'
import { ThemeDropdownBtn } from '@/entities/theme'
import { useCheckDevice } from '@/shared/lib'
import { GOOGLE_OAUTH_URL } from '@/shared/constant'
import MobileHeaderBtn from './MobileHeaderBtn'
import MobileHeaderMenuBtn from './MobileHeaderMenuBtn'

interface HeaderProps {
  title: string | ReactNode
  mobileFixed?: boolean
  mobileDisabled?: boolean
}

export default function Header({
  title,
  mobileFixed: isMobileFixed,
  mobileDisabled: isMobileDisabled,
}: HeaderProps) {
  const router = useRouter()
  const { isMobileView, isVisited } = useCheckDevice()
  const { isLogin, shouldReissueToken } = useAuth()

  if (isMobileView && isMobileFixed) {
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
              <h2 className="w-[calc(100%-3.5rem)] truncate text-lg font-medium">
                {title || '어트랙션'}
              </h2>
            </div>
            {isLogin ? (
              <MobileHeaderMenuBtn />
            ) : (
              <Link
                href={isVisited ? GOOGLE_OAUTH_URL : '/sign-in'}
                title="로그인 하러가기"
                className="relative flex size-10 items-center justify-center rounded-lg text-xl transition-colors active:bg-gray-50 dark:active:bg-gray-700">
                <MemberOutline />
              </Link>
            )}
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      {shouldReissueToken && <ShouldReissueTokenGuide />}
      <header
        className={`pb-6 pt-12 md:mb-6 md:py-0 ${
          isLogin && isMobileDisabled ? 'hidden md:block' : ''
        }`}>
        <div className="flex flex-wrap items-center justify-between gap-5 pl-6 pr-5 md:pl-2 md:pr-0">
          <h2 className="whitespace-nowrap text-xl font-bold md:text-2xl">
            {title || '어트랙션'}
          </h2>
          <div className="flex items-center justify-end gap-2">
            <ThemeDropdownBtn />
            <AuthButton />
          </div>
        </div>
      </header>
    </>
  )
}

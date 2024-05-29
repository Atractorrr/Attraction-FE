'use client'

import Link from 'next/link'
import { ChevronRightOutline, ClockOutline } from '@attraction/icons'
import { RecentArticles } from '@/features/recent-articles'

import { Background, LoadingSpinner, Title } from '@/shared/ui'
import { useRecentArticles } from '@/features/recent-articles/model'

interface RecentArticlesContainerProps {
  isLoggedIn: boolean
}

export default function RecentArticlesContainer({
  isLoggedIn,
}: RecentArticlesContainerProps) {
  const { data, isPending } = useRecentArticles(isLoggedIn)

  return (
    <div>
      {isLoggedIn ? (
        <Background>
          <div className="flex w-full flex-col gap-y-4 p-5">
            <div className="flex h-fit w-full items-center justify-between">
              <Title
                icon={<ClockOutline className="size-5" />}
                text="최근 받은 아티클"
              />
              <Link
                href="/inbox"
                className="text-sm text-gray-400 transition-colors  dark:hover:text-blue-300">
                보관함 바로가기
              </Link>
            </div>
            {isPending ? <LoadingSpinner /> : null}
            {data ? <RecentArticles mainArticles={data.mainArticles} /> : null}
          </div>
        </Background>
      ) : (
        <div
          className="flex min-h-[294px] flex-col items-center justify-center gap-y-10 border-gray-100 p-10 md:rounded-xl md:border"
          style={{
            backgroundImage: 'url(/images/introduce-background.jpg)',
          }}>
          <div className="flex flex-col text-center text-[28px] font-bold dark:text-black">
            <p>뉴스레터의 모든 것</p>
            <p>어트렉션에서 쉽고 간편하게</p>
          </div>
          <Link
            href="/sign-in"
            className="flex w-fit items-center justify-between gap-x-4 rounded-lg bg-green-500 px-4 py-2 text-white">
            <p>로그인 하러갈래요!</p>
            <ChevronRightOutline className="size-5" />
          </Link>
        </div>
      )}
    </div>
  )
}

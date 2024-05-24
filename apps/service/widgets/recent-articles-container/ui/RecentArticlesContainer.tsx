'use client'

import Link from 'next/link'
import { ClockOutline } from '@attraction/icons'
import { RecentArticles } from '@/features/recent-articles'

import { Background, LoadingSpinner, Title } from '@/shared/ui'
import { useRecentArticles } from '@/features/recent-articles/model'

// TODO: 다른 페이지 적용 완료되면 Link 적용할 것
export default function RecentArticlesContainer() {
  const { data, isPending } = useRecentArticles()

  return (
    <Background>
      <div className="flex w-full flex-col gap-y-4">
        <div className="flex h-fit w-full items-center justify-between">
          <Title
            icon={<ClockOutline className="size-5" />}
            text="최근 받은 아티클"
          />
          <Link
            href="/inbox"
            className="text-sm text-gray-400 transition-colors hover:text-blue-400">
            보관함 바로가기
          </Link>
        </div>
        {isPending ? <LoadingSpinner /> : null}
        {data ? <RecentArticles mainArticles={data.mainArticles} /> : null}
      </div>
    </Background>
  )
}

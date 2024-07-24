'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ClockOutline } from '@attraction/icons'
import {
  ArticleCardSkeleton,
  Container,
  ErrorGuideTxt,
  Title,
} from '@/shared/ui'
import RecentReadArticles from './RecentReadArticles'

function RecentReadArticlesSkeleton() {
  return (
    <div className="flex gap-5 overflow-x-hidden px-5 pb-7">
      {Array.from({ length: 4 }, (_, idx) => (
        <ArticleCardSkeleton key={idx} className="min-w-64" />
      ))}
    </div>
  )
}

export default function RecentReadArticlesContainer() {
  return (
    <Container className="h-full overflow-hidden">
      <div className="flex items-center justify-between p-5">
        <Title
          icon={<ClockOutline className="text-2xl" />}
          text="최근 읽은 아티클"
        />
        <Link
          href="/inbox"
          className="text-sm font-medium text-gray-500 hover:text-blue-400 dark:hover:text-blue-300">
          보관함 바로가기
        </Link>
      </div>
      <ErrorBoundary fallback={<ErrorGuideTxt />}>
        <Suspense fallback={<RecentReadArticlesSkeleton />}>
          <RecentReadArticles />
        </Suspense>
      </ErrorBoundary>
    </Container>
  )
}

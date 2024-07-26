'use client'

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
      <Title.Container className="p-5">
        <Title>
          <ClockOutline className="text-2xl" />
          최근 읽은 아티클
        </Title>
        <Title.Shortcut
          href="/inbox"
          title="보관함 바로가기"
          className="hidden xs:block">
          보관함 바로가기
        </Title.Shortcut>
      </Title.Container>
      <ErrorBoundary fallback={<ErrorGuideTxt />}>
        <Suspense fallback={<RecentReadArticlesSkeleton />}>
          <RecentReadArticles />
        </Suspense>
      </ErrorBoundary>
    </Container>
  )
}

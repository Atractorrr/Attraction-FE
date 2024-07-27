'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ChevronRightOutline, ClockOutline } from '@attraction/icons'
import { Container, ErrorGuideTxt, Title } from '@/shared/ui'
import { useAuth } from '@/entities/auth'
import { useCheckDevice } from '@/shared/lib'
import { GOOGLE_OAUTH_URL } from '@/shared/constant'
import RecentArticlesSkeleton from './RecentArticlesSkeleton'
import RecentArticles from './RecentArticles'

function LoginView() {
  return (
    <Container>
      <Title.Container className="p-5">
        <Title>
          <ClockOutline className="size-6" />
          최근 받은 아티클
        </Title>
        <Title.Shortcut href="/inbox" title="보관함 바로가기">
          <span className="hidden xs:block">보관함 바로가기</span>
          <span className="block xs:hidden">보관함</span>
        </Title.Shortcut>
      </Title.Container>
      <ErrorBoundary fallback={<ErrorGuideTxt />}>
        <Suspense fallback={<RecentArticlesSkeleton />}>
          <RecentArticles />
        </Suspense>
      </ErrorBoundary>
    </Container>
  )
}

function NonLoginView() {
  const { isVisited } = useCheckDevice()

  return (
    <div className="px-5 md:px-0">
      <div
        className="flex min-h-[294px] flex-col items-center justify-center gap-y-10 overflow-hidden rounded-xl border-gray-100 p-10 md:border dark:border-gray-800"
        style={{
          backgroundImage: 'url(/images/introduce-background.jpg)',
        }}>
        <div className="flex flex-col text-center text-xl font-bold md:text-3xl dark:text-black">
          <p>뉴스레터의 모든 것</p>
          <p>어트랙션에서 쉽고 간편하게</p>
        </div>
        <Link
          href={isVisited ? GOOGLE_OAUTH_URL : '/sign-in'}
          className="flex w-fit items-center justify-between gap-x-4 rounded-lg bg-green-500 px-4 py-2 text-white">
          <p>로그인 하러갈래요!</p>
          <ChevronRightOutline className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export default function RecentArticlesContainer() {
  const { isLogin } = useAuth()
  const Component = isLogin ? LoginView : NonLoginView

  return <Component />
}

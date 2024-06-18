'use client'

import Link from 'next/link'
import { ChevronRightOutline, ClockOutline } from '@attraction/icons'
import { RecentArticles } from '@/features/recent-articles'

import { Container, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import { useRecentArticles } from '@/features/recent-articles/model'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

interface RecentArticlesContainerProps {
  email: string | undefined
}

function LoginView({ email }: RecentArticlesContainerProps) {
  const { data, isLoading } = useRecentArticles(email)

  return (
    <Container>
      <div className="flex w-full flex-col gap-y-4 p-5">
        <div className="flex h-fit w-full items-center justify-between">
          <Title
            icon={<ClockOutline className="size-5" />}
            text="최근 받은 아티클"
          />
          <Link
            href="/inbox"
            className="text-sm text-gray-400 transition-colors dark:hover:text-blue-300">
            보관함 바로가기
          </Link>
        </div>
        {isLoading ? <LoadingSpinner /> : null}
        {data ? (
          <RecentArticles mainPageArticles={data.mainPageArticles} />
        ) : null}
      </div>
    </Container>
  )
}

function NonLoginView() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 px-5 md:px-0 dark:border-gray-800">
      <div
        className="flex min-h-[294px] flex-col items-center justify-center gap-y-10 p-10"
        style={{
          backgroundImage: 'url(/images/introduce-background.jpg)',
        }}>
        <div className="flex flex-col text-center text-xl font-bold md:text-3xl dark:text-black">
          <p>뉴스레터의 모든 것</p>
          <p>어트랙션에서 쉽고 간편하게</p>
        </div>
        <Link
          href="/sign-in"
          className="flex w-fit items-center justify-between gap-x-4 rounded-lg bg-green-500 px-4 py-2 text-white">
          <p>로그인 하러갈래요!</p>
          <ChevronRightOutline className="size-5" />
        </Link>
      </div>
    </div>
  )
}

function CustomErrorGuideTxt() {
  return (
    <div className="overflow-hidden">
      <ErrorGuideTxt />
    </div>
  )
}

export default function RecentArticlesContainer({
  email,
}: RecentArticlesContainerProps) {
  return (
    <div>
      {email ? (
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              FallbackComponent={CustomErrorGuideTxt}>
              <LoginView email={email} />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      ) : (
        <NonLoginView />
      )}
    </div>
  )
}

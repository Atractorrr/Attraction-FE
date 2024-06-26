'use client'

import Link from 'next/link'
import { ChevronRightOutline, ClockOutline } from '@attraction/icons'

import { Container, ErrorGuideTxt, Title } from '@/shared/ui'
import { useAuth } from '@/entities/auth'
import RecentArticlesSkeleton from './RecentArticlesSkeleton'
import RecentArticles from './RecentArticles'
import { useRecentArticles } from '../model'

interface RecentArticlesContainerProps {
  email: string | undefined
}

function CustomErrorGuideTxt() {
  return <ErrorGuideTxt />
}

function LoginView({ email }: RecentArticlesContainerProps) {
  const { data, isLoading, isError } = useRecentArticles(email)

  return (
    <div className="flex w-full flex-col gap-y-4 p-5">
      <div className="flex h-fit w-full items-center justify-between">
        <Title
          icon={<ClockOutline className="size-5" />}
          text="최근 받은 아티클"
        />
        <Link
          href="/inbox"
          className="text-sm text-gray-500 transition-colors hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300">
          보관함 바로가기
        </Link>
      </div>
      {isLoading ? <RecentArticlesSkeleton /> : null}
      {data ? (
        <RecentArticles mainPageArticles={data.data.mainPageArticles} />
      ) : null}
      {isError ? <CustomErrorGuideTxt /> : null}
    </div>
  )
}

function NonLoginView() {
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
          href="/sign-in"
          className="flex w-fit items-center justify-between gap-x-4 rounded-lg bg-green-500 px-4 py-2 text-white">
          <p>로그인 하러갈래요!</p>
          <ChevronRightOutline className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export default function RecentArticlesContainer() {
  const { userEmail } = useAuth()

  return (
    <div>
      {userEmail ? (
        <Container>
          <LoginView email={userEmail} />
        </Container>
      ) : (
        <NonLoginView />
      )}
    </div>
  )
}

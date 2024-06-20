'use client'

/* eslint-disable react/jsx-key */
import { Container, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import { Button } from '@attraction/design-system/dist'
import { TrophyOutline } from '@attraction/icons'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import UserRankContent from './UserRankContent'

function CustomErrorGuideTxt() {
  return (
    <div className="overflow-hidden">
      <ErrorGuideTxt />
    </div>
  )
}

export default function UserRank() {
  const [activeRanking, setActiveRanking] = useState<'article' | 'streak'>(
    'article',
  )

  return (
    <Container>
      <div className="min-h-[540px] w-full p-5">
        <div className="mb-4 flex w-full items-center justify-between">
          <Title
            icon={<TrophyOutline className="size-5" />}
            text={`${new Date().getMonth()}월 유저 랭킹`}
          />
        </div>
        <div className="mb-5 flex w-full">
          <Button
            className={`w-full border-b-2 py-3 ${activeRanking === 'article' ? 'border-gray-700 text-gray-700 dark:border-gray-100  dark:text-gray-100' : 'border-gray-100  text-gray-500 dark:border-gray-700 dark:text-gray-500'}`}
            onClick={() => {
              setActiveRanking('article')
            }}>
            아티클
          </Button>
          <Button
            className={`w-full border-b-2 py-3 ${activeRanking === 'streak' ? 'border-gray-700 text-gray-700 dark:border-gray-100  dark:text-gray-100' : 'border-gray-100  text-gray-500 dark:border-gray-700 dark:text-gray-500'}`}
            onClick={() => {
              setActiveRanking('streak')
            }}>
            스트릭
          </Button>
        </div>
        <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
          <Suspense fallback={<LoadingSpinner />}>
            <UserRankContent activeRanking={activeRanking} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Container>
  )
}

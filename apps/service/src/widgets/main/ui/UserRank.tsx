'use client'

import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BookOutline, FlameOutline, TrophyOutline } from '@attraction/icons'
import { Container, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import UserRankContent from './UserRankContent'

function CustomErrorGuideTxt() {
  return (
    <div className="overflow-hidden">
      <ErrorGuideTxt />
    </div>
  )
}

type RankingTabMenu = 'article' | 'streak'

const rankingTabBtns: Array<[RankingTabMenu, string, React.FC]> = [
  ['article', '아티클', BookOutline],
  ['streak', '스트릭', FlameOutline],
]

export default function UserRank() {
  const [activeRanking, setActiveRanking] = useState<RankingTabMenu>('article')

  return (
    <Container>
      <div className="min-h-[540px] w-full p-5">
        <div className="mb-4 flex w-full items-center justify-between">
          <Title
            icon={<TrophyOutline className="size-6" />}
            text={`${new Date().getMonth() + 1}월 랭킹`}
          />
        </div>
        <div className="relative mb-5 flex border-b border-gray-100 pb-2 dark:border-gray-700">
          {rankingTabBtns.map(([rankType, label, Icon]) => (
            <Button
              key={rankType}
              type="button"
              title={`${label} 보기`}
              className={`relative flex grow items-center justify-center gap-2 rounded-lg px-3 py-2 text-lg transition-colors hover:bg-gray-50 xs:text-xl dark:hover:bg-gray-700 ${
                activeRanking === rankType
                  ? 'text-gray-700 dark:text-gray-50'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => setActiveRanking(rankType)}>
              <Icon />
              <span className="whitespace-nowrap text-base">{label}</span>
              {activeRanking === rankType && (
                <span className="absolute inset-x-0 -bottom-2 h-px bg-gray-700 dark:bg-gray-50" />
              )}
            </Button>
          ))}
        </div>
        <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
          <Suspense
            fallback={
              <div className="my-auto flex items-center justify-center pb-32 pt-28">
                <LoadingSpinner />
              </div>
            }>
            <UserRankContent activeRanking={activeRanking} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Container>
  )
}

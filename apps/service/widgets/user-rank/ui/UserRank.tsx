'use client'

/* eslint-disable react/jsx-key */
import { Background, Title } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import { TrophyOutline } from '@attraction/icons'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useState } from 'react'
import { getUserRanking } from '../api'
import UserRankMedal from './UserRankMedal'

export default function UserRank() {
  // TODO: 쿼리키 바뀔 때 캐시 데이터 쓰는지 알아보기

  const [activeRanking, setActiveRanking] = useState<'article' | 'streak'>(
    'article',
  )
  const { data: userRankingArr } = useQuery({
    queryKey: ['userRanking', activeRanking],
    queryFn: () => {
      return getUserRanking(activeRanking)
    },
  })

  return (
    <Background>
      <div className="min-h-[540px] w-full p-5">
        <div className="mb-4 flex w-full items-center justify-between">
          <Title icon={<TrophyOutline className="size-5" />} text="유저 랭킹" />
        </div>
        <div className="mb-5 flex w-full">
          <Button
            className={`w-full border-b-2 py-3 ${activeRanking === 'article' ? 'border-gray-700 text-gray-700' : 'border-gray-100  text-gray-500'}`}
            onClick={() => {
              setActiveRanking('article')
            }}>
            아티클
          </Button>
          <Button
            className={`w-full border-b-2 py-3 ${activeRanking === 'streak' ? 'border-gray-700 text-gray-700' : 'border-gray-100  text-gray-500'}`}
            onClick={() => {
              setActiveRanking('streak')
            }}>
            스트릭
          </Button>
        </div>

        <div className="size-full h-full overflow-y-auto pr-5 lg:h-[400px]">
          {userRankingArr?.map((user, i) => {
            return (
              <div className="peer flex w-full gap-3 peer-[]:mt-3">
                <UserRankMedal rank={i} />
                <div className="size-10 shrink-0 rounded-full border border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                  <Image
                    width={40}
                    height={40}
                    src={user?.profileImg || '/images/default-1x1.jpg'}
                    className="rounded-full"
                    alt="프로필사진"
                  />
                </div>
                <div className="w-full max-w-[calc(100%-3rem-40px)]">
                  <p className="truncate font-medium">
                    {i + 1}위 {user?.nickname}
                  </p>
                  <p className="text-sm text-gray-500">
                    최장 {user?.value}일 연속 아티클을 읽었어요! 🎉
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Background>
  )
}

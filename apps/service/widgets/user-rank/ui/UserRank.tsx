'use client'

/* eslint-disable react/jsx-key */
import { Container, Title } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import { TrophyOutline } from '@attraction/icons'
import Image from 'next/image'
import { useState } from 'react'
import UserRankMedal from './UserRankMedal'

const mock = Array.from({ length: 10 })

export default function UserRank() {
  const [activeRanking, setActiveRanking] = useState<'article' | 'strict'>(
    'article',
  )
  return (
    <Container>
      <div className="flex min-h-[540px] w-full flex-col p-5">
        <div className="mb-4 flex w-full items-center justify-between">
          <Title icon={<TrophyOutline className="size-5" />} text="유저 랭킹" />
        </div>
        <div className="mb-5 flex">
          <Button
            className={`w-full border-b-2 py-3 ${activeRanking === 'article' ? 'border-gray-700 text-gray-700' : 'border-gray-100  text-gray-500'}`}
            onClick={() => {
              setActiveRanking('article')
            }}>
            아티클
          </Button>
          <Button
            className={`w-full border-b-2 py-3 ${activeRanking === 'strict' ? 'border-gray-700 text-gray-700' : 'border-gray-100  text-gray-500'}`}
            onClick={() => {
              setActiveRanking('strict')
            }}>
            스트릭
          </Button>
        </div>

        <div className="flex size-full h-[400px] flex-col gap-3 overflow-y-auto">
          {mock.map((_, i) => {
            return (
              <div className="flex gap-3">
                <UserRankMedal rank={i} />
                <div className="shrink-0">
                  <Image
                    width={40}
                    height={40}
                    src="/images/default-1x1.jpg"
                    className="rounded-full"
                    alt="프로필사진"
                  />
                </div>
                <div className="">
                  <p className="font-medium text-black dark:text-white">
                    {i + 1}위 유저 이름
                  </p>
                  <p className="text-sm text-gray-500">
                    최장 23일 연속 아티클을 읽었어요! 🎉
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

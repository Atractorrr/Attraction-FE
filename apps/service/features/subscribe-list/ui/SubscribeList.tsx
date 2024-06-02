import React from 'react'
import {
  Background,
  ContentContainer,
  ContentTitle,
  ImageBox,
} from '@/shared/ui'
import { SubscribeItem } from '../model'

interface SubscribeListProps {
  subscribeList: SubscribeItem[]
}

export default function SubscribeList({ subscribeList }: SubscribeListProps) {
  return (
    <Background className="h-full lg:h-0 lg:min-h-full">
      <div className="h-full px-4 py-5">
        <p className="mb-4 text-lg font-bold">구독 리스트</p>
        {subscribeList ? (
          <ul className="h-60 overflow-y-auto lg:h-[calc(100%-64px)]">
            {subscribeList.map((item) => (
              <li className="p-2" key={item.id}>
                <ContentContainer>
                  <ImageBox
                    width="w-8"
                    height="h-8"
                    imgSrc={item.thumbnailUrl}
                    alt="뉴스 프로필"
                    rounded="rounded-full"
                  />
                  <ContentTitle type="main" content={item.title} />
                </ContentContainer>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex cursor-default flex-col items-center justify-center py-20">
            <p className="mb-5 text-xl font-medium">
              구독한 뉴스레터가 없습니다
            </p>
            <p className="text-gray-500">지금 뉴스레터를 구독해보세요</p>
          </div>
        )}
      </div>
    </Background>
  )
}

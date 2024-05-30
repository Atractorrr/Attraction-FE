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
    <Background className="h-full">
      <div className="p-5">
        <p className="mb-4 text-lg font-bold">구독 리스트</p>
        <ul className="h-60 overflow-y-auto">
          {subscribeList.map((item) => (
            <li className="p-4" key={item.id}>
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
      </div>
    </Background>
  )
}

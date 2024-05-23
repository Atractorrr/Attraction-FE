import React from 'react'
import { ContentContainer, ContentTitle, ImageBox } from '@/shared/ui'
import { SubscribeItem } from '../model'

interface SubscribeListProps {
  subscribeList: SubscribeItem[]
}

export default function SubscribeList({ subscribeList }: SubscribeListProps) {
  return (
    <section className="min-h-full shrink-0 grow rounded-2xl border border-gray-100 bg-white p-5">
      <p className="mb-4 text-lg font-bold">구독 리스트</p>
      <ul className="h-60 min-h-[85%] overflow-y-auto md:h-0">
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
    </section>
  )
}

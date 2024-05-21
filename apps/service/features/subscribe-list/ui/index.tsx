import React from 'react'
import * as Shared from '@/shared'
import { SubscribeItemType } from '../model/types'

type Props = {
  subscribeList: SubscribeItemType[]
}

export default function SubscribeList({ subscribeList }: Props) {
  return (
    <div className="min-h-full shrink-0 grow rounded-2xl border border-gray-100 bg-white p-5">
      <p className="mb-4 text-lg font-bold">구독 리스트</p>
      <ul className="h-60 min-h-[85%] overflow-y-auto md:h-0">
        {subscribeList.map((item) => (
          <li className="p-4" key={item.id}>
            <Shared.ContentContainer>
              <Shared.ImageBox
                width="w-8"
                height="h-8"
                imgSrc={item.thumbnailUrl}
                alt="뉴스 프로필"
                rounded="rounded-full"
              />
              <Shared.ContentTitle type="main" content={item.title} />
            </Shared.ContentContainer>
          </li>
        ))}
      </ul>
    </div>
  )
}

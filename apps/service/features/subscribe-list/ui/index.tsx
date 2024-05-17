import React from 'react'
import * as Shared from '@/shared'

type Props = {}

const hi = Array.from({ length: 7 })

export default function SubscribeList({}: Props) {
  return (
    <div className="min-h-full shrink-0 grow rounded-2xl bg-white p-5">
      <p className="mb-4 text-lg font-bold">구독 리스트</p>
      <ul className="h-60 min-h-[85%] overflow-y-auto md:h-0">
        {hi.map((_, i) => (
          <li className="p-4" key={i}>
            <Shared.ContentContainer>
              <Shared.ImageBox
                width="w-8"
                height="h-8"
                imgSrc="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt="뉴스 프로필"
                rounded="rounded-full"
              />
              <Shared.ContentTitle type="main" content="뉴닉" />
            </Shared.ContentContainer>
          </li>
        ))}
      </ul>
    </div>
  )
}

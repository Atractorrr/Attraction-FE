'use client'

import * as Entities from '@/entities'

type Props = {}

const hi = Array.from({ length: 7 })

export default function RecentNewsletter({}: Props) {
  return (
    <div className="w-full space-y-5 rounded-2xl bg-white p-5">
      <div className="flex w-full items-center justify-between ">
        <p className="text-lg font-bold">최근 읽은 아티클</p>
        <p className="text-sm font-medium text-[#6F7A86] ">보관함 바로가기</p>
      </div>
      <div className="overflow-x-scroll">
        <div className="flex min-w-[50rem] gap-2">
          {hi.map(() => (
            <Entities.NewsCard>
              <Entities.NewsCard.Thumbnail
                imgSrc="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt="뉴스카드 썸네일"
              />
              <Entities.NewsCard.Content>
                <Entities.NewsCard.Profile
                  width="w-8"
                  height="h-8"
                  rounded="rounded-full"
                  imgSrc="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt="뉴스카드 프로필"
                />
                <div className="pr-6">
                  <Entities.NewsCard.Title
                    type="main"
                    content="💓요즘 주말 트렌드 싹 정리해봄 .zip"
                  />
                  <Entities.NewsCard.Title type="sub" content="뉴닉 · 1일 전" />
                </div>
              </Entities.NewsCard.Content>
            </Entities.NewsCard>
          ))}
        </div>
      </div>
    </div>
  )
}

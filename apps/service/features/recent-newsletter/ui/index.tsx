import * as Entities from '@/entities'
import { RecentNewsletterType } from '../models/types'

type Props = {
  recentNewLetterList: RecentNewsletterType[]
}

export default function RecentNewsletter({ recentNewLetterList }: Props) {
  return (
    <div className="h-fit min-w-0 basis-3/4 space-y-5 rounded-2xl bg-white py-5">
      <div className="flex items-center justify-between px-5">
        <p className="text-lg font-bold">최근 읽은 아티클</p>
        <p className="text-sm font-medium text-[#6F7A86]">보관함 바로가기</p>
      </div>
      <div
        className="relative bg-white before:absolute before:left-0 before:z-30 before:h-full before:w-5 before:bg-gradient-to-r
      before:from-white before:content-['']
      after:absolute after:right-0
      after:top-0
      after:z-30 after:h-full after:w-5 after:bg-gradient-to-l after:from-white after:content-['']">
        <div className=" flex gap-4 overflow-x-scroll px-5">
          {recentNewLetterList.map((newsItem) => (
            <Entities.NewsCard key={newsItem.id}>
              <Entities.NewsCard.Thumbnail
                imgSrc={newsItem.image.thumbnail}
                readingPercentage={newsItem.info.readingPercentage}
                readingTime={newsItem.info.readingTime}
                alt="뉴스카드 썸네일"
              />
              <Entities.NewsCard.Content>
                <Entities.NewsCard.Profile
                  width="w-8"
                  height="h-8"
                  rounded="rounded-full"
                  imgSrc={newsItem.image.profile}
                  alt="뉴스카드 프로필"
                />
                <div className="p-0 md:pr-6">
                  <Entities.NewsCard.Title
                    type="main"
                    content={newsItem.info.title}
                  />
                  <Entities.NewsCard.Title
                    type="sub"
                    content={`${newsItem.info.name} · 1일 전`}
                  />
                </div>
              </Entities.NewsCard.Content>
            </Entities.NewsCard>
          ))}
        </div>
      </div>
    </div>
  )
}

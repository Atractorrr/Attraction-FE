import * as Entities from '@/entities'

type Props = {}

const hi = Array.from({ length: 7 })

export default function RecentNewsletter({}: Props) {
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
          {hi.map((_, i) => (
            <Entities.NewsCard key={i}>
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

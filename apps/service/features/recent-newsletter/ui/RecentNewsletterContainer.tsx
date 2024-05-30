import Link from 'next/link'
import { NewsCard } from '@/entities/news-card'
import { Background } from '@/shared/ui'
import { RecentNewsletter } from '../model'

interface RecentNewsletterProps {
  recentNewLetterList: RecentNewsletter[]
}

export default function RecentNewsletterContainer({
  recentNewLetterList,
}: RecentNewsletterProps) {
  return (
    <Background className="h-full">
      <div className="flex items-center justify-between p-5">
        <p className="text-lg font-bold">최근 읽은 아티클</p>
        <Link
          href="/inbox"
          className="text-sm font-medium text-gray-500 hover:text-blue-400 dark:hover:text-blue-300">
          보관함 바로가기
        </Link>
      </div>
      <div className="w-full">
        <div className="max-w-full overflow-x-auto">
          <div className="flex min-w-fit items-center justify-start gap-4">
            {recentNewLetterList.map((newsItem) => (
              <NewsCard key={newsItem.id}>
                <NewsCard.Thumbnail
                  imgSrc={newsItem.image.thumbnail}
                  readingPercentage={newsItem.info.readingPercentage}
                  readingTime={newsItem.info.readingTime}
                  alt={`아티클 썸네일 이미지: ${newsItem.info.title}`}
                />
                <NewsCard.Content>
                  <NewsCard.Profile
                    width="w-8"
                    height="h-8"
                    rounded="rounded-full"
                    imgSrc={newsItem.image.profile}
                    alt={`뉴스레터 프로필 이미지: ${newsItem.info.name}`}
                  />
                  <div className="p-0 md:pr-6">
                    <NewsCard.Title type="main" content={newsItem.info.title} />
                    <NewsCard.Title
                      type="sub"
                      content={`${newsItem.info.name} · 1일 전`}
                    />
                  </div>
                </NewsCard.Content>
              </NewsCard>
            ))}
          </div>
        </div>
      </div>
    </Background>
  )
}

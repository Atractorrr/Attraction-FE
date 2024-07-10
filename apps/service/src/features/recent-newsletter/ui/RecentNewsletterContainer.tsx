'use client'

import { useAuth } from '@/entities/auth'
import { NewsCard } from '@/entities/news-card'
import { getTimeFromNow } from '@/shared/lib'
import { Container, ErrorGuideTxt, GuideTxt, Title } from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'
import { skipToken, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchNewsletterList } from '../api'

function CustomErrorGuideTxt() {
  return <ErrorGuideTxt />
}

export default function RecentNewsletterContainer() {
  const { userEmail } = useAuth()

  const { data: UserRecentNewsLetterResponse } = useQuery({
    queryKey: ['user', userEmail],
    queryFn: userEmail ? () => fetchNewsletterList(userEmail) : skipToken,
  })

  return (
    <Container className="h-full overflow-hidden">
      <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
        <div className="flex items-center justify-between p-5">
          <Title
            icon={<ClockOutline className="text-2xl" />}
            text="최근 읽은 아티클"
          />
          {UserRecentNewsLetterResponse?.data.mypageArticles.length !== 0 ? (
            <Link
              href="/inbox"
              className="text-sm font-medium text-gray-500 hover:text-blue-400 dark:hover:text-blue-300">
              보관함 바로가기
            </Link>
          ) : (
            ''
          )}
        </div>
        {UserRecentNewsLetterResponse?.data.mypageArticles.length !== 0 ? (
          <div className="relative w-full">
            <div className="overflow-x-auto before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-5 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-5 after:bg-gradient-to-l after:from-white after:to-transparent dark:before:from-gray-800 dark:after:from-gray-800">
              <div className="flex min-w-fit items-start justify-start gap-4 px-5 pb-5">
                {UserRecentNewsLetterResponse?.data.mypageArticles.map(
                  (article) => (
                    <Link
                      href={`/inbox/article/${article.id}`}
                      key={article.id}>
                      <NewsCard key={article.id}>
                        <NewsCard.Thumbnail
                          imgSrc={article.thumbnailUrl}
                          readPercentage={article.readPercentage}
                          readingTime={article.readingTime}
                          alt={`아티클 썸네일 이미지: ${article.title}`}
                        />
                        <NewsCard.Content>
                          <div className="size-8 overflow-hidden rounded-full border-gray-100 dark:border-gray-700">
                            <NewsCard.Profile
                              src={article.newsletter.thumbnailUrl}
                              alt={`뉴스레터 프로필 이미지: ${article.newsletter.name}`}
                            />
                          </div>
                          <div className="w-[calc(100%-2.5rem)]">
                            <NewsCard.Title
                              type="main"
                              content={article.title}
                            />
                            <NewsCard.Title
                              type="sub"
                              content={`${article.newsletter.name} · ${getTimeFromNow(article.receivedAt)}`}
                            />
                          </div>
                        </NewsCard.Content>
                      </NewsCard>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex cursor-default flex-col items-center justify-center pb-32 pt-20">
            <GuideTxt
              title="최근 읽은 아티클이 없어요"
              sub="지금 아티클을 읽어보세요"
            />
          </div>
        )}
      </ErrorBoundary>
    </Container>
  )
}

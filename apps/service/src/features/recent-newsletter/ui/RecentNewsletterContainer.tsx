'use client'

import { useAuth } from '@/entities/auth'
import {
  ArticleCard,
  ArticleCardContainer,
  Container,
  ErrorGuideTxt,
  GuideTxt,
  Title,
} from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'
import { skipToken, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchNewsletterList } from '../api'

export default function RecentNewsletterContainer() {
  const { userEmail } = useAuth()

  const { data: UserRecentNewsLetterResponse } = useQuery({
    queryKey: ['user', userEmail],
    queryFn: userEmail ? () => fetchNewsletterList(userEmail) : skipToken,
  })

  return (
    <Container className="h-full overflow-hidden">
      <ErrorBoundary fallback={<ErrorGuideTxt />}>
        <div className="flex items-center justify-between p-5">
          <Title
            icon={<ClockOutline className="text-2xl" />}
            text="최근 읽은 아티클"
          />
          <Link
            href="/inbox"
            className="text-sm font-medium text-gray-500 hover:text-blue-400 dark:hover:text-blue-300">
            보관함 바로가기
          </Link>
        </div>
        {UserRecentNewsLetterResponse?.data.mypageArticles.length !== 0 ? (
          <ArticleCardContainer>
            {UserRecentNewsLetterResponse?.data.mypageArticles.map(
              (article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  className="w-72">
                  <ArticleCard.Thumbnail url={article.thumbnailUrl}>
                    <ArticleCard.Progress
                      readPercentage={article.readPercentage}
                    />
                    <ArticleCard.ReadingTimeBadge
                      readingTime={article.readingTime}
                    />
                  </ArticleCard.Thumbnail>
                  <ArticleCard.InfoGroup>
                    <ArticleCard.NewsletterAvatar
                      id={article.newsletter.id}
                      url={article.newsletter.thumbnailUrl}
                      name={article.newsletter.name}
                    />
                    <ArticleCard.DescriptionGroup>
                      <ArticleCard.Description
                        name={article.newsletter.name}
                        receivedAt={article.receivedAt}
                      />
                    </ArticleCard.DescriptionGroup>
                  </ArticleCard.InfoGroup>
                </ArticleCard>
              ),
            ) ?? []}
          </ArticleCardContainer>
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

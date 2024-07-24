'use client'

import { useAuth } from '@/entities/auth'
import {
  ReadPercentage,
  ReadingTimeBadge,
  ArticleCard,
  ArticleCardContainer,
  GuideTxt,
} from '@/shared/ui'
import { useRecentArticles } from '../model'

export default function RecentArticles() {
  const { userEmail } = useAuth()
  const { data } = useRecentArticles(userEmail)
  const articles = data?.data.mainPageArticles ?? []

  if (articles.length > 0) {
    return (
      <ArticleCardContainer>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            className="w-72">
            <ArticleCard.Thumbnail url={article.thumbnailUrl}>
              <ReadPercentage readPercentage={article.readPercentage} />
              <ReadingTimeBadge readingTime={article.readingTime} />
            </ArticleCard.Thumbnail>
            <ArticleCard.Content>
              <ArticleCard.NewsletterAvatar
                id={article.newsletter.id}
                url={article.newsletter.thumbnailUrl}
                name={article.newsletter.name}
              />
              <ArticleCard.DescriptionGroup>
                <ArticleCard.Status
                  name={article.newsletter.name}
                  receivedAt={article.receivedAt}
                />
              </ArticleCard.DescriptionGroup>
            </ArticleCard.Content>
          </ArticleCard>
        )) ?? []}
      </ArticleCardContainer>
    )
  }

  return (
    <div className="pb-32 pt-24">
      <GuideTxt title="받은 뉴스레터가 없어요" sub="뉴스레터를 구독해볼까요?" />
    </div>
  )
}

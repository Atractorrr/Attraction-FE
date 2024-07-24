'use client'

import {
  ArticleCardContainer,
  ArticleCard,
  ReadPercentage,
  ReadingTimeBadge,
  GuideTxt,
} from '@/shared/ui'
import { useRecentReadArticlesQuery } from '../model'

export default function RecentReadArticles() {
  const { data } = useRecentReadArticlesQuery()

  if (data.length <= 0) {
    return (
      <div className="flex cursor-default flex-col items-center justify-center pb-32 pt-20">
        <GuideTxt
          title="최근 읽은 아티클이 없어요"
          sub="지금 아티클을 읽어보세요"
        />
      </div>
    )
  }

  return (
    <ArticleCardContainer>
      {data.map((article) => (
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

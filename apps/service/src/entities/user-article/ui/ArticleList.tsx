'use client'

import { useParams } from 'next/navigation'
import type { ViewType } from '@/shared/type'
import { ArticleCard, ReadingTimeBadge, ReadPercentage } from '@/shared/ui'
import { getTimeFromNow } from '@attraction/utils'
import type { Article, ArticlePageType } from '../model'
import ToBeDeletedTxt from './ToBeDeletedTxt'

interface ArticleListProps {
  data: Article[]
  pageType: ArticlePageType
  viewType?: ViewType
  isArticleView?: boolean
}

export default function ArticleList({
  data,
  pageType,
  viewType = 'gallery',
  isArticleView,
}: ArticleListProps) {
  const params = useParams<{ articleId?: string }>()
  const currentArticleId = Number(params?.articleId ?? -1)

  return (
    <ul
      className={`grid grid-cols-1 gap-x-4 gap-y-6 ${
        !isArticleView &&
        (viewType === 'list'
          ? 'md:grid-cols-2'
          : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')
      }`}>
      {data.map((article) => (
        <li
          key={article.id}
          className={currentArticleId === article.id ? 'hidden' : ''}>
          <ArticleCard
            id={article.id}
            title={article.title}
            type={viewType}
            to={pageType === 'bookmark' ? 'bookmark' : 'inbox'}>
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
                {getTimeFromNow(article.receivedAt).includes('7') && (
                  <ToBeDeletedTxt />
                )}
              </ArticleCard.DescriptionGroup>
            </ArticleCard.Content>
          </ArticleCard>
        </li>
      ))}
    </ul>
  )
}

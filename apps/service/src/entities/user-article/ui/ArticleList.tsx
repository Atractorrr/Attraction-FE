import type { ViewType } from '@/shared/type'
import { ArticleCard, ReadingTimeBadge, ReadPercentage } from '@/shared/ui'
import { getTimeFromNow } from '@/shared/lib'
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
  return (
    <ul
      className={`grid grid-cols-1 gap-x-4 gap-y-6 ${
        !isArticleView &&
        (viewType === 'list'
          ? 'md:grid-cols-2'
          : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')
      }`}>
      {data.map((article) => (
        <li key={article.id}>
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
                <ArticleCard.Description
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

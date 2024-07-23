import type { ViewType } from '@/shared/type'
import type { Article, ArticlePageType } from '../model'
import CardItem from './CardItem'

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
          <CardItem
            type={viewType}
            articleUrl={`/inbox${pageType === 'bookmark' ? '-bookmark' : ''}/article/${article.id}`}
            articleTitle={article.title}
            articleThumbnailUrl={article.thumbnailUrl}
            readPercentage={
              pageType === 'bookmark' ? undefined : article.readPercentage
            }
            readingTime={article.readingTime}
            newsletterId={article.newsletter.id}
            newsletterName={article.newsletter.name}
            newsletterThumbnailUrl={article.newsletter.thumbnailUrl}
            receivedAt={article.receivedAt}
          />
        </li>
      ))}
    </ul>
  )
}

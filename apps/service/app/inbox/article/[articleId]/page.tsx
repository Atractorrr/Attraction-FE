'use client'

import {
  useUserArticleQuery,
  ArticleView,
  ArticleViewSkeleton,
} from '@/entities/user-article'
import { ScrollTracker } from '@/features/scroll-tracker'

interface ArticleDetailPageProps {
  params: { articleId: string }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const userId = 12 // TODO: Protected Route 적용 (userId)
  const articleId = Number(params.articleId)

  const { data, isLoading } = useUserArticleQuery({
    userId,
    articleId,
  })
  return (
    <div>
      {isLoading && <ArticleViewSkeleton />}
      {data && (
        <>
          <ScrollTracker
            userId={userId}
            articleId={articleId}
            initProgress={data.readPercentage}
          />
          <ArticleView data={data} />
        </>
      )}
    </div>
  )
}

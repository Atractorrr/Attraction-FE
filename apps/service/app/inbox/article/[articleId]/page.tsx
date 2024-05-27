'use client'

import {
  useUserArticleQuery,
  ArticleView,
  ArticleViewSkeleton,
} from '@/entities/user-article'

interface ArticleDetailPageProps {
  params: { articleId: string }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { data, isLoading } = useUserArticleQuery({
    userId: 12,
    articleId: Number(params.articleId),
  })
  return (
    <div>
      {isLoading && <ArticleViewSkeleton />}
      {data && <ArticleView data={data} />}
    </div>
  )
}

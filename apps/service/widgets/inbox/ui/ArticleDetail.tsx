'use client'

import {
  useUserArticleQuery,
  ArticleView,
  ArticleViewSkeleton,
  ArticlePageType,
} from '@/entities/user-article'
import { ScrollTracker } from '@/features/scroll-tracker'
import { ErrorGuideTxt } from '@/shared/ui'

interface ArticleDetailProps {
  articleId: number
  pageType: ArticlePageType
}

export default function ArticleDetail({
  articleId,
  pageType,
}: ArticleDetailProps) {
  const { data, isLoading, isError, refetch } = useUserArticleQuery({
    articleId,
  })

  return (
    <div>
      {isLoading && <ArticleViewSkeleton />}
      {data && (
        <>
          {pageType !== 'bookmark' && (
            <ScrollTracker
              articleId={articleId}
              initProgress={data.readPercentage}
            />
          )}
          <ArticleView data={data} censored />
        </>
      )}
      {!data && isError && (
        <div className="px-5 py-32 md:min-h-dvh">
          <ErrorGuideTxt
            title="아티클을 불러오는데 실패했어요"
            retryFn={refetch}
          />
        </div>
      )}
    </div>
  )
}

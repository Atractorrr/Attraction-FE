'use client'

import { useCallback, useState } from 'react'
import { ScrollTracker } from '@/features/scroll-tracker'
import {
  useUserArticleQuery,
  ArticleView,
  ArticleViewSkeleton,
  ArticlePageType,
} from '@/entities/user-article'
import { ErrorGuideTxt } from '@/shared/ui'

interface ArticleDetailProps {
  articleId: number
  pageType: ArticlePageType
}

export default function ArticleDetail({
  articleId,
  pageType,
}: ArticleDetailProps) {
  const [isError, setError] = useState(false)
  const setIframeError = useCallback((status: boolean) => setError(status), [])
  const {
    data,
    isLoading,
    isError: isQueryError,
    refetch,
  } = useUserArticleQuery({ articleId })

  return (
    <div>
      {isLoading && <ArticleViewSkeleton />}
      {data && (
        <>
          {pageType !== 'bookmark' && !isError && (
            <ScrollTracker
              articleId={articleId}
              initProgress={data.readPercentage}
            />
          )}
          <ArticleView
            id={data.id}
            title={data.title}
            contentUrl={data.contentUrl}
            newsletterId={data.newsletter.id}
            newsletterThumbnailUrl={data.newsletter.thumbnailUrl}
            newsletterName={data.newsletter.name}
            receivedAt={data.receivedAt}
            readingTime={data.readingTime}
            setError={setIframeError}
            articleType="user"
            censored
          />
        </>
      )}
      {!data && isQueryError && (
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

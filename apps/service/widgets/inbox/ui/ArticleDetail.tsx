'use client'

import Link from 'next/link'
import {
  useUserArticleQuery,
  ArticleView,
  ArticleViewSkeleton,
} from '@/entities/user-article'
import { ScrollTracker } from '@/features/scroll-tracker'
import { GuideTxt } from '@/shared/ui'

interface ArticleDetailProps {
  userId: string | number
  articleId: string | number
}

export default function ArticleDetail({
  userId,
  articleId,
}: ArticleDetailProps) {
  const { data, isLoading, isError } = useUserArticleQuery({
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
      {!data && isError && (
        <div className="px-8 py-48 md:min-h-dvh">
          <GuideTxt
            title="아티클을 불러오는데 실패했어요"
            sub="새로고침 후 다시 시도해 주세요"
          />
          <p className="mt-8 flex items-center justify-center gap-2">
            <Link
              href="/inbox"
              title="뒤로가기"
              className="rounded-lg bg-gray-50 px-5 py-2 transition-colors hover:bg-gray-100 md:hidden dark:bg-gray-700 dark:hover:bg-gray-600">
              뒤로가기
            </Link>
            <button
              type="button"
              title="새로고침"
              onClick={() => window.location.reload()}
              className="rounded-lg bg-gray-50 px-5 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              새로고침
            </button>
          </p>
        </div>
      )}
    </div>
  )
}

'use client'

import { Container, ErrorGuideTxt, GuideTxt, LoadingSpinner } from '@/shared/ui'
import { useInfiniteScroll } from '@/shared/lib'
import DiscoverArticleItem from './DiscoverArticleItem'
import { useInfiniteDiscoverArticles } from '../model'
import { DiscoverArticleItemSkeleton } from './DiscoverResultSkeleton'

interface DiscoverArticlesProps {
  keyword: string
}

function DiscoverArticlesLoading() {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <div className="h-5 w-full max-w-[240px] rounded-md bg-gray-100 dark:bg-gray-600" />
      <div className="mt-6 flex w-full flex-col gap-y-5">
        {Array.from({ length: 4 }, (_, idx) => (
          <DiscoverArticleItemSkeleton key={idx} />
        ))}
      </div>
    </div>
  )
}

export default function DiscoverArticles({ keyword }: DiscoverArticlesProps) {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteDiscoverArticles(keyword)
  const scrollRef = useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage()
  })

  return (
    <Container>
      <div className="w-full p-5">
        {isLoading ? (
          <DiscoverArticlesLoading />
        ) : (
          <h3 className="mb-6">
            <strong className="text-lg font-medium">&#34;{keyword}&#34;</strong>
            에 대한 검색 결과에요
          </h3>
        )}
        {data &&
          (data.pages.length !== 0 ? (
            <ul>
              {data.pages.map((article) => (
                <li key={article.id} className="peer peer-[]:mt-5">
                  <DiscoverArticleItem {...article} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col justify-center pb-60 pt-52">
              <GuideTxt
                title="검색 결과가 없어요"
                sub="다른 키워드로 검색해보세요"
              />
            </div>
          ))}
        <div>
          {isError && (
            <div className="flex min-h-full items-center justify-center px-2 pb-40 pt-32">
              <ErrorGuideTxt
                title="아티클을 가져오는데 실패했어요"
                sub="새로고침 후 다시 시도 부탁드려요"
              />
            </div>
          )}
          {hasNextPage && (
            <div
              ref={(node) => {
                scrollRef.current = node
              }}
              className="h-1 w-full"
            />
          )}
          {isFetchingNextPage && (
            <div className="mt-8">
              <LoadingSpinner />
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

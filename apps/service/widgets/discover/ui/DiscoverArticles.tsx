'use client'

import { Container, ErrorGuideTxt, GuideTxt, LoadingSpinner } from '@/shared/ui'
import { useInfiniteScroll } from '@/shared/lib'
import DiscoverArticleItem from './DiscoverArticleItem'
import useInfiniteDiscoverResult from '../model/useInfiniteDiscoverResult'

interface DiscoverArticlesProps {
  keyword: string
}

export default function DiscoverArticles({ keyword }: DiscoverArticlesProps) {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteDiscoverResult(keyword)
  const scrollRef = useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage()
  })

  return (
    <Container>
      <div className="w-full p-5">
        <p>
          <strong>{`"${keyword}"`}</strong>에 대한 검색 결과에요
        </p>
        {isLoading && (
          <div className="flex min-h-full items-center justify-center pb-40 pt-32">
            <LoadingSpinner />
          </div>
        )}
        {data &&
          (data.pages.length !== 0 ? (
            <div>
              {data.pages.map((article) => (
                <div key={article.id} className="mt-6">
                  <DiscoverArticleItem {...article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center pb-40 pt-32">
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

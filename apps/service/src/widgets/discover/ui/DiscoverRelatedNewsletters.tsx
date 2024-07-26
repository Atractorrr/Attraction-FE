'use client'

import {
  Container,
  ErrorGuideTxt,
  GuideTxt,
  NewsletterItem,
  Title,
} from '@/shared/ui'
import useInfiniteRelatedNewsletters from '../model/useInfiniteRelatedNewsletters'
import { RelatedNewsletterItemSkeleton } from './DiscoverResultSkeleton'

interface DiscoverRelatedNewslettersProps {
  keyword: string
}

function RelatedNewsletterLoading() {
  return (
    <div className="mt-3 flex w-full flex-col gap-y-5">
      {Array.from({ length: 5 }, (_, idx) => (
        <RelatedNewsletterItemSkeleton key={idx} />
      ))}
      <div className="h-10 w-full rounded-lg bg-gray-100 dark:bg-gray-700" />
    </div>
  )
}

export default function DiscoverRelatedNewsletters({
  keyword,
}: DiscoverRelatedNewslettersProps) {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteRelatedNewsletters(keyword)

  return (
    <Container className="p-5">
      <Title>관련 뉴스레터</Title>
      {isLoading && (
        <div className="flex h-full items-center justify-center">
          <RelatedNewsletterLoading />
        </div>
      )}
      {data &&
        (data.pages.length !== 0 ? (
          <div className="overflow-y-scroll overscroll-none lg:max-h-[480px]">
            <ul>
              {data.pages.map((newsletter) => (
                <li key={newsletter.id} className="mt-4">
                  <NewsletterItem id={newsletter.id} name={newsletter.name}>
                    <NewsletterItem.Thumbnail url={newsletter.thumbnailUrl} />
                    <NewsletterItem.Content>
                      <NewsletterItem.Description>
                        {newsletter.description}
                      </NewsletterItem.Description>
                    </NewsletterItem.Content>
                  </NewsletterItem>
                </li>
              ))}
            </ul>
            {hasNextPage && (
              <button
                className="mt-7 w-full rounded-lg bg-gray-50 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                type="button"
                title="더보기"
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? '불러오는 중...' : '더보기'}
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center pb-28 pt-24">
            <GuideTxt
              title="관련 뉴스레터 결과가 없어요"
              sub="다른 키워드로 검색해보세요"
            />
          </div>
        ))}
      <div>
        {isError && (
          <div className="flex items-center justify-center px-2">
            <ErrorGuideTxt
              title="관련 뉴스레터를 가져오는데 실패했어요"
              sub="새로고침 후 다시 시도 부탁드려요"
            />
          </div>
        )}
      </div>
    </Container>
  )
}

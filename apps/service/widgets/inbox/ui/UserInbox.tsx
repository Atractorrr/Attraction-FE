'use client'

import { useEffect } from 'react'
import {
  useArticleFilter,
  HideReadToggleBtn,
  SearchBar,
  ViewTypeTabMenu,
  FilterDropdownBtn,
} from '@/features/filter-article'
import {
  useInfiniteUserArticlesQuery,
  ArticleList,
} from '@/entities/user-article'
import { useInfiniteScroll } from '@/shared/lib'
import { LoadingSpinner, BackBtn, GuideTxt, Container } from '@/shared/ui'

interface InboxProps {
  userId: string | number
  isArticleView?: boolean
}

export default function UserInbox({ userId, isArticleView }: InboxProps) {
  const {
    selectedCategory,
    setCategory,
    resetCategory,
    viewType,
    setViewType,
    isHideReadArticles,
    toggleHideReadArticles,
    currentSortType,
    setSortType,
    searchValue,
    setSearchValue,
  } = useArticleFilter()
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteUserArticlesQuery({
    userId,
    sort: currentSortType,
    category: selectedCategory,
    isHideRead: isHideReadArticles || undefined,
    q: searchValue || undefined,
  })
  const scrollRef = useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage()
  })

  useEffect(() => {
    if (isArticleView) {
      setViewType('list')
      return
    }
    setViewType('gallery')
  }, [isArticleView, setViewType])

  return (
    <section
      className={`relative ${
        isArticleView
          ? 'hidden max-h-fit transition-all xl:sticky xl:top-10 xl:block xl:w-[342px]'
          : undefined
      }`}>
      <Container>
        <div
          className={
            isArticleView
              ? 'px-5 pt-5'
              : 'sticky top-0 z-30 bg-white px-5 pt-6 md:static md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent'
          }>
          {isArticleView && (
            <div className="mb-5">
              <BackBtn href="/inbox" />
            </div>
          )}
          <div
            className={`mb-6 flex flex-col-reverse gap-3 ${
              isArticleView
                ? ''
                : 'md:flex-row md:items-center md:justify-between md:gap-5'
            }`}>
            <div className="flex gap-2">
              <FilterDropdownBtn
                userId={userId}
                selectedCategory={selectedCategory}
                setCategory={setCategory}
                resetCategory={resetCategory}
                sortType={currentSortType}
                setSortType={setSortType}
              />
              <HideReadToggleBtn
                isRead={isHideReadArticles}
                toggleHideFn={toggleHideReadArticles}
              />
            </div>
            <SearchBar setValue={setSearchValue} />
          </div>
          <ViewTypeTabMenu
            type={viewType}
            setType={setViewType}
            isArticleView={isArticleView}
          />
        </div>
        <div className={isArticleView ? 'pb-5' : undefined}>
          <div
            className={
              isArticleView
                ? 'relative before:absolute before:inset-x-5 before:top-0 before:z-10 before:h-6 before:bg-gradient-to-b before:from-white before:to-transparent after:absolute after:inset-x-5 after:bottom-0 after:z-10 after:h-6 after:bg-gradient-to-t after:from-white after:to-transparent dark:before:from-gray-800 dark:after:from-gray-800'
                : 'mt-6 px-5 pb-8'
            }>
            <div
              className={
                isArticleView
                  ? 'h-[54vh] min-h-80 overflow-y-auto px-5 py-6'
                  : undefined
              }>
              {isLoading && (
                <div className="flex min-h-full items-center justify-center pb-40 pt-32">
                  <LoadingSpinner />
                </div>
              )}
              {data && (
                <ArticleList
                  data={data.pages}
                  type={viewType}
                  isArticleView={isArticleView}
                />
              )}
              {data && data.pages.length === 0 && (
                <div className="flex min-h-full items-center justify-center px-2 pb-40 pt-32">
                  {searchValue ? (
                    <GuideTxt
                      title="검색 결과가 없어요"
                      sub="입력하신 키워드가 정확한지 확인부탁드려요"
                    />
                  ) : (
                    <GuideTxt
                      title="보관함이 비었어요"
                      sub="뉴스레터를 구독해보세요"
                      // TODO: 아래에 탐색 페이지 링크 추가
                    />
                  )}
                </div>
              )}
              {isError && (
                <div className="flex min-h-full items-center justify-center px-2 pb-40 pt-32">
                  <GuideTxt
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
        </div>
      </Container>
    </section>
  )
}

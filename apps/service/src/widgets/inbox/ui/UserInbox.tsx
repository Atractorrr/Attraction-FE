'use client'

import React, { useCallback, useEffect } from 'react'
import {
  useArticleFilter,
  HideReadToggleBtn,
  SearchBar,
  CategoryButton,
  SortButton,
  ViewTypeButton,
  ResetButton,
} from '@/features/filter-article'
import {
  useInfiniteUserArticlesQuery,
  ArticleList,
  ArticlePageType,
} from '@/entities/user-article'
import { useInfiniteScroll } from '@/shared/lib'
import {
  LoadingSpinner,
  BackBtn,
  GuideTxt,
  Container,
  WarnTxt,
  ErrorGuideTxt,
} from '@/shared/ui'

interface InboxProps {
  isArticleView?: boolean
  pageType: ArticlePageType
}

export default function UserInbox({ isArticleView, pageType }: InboxProps) {
  const {
    selectedCategory,
    setCategory,
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
    pageType,
    sort: currentSortType,
    category: selectedCategory,
    isHideRead:
      pageType === 'bookmark' ? undefined : isHideReadArticles || undefined,
    q: searchValue || undefined,
  })
  const scrollRef = useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage()
  })

  const isReset =
    !!selectedCategory ||
    isHideReadArticles ||
    currentSortType !== 'receivedAt,desc'
  const reset = useCallback(() => {
    setCategory(undefined)
    setSortType('receivedAt,desc')
    if (isHideReadArticles) {
      toggleHideReadArticles()
    }
  }, [setCategory, setSortType, isHideReadArticles, toggleHideReadArticles])

  useEffect(() => {
    if (isArticleView) {
      setViewType('list')
      return
    }
    setViewType('gallery')
  }, [isArticleView, setViewType])

  return (
    <section
      className={`relative ${isArticleView ? 'hidden max-h-fit transition-all xl:sticky xl:top-10 xl:block xl:w-[360px]' : ''}`}>
      <Container>
        <div
          className={
            isArticleView
              ? 'pt-5'
              : 'sticky top-0 z-30 bg-white pt-6 md:static md:bg-transparent lg:px-5 dark:bg-gray-800 md:dark:bg-transparent'
          }>
          {isArticleView && (
            <div className="mb-5 px-5">
              <BackBtn />
            </div>
          )}
          <div
            className={`flex flex-col-reverse gap-3 ${isArticleView ? 'pb-5' : 'pb-4 lg:mb-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:pb-0'}`}>
            <div
              className={`relative z-10 w-full before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-5 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-5 after:bg-gradient-to-l after:from-white after:to-transparent dark:before:from-gray-800 dark:after:from-gray-800 ${isArticleView ? '' : 'lg:w-[calc(100%-18.75rem)] lg:before:content-none lg:after:content-none'}`}>
              <div className="scrollbar-hidden flex w-full overflow-x-auto">
                <div
                  className={`flex items-center gap-2 px-5 ${isArticleView ? '' : 'lg:px-0'}`}>
                  <ViewTypeButton
                    viewType={viewType}
                    setViewType={setViewType}
                  />
                  <span className="mx-1 my-2.5 block h-5 w-px shrink-0 bg-gray-100 dark:bg-gray-700" />
                  {isReset && <ResetButton reset={reset} />}
                  <CategoryButton
                    selectedCategory={selectedCategory}
                    setCategory={setCategory}
                  />
                  <SortButton
                    sortType={currentSortType}
                    setSortType={setSortType}
                  />
                  {pageType !== 'bookmark' && (
                    <HideReadToggleBtn
                      isRead={isHideReadArticles}
                      toggleHideFn={toggleHideReadArticles}
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              className={`w-full px-5 ${isArticleView ? '' : 'lg:w-72 lg:px-0'}`}>
              <SearchBar setValue={setSearchValue} />
            </div>
          </div>
        </div>
        <div
          className={
            isArticleView
              ? 'relative before:absolute before:inset-x-5 before:top-0 before:z-10 before:h-6 before:bg-gradient-to-b before:from-white before:to-transparent after:absolute after:inset-x-5 after:bottom-0 after:z-10 after:h-6 after:bg-gradient-to-t after:from-white after:to-transparent dark:before:from-gray-800 dark:after:from-gray-800'
              : 'mt-4 px-5 pb-8'
          }>
          <div
            className={
              isArticleView
                ? 'h-[54vh] min-h-80 overflow-y-auto overscroll-none px-5 pb-8 pt-4'
                : undefined
            }>
            {isLoading && (
              <div className="flex min-h-full items-center justify-center pb-40 pt-32">
                <LoadingSpinner />
              </div>
            )}
            {data &&
              (data.pages.length === 0 ? (
                <div className="flex min-h-full items-center justify-center px-2 pb-40 pt-32">
                  {searchValue ? (
                    <GuideTxt
                      title="검색 결과가 없어요"
                      sub="입력하신 키워드가 정확한지 확인부탁드려요"
                    />
                  ) : (
                    <GuideTxt
                      title={
                        pageType === 'bookmark'
                          ? '북마크한 아티클이 없어요'
                          : '보관함이 비었어요'
                      }
                      sub="아티클은 최대 7일까지 보관돼요"
                    />
                  )}
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <WarnTxt
                      content="아티클은 최대 7일까지 보관돼요"
                      type="info"
                    />
                  </div>
                  <ArticleList
                    data={data.pages}
                    pageType={pageType}
                    viewType={viewType}
                    isArticleView={isArticleView}
                  />
                </>
              ))}
            {isError && (
              <div className="flex min-h-full items-center justify-center px-2 pb-24 pt-20">
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
    </section>
  )
}

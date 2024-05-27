'use client'

import {
  useArticleFilter,
  CategoryDropdownBtn,
  HideReadToggleBtn,
  SearchBar,
  SortTypeDropdownBtn,
  ViewTypeTabMenu,
  FilterDropdownBtn,
} from '@/features/filter-article'
import {
  useInfiniteUserArticlesQuery,
  ArticleList,
} from '@/entities/user-article'
import { useInfiniteScroll } from '@/shared/lib'
import { LoadingSpinner, BackBtn, GuideTxt } from '@/shared/ui'

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
    isRead: isHideReadArticles || undefined,
    q: searchValue || undefined,
  })
  const scrollRef = useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage()
  })

  return (
    <section
      className={`border-gray-100 bg-white !pb-7 md:rounded-2xl md:border dark:border-gray-800 dark:bg-gray-800 ${
        isArticleView
          ? 'max-h-fit transition-all lg:max-w-[342px]'
          : 'mx-auto my-6 max-w-7xl p-5 md:p-6'
      }`}>
      <div className={isArticleView ? 'px-5 pt-5' : undefined}>
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
            <div className={`flex gap-2 sm:hidden ${isArticleView && '!flex'}`}>
              <FilterDropdownBtn
                userId={userId}
                selectedCategories={selectedCategory}
                setCategory={setCategory}
                resetCategory={resetCategory}
                sortType={currentSortType}
                setSortType={setSortType}
              />
            </div>
            <div
              className={`hidden gap-2 sm:flex ${isArticleView && '!hidden'}`}>
              <CategoryDropdownBtn
                userId={userId}
                selectedCategories={selectedCategory}
                setCategory={setCategory}
                resetCategory={resetCategory}
              />
              <SortTypeDropdownBtn
                sortType={currentSortType}
                setSortType={setSortType}
              />
            </div>
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
      <div
        className={
          isArticleView
            ? 'relative before:absolute before:inset-x-5 before:top-0 before:z-10 before:h-6 before:bg-gradient-to-b before:from-white before:to-transparent after:absolute after:inset-x-5 after:bottom-0 after:z-10 after:h-6 after:bg-gradient-to-t after:from-white after:to-transparent'
            : 'mt-6'
        }>
        <div
          className={
            isArticleView
              ? 'h-[54vh] min-h-80 overflow-y-auto px-5 py-6'
              : undefined
          }>
          {isLoading && (
            <div className="flex min-h-full items-center justify-center py-10">
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
            <div className="flex min-h-full items-center justify-center px-2 pb-16 pt-12">
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
            <div className="flex min-h-full items-center justify-center px-2 pb-16 pt-12">
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
    </section>
  )
}

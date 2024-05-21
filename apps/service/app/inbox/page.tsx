'use client'

import {
  useArticleFilter,
  CategoryDropdownBtn,
  HideReadedToggleBtn,
  SearchBar,
  SortTypeDropdownBtn,
  ViewTypeTabMenu,
} from '@/features'
import { useInfiniteUserArticlesQuery, ArticleList } from '@/entities'
import { useInfiniteScroll, LoadingSpinner } from '@/shared'

export default function InboxPage() {
  const {
    selectedCategory,
    setCategory,
    resetCategory,
    viewType,
    setViewType,
    isHideReadedArticles,
    toggleHideReadedArticles,
    currentSortType,
    setSortType,
    searchValue,
    setSearchValue,
  } = useArticleFilter()
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteUserArticlesQuery({
      userId: 12, // TODO: Protected Route 적용 (userId)
      sort: currentSortType,
      category: selectedCategory,
      isRead: isHideReadedArticles || undefined,
      q: searchValue || undefined,
    })
  const scrollRef = useInfiniteScroll(() => {
    if (hasNextPage) fetchNextPage()
  })

  return (
    <section className="mx-auto my-6 max-w-7xl border-gray-100 bg-white p-5 md:rounded-2xl md:border md:p-6 dark:border-gray-800 dark:bg-gray-800">
      <div>
        <div className="mb-6 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between md:gap-5">
          <div className="flex gap-2">
            <CategoryDropdownBtn
              userId={12}
              selectedCategories={selectedCategory}
              setCategory={setCategory}
              resetCategory={resetCategory}
            />
            <SortTypeDropdownBtn
              sortType={currentSortType}
              setSortType={setSortType}
            />
            <HideReadedToggleBtn
              isRead={isHideReadedArticles}
              toggleHideFn={toggleHideReadedArticles}
            />
          </div>
          <SearchBar setValue={setSearchValue} />
        </div>
        <ViewTypeTabMenu type={viewType} setType={setViewType} />
      </div>
      <div>
        {isLoading && <LoadingSpinner />}
        {data && (
          <ArticleList
            data={data.pages}
            type={viewType}
            isArticleView={false}
          />
        )}
        <div ref={scrollRef} className="min-h-2 w-full">
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

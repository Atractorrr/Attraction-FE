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
import { useInfiniteUserArticlesQuery, ArticleList } from '@/entities/article'
import { useInfiniteScroll } from '@/shared/lib'
import { LoadingSpinner } from '@/shared/ui'

interface InboxProps {
  userId: string | number
}

export default function UserInbox({ userId }: InboxProps) {
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
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteUserArticlesQuery({
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
    <section className="mx-auto my-6 max-w-7xl border-gray-100 bg-white p-5 md:rounded-2xl md:border md:p-6 dark:border-gray-800 dark:bg-gray-800">
      <div>
        <div className="mb-6 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between md:gap-5">
          <div className="flex gap-2">
            <div className="flex gap-2 sm:hidden">
              <FilterDropdownBtn
                userId={userId}
                selectedCategories={selectedCategory}
                setCategory={setCategory}
                resetCategory={resetCategory}
                sortType={currentSortType}
                setSortType={setSortType}
              />
            </div>
            <div className="hidden gap-2 sm:flex">
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

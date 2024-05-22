'use client'

import useCategory from './useCategory'
import useHideReadedArticles from './useHideReadedArticles'
import useSearchValue from './useSearchValue'
import useSortType from './useSortType'
import useViewType from './useViewType'

export default function useArticleFilter() {
  const { selectedCategory, setCategory, resetCategory } = useCategory()
  const { currentSortType, setSortType } = useSortType()
  const { isHideReadedArticles, toggleHideReadedArticles } =
    useHideReadedArticles()
  const { viewType, setViewType } = useViewType()
  const { searchValue, setSearchValue } = useSearchValue()

  return {
    selectedCategory,
    setCategory,
    resetCategory,
    currentSortType,
    setSortType,
    isHideReadedArticles,
    toggleHideReadedArticles,
    viewType,
    setViewType,
    searchValue,
    setSearchValue,
  }
}

'use client'

import useCategory from './useCategory'
import useHideReadArticles from './useHideReadArticles'
import useSearchValue from './useSearchValue'
import useSortType from './useSortType'
import useViewType from './useViewType'

export default function useArticleFilter() {
  const { selectedCategory, setCategory, resetCategory } = useCategory()
  const { currentSortType, setSortType } = useSortType()
  const { isHideReadArticles, toggleHideReadArticles } = useHideReadArticles()
  const { viewType, setViewType } = useViewType()
  const { searchValue, setSearchValue } = useSearchValue()

  return {
    selectedCategory,
    setCategory,
    resetCategory,
    currentSortType,
    setSortType,
    isHideReadArticles,
    toggleHideReadArticles,
    viewType,
    setViewType,
    searchValue,
    setSearchValue,
  }
}

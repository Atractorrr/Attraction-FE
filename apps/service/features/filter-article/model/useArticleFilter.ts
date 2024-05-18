'use client'

import useCategory from './useCategory'
import useHideReadedArticles from './useHideReadedArticles'
import useSort from './useSortType'
import useViewType from './useViewType'

export default function useArticleFilter() {
  const { selectedCategory, setCategory } = useCategory()
  const { currentSortType, setSortType } = useSort()
  const { isHideReadedArticles, toggleHideReadedArticles } =
    useHideReadedArticles()
  const { viewType, setViewType } = useViewType()

  return {
    selectedCategory,
    setCategory,
    currentSortType,
    setSortType,
    isHideReadedArticles,
    toggleHideReadedArticles,
    viewType,
    setViewType,
  }
}

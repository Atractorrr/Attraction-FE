'use client'

import { useCallback } from 'react'
import useCategory from './useCategory'
import useHideReadArticles from './useHideReadArticles'
import useNewsletterSelect from './useNewsletterSelect'
import useSearchValue from './useSearchValue'
import useSortType from './useSortType'
import useViewType from './useViewType'

export default function useArticleFilter() {
  const { selectedCategory, setCategory } = useCategory()
  const { currentSortType, setSortType } = useSortType()
  const { isHideReadArticles, toggleHideReadArticles } = useHideReadArticles()
  const { viewType, setViewType } = useViewType()
  const { searchValue, setSearchValue } = useSearchValue()
  const { selectedNewsletter, setNewsletter } = useNewsletterSelect()

  const setCategoryWithReset: typeof setCategory = useCallback(
    (category) => {
      if (selectedNewsletter !== undefined) {
        setNewsletter(undefined)
      }
      setCategory(category)
    },
    [selectedNewsletter, setNewsletter, setCategory],
  )

  const setNewsletterWithReset: typeof setNewsletter = useCallback(
    (newsletter) => {
      if (selectedCategory !== undefined) {
        setCategory(undefined)
      }
      setNewsletter(newsletter)
    },
    [selectedCategory, setCategory, setNewsletter],
  )

  const selected =
    !!selectedCategory ||
    selectedNewsletter !== undefined ||
    isHideReadArticles ||
    currentSortType !== 'receivedAt,desc'
  const reset = useCallback(() => {
    setCategory(undefined)
    setNewsletter(undefined)
    setSortType('receivedAt,desc')
    if (isHideReadArticles) {
      toggleHideReadArticles()
    }
  }, [
    setCategory,
    setSortType,
    isHideReadArticles,
    toggleHideReadArticles,
    setNewsletter,
  ])

  return {
    selectedCategory,
    setCategory: setCategoryWithReset,
    currentSortType,
    setSortType,
    isHideReadArticles,
    toggleHideReadArticles,
    viewType,
    setViewType,
    searchValue,
    setSearchValue,
    selectedNewsletter,
    setNewsletter: setNewsletterWithReset,
    selected,
    reset,
  }
}

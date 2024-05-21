'use client'

import { useCallback, useState } from 'react'
import * as Entities from '@/entities'

type NewsletterCategory = Entities.Article.Types.NewsletterCategory

export default function useCategory() {
  const [selectedCategory, setSelectedCategory] = useState<
    NewsletterCategory[]
  >([])
  const setCategory = useCallback((category: NewsletterCategory) => {
    setSelectedCategory((prev) => {
      if (prev.some((categories) => categories === category)) {
        return prev.filter((categories) => categories !== category)
      }
      return [...prev, category]
    })
  }, [])
  const resetCategory = useCallback(() => setSelectedCategory([]), [])

  return { selectedCategory, setCategory, resetCategory }
}

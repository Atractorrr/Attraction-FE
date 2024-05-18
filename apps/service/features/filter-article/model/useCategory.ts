'use client'

import { useCallback, useState } from 'react'
import * as Entities from '@/entities'

type Categories = Entities.Article.Types.NewsletterCategory

export default function useCategory() {
  const [selectedCategory, setSelectedCategory] = useState<Categories[]>([])
  const setCategory = useCallback((category: Categories) => {
    setSelectedCategory((prev) => {
      const isAlready = prev.some((categories) => categories === category)
      if (isAlready) {
        return prev.filter((categories) => categories !== category)
      }
      return [...prev, category]
    })
  }, [])

  return { selectedCategory, setCategory }
}

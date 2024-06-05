'use client'

import { useCallback, useState } from 'react'
import { NewsletterCategory } from '@/shared/type'

export default function useCategory() {
  const [selectedCategory, setSelectedCategory] = useState<
    NewsletterCategory | undefined
  >(undefined)
  const setCategory = useCallback((category: NewsletterCategory) => {
    setSelectedCategory(category)
  }, [])
  const resetCategory = useCallback(() => setSelectedCategory(undefined), [])

  return { selectedCategory, setCategory, resetCategory } as const
}

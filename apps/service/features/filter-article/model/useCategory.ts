'use client'

import { useCallback, useState } from 'react'
import { NewsletterCategory } from '@/shared/type'

export default function useCategory() {
  const [selectedCategory, setSelectedCategory] = useState<
    NewsletterCategory | undefined
  >(undefined)
  const setCategory = useCallback((category?: NewsletterCategory) => {
    setSelectedCategory(category)
  }, [])

  return { selectedCategory, setCategory } as const
}

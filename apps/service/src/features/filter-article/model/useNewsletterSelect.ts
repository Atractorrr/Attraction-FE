'use client'

import { useCallback, useState } from 'react'
import type { NewsletterItem } from '@/entities/user-article'

export default function useNewsletterSelect() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<
    NewsletterItem | undefined
  >(undefined)
  const setNewsletter = useCallback((newsletter?: NewsletterItem) => {
    setSelectedNewsletter(newsletter)
  }, [])

  return { selectedNewsletter, setNewsletter } as const
}

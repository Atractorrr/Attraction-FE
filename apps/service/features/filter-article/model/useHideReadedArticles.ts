'use client'

import { useCallback, useState } from 'react'

export default function useHideReadedArticles() {
  const [isHideReadedArticles, setHideReadedArticles] = useState<boolean>(false)
  const toggleHideReadedArticles = useCallback(() => {
    setHideReadedArticles((prev) => !prev)
  }, [])

  return { isHideReadedArticles, toggleHideReadedArticles }
}

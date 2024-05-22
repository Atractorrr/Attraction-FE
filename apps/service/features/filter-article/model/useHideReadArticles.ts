'use client'

import { useCallback, useState } from 'react'

export default function useHideReadArticles() {
  const [isHideReadArticles, setHideReadArticles] = useState<boolean>(false)
  const toggleHideReadArticles = useCallback(() => {
    setHideReadArticles((prev) => !prev)
  }, [])

  return { isHideReadArticles, toggleHideReadArticles }
}

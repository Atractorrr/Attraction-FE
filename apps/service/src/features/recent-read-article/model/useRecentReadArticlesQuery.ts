'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import { getRecentReadArticles } from '../api'

export default function useRecentReadArticlesQuery() {
  const { userEmail } = useAuth()

  return useSuspenseQuery({
    queryKey: ['recent-read-articles', { userEmail }],
    queryFn: () => getRecentReadArticles({ userEmail }),
  })
}

'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api'
import mainQueryKeys from './mainQueryKeys'

export default function useRecentArticles(email?: string) {
  return useSuspenseQuery({
    queryKey: mainQueryKeys.recentArticles(email),
    queryFn: !email ? () => Promise.resolve(null) : () => fetchArticles(email),
    refetchOnWindowFocus: false,
  })
}

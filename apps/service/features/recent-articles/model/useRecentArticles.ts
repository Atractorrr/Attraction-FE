import { UseQueryResult, useQuery } from '@tanstack/react-query'
import type { RecentArticleResponse } from '@/entities/recent-article-item'
import { fetchArticles } from '../api'

export default function useRecentArticles(
  shouldFetch: boolean,
  size: number = 5,
): UseQueryResult<RecentArticleResponse, Error> {
  return useQuery({
    queryKey: ['recent-articles', size],
    queryFn: !shouldFetch
      ? () => Promise.resolve(null)
      : () => fetchArticles(size),
    enabled: shouldFetch,
  })
}

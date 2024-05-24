import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api'
import type { RecentArticleResponse } from '@/entities/recent-article-item'

export default function useRecentArticles(
  size: number = 5,
): UseQueryResult<RecentArticleResponse, Error> {
  return useQuery({
    queryKey: ['recent-articles', size],
    queryFn: () => fetchArticles(size),
  })
}

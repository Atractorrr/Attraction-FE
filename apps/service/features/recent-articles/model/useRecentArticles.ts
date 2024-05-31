import { UseQueryResult, useQuery } from '@tanstack/react-query'
import type { RecentArticleResponse } from '@/entities/recent-article-item'
import { fetchArticles } from '../api'

export default function useRecentArticles(
  email: string | undefined,
): UseQueryResult<RecentArticleResponse, Error> {
  return useQuery({
    queryKey: ['recent-articles', email],
    queryFn: !email ? () => Promise.resolve(null) : () => fetchArticles(email),
    enabled: !!email,
  })
}

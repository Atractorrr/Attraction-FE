import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../../api'
import type { RecentArticleResponse } from '../type'

export default function useRecentArticles(
  email: string | undefined,
): UseQueryResult<RecentArticleResponse, Error> {
  return useQuery({
    queryKey: ['recent-articles', email],
    queryFn: !email ? () => Promise.resolve(null) : () => fetchArticles(email),
    enabled: !!email,
  })
}

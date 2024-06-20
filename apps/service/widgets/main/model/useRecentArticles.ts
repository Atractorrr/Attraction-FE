import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api'
import type { RecentArticleResponse } from './type'
import mainQueryKeys from './mainQueryKeys'

export default function useRecentArticles(
  email: string | undefined,
): UseQueryResult<RecentArticleResponse, Error> {
  return useQuery({
    queryKey: mainQueryKeys.recentArticles(email),
    queryFn: !email ? () => Promise.resolve(null) : () => fetchArticles(email),
    enabled: !!email,
  })
}

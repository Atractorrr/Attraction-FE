import { useInfiniteQuery } from '@tanstack/react-query'
import type { UserArticlesOption } from '../types'
import { getUserArticles } from '../api'
import articleQueryKeys from './article-query-keys'

export default function useInfiniteUserArticlesQuery(
  option: UserArticlesOption,
) {
  return useInfiniteQuery({
    queryKey: articleQueryKeys.userArticles(option),
    queryFn: ({ pageParam }) => getUserArticles({ ...option, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.number + 1,
  })
}

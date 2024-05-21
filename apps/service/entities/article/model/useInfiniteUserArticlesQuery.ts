import { useInfiniteQuery } from '@tanstack/react-query'

import { getUserArticles } from '../api'
import { Article, UserArticlesOption } from './types'
import articleQueryKeys from './article-query-keys'

export default function useInfiniteUserArticlesQuery(
  option: Omit<UserArticlesOption, 'page'>,
) {
  return useInfiniteQuery({
    queryKey: articleQueryKeys.userArticles(option),
    queryFn: ({ pageParam }) => getUserArticles({ ...option, page: pageParam }),
    initialPageParam: 0,
    select({ pages, pageParams }) {
      return {
        pages: pages.reduce((flatArticles: Article[], { data }) => {
          return flatArticles.concat(data.content)
        }, []),
        pageParams,
      }
    },
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.number + 1,
  })
}

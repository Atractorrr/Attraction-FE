import { useInfiniteQuery } from '@tanstack/react-query'
import type { Article, UserArticlesOption } from '../types'
import { getUserArticles } from '../api'
import articleQueryKeys from './article-query-keys'

export default function useInfiniteUserArticlesQuery(
  option: Omit<UserArticlesOption, 'page'>,
) {
  return useInfiniteQuery({
    queryKey: articleQueryKeys.userArticles(option),
    queryFn: ({ pageParam }) => getUserArticles({ ...option, page: pageParam }),
    initialPageParam: 0,
    select({ pages }) {
      return {
        pages: pages.reduce((flatArticles: Article[], { articles }) => {
          return flatArticles.concat(articles)
        }, []),
      }
    },
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.number + 1,
  })
}

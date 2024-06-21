import { useInfiniteQuery } from '@tanstack/react-query'
import discoverQueryKeys from './discoverQueryKeys'
import { DiscoverArticle } from './type'
import { fetchDiscoverArticles } from '../api'

export default function useInfiniteDiscoverResult(keyword: string) {
  return useInfiniteQuery({
    queryKey: discoverQueryKeys.discoverResult(keyword),
    queryFn: ({ pageParam }) => fetchDiscoverArticles(keyword, pageParam),
    initialPageParam: 0,
    select: ({ pages, pageParams }) => ({
      pages: pages.reduce((flatArticles: DiscoverArticle[], { data }) => {
        return flatArticles.concat(data.content)
      }, []),
      pageParams,
    }),
    getNextPageParam: (lastPage) =>
      lastPage.data.last ? undefined : lastPage.data.number + 1,
  })
}

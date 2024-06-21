import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchDiscoverArticles } from '../api'
import discoverQueryKeys from './discoverQueryKeys'
import { DiscoverArticle } from './type'

export default function useInfiniteDiscoverArticles(keyword: string) {
  return useInfiniteQuery({
    queryKey: discoverQueryKeys.discoverArticles(keyword),
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

import { useInfiniteQuery } from '@tanstack/react-query'
import discoverQueryKeys from './discoverQueryKeys'
import { DiscoverRelatedNewsletter } from './type'
import { fetchDiscoverRelatedNewsletters } from '../api'

export default function useInfiniteRelatedNewsletters(keyword: string) {
  return useInfiniteQuery({
    queryKey: discoverQueryKeys.relatedNewsletters(keyword),
    queryFn: ({ pageParam }) =>
      fetchDiscoverRelatedNewsletters(keyword, pageParam),
    initialPageParam: 0,
    select: ({ pages, pageParams }) => ({
      pages: pages.reduce(
        (flatNewsletters: DiscoverRelatedNewsletter[], { data }) => {
          return flatNewsletters.concat(data.content)
        },
        [],
      ),
      pageParams,
    }),
    getNextPageParam: (lastPage) =>
      lastPage.data.last ? undefined : lastPage.data.number + 1,
  })
}

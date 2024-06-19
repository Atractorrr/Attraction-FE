import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchNewsletters } from '../../api'
import { MainCategory, TrendNewsletterResponse } from '../../model'

export default function useTrendNewsletters(
  category: MainCategory,
  size: number = 10,
): UseSuspenseQueryResult<TrendNewsletterResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['trend-newsletters', category, size],
    queryFn: () => fetchNewsletters(category, size),
  })
}

import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchNewsletters } from '../../api'
import { MainCategory, TrendNewsletterResponse } from '../type'
import trendNewsletterQueryKeys from '../trendNewsletterQueryKeys'

export default function useTrendNewsletters(
  category: MainCategory,
  size: number = 10,
): UseSuspenseQueryResult<TrendNewsletterResponse, Error> {
  return useSuspenseQuery({
    queryKey: trendNewsletterQueryKeys.trendNewsletters({ category, size }),
    queryFn: () => fetchNewsletters(category, size),
  })
}

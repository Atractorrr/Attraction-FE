import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { MainCategory } from '@/features/newsletter-categories'
import { fetchNewsletters } from '../../api'
import type { TrendNewsletterResponse } from '../../model/type'

export default function useTrendNewsletters(
  category: MainCategory,
  size: number = 10,
): UseSuspenseQueryResult<TrendNewsletterResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['trend-newsletters', category, size],
    queryFn: () => fetchNewsletters(category, size),
  })
}

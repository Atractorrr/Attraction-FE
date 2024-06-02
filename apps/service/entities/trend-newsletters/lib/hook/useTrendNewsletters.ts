import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { NewsletterCategory } from '@/shared/type'
import { fetchNewsletters } from '../../api'
import type { TrendNewsletterResponse } from '../../model/type'

export default function useTrendNewsletters(
  category: NewsletterCategory,
  size: number = 10,
): UseSuspenseQueryResult<TrendNewsletterResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['trend-newsletters', category, size],
    queryFn: () => fetchNewsletters(category, size),
  })
}

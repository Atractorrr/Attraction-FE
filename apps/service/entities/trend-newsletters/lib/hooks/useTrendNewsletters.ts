import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { NewsletterCategory } from '@/shared/type'
import { fetchNewsletters } from '../../api'
import type { TrendNewsletterResponse } from '../../model/type'

export default function useTrendNewsletters(
  category: NewsletterCategory = 'RECOMMEND',
  size: number = 10,
): UseQueryResult<TrendNewsletterResponse, Error> {
  return useQuery({
    queryKey: ['trend-newsletters', category, size],
    queryFn: () => fetchNewsletters(category, size),
  })
}

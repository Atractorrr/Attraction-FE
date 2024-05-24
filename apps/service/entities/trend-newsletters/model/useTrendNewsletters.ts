import { useQuery } from '@tanstack/react-query'
import { NewsletterCategory } from '@/shared/type'
import { fetchNewsletters } from '../api'

export default function useTrendNewsletters(
  category: NewsletterCategory = 'RECOMMEND',
  size: number = 10,
) {
  return useQuery({
    queryKey: ['trend-newsletters', category, size],
    queryFn: () => fetchNewsletters(category, size),
  })
}

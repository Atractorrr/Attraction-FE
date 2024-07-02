import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchPreferCategories } from '../../api'
import type { PreferCategoriesResponse } from '../type'
import trendNewsletterQueryKeys from '../trendNewsletterQueryKeys'

export default function usePreferCategories(
  email: string | undefined,
): UseSuspenseQueryResult<PreferCategoriesResponse, Error> {
  return useSuspenseQuery({
    queryKey: trendNewsletterQueryKeys.preferCategories(email),
    queryFn: () => fetchPreferCategories(email ?? ''),
  })
}

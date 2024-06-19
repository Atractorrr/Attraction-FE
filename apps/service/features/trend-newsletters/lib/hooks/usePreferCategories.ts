import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchPreferCategories } from '../../api'
import { PreferCategoriesResponse } from '../../model'

export default function usePreferCategories(
  email: string | undefined,
): UseSuspenseQueryResult<PreferCategoriesResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['prefer-categories', email],
    queryFn: () => fetchPreferCategories(email ?? ''),
  })
}

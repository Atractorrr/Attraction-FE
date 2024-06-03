import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchPreferCategories } from '../../api'
import { PreferCateroriesResponse } from '../../model'

export default function usePreferCategories(
  email: string | undefined,
): UseSuspenseQueryResult<PreferCateroriesResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['prefer-categories', email],
    queryFn: () => fetchPreferCategories(email ?? ''),
  })
}

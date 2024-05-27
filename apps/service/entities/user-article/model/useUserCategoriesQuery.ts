import { useQuery } from '@tanstack/react-query'

import { getUserCategories } from '../api'
import articleQueryKeys from './articleQueryKeys'

export default function useUserCategoriesQuery(params: {
  userId: string | number
}) {
  return useQuery({
    queryKey: articleQueryKeys.userCategories(params),
    queryFn: () => getUserCategories(params),
  })
}

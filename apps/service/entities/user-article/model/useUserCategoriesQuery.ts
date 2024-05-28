import { useQuery } from '@tanstack/react-query'

import { getUserCategories } from '../api'
import userArticleQueryKeys from './userArticleQueryKeys'

export default function useUserCategoriesQuery(params: {
  userId: string | number
}) {
  return useQuery({
    queryKey: userArticleQueryKeys.userCategories(params),
    queryFn: () => getUserCategories(params),
  })
}

import { useQuery } from '@tanstack/react-query'
import articleQueryKeys from './article-query-keys'
import { getUserCategories } from '../api'

export default function useUserCategoriesQuery(params: {
  memberId: string | number
}) {
  return useQuery({
    queryKey: articleQueryKeys.userCategories(params),
    queryFn: () => getUserCategories(params),
  })
}

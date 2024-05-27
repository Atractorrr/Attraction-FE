import { useQuery } from '@tanstack/react-query'
import articleQueryKeys from './articleQueryKeys'
import { UserArticleParams } from './type'
import { getUserArticle } from '../api'

export default function useUserArticleQuery({ ...params }: UserArticleParams) {
  return useQuery({
    queryKey: articleQueryKeys.userArticle(params),
    queryFn: () => getUserArticle(params),
  })
}

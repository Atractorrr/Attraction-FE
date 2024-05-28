import { useQuery } from '@tanstack/react-query'
import userArticleQueryKeys from './userArticleQueryKeys'
import { UserArticleParams } from './type'
import { getUserArticle } from '../api'

export default function useUserArticleQuery({ ...params }: UserArticleParams) {
  return useQuery({
    queryKey: userArticleQueryKeys.userArticle(params),
    queryFn: () => getUserArticle(params),
  })
}

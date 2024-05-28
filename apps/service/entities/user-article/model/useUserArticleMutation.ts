import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UserArticleParams } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'
import { putUserArticle } from '../api'

export default function useUserArticleMutation({
  userId,
  articleId,
}: UserArticleParams) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.userArticle({ userId, articleId }),
    mutationFn: (percentage: number) =>
      putUserArticle({ userId, articleId, percentage }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userArticleQueryKeys.all })
    },
  })
}

'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import type { UserArticleParams } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'
import { putUserArticle } from '../api'

export default function useUserArticleMutation({
  articleId,
}: Omit<UserArticleParams, 'userEmail'>) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.userArticle({ userEmail, articleId }),
    mutationFn: (readPercentage: number) =>
      putUserArticle({ userEmail, articleId, readPercentage }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userArticleQueryKeys.userArticles({
          userEmail,
          pageType: 'default',
        }),
      })
    },
  })
}

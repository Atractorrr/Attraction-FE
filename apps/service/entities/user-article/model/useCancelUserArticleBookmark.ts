'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import type { UserArticleParams } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'
import { fetchUserArticleBookmark } from '../api'

export default function useCancelUserArticleBookmark({
  articleId,
  onMutate,
}: Omit<UserArticleParams, 'userEmail'> & { onMutate?: () => void }) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.cancelUserArticleBookmark({
      userEmail,
      articleId,
    }),
    mutationFn: () =>
      fetchUserArticleBookmark({ userEmail, articleId, type: 'cancel' }),
    onMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userArticleQueryKeys.checkUserArticleBookmark({
          userEmail,
          articleId,
        }),
      })
      queryClient.invalidateQueries({
        queryKey: userArticleQueryKeys.userArticleList({
          userEmail,
          pageType: 'bookmark',
        }),
      })
    },
  })
}

'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import type { UserArticleParams } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'
import { trackingUserArticleScroll } from '../api'

export default function useTrackingUserArticleScroll({
  articleId,
}: Omit<UserArticleParams, 'userEmail'>) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.trackingUserArticleScroll({
      userEmail,
      articleId,
    }),
    mutationFn: (readPercentage: number) =>
      trackingUserArticleScroll({ userEmail, articleId, readPercentage }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userArticleQueryKeys.userArticleList({
          userEmail,
          pageType: 'default',
        }),
      })
    },
  })
}

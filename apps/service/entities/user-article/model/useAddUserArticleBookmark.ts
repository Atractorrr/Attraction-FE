'use client'

import { useAuth } from '@/entities/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { fetchUserArticleBookmark } from '../api'
import type { UserArticleParams } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'

export default function useAddUserArticleBookmark({
  articleId,
  onMutate,
}: Omit<UserArticleParams, 'userEmail'> & { onMutate?: () => void }) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.addUserArticleBookmark({
      userEmail,
      articleId,
    }),
    mutationFn: () =>
      fetchUserArticleBookmark({ userEmail, articleId, type: 'add' }),
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

      toast.success('북마크가 추가되었어요')
    },
  })
}

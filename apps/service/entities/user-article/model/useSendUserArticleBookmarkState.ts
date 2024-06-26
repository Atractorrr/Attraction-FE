'use client'

import { useAuth } from '@/entities/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { fetchUserArticleBookmark } from '../api'
import type { UserArticleParams } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'

export default function useSendUserArticleBookmarkState({
  articleId,
  onMutate,
  checkBookmark,
}: Omit<UserArticleParams, 'userEmail'> & {
  onMutate?: () => void
  checkBookmark: boolean
}) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.addUserArticleBookmark({
      userEmail,
      articleId,
    }),
    mutationFn: () =>
      fetchUserArticleBookmark({
        userEmail,
        articleId,
        type: checkBookmark ? 'cancel' : 'add',
      }),
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
      if (checkBookmark) {
        toast.info('북마크가 삭제되었어요')
      } else {
        toast.info('북마크가 추가되었어요')
      }
    },
  })
}

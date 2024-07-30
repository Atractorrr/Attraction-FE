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
  isBookmark,
}: Omit<UserArticleParams, 'userEmail'> & {
  onMutate?: () => void
  isBookmark: boolean
}) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: userArticleQueryKeys.sendUserArticleBookmarkState({
      userEmail,
      articleId,
      isBookmark,
    }),
    mutationFn: () =>
      fetchUserArticleBookmark({
        userEmail,
        articleId,
        type: isBookmark ? 'cancel' : 'add',
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
      toast.success(`북마크가 ${isBookmark ? '삭제' : '추가'}되었어요`)
    },
    onError: () =>
      toast.error(`북마크 ${isBookmark ? '삭제' : '추가'}에 실패했어요`),
  })
}

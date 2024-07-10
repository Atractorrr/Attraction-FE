'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import { toast } from 'react-toastify'
import { subscribeNewsletter } from '../api'
import { SubscribeNewsletterParams } from './type'
import subscribeNewsletterKeys from './subscribeNewsletterKeys'

export default function useSubscribeNewsletter({
  newsletterId,
  type = 'subscribe',
  onMutate,
  onSuccess,
}: Omit<SubscribeNewsletterParams, 'userEmail'> & {
  onMutate?: () => void
  onSuccess?: () => void
}) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: subscribeNewsletterKeys.subscribeNewsletter({
      userEmail,
      newsletterId,
      type,
    }),
    mutationFn: () => subscribeNewsletter({ userEmail, newsletterId, type }),
    throwOnError: !userEmail,
    onMutate,
    onSuccess: () => {
      onSuccess?.()
      toast.success(
        `뉴스레터 구독${type === 'unsubscribe' ? '취소' : ''}에 성공했어요!`,
      )
      queryClient.invalidateQueries({
        queryKey: subscribeNewsletterKeys.checkSubscribeState({
          userEmail,
          newsletterId,
        }),
      })
    },
    onError: () => {
      toast.error(
        `뉴스레터 구독${type === 'unsubscribe' ? '취소' : ''}에 실패했어요`,
      )
    },
  })
}

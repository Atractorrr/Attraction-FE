'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useAuth } from '@/entities/auth'
import { checkSubscribeState } from '../api'
import { SubscribeNewsletterParams } from './type'
import subscribeNewsletterKeys from './subscribeNewsletterKeys'

export default function useCheckSubscribeStateQuery({
  newsletterId,
}: Omit<SubscribeNewsletterParams, 'userEmail'>) {
  const { userEmail } = useAuth()
  const { isLoading, data, isError } = useQuery({
    queryKey: subscribeNewsletterKeys.checkSubscribeState({
      userEmail,
      newsletterId,
    }),
    queryFn: () => checkSubscribeState({ userEmail, newsletterId }),
    throwOnError: !userEmail,
  })

  useEffect(() => {
    if (isError) {
      toast.error('뉴스레터 구독 상태 조회에 실패했어요')
    }
  }, [isError])

  return { isLoading, data, isError }
}

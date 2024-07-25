'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import userArticleQueryKeys from './userArticleQueryKeys'
import { getUserNewsletters } from '../api'

export default function useUserNewslettersQuery() {
  const { userEmail } = useAuth()

  return useSuspenseQuery({
    queryKey: userArticleQueryKeys.userNewsletters({ userEmail }),
    queryFn: () => getUserNewsletters({ userEmail }),
  })
}

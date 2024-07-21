'use client'

import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import { getUserCategories } from '../api'
import userArticleQueryKeys from './userArticleQueryKeys'

export function useUserCategoriesQuery({ enabled }: { enabled?: boolean }) {
  const { userEmail } = useAuth()

  return useQuery({
    queryKey: userArticleQueryKeys.userCategories({ userEmail }),
    queryFn: () => getUserCategories({ userEmail }),
    enabled,
  })
}

export function useUserCategoriesSuspenseQuery() {
  const { userEmail } = useAuth()

  return useSuspenseQuery({
    queryKey: userArticleQueryKeys.userCategories({ userEmail }),
    queryFn: () => getUserCategories({ userEmail }),
  })
}

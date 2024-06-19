'use client'

import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import { getUserCategories } from '../api'
import userArticleQueryKeys from './userArticleQueryKeys'

export default function useUserCategoriesQuery() {
  const { userEmail } = useAuth()

  return useQuery({
    queryKey: userArticleQueryKeys.userCategories({ userEmail }),
    queryFn: () => getUserCategories({ userEmail }),
  })
}

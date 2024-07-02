'use client'

import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import userArticleQueryKeys from './userArticleQueryKeys'
import { UserArticleParams } from './type'
import { getUserArticle } from '../api'

export default function useUserArticleQuery({
  articleId,
}: Omit<UserArticleParams, 'userEmail'>) {
  const { userEmail } = useAuth()

  return useQuery({
    queryKey: userArticleQueryKeys.userArticle({ userEmail, articleId }),
    queryFn: () => getUserArticle({ userEmail, articleId }),
  })
}

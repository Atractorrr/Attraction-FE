import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import userArticleQueryKeys from './userArticleQueryKeys'
import { UserArticleParams } from './type'
import { fetchUserArticleBookmark } from '../api'

export default function useCheckUserArticleBookmarkQuery({
  articleId,
}: Omit<UserArticleParams, 'userEmail'>) {
  const { userEmail } = useAuth()

  return useQuery({
    queryKey: userArticleQueryKeys.checkUserArticleBookmark({
      userEmail,
      articleId,
    }),
    queryFn: () =>
      fetchUserArticleBookmark({ userEmail, articleId, type: 'check' }),
  })
}

'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import type { Article, UserArticleParams, UserArticlesData } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'
import { trackingUserArticleScroll } from '../api'

export default function useTrackingUserArticleScroll({
  articleId,
}: Omit<UserArticleParams, 'userEmail'>) {
  const { userEmail } = useAuth()
  const queryClient = useQueryClient()

  const articleListKey = userArticleQueryKeys.userArticleList({
    userEmail,
    pageType: 'default',
  })
  const articleKey = userArticleQueryKeys.userArticle({ userEmail, articleId })

  return useMutation({
    mutationKey: userArticleQueryKeys.trackingUserArticleScroll({
      userEmail,
      articleId,
    }),
    mutationFn: (readPercentage: number) =>
      trackingUserArticleScroll({ userEmail, articleId, readPercentage }),
    onMutate: (readPercentage) => {
      try {
        const prevArticleList = queryClient.getQueriesData({
          queryKey: articleListKey,
        })
        const prevArticle = queryClient.getQueryData(articleKey)

        queryClient.setQueriesData<{ pages: { data: UserArticlesData }[] }>(
          {
            queryKey: articleListKey,
          },
          (oldData) => {
            if (oldData !== undefined) {
              return {
                ...oldData,
                pages: oldData.pages.map((page) => ({
                  ...page,
                  data: {
                    ...page.data,
                    content: page.data.content.map((article) => {
                      if (article.id === articleId) {
                        return { ...article, readPercentage }
                      }
                      return article
                    }),
                  },
                })),
              }
            }
            return undefined
          },
        )
        queryClient.setQueryData<Article>(articleKey, (oldData) => {
          if (oldData) {
            return { ...oldData, readPercentage }
          }
          return oldData
        })
        return { readPercentage, prevArticleList, prevArticle, status: true }
      } catch {
        return { readPercentage, status: false }
      }
    },
    onSuccess: (_, __, context) => {
      if (!context.status) {
        queryClient.invalidateQueries({ queryKey: articleListKey })
      }
    },
    onError: (_, __, context) => {
      queryClient.setQueriesData(
        {
          queryKey: articleListKey,
        },
        context?.prevArticleList,
      )
      queryClient.setQueryData(articleKey, context?.prevArticle)
    },
  })
}

import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { getUserArticleList } from '../api'
import { Article, UserArticleListOption } from './type'
import userArticleQueryKeys from './userArticleQueryKeys'

export default function useInfiniteUserArticlesQuery({
  ...option
}: Omit<UserArticleListOption, 'page'>) {
  const queryClient = useQueryClient()

  return useInfiniteQuery({
    queryKey: userArticleQueryKeys.userArticles(option),
    queryFn: ({ pageParam }) =>
      getUserArticleList({ ...option, page: pageParam }),
    initialPageParam: 0,
    select: ({ pages, pageParams }) => ({
      pages: pages.reduce((flatArticles: Article[], { data }) => {
        data.content.forEach((article) => {
          const key = userArticleQueryKeys.userArticle({
            userId: option.userId,
            articleId: article.id,
          })
          queryClient.setQueryData(key, article)
        })
        return flatArticles.concat(data.content)
      }, []),
      pageParams,
    }),
    getNextPageParam: (lastPage) =>
      lastPage.data.last ? undefined : lastPage.data.number + 1,
  })
}

import { UserArticleParams, UserArticleListOption } from './type'

const articleQueryKeys = {
  all: ['article'] as const,
  userArticle: (params: UserArticleParams) => [...articleQueryKeys.all, params],
  userArticles: ({
    userId,
    category,
    page,
    ...options
  }: UserArticleListOption) => [
    ...articleQueryKeys.all,
    'articles',
    userId,
    category,
    options,
  ],
  userCategories: (params: { userId: string | number }) => [
    ...articleQueryKeys.all,
    'categories',
    params,
  ],
}

export default articleQueryKeys

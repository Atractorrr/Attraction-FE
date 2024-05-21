import { UserArticlesOption } from '../types'

const articleQueryKeys = {
  all: ['article'] as const,
  article: (params: { articleId: string | number }) => [
    ...articleQueryKeys.all,
    params,
  ],
  userArticles: ({
    userId,
    category,
    page,
    ...options
  }: UserArticlesOption) => [
    ...articleQueryKeys.all,
    userId,
    category,
    options,
  ],
  userCategories: (params: { userId: string | number }) => [
    ...articleQueryKeys.all,
    params,
  ],
}

export default articleQueryKeys

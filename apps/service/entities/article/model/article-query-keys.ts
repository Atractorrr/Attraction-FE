import { UserArticlesOption } from '../types'

const articleQueryKeys = {
  all: ['article'] as const,
  article: (params: { articleId: string | number }) => [
    ...articleQueryKeys.all,
    params,
  ],
  userArticles: ({
    memberId,
    category,
    page,
    ...options
  }: UserArticlesOption) => [
    ...articleQueryKeys.all,
    memberId,
    category,
    options,
  ],
  userCategories: (params: { memberId: string | number }) => [
    ...articleQueryKeys.all,
    params,
  ],
}

export default articleQueryKeys

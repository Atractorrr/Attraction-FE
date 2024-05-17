import { UserArticlesOption } from '../types'

const articleQueryKeys = {
  all: ['article'] as const,
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
}

export default articleQueryKeys

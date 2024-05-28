import { UserArticleParams, UserArticleListOption } from './type'

const userArticleQueryKeys = {
  all: ['user-article'] as const,
  userArticle: (params: UserArticleParams) => [
    ...userArticleQueryKeys.all,
    params,
  ],
  userArticles: ({
    userId,
    category,
    page,
    ...options
  }: UserArticleListOption) => [
    ...userArticleQueryKeys.all,
    'articles',
    userId,
    category,
    options,
  ],
  userCategories: (params: { userId: string | number }) => [
    ...userArticleQueryKeys.all,
    'categories',
    params,
  ],
}

export default userArticleQueryKeys

import { UserArticleParams, UserArticleListOption } from './type'

const userArticleQueryKeys = {
  all: ['user-article'] as const,
  userArticle: (params: UserArticleParams) => [
    ...userArticleQueryKeys.all,
    params,
  ],
  allUserArticles: ({ userId }: Pick<UserArticleListOption, 'userId'>) => [
    ...userArticleQueryKeys.all,
    'list',
    { userId },
  ],
  userArticles: ({
    userId,
    category,
    page,
    ...options
  }: UserArticleListOption) => [
    ...userArticleQueryKeys.allUserArticles({ userId }),
    'articles',
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

import { UserArticleParams, UserArticleListOption, UserEmail } from './type'

const userArticleQueryKeys = {
  all: ['user-article'] as const,
  userArticle: (params: UserArticleParams) => [
    ...userArticleQueryKeys.all,
    params,
  ],
  userArticles: ({
    userEmail,
    category,
    pageType,
    page,
    ...options
  }: UserArticleListOption) => [
    ...userArticleQueryKeys.all,
    'articles',
    { userEmail },
    { pageType },
    category,
    options,
  ],
  userCategories: (params: { userEmail: UserEmail }) => [
    ...userArticleQueryKeys.all,
    'categories',
    params,
  ],
}

export default userArticleQueryKeys

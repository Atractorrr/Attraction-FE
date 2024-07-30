import { UserArticleParams, UserArticleListOption, UserEmail } from './type'

const userArticleQueryKeys = {
  all: ['user-article'] as const,
  userArticle: (params: UserArticleParams) => [
    ...userArticleQueryKeys.all,
    'detail',
    params,
  ],
  userArticleList: ({
    userEmail,
    pageType,
    ...options
  }: Omit<UserArticleListOption, 'page'>) => [
    ...userArticleQueryKeys.all,
    'articles',
    { userEmail },
    { pageType },
    options,
  ],
  trackingUserArticleScroll: (params: UserArticleParams) => [
    ...userArticleQueryKeys.all,
    'tracking-article',
    params,
  ],
  checkUserArticleBookmark: (params: UserArticleParams) => [
    ...userArticleQueryKeys.all,
    'check-bookmark',
    params,
  ],
  sendUserArticleBookmarkState: (
    params: UserArticleParams & { isBookmark: boolean },
  ) => [...userArticleQueryKeys.all, params],
  userCategories: (params: { userEmail: UserEmail }) => [
    ...userArticleQueryKeys.all,
    'categories',
    params,
  ],
  userNewsletters: (params: { userEmail: UserEmail }) => [
    ...userArticleQueryKeys.all,
    'newsletters',
    params,
  ],
}

export default userArticleQueryKeys

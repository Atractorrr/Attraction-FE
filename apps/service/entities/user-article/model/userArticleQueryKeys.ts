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
}

export default userArticleQueryKeys

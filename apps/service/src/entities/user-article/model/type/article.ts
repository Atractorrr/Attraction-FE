import type { NewsletterCategory, Pagination } from '@/shared/type'
import type { Newsletter } from './newsletter'
import type { SortType } from './sortType'

export type UserEmail = string | undefined
export interface Article {
  id: number
  thumbnailUrl: string
  contentUrl: string
  title: string
  category: NewsletterCategory
  receivedAt: string
  readPercentage: number
  readingTime: number
  newsletter: Pick<Newsletter, 'id' | 'name' | 'category' | 'thumbnailUrl'>
}

export interface UserArticlesData extends Pagination {
  content: Article[]
}

export type UserArticlesResponse = {
  data: UserArticlesData
  message: string
  status: string
}

export type UserArticleParams = {
  userEmail: UserEmail
  articleId: number
}

export type ArticlePageType = 'default' | 'bookmark'

export type UserArticleListOption = {
  pageType: ArticlePageType
  userEmail: UserEmail
  page?: number
  size?: number
  sort?: SortType
  isHideRead?: boolean
  category?: NewsletterCategory
  q?: string
  newsletterId?: number
}

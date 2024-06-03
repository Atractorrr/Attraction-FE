import { NewsletterCategory, Pagination } from '@/shared/type'
import { Newsletter } from './newsletter'
import { SortType } from './sortType'

export interface Article {
  id: number
  thumbnailUrl: string
  contentUrl: string
  title: string
  category: NewsletterCategory
  receivedAt: string
  readPercentage: number
  readingTime: number
  // isRead: boolean
  newsletter: Pick<Newsletter, 'id' | 'name' | 'category' | 'thumbnailUrl'>
}

export type UserArticlesResponse = {
  data: { content: Article[] } & Pagination
  message: string
  status: string
}

export type UserArticleParams = {
  userId: string | number
  articleId: string | number
}

export type UserArticleListOption = {
  userId: string | number
  page?: number
  size?: number
  sort?: SortType
  isRead?: boolean
  category?: NewsletterCategory[]
  q?: string
}

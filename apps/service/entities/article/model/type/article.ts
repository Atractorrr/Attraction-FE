import { NewsletterCategory, Pagination } from '@/shared/type'
import { Newsletter } from './newsletter'
import { SortType } from './sortType'

export interface Article {
  id: number
  thumbnailUrl: string
  title: string
  category: NewsletterCategory
  receivedAt: string
  readPercentage: number
  readingTime: number
  // isRead: boolean
  newsletter: Pick<Newsletter, 'id' | 'name' | 'category' | 'thumbnail'>
}

export type UserArticlesResponse = {
  data: { content: Article[] }
} & Pagination

export type UserArticlesOption = {
  userId: string | number
  page?: number
  size?: number
  sort?: SortType
  isRead?: boolean
  category?: NewsletterCategory[]
  q?: string
}

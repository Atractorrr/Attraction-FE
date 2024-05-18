import type { Newsletter } from './newsletter'
import type { NewsletterCategory } from './newsletter-category'
import * as Shared from '@/shared'

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
  articles: Article[]
} & Shared.Types.Pagination

export type UserArticlesOption = {
  memberId: string | number
  page?: number
  size?: number
  sort?: string
  category?: string[]
  q?: string
}

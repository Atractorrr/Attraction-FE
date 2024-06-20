import { Pagination } from '@/shared/type'

export interface DiscoverArticle {
  id: number
  title: string
  thumbnailUrl: string
  contentUrl: string
  readingTime: number
  receivedAt: string
  contentSummary: string
  newsletterName: string
}

export interface DiscoverArticleResponse {
  status: string
  message: string
  data: { content: DiscoverArticle[] } & Pagination
}

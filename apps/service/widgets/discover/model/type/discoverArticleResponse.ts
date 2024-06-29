import { NewsletterCategoryName, Pagination } from '@/shared/type'

export interface DiscoverArticle {
  id: number
  title: string
  thumbnailUrl: string
  readingTime: number
  receivedAt: string
  contentSummary: string
  newsletterName: string
  newsletter: {
    id: number
    name: string
    category: NewsletterCategoryName
    thumbnailUrl: string
  }
}

export interface DiscoverArticleResponse {
  status: string
  message: string
  data: { content: DiscoverArticle[] } & Pagination
}

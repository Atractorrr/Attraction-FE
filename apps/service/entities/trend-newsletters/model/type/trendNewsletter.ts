import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'

export interface TrendNewsletter {
  id: number
  newsletterThumbnailUrl: string
  name: string
  description: string
}

export interface TrendNewsletterResponse {
  priorityCategory: NewsletterCategory[]
  content: {
    category: NewsletterCategoryName
    isUser: boolean
    newsletters: TrendNewsletter[]
  }
}

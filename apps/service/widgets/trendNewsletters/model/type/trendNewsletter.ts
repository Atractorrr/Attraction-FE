import { NewsletterCategoryName } from '@/features/newsletterCategories/model/types'

export interface TrendNewsletter {
  id: number
  newsletterThumbnailUrl: string
  name: string
  description: string
}

export interface TrendNewsletterResponse {
  priorityCategory: NewsletterCategoryName[]
  content: {
    category: NewsletterCategoryName
    isUser: boolean
    newsletters: TrendNewsletter[]
  }
}
import { NewsletterCategories } from './newsletter-category'

export interface Article {
  id: number
  thumbnailUrl: string
  title: string
  category: NewsletterCategories
  date: string
  readPercentage: number
  readingTime: number
  isRead: boolean
}

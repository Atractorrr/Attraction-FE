import { MainCategory } from './mainCategories'

export interface TrendNewsletter {
  id: number
  newsletterThumbnailUrl: string
  name: string
  description: string
}

export interface TrendNewsletterParams {
  category: MainCategory
  size: number
}

export interface TrendNewsletterResponse {
  mainPageNewsletters: TrendNewsletter[]
}

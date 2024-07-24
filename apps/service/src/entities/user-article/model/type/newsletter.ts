import { NewsletterCategory } from '@/shared/type'

export interface Newsletter {
  id: number
  name: string
  description: string
  uploadDays: string
  category: NewsletterCategory
  mainLink: string
  subscribeLink: string
  thumbnailUrl: string
}

import type { NewsletterCategory } from './newsletter-category'
import type { UploadDays } from './upload-days'

export interface Newsletter {
  id: string | number
  name: string
  description: string
  uploadDays: UploadDays[]
  category: NewsletterCategory
  mainLink: string
  subscribeLink: string
  thumbnail: string
}

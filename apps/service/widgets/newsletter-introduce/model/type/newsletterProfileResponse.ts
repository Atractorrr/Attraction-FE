import { NewsletterCategory } from '@/shared/type'

export interface NewsletterProfileResponse {
  status: string
  message: string
  data: NewsletterProfileData
}

export interface NewsletterProfileData {
  name: string
  description: string
  uploadDays: string
  category: NewsletterCategory
  mainLink: string
  subscribeLink: string
  thumbnailUrl: string
}

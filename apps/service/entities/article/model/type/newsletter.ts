import { NewsletterCategory, UploadDay } from '@/shared/type'

export interface Newsletter {
  id: string | number
  name: string
  description: string
  uploadDays: UploadDay[]
  category: NewsletterCategory
  mainLink: string
  subscribeLink: string
  thumbnail: string
}

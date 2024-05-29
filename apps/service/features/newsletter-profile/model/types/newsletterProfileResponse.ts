import { NewsletterCategory, UploadDay } from '@/shared/type'

export default interface NewsletterProfileResponse {
  name: string
  description: string
  uploadDays: UploadDay[]
  category: NewsletterCategory
  mainLink: string
  subscribeLink: string
  thumbnail: string
}

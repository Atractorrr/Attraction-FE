import { NEWSLETTER_CATEGORY, UPLOAD_DAYS } from '../constants'

export type UploadDays = keyof typeof UPLOAD_DAYS

export type ValueOfUploadDays = (typeof UPLOAD_DAYS)[UploadDays]

export type NewsletterCategory = keyof typeof NEWSLETTER_CATEGORY

export type ValueOfNewsletterCategory =
  (typeof NEWSLETTER_CATEGORY)[NewsletterCategory]

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

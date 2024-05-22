import { NEWSLETTER_CATEGORY, UPLOAD_DAYS } from '../constant'

export type UploadDay = keyof typeof UPLOAD_DAYS

export type UploadDayName = (typeof UPLOAD_DAYS)[UploadDay]

export type NewsletterCategory = keyof typeof NEWSLETTER_CATEGORY

export type NewsletterCategoryName =
  (typeof NEWSLETTER_CATEGORY)[NewsletterCategory]

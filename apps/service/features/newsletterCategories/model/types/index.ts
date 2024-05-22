import { NEWSLETTER_CATEGORY } from '@/constants/category'

export type NewsletterCategory = keyof typeof NEWSLETTER_CATEGORY

export type NewsletterCategoryName =
  (typeof NEWSLETTER_CATEGORY)[keyof typeof NEWSLETTER_CATEGORY]

import { NEWSLETTER_CATEGORY } from '../constant'

export type NewsletterCategory = keyof typeof NEWSLETTER_CATEGORY

export type NewsletterCategoryName =
  (typeof NEWSLETTER_CATEGORY)[NewsletterCategory]

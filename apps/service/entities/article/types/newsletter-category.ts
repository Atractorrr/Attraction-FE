import { NEWSLETTER_CATEGORY } from '../constants'

export type NewsletterCategories = keyof typeof NEWSLETTER_CATEGORY

export type ValueOfNewsletterCategories =
  (typeof NEWSLETTER_CATEGORY)[NewsletterCategories]

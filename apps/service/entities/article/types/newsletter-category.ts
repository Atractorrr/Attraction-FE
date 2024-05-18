import { NEWSLETTER_CATEGORY } from '../constants'

export type NewsletterCategory = keyof typeof NEWSLETTER_CATEGORY

export type ValueOfNewsletterCategory =
  (typeof NEWSLETTER_CATEGORY)[NewsletterCategory]

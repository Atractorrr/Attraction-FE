import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'

export const allCategories: {
  [key in NewsletterCategory | 'RECOMMEND']: NewsletterCategoryName | '추천'
} = {
  RECOMMEND: '추천',
  ...NEWSLETTER_CATEGORY,
}

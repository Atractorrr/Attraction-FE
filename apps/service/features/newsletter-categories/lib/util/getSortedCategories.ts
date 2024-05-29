import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'

export default function getSortedCategories(
  preferCategories: NewsletterCategory[],
) {
  const categorySet = new Set<NewsletterCategoryName>()

  categorySet.add(NEWSLETTER_CATEGORY.RECOMMEND)

  if (preferCategories.length) {
    preferCategories.forEach((category) =>
      categorySet.add(NEWSLETTER_CATEGORY[category]),
    )
  }

  Object.values(NEWSLETTER_CATEGORY).forEach((category) =>
    categorySet.add(category),
  )

  return Array.from(categorySet)
}

import { CATEGORIES_WITH_SVG } from '../../constant'
import { NewsletterCategoryName } from '@/shared/type'

const getCategorySVG = (category: NewsletterCategoryName) => {
  return CATEGORIES_WITH_SVG.get(category)
}

export default getCategorySVG

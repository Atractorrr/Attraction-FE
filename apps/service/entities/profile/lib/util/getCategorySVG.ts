import { NewsletterCategoryName } from '@/shared/type'
import { CATEGORIES_WITH_SVG } from '../../constant'

const getCategorySVG = (category: NewsletterCategoryName) => {
  return CATEGORIES_WITH_SVG.get(category)
}

export default getCategorySVG

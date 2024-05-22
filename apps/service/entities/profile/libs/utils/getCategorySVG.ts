import {
  ComputerEmoji,
  BriefcaseEmoji,
  PaletteBrushEmoji,
  FlameEmoji,
} from '@attraction/icons'
import { CATEGORY } from './constant'
import { CategoriesKeyType } from '../../model/types'

const categoriesWithSVG = new Map([
  [CATEGORY.tech, ComputerEmoji],
  [CATEGORY.businessFinancialTechnology, BriefcaseEmoji],
  [CATEGORY.design, PaletteBrushEmoji],
  [CATEGORY.trendLife, FlameEmoji],
])

export const getCategorySVG = (category: CategoriesKeyType) => {
  return categoriesWithSVG.get(category)
}

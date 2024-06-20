import { allCategories } from '../../constant'

export type MainCategory = keyof typeof allCategories
export type MainCategoryName = (typeof allCategories)[MainCategory]

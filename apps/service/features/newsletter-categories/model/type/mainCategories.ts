import { allCategories } from '../../constant/category'

export type MainCategory = keyof typeof allCategories
export type MainCategoryName = (typeof allCategories)[MainCategory]

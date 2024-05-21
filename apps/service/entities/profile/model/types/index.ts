import { CATEGORY } from '../../libs/utils/constant'

type CategoriesKeyType = (typeof CATEGORY)[keyof typeof CATEGORY]

interface UserProfileType {
  id: number
  name: string
  profileImg: string
  backgroundImg: string
  email: string
  categories: CategoriesKeyType[]
}

export type { UserProfileType, CategoriesKeyType }

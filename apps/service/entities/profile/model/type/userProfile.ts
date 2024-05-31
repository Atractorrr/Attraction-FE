import { NEWSLETTER_CATEGORY } from '@/shared/constant'

export interface UserProfile {
  id: number
  name: string
  profileImg: string
  backgroundImg: string
  categories: (keyof typeof NEWSLETTER_CATEGORY)[]
  userExpiration: number
  occupation: string
  email: string
}

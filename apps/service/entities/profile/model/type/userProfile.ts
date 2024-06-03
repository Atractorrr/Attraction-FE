import { NEWSLETTER_CATEGORY } from '@/shared/constant'

export interface UserProfile {
  id: number
  nickname: string
  profileImg: string
  backgroundImg: string
  interest: (keyof typeof NEWSLETTER_CATEGORY)[]
  userExpiration: number
  occupation: string
  email: string
}

import { NewsletterCategory } from '@/shared/type'

export interface UserProfile {
  id: number
  name: string
  profileImg: string
  backgroundImg: string
  email: string
  interest: NewsletterCategory[]
}

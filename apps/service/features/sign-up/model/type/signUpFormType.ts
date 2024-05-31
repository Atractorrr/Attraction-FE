import { NEWSLETTER_CATEGORY } from '@/shared/constant'

export interface SignUpFormType {
  email: string
  nickname: string
  isNickNameChecked: boolean
  interest: (keyof typeof NEWSLETTER_CATEGORY)[]
  birthDate: string
  userExpiration: number
  occupation: string
  selectPolicyAll: boolean
  policies: {
    type: string
    value: boolean
  }[]
}

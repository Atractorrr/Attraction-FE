import { NEWSLETTER_CATEGORY } from '@/shared/constant'

export interface SignUpFormType {
  email: string
  nickname: string
  selectPolicyAll: boolean
  isNickNameChecked: boolean
  interest: (keyof typeof NEWSLETTER_CATEGORY)[]
  birthDate: string
  userExpiration: number
  adPolices: boolean
  occupation: string
  selectMandatoryPolicyAll: boolean
  policies: {
    type: string
    value: boolean
    text: string
  }[]
}

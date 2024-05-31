import { NEWSLETTER_CATEGORY } from '@/shared/constant'

export interface SettingForm {
  nickname: string
  interest: (keyof typeof NEWSLETTER_CATEGORY)[]
  isNickNameChecked: boolean
  userExpiration: number
  occupation: string
}

import { NEWSLETTER_CATEGORY } from '@/shared/constant'

type CheckFormDataWithNull = {
  [K in keyof Omit<SettingForm, 'isNicknameChecked'>]: SettingForm[K] | null
}

type CheckFormDataWithoutNullType = {
  [K in keyof Omit<SettingForm, 'isNicknameChecked'>]?: SettingForm[K]
}

interface SettingForm {
  nickname: string
  interest: (keyof typeof NEWSLETTER_CATEGORY)[]
  isNicknameChecked: boolean
  userExpiration: number
  occupation: string
}

export type { CheckFormDataWithoutNullType, CheckFormDataWithNull, SettingForm }

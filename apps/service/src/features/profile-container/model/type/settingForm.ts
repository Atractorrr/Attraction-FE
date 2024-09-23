/* eslint-disable */

import type { NewsletterCategory } from '@/shared/type'

export interface SettingForm {
  nickname: string
  interest: NewsletterCategory[]
  isNicknameChecked: boolean
  userExpiration: number
  occupation: string
}

export type CheckFormDataWithNull = {
  [K in Exclude<keyof SettingForm, 'isNicknameChecked'>]: SettingForm[K] | null
}

export type CheckFormDataWithoutNullType = Partial<
  Omit<SettingForm, 'isNicknameChecked'>
>

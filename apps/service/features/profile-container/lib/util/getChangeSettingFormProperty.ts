import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { SettingForm } from '../../model'

interface CheckFormDataType {
  nickname: string | null
  interest: (keyof typeof NEWSLETTER_CATEGORY)[] | null
  occupation: string | null
  userExpiration: number | null
}

const checkIsSameFormPrimitiveValue = <T>(originVal: T, changeVal: T) => {
  if (originVal === changeVal) {
    return null
  }

  return changeVal
}

const checkIsSameFormArray = <T>(originVal: T[], changeVal: T[]) => {
  if (originVal.every((category) => changeVal.includes(category))) {
    return null
  }

  return changeVal
}

const getWithoutNullFormData = (formData: CheckFormDataType) => {
  const formDataKeysWithoutNull = Object.keys(formData).filter(
    (key) => formData[key as keyof CheckFormDataType] !== null,
  ) as (keyof CheckFormDataType)[]

  if (formDataKeysWithoutNull.length === 0) {
    return null
  }

  const formDataWithoutNull = formDataKeysWithoutNull.reduce((acc, val) => {
    return { ...acc, [val]: formData[val] }
  }, {})

  return formDataWithoutNull
}

const getChangeSettingFormProperty = (
  originSettingFormData: Omit<SettingForm, 'isNicknameChecked'>,
  changeSettingFormData: Omit<SettingForm, 'isNicknameChecked'>,
) => {
  const nickname = checkIsSameFormPrimitiveValue(
    originSettingFormData.nickname,
    changeSettingFormData.nickname,
  )

  const interest = checkIsSameFormArray(
    originSettingFormData.interest,
    changeSettingFormData.interest,
  )

  const occupation = checkIsSameFormPrimitiveValue(
    originSettingFormData.occupation,
    changeSettingFormData.occupation,
  )

  const userExpiration = checkIsSameFormPrimitiveValue(
    originSettingFormData.userExpiration,
    changeSettingFormData.userExpiration,
  )

  return getWithoutNullFormData({
    nickname,
    interest,
    occupation,
    userExpiration,
  })
}

export default getChangeSettingFormProperty

export interface SignUpFormType {
  email: string
  nickName: string
  isNickNameChecked: boolean
  interest: { value: string }[]
  birthDate: string
  userExpiration: number
  occupation: string
  selectPolicyAll: boolean
  policies: {
    type: string
    value: boolean
  }[]
}

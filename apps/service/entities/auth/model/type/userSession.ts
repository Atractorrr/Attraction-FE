export interface UserSessionData {
  email: string
  nickname: string
  profileImg: string
  hasExtraDetails: boolean
  shouldReissueToken: boolean
}

export interface UserSessionResponse {
  status: string
  message: string
  data: UserSessionData
}

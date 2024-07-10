import { UserRole } from './role'

export interface UserSessionData {
  email: string
  role: UserRole
  nickname: string
  profileImg: string
  hasExtraDetails: boolean
  shouldReissueToken: boolean
}

export interface UserSessionResponse {
  status: string
  errorCode?: number
  message: string
  data: UserSessionData
}

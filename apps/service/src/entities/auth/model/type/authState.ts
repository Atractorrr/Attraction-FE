import { UserRole } from './role'

export interface DefaultAuthState {
  isLogin: boolean
  userRole?: UserRole
  userEmail?: string
  userNickname?: string
  userProfileImgURL?: string
  hasExtraDetails?: boolean
  shouldReissueToken?: boolean
}

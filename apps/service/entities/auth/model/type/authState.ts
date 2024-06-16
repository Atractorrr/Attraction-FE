export interface DefaultAuthState {
  accessToken?: string
  refreshToken?: string
  userEmail?: string
  isNotRegistered: boolean
  isLogin: boolean
  shouldReissueToken: boolean
}

export interface DefaultAuthState {
  isLogin: boolean
  userEmail?: string
  userNickname?: string
  userProfileImgURL?: string
  hasExtraDetails?: boolean
  shouldReissueToken?: boolean
}

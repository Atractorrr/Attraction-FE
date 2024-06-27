'use server'

import { cookies } from 'next/headers'
import { DefaultAuthState } from './type'
import { SESSION_ID } from '../constant'
import { getUserSession } from '../api'

export default async function useSession(): Promise<DefaultAuthState> {
  const cookieStore = cookies()
  const sessionId = cookieStore.get(SESSION_ID)?.value
  const isLogin = !!sessionId

  if (!isLogin) {
    return { isLogin }
  }

  try {
    const { data } = await getUserSession()
    return {
      isLogin,
      userEmail: data.email,
      userNickname: data.nickname,
      userProfileImgURL: data.profileImg,
      hasExtraDetails: data.hasExtraDetails,
      shouldReissueToken: data.shouldReissueToken,
    }
  } catch {
    await fetch(`${process.env.NEXT_PUBLIC_FE_URL}/api/auth/sign-out`)
    return { isLogin: false }
  }
}

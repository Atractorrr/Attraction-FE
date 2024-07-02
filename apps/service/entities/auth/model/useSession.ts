'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { DefaultAuthState } from './type'
import { ACCESS_PARAMS_KEY, SESSION_ID } from '../constant'
import { getUserSession } from '../api'

export default async function useSession(): Promise<DefaultAuthState> {
  const cookieStore = cookies()
  const sessionId = cookieStore.get(SESSION_ID)?.value
  const isLogin = !!sessionId

  if (!isLogin) {
    return { isLogin: false }
  }

  try {
    const { data } = await getUserSession()
    return {
      isLogin: true,
      userEmail: data.email,
      userRole: data.role,
      userNickname: data.nickname,
      userProfileImgURL: data.profileImg,
      hasExtraDetails: data.hasExtraDetails,
      shouldReissueToken: data.shouldReissueToken,
    }
  } catch {
    return redirect(
      `${process.env.NEXT_PUBLIC_FE_URL}/api/auth/sign-out?${ACCESS_PARAMS_KEY}=session-failed`,
    )
  }
}

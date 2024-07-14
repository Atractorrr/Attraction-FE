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

  const logoutURL = `${process.env.NEXT_PUBLIC_FE_URL}/api/auth/sign-out`

  try {
    const { data, isError, isExpired } = await getUserSession()

    if (isExpired) {
      return redirect(`${logoutURL}?${ACCESS_PARAMS_KEY}=session-failed`)
    }

    if (isError) {
      throw new Error('로그인에 실패했어요')
    }

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
    return redirect(`${logoutURL}?${ACCESS_PARAMS_KEY}=login-failed`)
  }
}

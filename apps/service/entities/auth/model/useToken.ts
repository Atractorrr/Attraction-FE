'use server'

import { cookies } from 'next/headers'
import { DefaultAuthState } from './type'

export default async function useToken(): Promise<DefaultAuthState> {
  const cookieStore = cookies()
  const isNotRegistered = cookieStore.has('notRegistered')
  const accessToken = cookieStore.get('accessToken')?.value
  const refreshToken = cookieStore.get('refreshToken')?.value
  const isLogin = !!refreshToken
  const shouldReissueToken = !accessToken && isLogin
  const userEmail = cookieStore.get('email')?.value

  if (shouldReissueToken) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FE_URL}/api/auth/re-issue`,
    )
    const parsedResponse: { accessToken: string } = await response.json()

    return {
      accessToken: parsedResponse.accessToken,
      refreshToken,
      isNotRegistered,
      isLogin,
      shouldReissueToken: false,
      userEmail,
    }
  }
  if (isLogin) {
    // TODO: userEmail 받아오는 로직 추가
  }

  return {
    accessToken,
    refreshToken,
    isNotRegistered,
    isLogin,
    shouldReissueToken,
    userEmail,
  }
}

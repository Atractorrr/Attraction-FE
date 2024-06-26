'use client'

import { redirect } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { AuthContext, DefaultAuthState } from '../../model'
import { useRestrictAccessMessage } from '../hook'
import { ACCESS_PARAMS_KEY } from '../../constant'

export default function AuthProvider({
  children,
  ...authProps
}: PropsWithChildren<DefaultAuthState>) {
  useEffect(() => {
    if (authProps.isLogin && !authProps.hasExtraDetails) {
      redirect(`/sign-up?${ACCESS_PARAMS_KEY}=register`)
    }
  }, [authProps.isLogin, authProps.hasExtraDetails])

  useRestrictAccessMessage()

  return (
    <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
  )
}

'use client'

import { redirect, usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { AuthContext, DefaultAuthState } from '../../model'
import { useRestrictAccessMessage } from '../hook'
import { ACCESS_PARAMS_KEY } from '../../constant'

export default function AuthProvider({
  children,
  ...authProps
}: PropsWithChildren<DefaultAuthState>) {
  const pathname = usePathname()

  useEffect(() => {
    if (
      authProps.isLogin &&
      !authProps.hasExtraDetails &&
      !pathname.startsWith('/sign-up')
    ) {
      redirect(`/sign-up?${ACCESS_PARAMS_KEY}=register`)
    }
  }, [authProps.isLogin, authProps.hasExtraDetails, pathname])

  useRestrictAccessMessage()

  return (
    <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
  )
}

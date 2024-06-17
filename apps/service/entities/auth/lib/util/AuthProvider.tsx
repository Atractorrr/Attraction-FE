'use client'

import { PropsWithChildren } from 'react'
import { AuthContext, DefaultAuthState } from '../../model'

export default function AuthProvider({
  children,
  ...props
}: PropsWithChildren<DefaultAuthState>) {
  // useEffect(() => {}, []) // TODO: 사일런트 리프레시 기능 구현

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

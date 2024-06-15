'use client'

import { ReactNode } from 'react'
import { AuthContext, DefaultAuthState } from '../../model'

interface AuthProviderProps extends DefaultAuthState {
  children: Readonly<ReactNode>
}

export default function AuthProvider({
  children,
  ...props
}: AuthProviderProps) {
  // useEffect(() => {}, []) // TODO: 사일런트 리프레시 기능 구현

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

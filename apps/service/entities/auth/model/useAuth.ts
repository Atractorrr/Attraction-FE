'use client'

import { createContext, useContext } from 'react'
import { DefaultAuthState } from './type'

const authState: DefaultAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  userEmail: undefined,
  isNotRegistered: false,
  isLogin: false,
  shouldReissueToken: false,
}

export const AuthContext = createContext<DefaultAuthState>(authState)

export default function useAuth() {
  return useContext(AuthContext)
}

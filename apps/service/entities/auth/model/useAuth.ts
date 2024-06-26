'use client'

import { createContext, useContext } from 'react'
import { DefaultAuthState } from './type'

const authState: DefaultAuthState = {
  isLogin: false,
}

export const AuthContext = createContext<DefaultAuthState>(authState)

export default function useAuth() {
  return useContext(AuthContext)
}

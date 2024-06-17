'use client'

import { ReactNode } from 'react'
import { useAuth } from '../model'
import NeedLogin from './NeedLogin'

interface WithAuthProps {
  children: Readonly<ReactNode>
  title?: string
  sub?: string
}

export default function WithAuth({ children, title, sub }: WithAuthProps) {
  const { isLogin } = useAuth()

  return isLogin ? children : <NeedLogin title={title} sub={sub} />
}

'use client'

import { PropsWithChildren } from 'react'
import { useAuth } from '../model'
import NeedLogin, { NeedLoginProps } from './NeedLogin'

export default function WithAuth({
  children,
  title,
  sub,
}: PropsWithChildren<NeedLoginProps>) {
  const { isLogin } = useAuth()

  return isLogin ? children : <NeedLogin title={title} sub={sub} />
}

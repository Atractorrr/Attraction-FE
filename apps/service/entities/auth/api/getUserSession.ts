'use server'

import { headers } from 'next/headers'
import type { UserSessionData, UserSessionResponse } from '../model'

export default async function getUserSession(): Promise<{
  header: Headers
  data: UserSessionData
}> {
  const header = headers()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/session`,
    {
      headers: header,
      cache: 'no-store',
    },
  )

  if (!res.ok) {
    throw new Error('로그인에 실패했어요')
  }

  const { data }: UserSessionResponse = await res.json()

  return { header: res.headers, data }
}

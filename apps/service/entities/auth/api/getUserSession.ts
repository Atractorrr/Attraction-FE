'use server'

import type { UserSessionData, UserSessionResponse } from '../model'

export default async function getUserSession(): Promise<{
  data: UserSessionData
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/session`,
    {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      cache: 'no-store',
      next: { revalidate: 0 },
    },
  )

  if (!res.ok) {
    throw new Error('로그인에 실패했어요')
  }

  const { data }: UserSessionResponse = await res.json()

  return { data }
}

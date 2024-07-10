'use server'

import { cookies } from 'next/headers'
import { SESSION_ID } from '../constant'
import type { UserSessionData, UserSessionResponse } from '../model'

export default async function getUserSession(): Promise<{
  data: UserSessionData
  response: Response
  isExpired: boolean
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/session`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${SESSION_ID}=${cookies().get(SESSION_ID)?.value}`,
      },
      credentials: 'include',
      cache: 'no-store',
      next: { revalidate: 0 },
    },
  )
  const { data, errorCode }: UserSessionResponse = await res.json()

  return { data, response: res, isExpired: errorCode === 401 }
}

import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { ACCESS_PARAMS_KEY, SESSION_ID } from '@/entities/auth'

export async function GET(request: Request) {
  const requestHeaders = new Headers(headers())
  requestHeaders.set('Content-Type', 'application/json')
  requestHeaders.set('Accept', '*/*')

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {
    method: 'POST',
    headers: requestHeaders,
  })

  const { url } = request
  const queryParams = new URL(url).searchParams
  const accessParams = queryParams.get(ACCESS_PARAMS_KEY)

  cookies().delete(SESSION_ID)

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_FE_URL}/?${ACCESS_PARAMS_KEY}=${accessParams || 'logout-success'}`,
  )
}

import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'

interface GoogleOAuthResponse {
  email: string
  hasExtraDetails?: boolean
  shouldReissueToken?: boolean
  accessToken: string
}

export async function GET(request: Request) {
  const requestHeaders = new Headers(headers())
  requestHeaders.set('Content-Type', 'application/json')
  requestHeaders.set('Accept', '*/*')

  const cookieStore = cookies()
  const { url } = request
  const queryParams = new URL(url).searchParams
  const code = queryParams.get('code')

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
    {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({
        provider: 'google',
        code,
      }),
    },
  )

  // console.log(JSON.stringify(response))

  const data: GoogleOAuthResponse = await response.json()

  cookieStore.set('accessToken', data.accessToken, {
    path: '/',
    maxAge: 60 * 60,
  })
  cookieStore.set('email', data.email, {
    path: '/',
    maxAge: 60 * 60,
  })



  return data.hasExtraDetails
    ? NextResponse.redirect(process.env.NEXT_PUBLIC_FE_URL as string)
    : NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_FE_URL as string}/sign-up`,
      )
}

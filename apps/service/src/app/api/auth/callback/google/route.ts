import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { ACCESS_PARAMS_KEY, SESSION_ID } from '@/entities/auth'

interface GoogleOAuthResponse {
  email: string
  hasExtraDetails: boolean
  shouldReissueToken: boolean
}

export async function GET(request: Request) {
  try {
    const requestHeaders = new Headers(headers())
    requestHeaders.set('Content-Type', 'application/json')
    requestHeaders.set('Accept', '*/*')

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

    if (!response.ok) {
      cookies().delete(SESSION_ID)

      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_FE_URL}/?${ACCESS_PARAMS_KEY}=login-failed`,
      )
    }

    const data: GoogleOAuthResponse = await response.json()

    const responseCookies = response.headers.get('Set-Cookie')

    if (!responseCookies) {
      throw new Error('쿠키가 존재하지 않아요')
    }

    const parsedCookies = responseCookies
      .split(';')
      .map((s) => s.trim().split('='))
      .reduce(
        (obj: { [key: string]: string }, [key, value]) =>
          Object.assign(obj, { [key]: value ?? true }),
        {},
      )

    cookies().set(SESSION_ID, parsedCookies[SESSION_ID] ?? 'null', {
      httpOnly: true,
      path: '/',
    })

    return NextResponse.redirect(
      data.hasExtraDetails
        ? `${process.env.NEXT_PUBLIC_FE_URL}/?${ACCESS_PARAMS_KEY}=login-success`
        : `${process.env.NEXT_PUBLIC_FE_URL}/sign-up`,
    )
  } catch {
    cookies().delete(SESSION_ID)

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_FE_URL}/?${ACCESS_PARAMS_KEY}=login-failed`,
    )
  }
}

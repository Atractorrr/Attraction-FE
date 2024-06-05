import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'

interface GoogleOAuthResponse {
  email: string
  hasExtraDetails: boolean
  shouldReissueToken: boolean
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

  const data: GoogleOAuthResponse = await response.json()

  const responseCookies = response.headers.get('set-cookie')

  if (responseCookies) {
    const parsedCookies = responseCookies
      .split(';')
      .map((s) => s.trim().split('='))
      .reduce(
        (obj: { [key: string]: string }, [key, value]) =>
          Object.assign(obj, { [key]: value ?? true }),
        {},
      )
    cookieStore.set('Refresh-Token', parsedCookies['Refresh-Token'] ?? '', {
      path: '/',
      maxAge: Number(parsedCookies['Max-Age'] ?? 604800),
      httpOnly: true,
    })
  }

  if (data.accessToken.length) {
    cookieStore.set('accessToken', data.accessToken, {
      path: '/',
      maxAge: 60 * 60,
      httpOnly: true,
    })
    cookieStore.set('email', data.email, {
      path: '/',
      maxAge: 60 * 60,
      httpOnly: true,
    })

    if (data.shouldReissueToken) {
      cookieStore.set('shouldReissueToken', 'true', {
        path: '/',
        maxAge: 60 * 60,
        httpOnly: true,
      })
    }

    if (!data.hasExtraDetails) {
      cookieStore.set('notRegistered', 'true', {
        path: '/',
        maxAge: 60 * 60,
        httpOnly: true,
      })
    }
  }

  return data.hasExtraDetails
    ? NextResponse.redirect(
        new URL(`${process.env.NEXT_PUBLIC_FE_URL}`, request.url),
      )
    : NextResponse.redirect(
        new URL(`${process.env.NEXT_PUBLIC_FE_URL}/sign-up`, request.url),
      )
}

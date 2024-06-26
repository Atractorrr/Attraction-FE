import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { SESSION_ID } from '@/entities/auth'

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
      const cookieStore = cookies()
      cookieStore.delete(SESSION_ID)

      return NextResponse.redirect(
        new URL(
          `${process.env.NEXT_PUBLIC_FE_URL}/?failedLogin=true`,
          request.url,
        ),
      )
    }

    const data: GoogleOAuthResponse = await response.json()

    return data.hasExtraDetails
      ? NextResponse.redirect(
          new URL(process.env.NEXT_PUBLIC_FE_URL!, request.url),
          {
            headers: response.headers,
          },
        )
      : NextResponse.redirect(
          new URL(`${process.env.NEXT_PUBLIC_FE_URL}/sign-up`, request.url),
          {
            headers: response.headers,
          },
        )
  } catch (err) {
    const cookieStore = cookies()
    cookieStore.delete(SESSION_ID)

    return NextResponse.redirect(
      new URL(
        `${process.env.NEXT_PUBLIC_FE_URL}/?failedLogin=true`,
        request.url,
      ),
    )
  }
}

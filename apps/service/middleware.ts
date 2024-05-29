import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'

const PRIVATE_PATH = ['/inbox', '/mypage']
const PUBLIC_PATH = ['/sign-in', '/sign-up']

export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const isLoggedIn = cookieStore.has('accessToken')
  const { pathname } = request.nextUrl

  if (PRIVATE_PATH.some((path) => pathname.startsWith(path)) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (PUBLIC_PATH.some((path) => pathname.startsWith(path)) && isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}

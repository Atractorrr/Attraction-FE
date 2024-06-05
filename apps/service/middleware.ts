import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import { PRIVATE_PATH, PUBLIC_PATH } from '@/entities/auth'

export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const isLoggedIn = cookieStore.has('accessToken')
  const isNotRegistered = cookieStore.has('notRegistered')
  const requestHeaders = new Headers(request.headers)
  const { pathname } = request.nextUrl

  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  if (PRIVATE_PATH.some((path) => pathname.startsWith(path)) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (
    PUBLIC_PATH.some((path) => pathname.startsWith(path)) &&
    isLoggedIn &&
    !isNotRegistered
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname.startsWith('/sign-up') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!pathname.startsWith('/sign-up') && isNotRegistered) {
    return NextResponse.redirect(new URL('/sign-up', request.url))
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!server|api|_next/static|_next/image|.*\\.png$).*)'],
}

import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import { PUBLIC_PATH } from '@/entities/auth'

export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const isLoggedIn = cookieStore.has('accessToken')
  const isNotRegistered = cookieStore.has('notRegistered')
  const requestHeaders = new Headers(request.headers)
  const { pathname } = request.nextUrl

  requestHeaders.set('x-pathname', pathname)

  // Helper functions for readability
  const isPathMatch = (paths: string[]) =>
    paths.some((path) => pathname.startsWith(path))
  const redirect = (path: string) =>
    NextResponse.redirect(new URL(path, request.url))

  // Redirect to /
  if (
    (isPathMatch(PUBLIC_PATH) && isLoggedIn && !isNotRegistered) ||
    (pathname.startsWith('/sign-up') && !isLoggedIn)
  ) {
    return redirect('/')
  }

  // Redirect to /sign-up
  if (!pathname.startsWith('/sign-up') && isNotRegistered) {
    return redirect('/sign-up')
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!server|mocks|api|_next/static|_next/image|.*\\.png$).*)'],
}

import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import { PUBLIC_PATH } from '@/entities/auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const cookieStore = cookies()
  const isLogin = cookieStore.has('refreshToken')
  const isNotRegistered = cookieStore.has('notRegistered')
  const redirect = (path: string) =>
    NextResponse.redirect(new URL(path, request.url))

  if (!isLogin) {
    return NextResponse.next()
  }

  const isPublicPath = PUBLIC_PATH.some((path) => pathname.startsWith(path))

  if (
    (isPublicPath && isLogin && !isNotRegistered) ||
    (pathname.startsWith('/sign-up') && !isLogin)
  ) {
    return redirect('/')
  }

  if (!pathname.startsWith('/sign-up') && isNotRegistered) {
    return redirect('/sign-up')
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!server|mocks|api|script|images|fonts|_next/static|_next/image|.*\\.png$).*)',
  ],
}

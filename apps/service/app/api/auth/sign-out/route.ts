import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { ACCESS_PARAMS_KEY, SESSION_ID } from '@/entities/auth'

export async function GET() {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {
    method: 'POST',
    headers: headers(),
  })
  cookies().delete(SESSION_ID)

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_FE_URL}/?${ACCESS_PARAMS_KEY}=logout`,
  )
}

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function DELETE() {
  cookies().delete('email')
  cookies().delete('accessToken')
  cookies().delete('refreshToken')

  return NextResponse.redirect(process.env.NEXT_PUBLIC_FE_URL as string)
}

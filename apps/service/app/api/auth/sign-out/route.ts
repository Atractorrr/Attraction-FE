import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { SESSION_ID } from '@/entities/auth'

export async function DELETE() {
  cookies().delete(SESSION_ID)

  return NextResponse.redirect(process.env.NEXT_PUBLIC_FE_URL!)
}

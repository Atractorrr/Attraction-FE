import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { SignIn } from '@/widgets/sign-in'
import { ACCESS_PARAMS_KEY, SESSION_ID } from '@/entities/auth'

export const metadata: Metadata = {
  title: '로그인',
}

export default function SignInPage() {
  const isLogin = cookies().has(SESSION_ID)

  if (isLogin) {
    return redirect(`/?${ACCESS_PARAMS_KEY}=login`)
  }

  return (
    <div className="size-full">
      <SignIn />
    </div>
  )
}

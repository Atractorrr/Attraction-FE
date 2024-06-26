import { ACCESS_PARAMS_KEY, SESSION_ID } from '@/entities/auth'
import { SignIn } from '@/widgets/sign-in'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '로그인',
}

export default function SignInPage() {
  const isLogin = cookies().has(SESSION_ID)

  if (isLogin) {
    return redirect(
      `${process.env.NEXT_PUBLIC_FE_URL}/?${ACCESS_PARAMS_KEY}=login`,
    )
  }

  return (
    <div className="size-full">
      <SignIn />
    </div>
  )
}

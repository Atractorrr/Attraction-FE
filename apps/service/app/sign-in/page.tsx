import { Metadata } from 'next'
import { SignIn } from '@/widgets/sign-in'

export const metadata: Metadata = {
  title: '로그인',
}

export default function SignInPage() {
  return (
    <div className="size-full">
      <SignIn />
    </div>
  )
}

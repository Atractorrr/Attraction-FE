import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { SignUpForm } from '@/widgets/sign-up-container'

export const metadata: Metadata = {
  title: '회원가입',
}

export default function SignUpPage() {
  const email = cookies().get('email')?.value
  return (
    <div className="flex size-full items-center justify-center">
      <SignUpForm email={email} />
    </div>
  )
}

import { Metadata } from 'next'
import { SignUpForm } from '@/widgets/sign-up-container'
import { WithAuth } from '@/entities/auth'

export const metadata: Metadata = {
  title: '회원가입',
}

export default function SignUpPage() {
  return (
    <WithAuth>
      <div className="flex size-full items-center justify-center">
        <SignUpForm />
      </div>
    </WithAuth>
  )
}

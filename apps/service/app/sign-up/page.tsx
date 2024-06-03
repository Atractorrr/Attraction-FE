import { SignUpForm } from '@/widgets/sign-up-container'
import { cookies } from 'next/headers'

export default function SignUpPage() {
  const email = cookies().get('email')?.value
  return (
    <div className="flex size-full items-center justify-center">
      <SignUpForm email={email} />
    </div>
  )
}

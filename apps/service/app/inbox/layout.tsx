import { cookies } from 'next/headers'
import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { WithAuth } from '@/entities/auth'

export default function InboxLayout({ children }: PropsWithChildren) {
  const email = cookies().get('email')?.value ?? 12 // TODO: 테스트용 상수 제거
  return (
    <WithAuth>
      <UserInboxLayout userId={email}>{children}</UserInboxLayout>
    </WithAuth>
  )
}

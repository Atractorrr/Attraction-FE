import { cookies } from 'next/headers'
import { UserInboxLayout } from '@/widgets/inbox'
import WithAuth from '@/entities/auth/ui/WithAuth'

export default function InboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const email = cookies().get('email')?.value ?? 12 // TODO: 테스트용 상수 제거
  return WithAuth(<UserInboxLayout userId={email}>{children}</UserInboxLayout>)
}

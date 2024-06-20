import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { WithAuth } from '@/entities/auth'

export const metadata: Metadata = {
  title: '뉴스레터 보관함',
}

export default function InboxLayout({ children }: PropsWithChildren) {
  return (
    <WithAuth>
      <UserInboxLayout pageType="default">{children}</UserInboxLayout>
    </WithAuth>
  )
}

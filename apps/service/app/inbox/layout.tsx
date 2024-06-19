import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { WithAuth } from '@/entities/auth'

export default function InboxLayout({ children }: PropsWithChildren) {
  return (
    <WithAuth>
      <UserInboxLayout pageType="default">{children}</UserInboxLayout>
    </WithAuth>
  )
}

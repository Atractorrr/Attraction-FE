import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { WithAuth } from '@/entities/auth'

export default function InboxBookmarkLayout({ children }: PropsWithChildren) {
  return (
    <WithAuth>
      <UserInboxLayout pageType="bookmark">{children}</UserInboxLayout>
    </WithAuth>
  )
}

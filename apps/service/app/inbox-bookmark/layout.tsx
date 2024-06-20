import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { WithAuth } from '@/entities/auth'

export const metadata: Metadata = {
  title: '북마크한 아티클',
}

export default function InboxBookmarkLayout({ children }: PropsWithChildren) {
  return (
    <WithAuth>
      <UserInboxLayout pageType="bookmark">{children}</UserInboxLayout>
    </WithAuth>
  )
}

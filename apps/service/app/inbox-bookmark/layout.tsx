'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { Header } from '@/widgets/menu'
import { WithAuth } from '@/entities/auth'

export default function InboxBookmarkLayout({ children }: PropsWithChildren) {
  const segments = useSelectedLayoutSegments()
  const isArticleView = segments.some((segment) => segment === 'article')

  return (
    <>
      <Header title="북마크한 아티클" mobileFixed={isArticleView} />
      <WithAuth>
        <UserInboxLayout pageType="bookmark" isArticleView={isArticleView}>
          {children}
        </UserInboxLayout>
      </WithAuth>
    </>
  )
}

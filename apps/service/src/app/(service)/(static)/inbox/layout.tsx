'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { UserInboxLayout } from '@/widgets/inbox'
import { WithAuth } from '@/entities/auth'
import { Header } from '@/widgets/menu'

export default function InboxLayout({ children }: PropsWithChildren) {
  const segments = useSelectedLayoutSegments()
  const isArticleView = segments.some((segment) => segment === 'article')

  return (
    <>
      <Header title="뉴스레터 보관함" mobileFixed={isArticleView} />
      <WithAuth>
        <UserInboxLayout pageType="default" isArticleView={isArticleView}>
          {children}
        </UserInboxLayout>
      </WithAuth>
    </>
  )
}

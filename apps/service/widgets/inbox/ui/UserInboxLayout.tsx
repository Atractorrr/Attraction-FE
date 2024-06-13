'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { ReactNode, createElement } from 'react'
import { Container } from '@/shared/ui'
import UserInbox from './UserInbox'

interface InboxLayoutProps {
  userId: string | number
  children: Readonly<ReactNode>
}

export default function UserInboxLayout({
  userId,
  children,
}: InboxLayoutProps) {
  const segments = useSelectedLayoutSegments()
  const isArticleView = segments.some((segment) => segment === 'article')

  return (
    <div
      className={
        isArticleView
          ? 'relative mx-auto flex max-w-7xl items-start justify-center gap-6'
          : undefined
      }>
      <UserInbox userId={userId} isArticleView={isArticleView} />
      {createElement(isArticleView ? Container : 'div', undefined, children)}
    </div>
  )
}

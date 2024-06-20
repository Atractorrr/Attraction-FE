'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { PropsWithChildren, createElement } from 'react'
import { ArticlePageType } from '@/entities/user-article'
import { Container } from '@/shared/ui'
import UserInbox from './UserInbox'

interface UserInboxLayoutProps {
  pageType: ArticlePageType
}

export default function UserInboxLayout({
  children,
  pageType,
}: PropsWithChildren<UserInboxLayoutProps>) {
  const segments = useSelectedLayoutSegments()
  const isArticleView = segments.some((segment) => segment === 'article')

  return (
    <div
      className={
        isArticleView
          ? 'relative mx-auto flex max-w-7xl items-start justify-center gap-6'
          : undefined
      }>
      <UserInbox isArticleView={isArticleView} pageType={pageType} />
      {createElement(isArticleView ? Container : 'div', undefined, children)}
    </div>
  )
}

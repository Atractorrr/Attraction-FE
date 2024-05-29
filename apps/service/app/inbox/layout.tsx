'use client'

import { usePathname } from 'next/navigation'
import { createElement } from 'react'
import { UserInbox } from '@/widgets/inbox'
import { Background } from '@/shared/ui'

export default function InboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isArticleView = pathname !== '/inbox'

  return (
    <div
      className={
        isArticleView
          ? 'relative mx-auto flex max-w-7xl items-start justify-center gap-6'
          : undefined
      }>
      <UserInbox
        // TODO: Protected Route 적용 (userId)
        userId={12}
        isArticleView={isArticleView}
      />
      {createElement(isArticleView ? Background : 'div', undefined, children)}
    </div>
  )
}

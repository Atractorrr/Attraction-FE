'use client'

import { usePathname } from 'next/navigation'
import { UserInbox } from '@/widgets/inbox'

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
          ? 'mx-auto flex max-w-7xl items-start justify-center gap-6'
          : undefined
      }>
      <UserInbox
        // TODO: Protected Route 적용 (userId)
        userId={12}
        isArticleView={isArticleView}
      />
      <div
        className={
          isArticleView
            ? 'min-h-dvh grow rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800'
            : undefined
        }>
        {children}
      </div>
    </div>
  )
}

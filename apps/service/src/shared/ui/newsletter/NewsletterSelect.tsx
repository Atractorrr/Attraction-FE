'use client'

import Link from 'next/link'
import type { MouseEventHandler, PropsWithChildren } from 'react'

interface NewsletterNameProps {
  className?: string
}

function Name({ className, children }: PropsWithChildren<NewsletterNameProps>) {
  return (
    <span
      className={`w-[calc(100%-2.75rem)] truncate font-medium ${className}`}>
      {children}
    </span>
  )
}

interface NewsletterSelectProps {
  id: number
  name: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function NewsletterSelect({
  id,
  name,
  onClick,
  children,
}: PropsWithChildren<NewsletterSelectProps>) {
  return (
    <Link
      href={`/newsletter/${id}`}
      title={`뉴스레터 보러가기: ${name}`}
      onClick={onClick}
      className="flex items-center justify-start gap-3 overflow-hidden rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
      {children}
    </Link>
  )
}

export default Object.assign(NewsletterSelect, { Name })

'use client'

import Link from 'next/link'
import type { MouseEventHandler, PropsWithChildren } from 'react'

interface NewsletterNameProps {
  className?: string
}

function Name({ className, children }: PropsWithChildren<NewsletterNameProps>) {
  return (
    <span
      className={`block w-[calc(100%-2.75rem)] truncate font-medium ${className ?? ''}`}>
      {children}
    </span>
  )
}

interface NewsletterSelectPropsAsLink {
  id: number
  name: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

interface NewsletterSelectPropsAsDiv {
  id?: never
  name?: never
  onClick?: never
}

type NewsletterSelectProps =
  | NewsletterSelectPropsAsLink
  | NewsletterSelectPropsAsDiv

function NewsletterSelect({
  id,
  name,
  onClick,
  children,
}: PropsWithChildren<NewsletterSelectProps>) {
  if (id === undefined) {
    return (
      <div className="flex items-center justify-start gap-3 overflow-hidden p-2 transition-colors">
        {children}
      </div>
    )
  }

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

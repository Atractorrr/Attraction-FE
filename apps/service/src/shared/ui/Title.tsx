import Link from 'next/link'
import type { PropsWithChildren } from 'react'

interface TitleProps {
  className?: string
}

interface ShortcutProps extends TitleProps {
  href: string
  title: string
}

function Shortcut({
  href,
  title,
  className,
  children,
}: PropsWithChildren<ShortcutProps>) {
  return (
    <Link
      href={href}
      title={title}
      className={`whitespace-nowrap text-sm text-gray-500 transition-colors ${className ?? ''} hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300`}>
      {children}
    </Link>
  )
}

function Container({ children, className }: PropsWithChildren<TitleProps>) {
  return (
    <div
      className={`flex w-full flex-wrap items-center justify-between gap-5 ${className ?? ''}`}>
      {children}
    </div>
  )
}

function Title({ children, className }: PropsWithChildren<TitleProps>) {
  return (
    <h3
      className={`flex items-center justify-start gap-2 whitespace-nowrap text-lg font-bold ${className ?? ''}`}>
      {children}
    </h3>
  )
}

export default Object.assign(Title, { Container, Shortcut })

import { ReactNode } from 'react'

interface BackgroundProps {
  children: ReactNode
  className?: string
}

export default function Background({ children, className }: BackgroundProps) {
  return (
    <div
      className={`w-full ${className ?? ''} border-gray-100 bg-white md:rounded-2xl md:border dark:border-gray-800 dark:bg-gray-800`}>
      {children}
    </div>
  )
}

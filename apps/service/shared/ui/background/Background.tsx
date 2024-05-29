import { ReactNode } from 'react'

interface BackgroundProps {
  children: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="h-fit w-full border-gray-100 bg-white md:rounded-2xl md:border dark:border-gray-800 dark:bg-gray-800">
      {children}
    </div>
  )
}

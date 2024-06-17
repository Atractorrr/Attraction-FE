import { PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
}

export default function Container({
  children,
  className,
}: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={`w-full ${className ?? ''} border-gray-100 bg-white md:rounded-2xl md:border dark:border-gray-800 dark:bg-gray-800`}>
      {children}
    </div>
  )
}

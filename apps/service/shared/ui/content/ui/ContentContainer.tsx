import React, { ReactNode } from 'react'

interface CardContentProps {
  children: ReactNode
}

export default function CardContent({ children }: CardContentProps) {
  return <div className="flex gap-2">{children}</div>
}

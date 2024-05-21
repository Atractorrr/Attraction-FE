import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function CardContent({ children }: Props) {
  return <div className="flex gap-2">{children}</div>
}

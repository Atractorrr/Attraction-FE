import React, { ReactNode } from 'react'

interface ContentContainerProps {
  children: ReactNode
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div className="mt-3 flex gap-2">{children}</div>
}

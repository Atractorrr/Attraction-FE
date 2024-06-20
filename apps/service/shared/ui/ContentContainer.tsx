import React, { PropsWithChildren } from 'react'

export default function ContentContainer({ children }: PropsWithChildren) {
  return <div className="mt-3 flex gap-2">{children}</div>
}

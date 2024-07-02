'use client'

import { PropsWithChildren, useEffect } from 'react'
import { registerServiceWorker } from '../lib'

export default function PWAProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    registerServiceWorker()
  })

  return <div>{children}</div>
}

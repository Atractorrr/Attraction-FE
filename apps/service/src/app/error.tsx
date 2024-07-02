'use client'

import { useEffect } from 'react'
import { Container, ErrorGuideTxt } from '@/shared/ui'

import '@/app/style/font.css'
import '@/app/style/index.css'
import '@attraction/design-system/dist/index.css'

interface ErrorProps {
  error: Error & { digest?: string }
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <body className="service md:p-10" suppressHydrationWarning>
      <script src="/script/theme.js" />
      <div className="mx-auto w-full max-w-7xl">
        <Container>
          <div className="p-5">
            <ErrorGuideTxt />
          </div>
        </Container>
      </div>
    </body>
  )
}

'use client'

import { useEffect } from 'react'
import { Container, ErrorGuideTxt } from '@/shared/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <Container>
      <div className="p-5">
        <ErrorGuideTxt retryFn={reset} />
      </div>
    </Container>
  )
}

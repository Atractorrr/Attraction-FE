'use client'

import { useEffect } from 'react'
import { Header } from '@/widgets/menu'
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
    <>
      <Header title="" />
      <Container>
        <div className="p-5">
          <ErrorGuideTxt retryFn={reset} />
        </div>
      </Container>
    </>
  )
}

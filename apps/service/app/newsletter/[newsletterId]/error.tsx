'use client'

import { Container, ErrorGuideTxt } from '@/shared/ui'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }, [error])

  return (
    <Container>
      <div className="p-5">
        <ErrorGuideTxt
          title="현재 뉴스레터 소개 서비스가 원활하지 않아요"
          retryFn={reset}
        />
      </div>
    </Container>
  )
}

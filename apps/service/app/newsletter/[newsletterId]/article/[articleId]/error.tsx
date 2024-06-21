'use client'

import { useEffect } from 'react'
import { Container, ErrorGuideTxt } from '@/shared/ui'

interface PrevArticleDetailErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function PrevArticleDetailError({
  error,
  reset,
}: PrevArticleDetailErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <Container>
      <div className="px-5 py-32 md:min-h-dvh">
        <ErrorGuideTxt title="유효하지 않은 아티클이에요" retryFn={reset} />
      </div>
    </Container>
  )
}

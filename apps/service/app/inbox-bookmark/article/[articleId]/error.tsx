'use client'

import { useEffect } from 'react'
import { ErrorGuideTxt } from '@/shared/ui'

interface BookmarkArticleDetailErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function BookmarkArticleDetailError({
  error,
  reset,
}: BookmarkArticleDetailErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="px-5 py-32 md:min-h-dvh">
      <ErrorGuideTxt title="유효하지 않은 아티클이에요" retryFn={reset} />
    </div>
  )
}

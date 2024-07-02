'use client'

import * as Sentry from '@sentry/nextjs'
import NextError from 'next/error'
import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    // `NextError` is the default Next.js error page component. Its type definition requires a `statusCode` prop. However, since the App Router does not expose status codes for errors, we simply pass 0 to render a generic error message.
    <NextError statusCode={0} />
  )
}

'use client'

import { useEffect } from 'react'
import { ErrorGuideTxt } from '@/shared/ui'

import '@/public/fonts/fonts.css'
import '../../globals.css'
import '@attraction/design-system/dist/index.css'

interface ArticleErrorProps {
  error: Error & { digest?: string }
}

export default function ArticleError({ error }: ArticleErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="service text-base">
      <ErrorGuideTxt title="아티클을 불러오지 못했어요" />
    </div>
  )
}

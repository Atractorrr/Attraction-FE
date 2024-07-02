'use client'

import { useEffect } from 'react'
import { ErrorGuideTxt } from '@/shared/ui'

import '@/app/style/font.css'
import '@/app/style/index.css'
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
    <body
      className="service"
      style={{ margin: '0px auto', padding: '0px', fontSize: '0px' }}
      data-error="true">
      <div className="bg-white text-base dark:bg-gray-800">
        <ErrorGuideTxt title="아티클을 불러오지 못했어요" />
      </div>
    </body>
  )
}

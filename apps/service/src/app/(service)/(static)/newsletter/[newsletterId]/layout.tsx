'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { Header } from '@/widgets/menu'

export default function NewsletterIntroduceLayout({
  children,
}: PropsWithChildren) {
  const segments = useSelectedLayoutSegments()
  const isArticleView = segments.some((segment) => segment === 'article')

  return (
    <>
      <Header
        title={isArticleView ? '지난 아티클' : '뉴스레터 소개'}
        mobileFixed
      />
      {children}
    </>
  )
}

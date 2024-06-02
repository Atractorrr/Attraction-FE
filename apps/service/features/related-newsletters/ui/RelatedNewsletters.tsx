'use client'

import { Suspense } from 'react'
import { Background, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import { RelatedNewsletterItem } from '@/entities/related-newsletter-item'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { useRelatedNewsletters } from '../lib'

interface RelatedNewsletterProps {
  newsletterId: string
}

function RelatedNewsletterContent({ newsletterId }: RelatedNewsletterProps) {
  const { data } = useRelatedNewsletters(newsletterId)

  return (
    <div className="flex flex-col gap-y-5">
      {data.data?.map((newsletter) => (
        <RelatedNewsletterItem key={newsletter.id} {...newsletter} />
      ))}
    </div>
  )
}

export default function RelatedNewsletters({
  newsletterId,
}: RelatedNewsletterProps) {
  return (
    <Background>
      <div className="flex w-full flex-col justify-start gap-y-5 p-5">
        <Title text="연관 뉴스레터" />
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} FallbackComponent={ErrorGuideTxt}>
              <Suspense fallback={<LoadingSpinner />}>
                <RelatedNewsletterContent newsletterId={newsletterId} />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </div>
    </Background>
  )
}

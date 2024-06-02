'use client'

import { Suspense } from 'react'
import {
  Background,
  ErrorGuideTxt,
  GuideTxt,
  LoadingSpinner,
  Title,
} from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'
import { NewsletterPreviousArticleItem } from '@/entities/newsletter-previous-article-item'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { useNewsletterPreviousArticles } from '../lib'

interface NewsletterPreviousArticlesProps {
  newsletterId: string
}

function NewsletterPreviousArticlesContent({
  newsletterId,
}: NewsletterPreviousArticlesProps) {
  const { data } = useNewsletterPreviousArticles(newsletterId)

  return (
    <div>
      {!data.data.length ? (
        <div className="p-16">
          <GuideTxt
            title="지난 아티클이 없습니다"
            sub="새로운 아티클을 기대해주세요!"
          />
        </div>
      ) : (
        <div className="flex w-full flex-col gap-y-5">
          {data.data.map((newsletter) => (
            <NewsletterPreviousArticleItem
              key={newsletter.id}
              {...newsletter}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function NewsletterPreviousArticles({
  newsletterId,
}: NewsletterPreviousArticlesProps) {
  return (
    <Background>
      <div className="grid w-full gap-y-5 p-5">
        <Title icon={<ClockOutline className="size-6" />} text="지난 아티클" />
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} FallbackComponent={ErrorGuideTxt}>
              <Suspense fallback={<LoadingSpinner />}>
                <NewsletterPreviousArticlesContent
                  newsletterId={newsletterId}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </div>
    </Background>
  )
}

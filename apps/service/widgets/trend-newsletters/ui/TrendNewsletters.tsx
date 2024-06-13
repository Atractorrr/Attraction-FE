'use client'

import { Suspense, useState } from 'react'
import { GraphOutline } from '@attraction/icons'
import {
  TrendNewsletterList,
  useTrendNewsletters,
} from '@/entities/trend-newsletters'
import { NewsletterCategories } from '@/features/newsletter-categories'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Container, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

interface TrendNewslettersProps {
  email: string | undefined
}

function TrendNewsletterContent({
  category,
}: {
  category: NewsletterCategory
}) {
  const { data } = useTrendNewsletters(category)

  return <TrendNewsletterList mainPageNewsletters={data.mainPageNewsletters} />
}

export default function TrendNewsletters({ email }: TrendNewslettersProps) {
  const [category, setCategory] = useState<NewsletterCategory>('RECOMMEND')

  const handleCategoryChange = (categoryName: NewsletterCategoryName) => {
    const categoryKey = (
      Object.keys(NEWSLETTER_CATEGORY) as NewsletterCategory[]
    ).find((key) => NEWSLETTER_CATEGORY[key] === categoryName)

    if (categoryKey) {
      setCategory(categoryKey)
    }
  }

  return (
    <Container>
      <div className="flex w-full flex-col gap-y-4 p-5">
        <div className="w-full">
          <Title
            icon={<GraphOutline className="size-5" />}
            text="트렌디한 뉴스레터"
          />
        </div>
        <div className="flex flex-col gap-y-8">
          <NewsletterCategories
            currentCategory={category}
            email={email}
            onClick={handleCategoryChange}
          />
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} FallbackComponent={ErrorGuideTxt}>
                <Suspense fallback={<LoadingSpinner />}>
                  <TrendNewsletterContent category={category} />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </div>
      </div>
    </Container>
  )
}

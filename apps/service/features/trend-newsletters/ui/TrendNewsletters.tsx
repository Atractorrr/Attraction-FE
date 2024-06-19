'use client'

import { Suspense, useState } from 'react'
import { GraphOutline } from '@attraction/icons'

import { Container, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { useTrendNewsletters } from '../lib'
import TrendNewsletterList from './TrendNewsletterList'
import { MainCategory, MainCategoryName } from '../model'
import { allCategories } from '../constant'
import NewsletterCategories from './NewsletterCategories'

function TrendNewsletterContent({ category }: { category: MainCategory }) {
  const { data } = useTrendNewsletters(category)

  return <TrendNewsletterList mainPageNewsletters={data.mainPageNewsletters} />
}

function CustomErrorGuideTxt() {
  return <ErrorGuideTxt />
}

export default function TrendNewsletters() {
  const [category, setCategory] = useState<MainCategory>('RECOMMEND')

  const handleCategoryChange = (categoryName: MainCategoryName) => {
    const categoryKey = (Object.keys(allCategories) as MainCategory[]).find(
      (key: MainCategory) => allCategories[key] === categoryName,
    )

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
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                FallbackComponent={CustomErrorGuideTxt}>
                <NewsletterCategories
                  currentCategory={category}
                  onClick={handleCategoryChange}
                />
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

'use client'

import { Container, ErrorGuideTxt, Title } from '@/shared/ui'
import { GraphOutline } from '@attraction/icons'
import { ErrorBoundary } from 'react-error-boundary'
import { useState } from 'react'
import NewsletterCategories from './NewsletterCategories'
import { MainCategory, MainCategoryName } from '../model'
import { allCategories } from '../constant'
import TrendNewsletterList from './TrendNewsletterList'

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
            icon={<GraphOutline className="size-6" />}
            text="트렌디한 뉴스레터"
          />
        </div>
        <div className="flex flex-col gap-y-8">
          <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
            <NewsletterCategories
              currentCategory={category}
              onClick={handleCategoryChange}
            />
            <TrendNewsletterList category={category} />
          </ErrorBoundary>
        </div>
      </div>
    </Container>
  )
}

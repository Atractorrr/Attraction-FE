'use client'

import { Container, ErrorGuideTxt, Title } from '@/shared/ui'
import { GraphOutline } from '@attraction/icons'
import { ErrorBoundary } from 'react-error-boundary'
import { useState } from 'react'
import NewsletterCategories from './NewsletterCategories'
import { MainCategory, MainCategoryName } from '../model'
import { allCategories } from '../constant'
import TrendNewsletterList from './TrendNewsletterList'

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
    <Container className="block p-5">
      <Title className="mb-4 w-full">
        <GraphOutline className="size-6" />
        트렌디한 뉴스레터
      </Title>
      <div className="flex flex-col gap-y-8">
        <ErrorBoundary fallback={<ErrorGuideTxt />}>
          <NewsletterCategories
            currentCategory={category}
            onClick={handleCategoryChange}
          />
          <TrendNewsletterList category={category} />
        </ErrorBoundary>
      </div>
    </Container>
  )
}

'use client'

import { useState } from 'react'
import { GraphOutline } from '@attraction/icons'
import {
  TrendNewsletterList,
  useTrendNewsletters,
} from '@/entities/trend-newsletters'
import { NewsletterCategories } from '@/features/newsletter-categories'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Background, LoadingSpinner, Title } from '@/shared/ui'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'

interface TrendNewslettersProps {
  email: string | undefined
}

export default function TrendNewsletters({ email }: TrendNewslettersProps) {
  const [category, setCategory] = useState<NewsletterCategory>('RECOMMEND')
  const { data, isPending } = useTrendNewsletters(category)

  const handleCategoryChange = (categoryName: NewsletterCategoryName) => {
    const categoryKey = (
      Object.keys(NEWSLETTER_CATEGORY) as NewsletterCategory[]
    ).find((key) => NEWSLETTER_CATEGORY[key] === categoryName)

    if (categoryKey) {
      setCategory(categoryKey)
    }
  }

  return (
    <Background>
      <div className="grid w-full gap-y-4 p-5">
        <div className="w-full">
          <Title
            icon={<GraphOutline className="size-5" />}
            text="트렌디한 뉴스레터"
          />
        </div>

        <div className="grid gap-y-8">
          <NewsletterCategories
            currentCategory={category}
            email={email}
            onClick={handleCategoryChange}
          />
          {data ? <TrendNewsletterList content={data.content} /> : null}
        </div>
        {isPending ? <LoadingSpinner /> : null}
      </div>
    </Background>
  )
}

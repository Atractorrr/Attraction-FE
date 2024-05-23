'use client'

import { useEffect, useState } from 'react'
import { GraphOutline } from '@attraction/icons'
import {
  TrendNewsletterResponse,
  TrendNewsletterList,
} from '@/entities/trend-newsletters'
import { NewsletterCategories } from '@/features/newsletter-categories'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Background, Title } from '@/shared/ui'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'
import { fetchNewsletters } from '../api'

export default function TrendNewsletters() {
  const [category, setCategory] = useState<NewsletterCategory>('RECOMMEND')
  const [newsletters, setNewsletters] = useState<TrendNewsletterResponse>()

  const handleCategoryChange = (categoryName: NewsletterCategoryName) => {
    const categoryKey = (
      Object.keys(NEWSLETTER_CATEGORY) as NewsletterCategory[]
    ).find((key) => NEWSLETTER_CATEGORY[key] === categoryName)

    if (categoryKey) {
      setCategory(categoryKey)
    }
  }

  useEffect(() => {
    const fetchTrendNewsletters = async () => {
      const res = await fetchNewsletters(category)
      setNewsletters(res)
    }

    fetchTrendNewsletters()
  }, [category])

  return (
    <Background>
      <div className="grid w-full gap-y-4">
        <Title
          icon={<GraphOutline className="size-5" />}
          text="트렌디한 뉴스레터"
        />
        {newsletters ? (
          <div className="grid gap-y-8">
            <NewsletterCategories
              currentCategory={category}
              priorityCategory={newsletters.priorityCategory}
              onClick={handleCategoryChange}
            />
            <TrendNewsletterList content={newsletters.content} />
          </div>
        ) : null}
      </div>
    </Background>
  )
}

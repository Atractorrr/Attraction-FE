'use client'

import { GraphOutline } from '@attraction/icons'
import { useEffect, useState } from 'react'
import { fetchNewsletters } from '../api'
import { TrendNewsletterResponse } from '../model'
import { NEWSLETTER_CATEGORY, NEWSLETTER_CATEGORY_KEYS } from '@/constants'
import { Background, Title } from '@/shared/ui'
import {
  NewsletterCategories,
  NewsletterCategory,
  NewsletterCategoryName,
} from '@/features/newsletterCategories'
import { TrendNewsletterList } from '@/entities/trendNewsletters'

export default function TrendNewsletters() {
  const [category, setCategory] = useState<NewsletterCategory>('RECOMMEND')
  const [newsletters, setNewsletters] = useState<TrendNewsletterResponse>()

  const handleCategoryChange = (categoryName: NewsletterCategoryName) => {
    const categoryKey = NEWSLETTER_CATEGORY_KEYS.find(
      (key: NewsletterCategory) => NEWSLETTER_CATEGORY[key] === categoryName,
    )

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
        ) : (
          <div>...로딩중</div>
        )}
      </div>
    </Background>
  )
}

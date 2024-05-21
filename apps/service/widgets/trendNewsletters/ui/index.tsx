'use client'

import NewsletterCategories from '@/features/newsletterCategories/ui'
import Background from '@/shared/background/ui'
import Title from '@/shared/title/ui'
import { GraphOutline } from '@attraction/icons'
import fetchNewsletters from '../api/fetchNewsletters'
import TrendNewsletterList from '@/entities/trendNewsletters/ui/TrendNewletterList'
import { useEffect, useState } from 'react'
import {
  NEWSLETTER_CATEGORY,
  NEWSLETTER_CATEGORY_KEYS,
  NewsletterCategory,
  NewsletterCategoryName,
} from '@/constants/category'
import { TrendNewsletterResponse } from '..'

export default function TrendNewsletters() {
  const [category, setCategory] = useState<NewsletterCategory>('RECOMMEND')
  const [newsletters, setNewsletters] = useState<TrendNewsletterResponse>()

  const handleCategoryChange = (category: NewsletterCategoryName) => {
    const categoryKey = NEWSLETTER_CATEGORY_KEYS.find(
      (key: NewsletterCategory) => NEWSLETTER_CATEGORY[key] === category,
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

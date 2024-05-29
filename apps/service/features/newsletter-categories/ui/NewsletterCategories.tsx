'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { Button } from '@attraction/design-system'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'
import { Carousel } from '@/shared/ui'
import { memo, useEffect, useState } from 'react'
import { fetchPreferCategories } from '../api'
import getSortedCategories from '../lib/util/getSortedCategories'
import { PreferCateroriesResponse } from '../model'

interface NewsletterCategoriesProps {
  currentCategory: NewsletterCategory
  email: string | undefined
  onClick: (category: NewsletterCategoryName) => void
}

function NewsletterCategories({
  currentCategory,
  email,
  onClick,
}: NewsletterCategoriesProps) {
  const [preferCategories, setPreferCategories] = useState<
    NewsletterCategory[]
  >([])
  const [sortedCategories, setSortedCategories] = useState<
    NewsletterCategoryName[]
  >([])

  useEffect(() => {
    const fetchPrefer = async () => {
      if (email) {
        const res: PreferCateroriesResponse = await fetchPreferCategories(email)

        setPreferCategories(res.categories)
      }
    }

    fetchPrefer()
  }, [email])

  useEffect(() => {
    setSortedCategories(getSortedCategories(preferCategories))
  }, [preferCategories])

  const option: EmblaOptionsType = {
    dragFree: true,
  }
  const newsletterCategoryList = sortedCategories.map((category) => (
    <Button
      key={category}
      className={`rounded-lg px-4 py-2 text-sm transition-colors ${
        NEWSLETTER_CATEGORY[currentCategory] === category
          ? 'bg-gray-700 text-white dark:bg-white dark:text-gray-700'
          : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
      }`}
      onClick={() => onClick(category)}>
      {category}
    </Button>
  ))

  return (
    <section className="overflow-x-auto">
      <Carousel
        options={option}
        slides={newsletterCategoryList}
        showButton
        slideSpacing="0.5"
      />
    </section>
  )
}

export default memo(NewsletterCategories)

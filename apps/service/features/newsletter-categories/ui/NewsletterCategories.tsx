'use client'

import { Suspense, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { Button } from '@attraction/design-system/dist'
import { Carousel } from '@/shared/ui'
import NewsletterCategoriesSkeleton from './NewletterCategoriesSkeleton'
import { usePreferCategories } from '../lib'
import { MainCategory, MainCategoryName } from '../model'
import { allCategories } from '../constant'

interface NewsletterCategoriesProps {
  currentCategory: MainCategory
  email: string | undefined
  onClick: (category: MainCategoryName) => void
}

function NewsletterCategoriesContent({
  currentCategory,
  email,
  onClick,
}: NewsletterCategoriesProps) {
  const [categories, setCategories] = useState<MainCategory[]>([])

  const { data } = usePreferCategories(email)
  const option: EmblaOptionsType = {
    dragFree: true,
  }

  const newsletterCategoryList = categories.map((category) => (
    <Button
      key={category}
      className={`rounded-lg px-4 py-2 text-sm transition-colors ${
        currentCategory === category
          ? 'bg-gray-700 text-white dark:bg-white dark:text-gray-700'
          : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
      }`}
      onClick={() => onClick(allCategories[category])}>
      {allCategories[category]}
    </Button>
  ))

  useEffect(() => {
    if (data) {
      setCategories(data.categories)
    }
  }, [data])

  return (
    <div className="overflow-x-auto">
      <Carousel
        options={option}
        slides={newsletterCategoryList}
        showButton
        slideSpacing="0.5"
      />
    </div>
  )
}

function NewsletterCategories({
  currentCategory,
  email,
  onClick,
}: NewsletterCategoriesProps) {
  return (
    <Suspense fallback={<NewsletterCategoriesSkeleton />}>
      <NewsletterCategoriesContent
        currentCategory={currentCategory}
        email={email}
        onClick={onClick}
      />
    </Suspense>
  )
}

export default NewsletterCategories

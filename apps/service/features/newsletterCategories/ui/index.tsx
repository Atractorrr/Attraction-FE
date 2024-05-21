'use client'

import {
  NEWSLETTER_CATEGORY,
  NEWSLETTER_CATEGORY_LIST,
  NewsletterCategory,
  NewsletterCategoryName,
} from '@/constants/category'
import EmblaCarousel from '@/shared/carousel/ui'
import { TrendNewsletterResponse } from '@/widgets/trendNewsletters'
import { Button } from '@attraction/design-system'
import { EmblaOptionsType } from 'embla-carousel'

interface NewsletterCategoriesProps {
  currentCategory: NewsletterCategory
  priorityCategory: TrendNewsletterResponse['priorityCategory']
  onClick: (category: NewsletterCategoryName) => void
}

export default function NewsletterCategories({
  currentCategory,
  priorityCategory,
  onClick,
}: NewsletterCategoriesProps) {
  const option: EmblaOptionsType = {
    dragFree: true,
  }

  return (
    <section className="overflow-x-auto">
      <EmblaCarousel
        options={option}
        slides={NEWSLETTER_CATEGORY_LIST}
        slideRenderer={(category: NewsletterCategoryName) => (
          <Button
            className={`${NEWSLETTER_CATEGORY[currentCategory] === category ? 'bg-gray-700 text-white' : 'bg-gray-50'} rounded-xl px-5 py-2 transition-all duration-75 ease-in hover:bg-gray-700 hover:text-white`}
            onClick={() => onClick(category)}>
            {category}
          </Button>
        )}
        showButton="right"
      />
    </section>
  )
}

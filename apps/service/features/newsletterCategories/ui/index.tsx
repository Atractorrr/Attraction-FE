'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { Button } from '@attraction/design-system'
import {
  NEWSLETTER_CATEGORY,
  NEWSLETTER_CATEGORY_LIST,
} from '@/constants/category'
import { NewsletterCategory, NewsletterCategoryName } from '../model/types'
import { Carousel } from '@/shared/ui'

interface NewsletterCategoriesProps {
  currentCategory: NewsletterCategory
  priorityCategory: NewsletterCategoryName[]
  onClick: (category: NewsletterCategoryName) => void
}

// priority category를 받아서 해당 부분을 앞에 띄운다.
// 나머지 카테고리를 뒤에 띄운다.

export default function NewsletterCategories({
  currentCategory,
  priorityCategory,
  onClick,
}: NewsletterCategoriesProps) {
  const sortedCategoryList = (priority: NewsletterCategoryName[]) => {
    const categorySet = new Set<NewsletterCategoryName>()

    categorySet.add(NEWSLETTER_CATEGORY.RECOMMEND)
    priority.forEach((category) => categorySet.add(category))
    NEWSLETTER_CATEGORY_LIST.forEach((category) => categorySet.add(category))

    return Array.from(categorySet)
  }

  const priorityCategoryList = sortedCategoryList(priorityCategory)
  const option: EmblaOptionsType = {
    dragFree: true,
  }
  const newsletterCategoryList = priorityCategoryList.map((category) => (
    <Button
      key={category}
      className={`${NEWSLETTER_CATEGORY[currentCategory] === category ? 'bg-gray-700 text-white' : 'bg-gray-50'} rounded-xl px-5 py-2 transition-all duration-75 ease-in hover:bg-gray-700 hover:text-white`}
      onClick={() => onClick(category)}>
      {category}
    </Button>
  ))

  return (
    <section className="overflow-x-auto">
      <Carousel
        options={option}
        slides={newsletterCategoryList}
        showButton="right"
      />
    </section>
  )
}

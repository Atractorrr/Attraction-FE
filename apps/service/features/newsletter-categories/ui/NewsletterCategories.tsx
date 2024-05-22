'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { Button } from '@attraction/design-system'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Carousel } from '@/shared/ui'
import { NewsletterCategory, NewsletterCategoryName } from '@/shared/type'

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
    Object.values(NEWSLETTER_CATEGORY).forEach((category) =>
      categorySet.add(category as NewsletterCategoryName),
    )

    return Array.from(categorySet)
  }

  const priorityCategoryList = sortedCategoryList(priorityCategory)
  const option: EmblaOptionsType = {
    dragFree: true,
  }
  const newsletterCategoryList = priorityCategoryList.map((category) => (
    <Button
      key={category}
      className={`rounded-xl px-5 py-2 transition-colors ${
        NEWSLETTER_CATEGORY[currentCategory] === category
          ? 'bg-gray-700 text-white'
          : 'bg-gray-50 hover:bg-gray-100'
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
        showButton="right"
      />
    </section>
  )
}

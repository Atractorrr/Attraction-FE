import React from 'react'
import { NewsletterCategory } from '@/shared/type'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { getCategorySVG } from '../lib'

interface PreferTagItemProps {
  category: NewsletterCategory
}

export default function PreferTagItem({ category }: PreferTagItemProps) {
  const CategorySvg = getCategorySVG(NEWSLETTER_CATEGORY[category])

  return (
    <li className="flex h-9 items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm dark:bg-gray-700">
      {CategorySvg && <CategorySvg className="size-5" />}
      <span>{NEWSLETTER_CATEGORY[category]}</span>
    </li>
  )
}

import React from 'react'
import { getCategorySVG } from '../lib'
import { NewsletterCategory } from '@/shared/type'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'

interface PreferTagItemProps {
  category: NewsletterCategory
}

export default function PreferTagItem({ category }: PreferTagItemProps) {
  // TODO: 나머지 카테고리 아이콘 정하기
  const CategorySvg = getCategorySVG(NEWSLETTER_CATEGORY[category])
  return (
    <div className="flex items-center gap-2 rounded-[1.25rem] bg-[#EEF1F3] px-3 py-1.5 text-sm">
      {CategorySvg && <CategorySvg className="size-5" />}
      <span>{NEWSLETTER_CATEGORY[category]}</span>
    </div>
  )
}

import React from 'react'
import { getCategorySVG } from '../libs/utils/getCategorySVG'
import { CategoriesKeyType } from '../model'

type Props = {
  category: CategoriesKeyType
}

export default function PreferTagItem({ category }: Props) {
  // TODO: 나머지 카테고리 아이콘 정하기
  const CategorySvg = getCategorySVG(category)
  return (
    <div className="flex items-center gap-2 rounded-[1.25rem] bg-[#EEF1F3] px-3 py-1.5 text-sm">
      {CategorySvg && <CategorySvg className="size-5" />}
      <span>{category}</span>
    </div>
  )
}

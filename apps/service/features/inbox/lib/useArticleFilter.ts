'use client'

import { useState } from 'react'
import { DEFAULT_LIST_SIZE } from '../constants'
import type { Sort } from '../types'
import * as Entities from '@/entities'

type Categories = Entities.Article.Types.NewsletterCategories[]

export default function useArticleFilter({
  memberId,
}: {
  memberId: string | number
}) {
  const [categories, setCategories] = useState<Categories>([])
  const [sort, setSort] = useState<Sort>('asc')

  const {} = Entities.Article.Model.useInfiniteUserArticlesQuery({
    memberId,
    size: DEFAULT_LIST_SIZE,
    category: categories.length > 0 ? categories : undefined,
    sort,
  })
}

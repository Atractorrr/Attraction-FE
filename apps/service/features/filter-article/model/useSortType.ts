'use client'

import { useCallback, useState } from 'react'
import * as Entities from '@/entities'

type SortType = Entities.Article.Types.SortType

export default function useSortType() {
  const [currentSortType, setSort] = useState<SortType>('asc')
  const setSortType = useCallback((type: SortType) => setSort(type), [])

  return { currentSortType, setSortType }
}

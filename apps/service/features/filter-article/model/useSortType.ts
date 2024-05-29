'use client'

import { useCallback, useState } from 'react'

import { SortType } from '@/entities/user-article'

export default function useSortType() {
  const [currentSortType, setSort] = useState<SortType>('asc')
  const setSortType = useCallback((type: SortType) => setSort(type), [])

  return { currentSortType, setSortType }
}

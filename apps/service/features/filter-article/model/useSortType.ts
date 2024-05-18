'use client'

import { useCallback, useState } from 'react'
import type { Sort } from '../types'

export default function useSort() {
  const [currentSortType, setSort] = useState<Sort>('asc')
  const setSortType = useCallback((type: Sort) => setSort(type), [])

  return { currentSortType, setSortType }
}

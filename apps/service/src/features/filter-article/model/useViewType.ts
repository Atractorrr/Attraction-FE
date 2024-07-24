'use client'

import { useCallback, useState } from 'react'
import type { ViewType } from '@/shared/type'

export default function useViewType() {
  const [viewType, setView] = useState<ViewType>('gallery')
  const setViewType = useCallback((type: ViewType) => setView(type), [])

  return { viewType, setViewType }
}

'use client'

import { useCallback, useState } from 'react'
import * as Entities from '@/entities'

type ViewType = Entities.Article.Types.ViewType

export default function useViewType() {
  const [viewType, setView] = useState<ViewType>('gallery')
  const setViewType = useCallback((type: ViewType) => setView(type), [])

  return { viewType, setViewType }
}

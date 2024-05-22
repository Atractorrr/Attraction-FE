'use client'

import { useCallback, useState } from 'react'

export default function useSearchValue() {
  const [searchValue, setValue] = useState('')
  const setSearchValue = useCallback((value: string) => setValue(value), [])

  return { searchValue, setSearchValue }
}

'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getTitle } from '../util'

export default function useTitle() {
  const pathname = usePathname()
  const [title, setTitle] = useState('어트랙션')

  useEffect(() => setTitle(getTitle(pathname)), [pathname])

  return title
}

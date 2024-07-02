'use client'

import { useEffect, useState } from 'react'

export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const totalScrollHeight = document.body.scrollHeight - window.innerHeight
      const progress =
        Number((currentScroll / totalScrollHeight).toFixed(2)) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollProgress }
}

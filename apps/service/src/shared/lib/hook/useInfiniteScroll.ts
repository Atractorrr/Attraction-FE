'use client'

import { useEffect, useRef } from 'react'

export default function useInfiniteScroll(callback: () => void) {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observerRef.current === null) {
      observerRef.current = new IntersectionObserver(
        ([target]: IntersectionObserverEntry[]) => {
          if (target.isIntersecting) callback()
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        },
      )
    }

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [targetRef, callback])

  return targetRef
}

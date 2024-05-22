'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function useInfiniteScroll(callback: () => void) {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleObserver = useCallback(
    ([target]: IntersectionObserverEntry[]) => {
      if (target.isIntersecting) callback()
    },
    [callback],
  )

  useEffect(() => {
    observerRef.current?.disconnect()
    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [handleObserver, targetRef])

  return targetRef
}

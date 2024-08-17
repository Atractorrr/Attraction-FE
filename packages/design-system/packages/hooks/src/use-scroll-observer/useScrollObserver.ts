import React from 'react'

export default function useScrollObserver<T extends HTMLElement>(
  callback: () => void,
  options?: IntersectionObserverInit,
) {
  const targetRef = React.useRef<T | null>(null)
  const observerRef = React.useRef<IntersectionObserver | null>(null)
  const defaultOptions = { root: null, rootMargin: '0px', threshold: 1.0 }

  React.useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(([target]) => {
        if (target.isIntersecting) {
          callback()
        }
      }, options ?? defaultOptions)
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

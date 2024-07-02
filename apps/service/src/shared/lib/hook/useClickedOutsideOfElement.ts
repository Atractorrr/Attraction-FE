'use client'

import { useEffect, useRef } from 'react'

export default function useClickedOutsideOfElement(callback: () => void) {
  const targetAreaRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (
        targetAreaRef.current &&
        !targetAreaRef.current.contains(e.target as Node | null)
      ) {
        callback()
      }
    }
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [callback])

  return targetAreaRef
}

'use client'

import { useEffect, useState, type RefObject } from 'react'

export default function useClickedOutsideOfElement(
  element: RefObject<HTMLElement | null>,
) {
  const [isClickedOutsideOfElement, setIsClickedOutsideOfElement] =
    useState(false)

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      setIsClickedOutsideOfElement(
        (element.current && !element.current.contains(e.target as Node)) ??
          false,
      )
    }
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [element])

  return isClickedOutsideOfElement
}

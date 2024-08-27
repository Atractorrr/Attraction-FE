import React from 'react'
import { useWindowEvent } from '../use-window-event'

const defaultRect = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

function getElementRect<T extends HTMLElement>(element?: T | null) {
  if (!element) {
    return defaultRect
  }
  return element?.getBoundingClientRect() ?? defaultRect
}

export default function useElementRect<T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  dependency?: React.DependencyList,
) {
  const [rect, setRect] = React.useState(getElementRect(ref.current))
  const handleResize = React.useCallback(() => {
    setRect(getElementRect(ref.current))
  }, [ref.current])

  React.useLayoutEffect(() => handleResize(), dependency ?? [])

  useWindowEvent('resize', handleResize)
  useWindowEvent('scroll', handleResize)

  return rect
}

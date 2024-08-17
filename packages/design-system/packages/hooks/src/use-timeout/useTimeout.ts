import React from 'react'

export default function useTimeout() {
  const timeoutRef = React.useRef<number | null>(null)

  const clear = React.useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const start = React.useCallback((callback: () => void, delay?: number) => {
    clear()
    timeoutRef.current = window.setTimeout(() => {
      callback()
      timeoutRef.current = null
    }, delay)
  }, [])

  React.useEffect(() => clear, [])

  return { start, clear }
}

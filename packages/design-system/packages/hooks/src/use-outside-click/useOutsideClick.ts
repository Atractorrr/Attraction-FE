import React from 'react'

export default function useOutsideClick(callback: () => void) {
  const targetAreaRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!targetAreaRef.current) return
      if (targetAreaRef.current.contains(e.target as Node | null)) {
        return
      }
      callback()
    }
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [callback])

  return targetAreaRef
}

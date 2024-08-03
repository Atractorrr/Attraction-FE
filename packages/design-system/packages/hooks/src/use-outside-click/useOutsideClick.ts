import React from 'react'
import { useDocumentEvent } from '../use-document-event'

export default function useOutsideClick<T extends HTMLElement>(
  callback: () => void,
) {
  const targetAreaRef = React.useRef<T | null>(null)
  useDocumentEvent('click', (e) => {
    if (!targetAreaRef.current) return
    if (targetAreaRef.current.contains(e.target as Node | null)) {
      return
    }
    callback()
  })

  return targetAreaRef
}

import React from 'react'

export default function useDocumentEvent<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, e: DocumentEventMap[K]) => void,
  option?: boolean | AddEventListenerOptions,
) {
  React.useEffect(() => {
    document.addEventListener(type, listener, option)
    return () => {
      document.removeEventListener(type, listener, option)
    }
  }, [type, listener, option])
}

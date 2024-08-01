import React from 'react'

export default function useWindowEvent<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Window, e: DocumentEventMap[K]) => void,
  option?: boolean | AddEventListenerOptions,
) {
  React.useEffect(() => {
    window.addEventListener(type as any, listener, option)
    return () => {
      window.removeEventListener(type as any, listener, option)
    }
  }, [type, listener, option])
}

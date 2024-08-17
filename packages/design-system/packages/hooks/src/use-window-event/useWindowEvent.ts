import React from 'react'

export default function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, e: WindowEventMap[K]) => void,
  option?: boolean | AddEventListenerOptions,
) {
  React.useEffect(() => {
    window.addEventListener(type, listener, option)
    return () => {
      window.removeEventListener(type, listener, option)
    }
  }, [type, listener, option])
}

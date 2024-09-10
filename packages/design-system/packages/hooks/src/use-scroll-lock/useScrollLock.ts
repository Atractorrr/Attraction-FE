import React from 'react'

export default function useScrollLock(status: boolean) {
  React.useEffect(() => {
    if (status) {
      document.body.style.touchAction = 'none'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.touchAction = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.touchAction = ''
      document.body.style.overflow = ''
    }
  }, [status])
}

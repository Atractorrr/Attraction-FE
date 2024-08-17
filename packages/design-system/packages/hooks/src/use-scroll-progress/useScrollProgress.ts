import React from 'react'
import { useWindowEvent } from '../use-window-event'

export default function useScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  useWindowEvent('scroll', () => {
    const currentScroll = window.scrollY
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const scrollProgress = Math.round((currentScroll / totalHeight) * 100)
    setProgress(scrollProgress)
  })

  return { progress }
}

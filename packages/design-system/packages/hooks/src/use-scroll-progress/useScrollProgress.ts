import React from 'react'
import { useWindowEvent } from '../use-window-event'

export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const handleScroll = () => {
    const currentScroll = window.scrollY
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const progress = Math.round((currentScroll / totalHeight) * 100)
    setScrollProgress(progress)
  }

  useWindowEvent('scroll', handleScroll)

  return { scrollProgress }
}

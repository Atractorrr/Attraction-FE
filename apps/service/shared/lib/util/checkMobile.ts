'use client'

export function checkViewport() {
  return window.matchMedia('(max-width: 768px)').matches
}

export default function checkMobile() {
  return (
    /Mobile|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) && navigator.maxTouchPoints > 0
  )
}

'use client'

export function checkViewport() {
  return window.matchMedia('(max-width: 768px)').matches
}

export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

export function isInStandaloneMode() {
  return !!('standalone' in window.navigator && window.navigator.standalone)
}

export function checkIOSPWA() {
  return isIOS() && isInStandaloneMode()
}

export function checkMobile() {
  return (
    /Mobile|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) && navigator.maxTouchPoints > 0
  )
}

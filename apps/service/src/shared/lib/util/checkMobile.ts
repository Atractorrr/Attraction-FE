'use client'

export function checkViewport() {
  return window.matchMedia('(max-width: 768px)').matches
}

export function isIOS() {
  return /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
}

export function isPWA() {
  return /PWAShell/i.test(window.navigator.userAgent)
}

export function checkIOSPWA() {
  return isIOS() && isPWA()
}

export function checkMobile() {
  return (
    /Mobile|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent,
    ) && window.navigator.maxTouchPoints > 0
  )
}

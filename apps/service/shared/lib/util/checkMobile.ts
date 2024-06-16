'use client'

export default function checkMobile() {
  return (
    window.matchMedia('(max-width: 768px)').matches ||
    (/Mobile|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) &&
      navigator.maxTouchPoints > 0)
  )
}

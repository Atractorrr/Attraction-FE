'use client'

export default function checkMobile() {
  return (
    window.matchMedia('(max-width: 768px)').matches &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) &&
    navigator.maxTouchPoints > 0
  )
}

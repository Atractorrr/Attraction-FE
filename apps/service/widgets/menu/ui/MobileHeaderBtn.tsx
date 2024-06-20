'use client'

import { MouseEventHandler, ReactNode } from 'react'

interface MobileHeaderBtnProps {
  icon: ReactNode
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function MobileHeaderBtn({
  icon,
  label,
  onClick,
}: MobileHeaderBtnProps) {
  return (
    <button
      type="button"
      title={label}
      className="relative flex size-10 items-center justify-center rounded-lg text-xl transition-colors active:bg-gray-50 dark:active:bg-gray-700"
      onClick={onClick}>
      {icon}
      <span className="blind">{label}</span>
    </button>
  )
}

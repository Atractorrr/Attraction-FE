'use client'

import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from 'react'

const FilterButton = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { active?: boolean }
>(({ type, className, active: isActive = false, onClick, ...props }, ref) => (
  <button
    ref={ref as LegacyRef<HTMLButtonElement> | undefined}
    type="button"
    className={`flex h-10 items-center justify-center gap-2 rounded-lg px-3 py-2 transition-colors ${
      isActive
        ? 'bg-blue-50 text-blue-400 dark:bg-gray-50 dark:text-gray-700'
        : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
    }`}
    onClick={(e) => {
      onClick?.(e)
      e.currentTarget?.scrollIntoView({ inline: 'center', behavior: 'smooth' })
    }}
    {...props}
  />
))
FilterButton.displayName = 'DefaultFilterButton'

export default FilterButton

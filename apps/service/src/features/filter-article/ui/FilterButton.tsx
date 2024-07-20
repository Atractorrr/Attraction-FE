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
>(({ type, className, active: isActive = false, ...props }, ref) => (
  <button
    ref={ref as LegacyRef<HTMLButtonElement> | undefined}
    type="button"
    className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 transition-colors ${
      isActive
        ? 'bg-gray-700 text-gray-50 dark:bg-gray-50 dark:text-gray-700'
        : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
    }`}
    {...props}
  />
))
FilterButton.displayName = 'DefaultFilterButton'

export default FilterButton

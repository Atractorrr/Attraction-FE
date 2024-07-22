'use client'

import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  forwardRef,
} from 'react'

const DefaultButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ children, type, className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className="block h-12 w-full rounded-lg bg-gray-700 p-2 text-center font-medium text-gray-50 transition-colors hover:bg-gray-800 disabled:!bg-gray-50 disabled:!text-gray-400 xs:text-lg md:h-10 md:rounded md:text-base dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100 dark:disabled:!bg-gray-700 dark:disabled:!text-gray-500"
    {...props}>
    {children || '구독하기'}
  </button>
))
DefaultButton.displayName = 'DefaultSubscribeButton'

export default DefaultButton

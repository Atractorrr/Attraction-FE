'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckOutline } from '@attraction/icons'
import { cn } from '../utils'

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'ds-peer ds-size-4 ds-shrink-0 ds-rounded-sm ds-border ds-border-gray-200 ds-ring-offset-white focus-visible:ds-outline-none focus-visible:ds-ring-2 focus-visible:ds-ring-gray-950 focus-visible:ds-ring-offset-2 disabled:ds-cursor-not-allowed disabled:ds-opacity-50 data-[state=checked]:ds-bg-gray-900 data-[state=checked]:ds-text-gray-50 dark:ds-border-gray-50 dark:ds-border-gray-800 dark:ds-border-gray-900 dark:ds-ring-offset-gray-950 dark:focus-visible:ds-ring-gray-300 dark:data-[state=checked]:ds-bg-gray-50 dark:data-[state=checked]:ds-text-gray-900',
      className,
    )}
    {...props}>
    <CheckboxPrimitive.Indicator
      className={cn(
        'ds-flex ds-items-center ds-justify-center ds-text-current',
      )}>
      <CheckOutline className="ds-size-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

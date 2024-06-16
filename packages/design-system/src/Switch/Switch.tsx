'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '../utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'ds-peer ds-inline-flex ds-h-6 ds-w-11 ds-shrink-0 ds-cursor-pointer ds-items-center ds-rounded-full ds-border-2 ds-border-transparent ds-transition-colors focus-visible:ds-outline-none focus-visible:ds-ring-2 focus-visible:ds-ring-gray-950 focus-visible:ds-ring-offset-2 focus-visible:ds-ring-offset-white disabled:ds-cursor-not-allowed disabled:ds-opacity-50 data-[state=checked]:ds-bg-gray-900 data-[state=unchecked]:ds-bg-gray-200 dark:focus-visible:ds-ring-gray-300 dark:focus-visible:ds-ring-offset-gray-950 dark:data-[state=checked]:ds-bg-gray-50 dark:data-[state=unchecked]:ds-bg-gray-800',
      className,
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      className={cn(
        'ds-pointer-events-none ds-block ds-h-5 ds-w-5 ds-rounded-full ds-bg-white ds-shadow-lg ds-ring-0 ds-transition-transform data-[state=checked]:ds-translate-x-5 data-[state=unchecked]:ds-translate-x-0 dark:ds-bg-gray-950',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

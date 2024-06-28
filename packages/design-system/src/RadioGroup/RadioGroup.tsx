'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CheckOutline } from '@attraction/icons'
import { cn } from '../utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('ds-grid ds-gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'ds-aspect-square ds-h-4 ds-w-4 ds-rounded-full ds-border ds-border-gray-200 ds-text-gray-900 ds-ring-offset-white focus:ds-outline-none focus-visible:ds-ring-2 focus-visible:ds-ring-gray-950 focus-visible:ds-ring-offset-2 disabled:ds-cursor-not-allowed disabled:ds-opacity-50 dark:ds-border-gray-50 dark:ds-border-gray-800 dark:ds-border-gray-900 dark:ds-text-gray-50 dark:ds-ring-offset-gray-950 dark:focus-visible:ds-ring-gray-300',
        className,
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator className="ds-flex ds-items-center ds-justify-center">
        <CheckOutline className="ds-h-2.5 ds-w-2.5 ds-fill-current ds-text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

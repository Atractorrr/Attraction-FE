import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckOutline } from '@attraction/icons'
import { cn } from '../utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer ds-ring-offset-background focus-visible:ds-ring-ring data-[state=checked]:ds-text-primary-foreground ds-size-4 ds-shrink-0 ds-rounded-sm ds-border ds-border-gray-900 focus-visible:ds-outline-none focus-visible:ds-ring-2 focus-visible:ds-ring-offset-2 disabled:ds-cursor-not-allowed disabled:ds-opacity-50 data-[state=checked]:ds-bg-gray-900',
      className,
    )}
    {...props}>
    <CheckboxPrimitive.Indicator
      className={cn(
        'ds-flex ds-items-center ds-justify-center ds-text-current',
      )}>
      <CheckOutline className="ds-size-4 ds-text-white" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox

import * as React from 'react'
import { cn } from '../utils'
import { BadgeVaraintsProps } from './Badge.type'
import badgeVariants from './Badge.style'

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BadgeVaraintsProps {
  variant: 'default' | 'active' | 'red' | 'blue' | 'green' | 'yellow'
  className?: string
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  },
)

export default Badge

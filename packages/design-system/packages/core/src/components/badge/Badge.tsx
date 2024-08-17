import React from 'react'
import { cn } from '@attraction/utils'
import { variants, badgeVariants } from './Badge.style'

type BadgeVariants = typeof variants

interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: keyof BadgeVariants['variant']
  color?: keyof BadgeVariants['color']
  size?: keyof BadgeVariants['size']
  round?: keyof BadgeVariants['round']
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, color, size, round, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, color, size, round }), className)}
      {...props}
    />
  ),
)

export default Badge

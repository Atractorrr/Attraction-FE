import * as React from 'react'
import { cn } from '../utils'
import { BadgeVaraintsProps } from './Badge.type'
import badgeVariants from './Badge.style'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BadgeVaraintsProps {}

export default function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

import { cn } from '@attraction/utils'
import React from 'react'

interface DimmedProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Dimmed = React.forwardRef<HTMLDivElement, DimmedProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('ds-dimmed', className)} {...props} />
  ),
)

export default Dimmed

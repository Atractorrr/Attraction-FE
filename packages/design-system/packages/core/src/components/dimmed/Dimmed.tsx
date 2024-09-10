import React from 'react'
import { cn } from '@attraction/utils'
import { motion } from 'framer-motion'

interface DimmedProps extends React.ComponentProps<typeof motion.div> {}

const Dimmed = React.forwardRef<HTMLDivElement, DimmedProps>(
  ({ className, ...props }, ref) => (
    <motion.div ref={ref} className={cn('ds-dimmed', className)} {...props} />
  ),
)

export default Dimmed

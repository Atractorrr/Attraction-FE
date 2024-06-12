import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../utils'

const badgeVariants = cva(
  'ds-inline-block ds-whitespace-nowrap ds-rounded-full ds-px-3 ds-py-1 ds-text-sm',
  {
    variants: {
      variant: {
        default:
          'ds-bg-gray-50 ds-text-gray-700 dark:ds-bg-gray-700 dark:ds-text-gray-50',
        active:
          'ds-bg-gray-700 ds-text-gray-50 dark:ds-bg-gray-50 dark:ds-text-gray-700',
        red: 'ds-bg-red-50 ds-text-red-400 dark:ds-bg-red-800 dark:ds-text-red-300',
        yellow:
          'ds-bg-yellow-50 ds-text-yellow-400 dark:ds-bg-yellow-800 dark:ds-text-yellow-300',
        green:
          'ds-bg-green-50 ds-text-green-400 dark:ds-bg-green-800 dark:ds-text-green-300',
        blue: 'ds-bg-blue-50 ds-text-blue-400 dark:ds-bg-blue-800 dark:ds-text-blue-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

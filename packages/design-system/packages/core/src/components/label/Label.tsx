import React from 'react'
import { cn } from '@attraction/utils'

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  required?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, className, children, ...props }, ref) => {
    if (!children) {
      return null
    }
    return (
      <label ref={ref} className={cn('ds-label', className)} {...props}>
        {children}
        {required && <span className="ds-asterisk">*</span>}
      </label>
    )
  },
)

export default Label

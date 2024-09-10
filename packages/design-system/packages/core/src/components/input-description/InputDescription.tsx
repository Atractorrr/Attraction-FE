import React from 'react'
import { cn } from '@attraction/utils'

interface InputDescriptionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

const InputDescription = React.forwardRef<
  HTMLParagraphElement,
  InputDescriptionProps
>(({ className, ...props }, ref) => {
  if (!props.children) {
    return null
  }
  return (
    <p ref={ref} className={cn('ds-input-description', className)} {...props} />
  )
})

export default InputDescription

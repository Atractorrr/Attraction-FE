import React, { HTMLAttributes, forwardRef } from 'react'

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...rest }, ref) => (
    <div ref={ref} {...rest}>
      {children}
    </div>
  ),
)

export default Container

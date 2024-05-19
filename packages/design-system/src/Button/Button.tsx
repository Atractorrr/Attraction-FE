import React, { ButtonHTMLAttributes, forwardRef } from 'react'

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...rest }, ref) => (
  <button type="button" ref={ref} {...rest}>
    {children}
  </button>
))

export default Button

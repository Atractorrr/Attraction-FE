import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...rest }, ref) => (
  <button ref={ref} {...rest}>
    {children}
  </button>
))

export default Button

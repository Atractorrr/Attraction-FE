import React, { InputHTMLAttributes, forwardRef } from 'react'

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...rest }, ref) => <input ref={ref} {...rest} />)

export default Input

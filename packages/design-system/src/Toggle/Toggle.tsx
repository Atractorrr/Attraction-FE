import React, { InputHTMLAttributes, forwardRef } from 'react'

const Toggle = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...rest }, ref) => <input ref={ref} type="checkbox" {...rest} />)

export default Toggle

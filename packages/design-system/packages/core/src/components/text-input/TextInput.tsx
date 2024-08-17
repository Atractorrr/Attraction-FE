import React from 'react'

interface TextProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  withBackground?: boolean
}

const TextInput = React.forwardRef<HTMLInputElement, TextProps>(
  ({ withBackground, ...props }, ref) => <input ref={ref} {...props} />,
)

export default TextInput

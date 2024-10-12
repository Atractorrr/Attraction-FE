import React from 'react'
import { cn } from '@attraction/utils'
import {
  buttonClassName,
  buttonVariable,
  type ButtonVariants,
} from './Button.style'

type ButtonProps = ButtonVariants & JSX.IntrinsicElements['button']

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      round,
      square,
      withoutClickInteraction,
      withoutBorder,
      style,
      ...props
    },
    ref,
  ) => (
    <button
      type="button"
      className={cn(buttonClassName, className)}
      ref={ref}
      style={{
        ...buttonVariable({
          variant,
          color,
          size,
          round,
          square,
          withoutClickInteraction,
          withoutBorder,
        }),
        ...style,
      }}
      {...props}
    />
  ),
)

export default Button

import React from 'react'
import { cn } from '@attraction/utils'
import { buttonVariants, variants } from './Button.style'

type ButtonVariants = typeof variants

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: keyof ButtonVariants['variant']
  color?: keyof ButtonVariants['color']
  size?: keyof ButtonVariants['size']
  round?: keyof ButtonVariants['round']
  square?: boolean
  withoutClickInteraction?: boolean
}

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
      ...props
    },
    ref,
  ) => (
    <button
      type="button"
      className={cn(
        buttonVariants({
          variant,
          color,
          size,
          round,
          square: square ? 'square' : null,
          clickInteraction: withoutClickInteraction ? 'without' : null,
        }),
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)

export default Button

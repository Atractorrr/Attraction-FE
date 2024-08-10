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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, className, variant, color, size, round, ...props }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      className={cn(buttonVariants({ variant, color, size, round }), className)}
      ref={ref}
      {...props}
    />
  ),
)

export default Button

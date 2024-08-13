import { cn } from '@attraction/utils'
import React from 'react'
import { switchVariants, variants } from './Switch.style'

type SwitchVariants = typeof variants

type InputDetailedProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface SwitchProps extends Omit<InputDetailedProps, 'size'> {
  color?: keyof SwitchVariants['color']
  size?: keyof SwitchVariants['size']
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ type, id, className, color, size, ...props }, ref) => (
    <label
      htmlFor={id}
      className={cn(switchVariants({ color, size }), className)}>
      <input id={id} type={type || 'checkbox'} ref={ref} {...props} />
      <span />
    </label>
  ),
)

export default Switch

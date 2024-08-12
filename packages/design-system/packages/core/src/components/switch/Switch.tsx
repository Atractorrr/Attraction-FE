import { cn } from '@attraction/utils'
import React from 'react'
import { switchVariants, variants } from './Switch.style'

type SwitchVariants = typeof variants

interface SwitchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  color?: keyof SwitchVariants['color']
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ type, id, className, color, ...props }, ref) => (
    <label htmlFor={id} className={cn(switchVariants({ color }), className)}>
      <input id={id} type={type || 'checkbox'} ref={ref} {...props} />
      <span />
    </label>
  ),
)

export default Switch

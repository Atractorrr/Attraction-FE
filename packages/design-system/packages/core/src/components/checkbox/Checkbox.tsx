import React from 'react'
import { cn } from '@attraction/utils'
import { CheckOutline } from '@attraction/icons'
import { variants, checkboxVariants } from './Checkbox.style'

type CheckboxVariants = typeof variants

interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode
  color?: keyof CheckboxVariants['color']
  round?: keyof CheckboxVariants['round']
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ type, id, className, style, label, color, round, ...props }, ref) => {
    if (!label) {
      return (
        <span
          className={cn(checkboxVariants({ color, round }), className)}
          style={style}>
          <input id={id} type={type || 'checkbox'} ref={ref} {...props} />
          <CheckOutline />
        </span>
      )
    }
    return (
      <label
        htmlFor={id}
        className={cn(checkboxVariants({ color, round }), className)}
        style={style}>
        <input id={id} type={type || 'checkbox'} ref={ref} {...props} />
        <CheckOutline />
        <span>{label}</span>
      </label>
    )
  },
)

export default Checkbox

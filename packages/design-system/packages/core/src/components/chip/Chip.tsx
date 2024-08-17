import React from 'react'
import { CheckOutline } from '@attraction/icons'
import { cn } from '@attraction/utils'
import { variants, chipVariants } from './Chip.style'

type ChipVariants = typeof variants

type InputDetailedProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface ChipProps extends Omit<InputDetailedProps, 'size'> {
  color?: keyof ChipVariants['color']
  size?: keyof ChipVariants['size']
  round?: keyof ChipVariants['round']
  withIcon?: boolean
}

const Chip = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<ChipProps>
>(
  (
    {
      id,
      type,
      className,
      style,
      children,
      color,
      size,
      round,
      withIcon,
      ...props
    },
    ref,
  ) => (
    <label
      htmlFor={id}
      className={cn(
        chipVariants({ color, size, round, icon: withIcon ? 'with' : 'none' }),
        className,
      )}
      style={style}>
      <input ref={ref} id={id} type={type || 'checkbox'} {...props} />
      <span>
        {withIcon && <CheckOutline />}
        <span>{children}</span>
      </span>
    </label>
  ),
)

export default Chip

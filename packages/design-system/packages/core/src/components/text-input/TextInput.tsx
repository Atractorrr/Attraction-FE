import React from 'react'
import { cn } from '@attraction/utils'
import { Label } from '../label'
import { textInputVariants, variants } from './TextInput.style'

type TextInputVariant = typeof variants

interface TextProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  state?: keyof TextInputVariant['state']
  size?: keyof TextInputVariant['size']
  round?: keyof TextInputVariant['round']
  withBackground?: boolean
  label?: React.ReactNode | string
  description?: React.ReactNode | string
}

const TextInput = React.forwardRef<HTMLInputElement, TextProps>(
  (
    {
      className,
      style,
      label,
      description,
      state,
      size,
      round,
      withBackground,
      ...props
    },
    ref,
  ) => (
    <div
      className={cn(
        textInputVariants({
          state,
          size,
          round,
          background: withBackground ? 'with' : null,
        }),
        className,
      )}
      style={style}>
      {label && (
        <Label htmlFor={props.id} required={props.required}>
          {label}
        </Label>
      )}
      <input ref={ref} type="text" {...props} />
      {description && <p>{description}</p>}
    </div>
  ),
)

export default TextInput

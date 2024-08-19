import React from 'react'
import { cn } from '@attraction/utils'
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
  required?: boolean
  description?: React.ReactNode | string
}

const TextInput = React.forwardRef<HTMLInputElement, TextProps>(
  (
    {
      className,
      id,
      type,
      label,
      required,
      state,
      size,
      round,
      withBackground,
      style,
      description,
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
        <label htmlFor={id}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input ref={ref} id={id} type={type || 'text'} {...props} />
      {description && <p>{description}</p>}
    </div>
  ),
)

export default TextInput

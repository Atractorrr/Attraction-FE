import { cva } from 'class-variance-authority'

const textInputClassName = 'ds-text-input'
const getTextInputModifier = (name: string) => `${textInputClassName}--${name}`

export const variants = {
  state: {
    default: '',
    danger: getTextInputModifier('danger'),
    warn: getTextInputModifier('warn'),
    success: getTextInputModifier('success'),
    info: getTextInputModifier('info'),
  },
  size: {
    xs: getTextInputModifier('size-xs'),
    sm: getTextInputModifier('size-sm'),
    md: '',
    lg: getTextInputModifier('size-lg'),
  },
  round: {
    xs: getTextInputModifier('round-xs'),
    sm: '',
    md: getTextInputModifier('round-md'),
    lg: getTextInputModifier('round-lg'),
    full: getTextInputModifier('round-full'),
  },
  background: {
    none: '',
    with: getTextInputModifier('background'),
  },
  border: {
    default: '',
    none: getTextInputModifier('border-none'),
  },
}

export const textInputVariants = cva(textInputClassName, {
  variants,
  defaultVariants: {
    state: 'default',
    size: 'md',
    round: 'sm',
    background: 'none',
    border: 'default',
  },
})

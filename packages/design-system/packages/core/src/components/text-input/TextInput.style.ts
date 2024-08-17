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
}

export const textInputVariants = cva(textInputClassName, {
  variants,
  defaultVariants: { state: 'default' },
})

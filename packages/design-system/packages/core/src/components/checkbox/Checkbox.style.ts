import { cva } from 'class-variance-authority'

const checkboxClassName = 'ds-checkbox'
const getCheckboxModifier = (name: string) => `${checkboxClassName}--${name}`

export const variants = {
  color: {
    gray: '',
    red: getCheckboxModifier('red'),
    yellow: getCheckboxModifier('yellow'),
    green: getCheckboxModifier('green'),
    blue: getCheckboxModifier('blue'),
  },
  round: {
    default: '',
    full: getCheckboxModifier('round-full'),
  },
  disabled: {
    default: '',
    disabled: getCheckboxModifier('disabled'),
  },
}

export const checkboxVariants = cva(checkboxClassName, {
  variants,
  defaultVariants: { color: 'gray', round: 'default', disabled: 'default' },
})

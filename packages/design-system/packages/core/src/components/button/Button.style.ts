import { cva } from 'class-variance-authority'

const buttonClassName = 'ds-button'
const getButtonModifier = (name: string) => `${buttonClassName}--${name}`

export const variants = {
  variant: {
    default: '',
    light: getButtonModifier('light'),
    filled: getButtonModifier('filled'),
    subtle: getButtonModifier('subtle'),
    hovering: getButtonModifier('hovering'),
  },
  color: {
    gray: getButtonModifier('gray'),
    red: getButtonModifier('red'),
    yellow: getButtonModifier('yellow'),
    green: getButtonModifier('green'),
    blue: getButtonModifier('blue'),
  },
  size: {
    xs: getButtonModifier('size-xs'),
    sm: getButtonModifier('size-sm'),
    md: getButtonModifier('size-md'),
    lg: getButtonModifier('size-lg'),
    xl: getButtonModifier('size-xl'),
  },
  round: {
    xs: getButtonModifier('round-xs'),
    sm: getButtonModifier('round-sm'),
    md: getButtonModifier('round-md'),
    lg: getButtonModifier('round-lg'),
    xl: getButtonModifier('round-xl'),
    full: getButtonModifier('round-full'),
  },
  square: {
    default: '',
    square: getButtonModifier('square'),
  },
}

export const buttonVariants = cva(buttonClassName, {
  variants,
  defaultVariants: {
    variant: 'default',
    color: 'gray',
    size: 'md',
    round: 'sm',
    square: 'default',
  },
})

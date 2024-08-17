import { cva } from 'class-variance-authority'

const chipClassName = 'ds-chip'
const getChipModifier = (name: string) => `${chipClassName}--${name}`

export const variants = {
  color: {
    gray: '',
    red: getChipModifier('red'),
    yellow: getChipModifier('yellow'),
    green: getChipModifier('green'),
    blue: getChipModifier('blue'),
  },
  size: {
    xs: getChipModifier('size-xs'),
    sm: getChipModifier('size-sm'),
    md: getChipModifier('size-md'),
    lg: getChipModifier('size-lg'),
  },
  round: {
    xs: getChipModifier('round-xs'),
    sm: getChipModifier('round-sm'),
    md: getChipModifier('round-md'),
    lg: getChipModifier('round-lg'),
    xl: getChipModifier('round-xl'),
    full: getChipModifier('round-full'),
  },
  icon: {
    none: '',
    with: getChipModifier('with-icon'),
  },
}

export const chipVariants = cva(chipClassName, {
  variants,
  defaultVariants: {
    color: 'gray',
    size: 'md',
    round: 'full',
    icon: 'none',
  },
})

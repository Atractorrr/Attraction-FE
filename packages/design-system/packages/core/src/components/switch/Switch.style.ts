import { cva } from 'class-variance-authority'

const switchClassName = 'ds-switch'
const getSwitchModifier = (name: string) => `${switchClassName}--${name}`

export const variants = {
  color: {
    gray: '',
    red: getSwitchModifier('red'),
    yellow: getSwitchModifier('yellow'),
    green: getSwitchModifier('green'),
    blue: getSwitchModifier('blue'),
  },
}

export const switchVariants = cva(switchClassName, {
  variants,
  defaultVariants: { color: 'gray' },
})

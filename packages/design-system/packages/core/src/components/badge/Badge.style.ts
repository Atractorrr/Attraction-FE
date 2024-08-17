import { cva } from 'class-variance-authority'

const badgeClassName = 'ds-badge'
const getBadgeModifier = (name: string) => `${badgeClassName}--${name}`

export const variants = {
  variant: {
    light: '',
    filled: getBadgeModifier('filled'),
    hovering: getBadgeModifier('hovering'),
  },
  color: {
    gray: '',
    red: getBadgeModifier('red'),
    yellow: getBadgeModifier('yellow'),
    green: getBadgeModifier('green'),
    blue: getBadgeModifier('blue'),
  },
  size: {
    sm: getBadgeModifier('size-sm'),
    md: getBadgeModifier('size-md'),
    lg: getBadgeModifier('size-lg'),
  },
  round: {
    sm: getBadgeModifier('round-sm'),
    md: getBadgeModifier('round-md'),
    lg: getBadgeModifier('round-lg'),
    full: getBadgeModifier('round-full'),
  },
}

export const badgeVariants = cva(badgeClassName, {
  variants,
  defaultVariants: {
    variant: 'light',
    color: 'gray',
    size: 'md',
    round: 'full',
  },
})

import { cva } from 'class-variance-authority'

const searchInputClassName = 'ds-search-input'
const getSearchInputModifier = (name: string) => {
  return `${searchInputClassName}--${name}`
}

export const variants = {
  size: {
    md: '',
    lg: getSearchInputModifier('size-lg'),
  },
  round: {
    xs: getSearchInputModifier('round-xs'),
    sm: '',
    md: getSearchInputModifier('round-md'),
    lg: getSearchInputModifier('round-lg'),
    full: getSearchInputModifier('round-full'),
  },
  background: {
    none: '',
    with: getSearchInputModifier('background'),
  },
}

export const searchInputVariants = cva(searchInputClassName, {
  variants,
  defaultVariants: { size: 'md', round: 'sm', background: 'none' },
})

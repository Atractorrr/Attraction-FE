import { cva } from 'class-variance-authority'

export const selectClassName = 'ds-select'
const getSelectModifier = (name: string) => `${selectClassName}--${name}`

export const selectInputClassName = `${selectClassName}__input`
export const selectOptionClassName = `${selectClassName}__option`
export const selectOptionClassNameWithMobileModifier = `${selectOptionClassName}--mobile`

export const variants = {
  state: {
    default: '',
    danger: getSelectModifier('danger'),
    warn: getSelectModifier('warn'),
    success: getSelectModifier('success'),
    info: getSelectModifier('info'),
  },
  size: {
    xs: getSelectModifier('size-xs'),
    sm: getSelectModifier('size-sm'),
    md: '',
    lg: getSelectModifier('size-lg'),
  },
  round: {
    xs: getSelectModifier('round-xs'),
    sm: '',
    md: getSelectModifier('round-md'),
  },
  background: {
    none: '',
    with: getSelectModifier('background'),
  },
  border: {
    default: '',
    none: getSelectModifier('border-none'),
  },
}

export const selectVariants = cva(selectClassName, {
  variants,
  defaultVariants: {
    state: 'default',
    size: 'md',
    round: 'sm',
    background: 'none',
    border: 'default',
  },
})

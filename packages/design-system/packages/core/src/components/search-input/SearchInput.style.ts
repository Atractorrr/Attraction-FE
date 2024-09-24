import { cva } from 'class-variance-authority'

const searchInputClassName = 'ds-search-input'
const getSearchInputModifier = (name: string) => {
  return `${searchInputClassName}--${name}`
}

export const searchInputWithSelectClassName = `${searchInputClassName}__with-select`
export const searchInputWithSelectClassNameFocusModifier = `${searchInputClassName}__with-select--focused`
export const searchInputSubmitButtonClassName = `${searchInputClassName}__submit-button`
export const searchInputClearButtonClassName = `${searchInputClassName}__clear-button`
export const searchInputDividerClassName = `${searchInputClassName}__divider`

export const variants = {
  size: {
    xs: getSearchInputModifier('size-xs'),
    sm: getSearchInputModifier('size-sm'),
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
  submitButtonPosition: {
    left: '',
    right: getSearchInputModifier('submit-button-right'),
  },
}

export const searchInputVariants = cva(searchInputClassName, {
  variants,
  defaultVariants: {
    size: 'md',
    round: 'sm',
    background: 'none',
    submitButtonPosition: 'left',
  },
})

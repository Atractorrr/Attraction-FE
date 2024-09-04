import { cva } from 'class-variance-authority'

const dialogClassName = 'ds-dialog'
const getDialogModifier = (name: string) => `${dialogClassName}--${name}`

export const dialogContainerClassName = `${dialogClassName}__container`
export const dialogHeaderClassName = `${dialogClassName}__header`
export const dialogTitleClassName = `${dialogClassName}__title`
export const dialogContentClassName = `${dialogClassName}__content`
export const dialogFooterClassName = `${dialogClassName}__footer`
export const dialogFooterClassNameWithSpaceModifier = `${dialogClassName}__footer--space`

export const variants = {
  size: {
    xs: getDialogModifier('size-xs'),
    sm: getDialogModifier('size-sm'),
    md: '',
    lg: getDialogModifier('size-lg'),
    xl: getDialogModifier('size-xl'),
  },
}

export const dialogVariants = cva(dialogClassName, {
  variants,
  defaultVariants: { size: 'md' },
})

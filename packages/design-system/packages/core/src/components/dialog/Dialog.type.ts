import React from 'react'
import { variants } from './Dialog.style'

type DialogVariants = typeof variants

export interface DialogState {
  close?: () => void
  size?: keyof DialogVariants['size']
}

export interface DialogCloseButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'color'
  > {}

export interface DialogDecoratorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export interface DialogTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface DialogProps extends React.PropsWithChildren {
  open?: boolean
  onClose?: () => void
  withoutDimmed?: boolean
  size?: keyof DialogVariants['size']
  className?: string
  style?: React.CSSProperties
}

import React from 'react'
import { variants } from './Dialog.style'
import type { HeadingTag } from '../../core'

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
  as?: HeadingTag
}

export type DialogPosition = keyof DialogVariants['position']

export interface DialogProps extends React.PropsWithChildren {
  open?: boolean
  onClose?: () => void
  withoutDimmed?: boolean
  cancelWithOutsideClick?: boolean
  size?: keyof DialogVariants['size']
  position?: DialogPosition
  className?: string
  style?: React.CSSProperties
}

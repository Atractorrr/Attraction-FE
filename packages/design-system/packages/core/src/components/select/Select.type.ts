import React from 'react'
import { variants } from './Select.style'

type SelectVariants = typeof variants

export interface DefaultSelectState {
  value: string
  setValue?: (value: string) => void
  size?: keyof SelectVariants['size']
  round?: keyof SelectVariants['round']
}

export interface SelectContainerProps
  extends React.PropsWithChildren,
    Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'size' | 'value' | 'onChange' | 'defaultValue'
    > {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  state?: keyof SelectVariants['state']
  size?: keyof SelectVariants['size']
  round?: keyof SelectVariants['round']
  border?: keyof SelectVariants['border']
  withBackground?: boolean
  deselect?: boolean
  mobile?: boolean
  label?: React.ReactNode
  description?: React.ReactNode
}

export type SelectProps = React.PropsWithChildren &
  Omit<
    SelectContainerProps,
    | 'className'
    | 'style'
    | 'label'
    | 'description'
    | 'state'
    | 'withBackground'
    | 'border'
  >

export type SelectOption = Record<string, string | null>

export interface OptionProps {
  value: string
  title?: string
  disabled?: boolean
  children?: string
  onSelect?: (value: string) => void
}

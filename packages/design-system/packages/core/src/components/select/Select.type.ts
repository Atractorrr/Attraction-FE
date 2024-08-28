import React from 'react'
import { variants } from './Select.style'

type SelectVariants = typeof variants

export interface DefaultSelectState {
  value: string
  setValue?: (value: string) => void
  size?: keyof SelectVariants['size']
  round?: keyof SelectVariants['round']
}

export interface SelectContainerProps<T extends string>
  extends React.PropsWithChildren,
    Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'size' | 'value' | 'onChange' | 'defaultValue'
    > {
  store?: [T, React.Dispatch<React.SetStateAction<T>>]
  defaultValue?: string
  onChange?: (value: T) => void
  state?: keyof SelectVariants['state']
  size?: keyof SelectVariants['size']
  round?: keyof SelectVariants['round']
  withBackground?: boolean
  mobile?: boolean
  label?: React.ReactNode
  description?: React.ReactNode
}

export interface SelectProps<T extends string>
  extends React.PropsWithChildren,
    Omit<
      SelectContainerProps<T>,
      | 'className'
      | 'style'
      | 'label'
      | 'description'
      | 'state'
      | 'withBackground'
    > {}

interface OptionState {
  isSelected: boolean
  select: () => void
}

export interface OptionProps<T extends string> {
  value: T
  title?: string
  disabled?: boolean
  children?: React.ReactNode | ((state: OptionState) => React.ReactNode)
  onSelect?: (value: T) => void
}

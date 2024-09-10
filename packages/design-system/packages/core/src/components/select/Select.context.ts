import React from 'react'
import type { DefaultSelectState } from './Select.type'

export const SelectContext = React.createContext<DefaultSelectState | null>(
  null,
)

export function useSelect() {
  const context = React.useContext(SelectContext)

  if (!context) {
    throw new Error('useSelect is only available within SelectProvider.')
  }
  return context
}

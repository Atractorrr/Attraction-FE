import React from 'react'
import type { DialogState } from './Dialog.type'

export const DialogContext = React.createContext<DialogState | null>(null)

export function useDialog() {
  const context = React.useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog is only available within DialogProvider.')
  }
  return context
}

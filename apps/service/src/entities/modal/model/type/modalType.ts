import { ReactNode } from 'react'

type CreateModalElement = (props: {
  isOpen: boolean
  close: () => void
}) => JSX.Element

interface ModalCloseRefType {
  close: () => void
}

interface ModalStateContextType {
  Component: ReactNode
  modalId: number
}

interface ModalDispatchContextType {
  open: (element: ReactNode, id: number) => void
  close: (id: number) => void
}

export type {
  CreateModalElement,
  ModalCloseRefType,
  ModalDispatchContextType,
  ModalStateContextType,
}

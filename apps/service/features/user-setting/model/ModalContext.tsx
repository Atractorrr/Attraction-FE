'use client'

import { createContext } from 'react'
import { ModalDispatchContextType, ModalStateContextType } from './type'

const ModalStateContext = createContext<ModalStateContextType[]>([])

const ModalDispatchContext = createContext<ModalDispatchContextType>({
  open: () => {},
  close: () => {},
})

export { ModalDispatchContext, ModalStateContext }

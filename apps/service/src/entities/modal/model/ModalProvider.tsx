'use client'

import React, { PropsWithChildren, ReactNode, useMemo, useState } from 'react'
import { ModalDispatchContext } from './ModalContext'
import { ModalStateContextType } from './type'

export default function ModalProvider({ children }: PropsWithChildren) {
  const [openModalState, setModalState] = useState<ModalStateContextType[]>([])

  const open = (element: ReactNode, id: number) => {
    setModalState((pre) => {
      return [...pre, { Component: element, modalId: id }]
    })
  }

  const close = (id: number) => {
    setModalState((pre) => {
      return pre.filter((element) => element.modalId !== id)
    })
  }

  const dispatch = useMemo(() => ({ open, close }), [])

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      {children}
      {openModalState.map(({ Component, modalId }) => (
        <React.Fragment key={modalId}>{Component}</React.Fragment>
      ))}
    </ModalDispatchContext.Provider>
  )
}

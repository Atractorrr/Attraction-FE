'use client'

import { PropsWithChildren, useMemo, useState } from 'react'
import { ModalDispatchContext, ModalStateContext } from './ModalContext'
import { ModalComponentPropType, ModalStateContextType } from './type'

export default function ModalProvider({ children }: PropsWithChildren) {
  const [openModalState, setModalState] = useState<ModalStateContextType[]>([])

  const open = (
    Component: (props: ModalComponentPropType) => JSX.Element,
    props: ModalComponentPropType,
  ) => {
    setModalState((pre) => {
      return [...pre, { Component, props }]
    })
  }

  const close = (Component: (props: ModalComponentPropType) => JSX.Element) => {
    setModalState((pre) => {
      return pre.filter((modal) => modal.Component !== Component)
    })
  }

  const dispatch = useMemo(() => ({ open, close }), [])
  return (
    <ModalStateContext.Provider value={openModalState}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  )
}

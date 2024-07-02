'use client'

import React, { useContext } from 'react'
import { ModalStateContext } from '../../model'

export default function Modals() {
  const modalState = useContext(ModalStateContext)

  return modalState.map(({ Component, modalId }) => (
    <React.Fragment key={modalId}>{Component}</React.Fragment>
  ))
}

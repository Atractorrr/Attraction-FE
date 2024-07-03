'use client'

import { useContext, useRef } from 'react'
import {
  CreateModalElement,
  ModalCloseRefType,
  ModalDispatchContext,
} from '../../model'
import { ModalController } from '../../ui'

const useModal = () => {
  const context = useContext(ModalDispatchContext)

  if (context == null) {
    throw new Error('useOverlay is only available within OverlayProvider.')
  }

  const { open, close } = context

  const modalCloseRef = useRef<ModalCloseRefType | null>(null)

  const openModal = (modalComponent: CreateModalElement) => {
    const modalId = Date.now()

    open(
      <ModalController
        modalElement={modalComponent}
        exitFromModalArr={() => close(modalId)}
        ref={modalCloseRef}
      />,
      modalId,
    )
  }

  const closeModal = () => {
    modalCloseRef.current?.close()
  }

  return { openModal, closeModal }
}

export default useModal

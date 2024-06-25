'use client'

import { useContext } from 'react'
import { ModalDispatchContext, ModalStateContext } from '../../model'

export default function Modals() {
  const modalState = useContext(ModalStateContext)
  const { close } = useContext(ModalDispatchContext)

  return modalState.map(({ Component, props }, i) => {
    const onClose = () => {
      close(Component)
    }

    return (
      <Component
        // TODO: ID 값을 UUID로 만들기?
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        onClose={onClose}
        onSubmit={props.onSubmit}
        initialValue={props.initialValue}
      />
    )
  })
}

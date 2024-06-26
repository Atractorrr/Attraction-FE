import { useContext } from 'react'
import { ModalDispatchContext, ModalComponentPropType } from '../../model'

const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext)

  const openModal = (
    Component: (props: ModalComponentPropType) => JSX.Element,
    props: ModalComponentPropType,
  ) => {
    open(Component, props)
  }

  const closeModal = (
    Component: (props: ModalComponentPropType) => JSX.Element,
  ) => {
    close(Component)
  }

  return { openModal, closeModal }
}

export default useModal

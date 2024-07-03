'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { CreateModalElement } from '../model'

interface ModalPropsType {
  modalElement: CreateModalElement
  exitFromModalArr: () => void
}

export default forwardRef(function ModalController(
  { modalElement: ModalElement, exitFromModalArr }: ModalPropsType,
  ref,
) {
  const [isOpen, setIsOpen] = useState(false)
  const handleModalClose = useCallback(() => {
    setIsOpen(false)

    // 메모리에서 완전히 모달을 삭제 하기 위함이고 아래 코드를 추가 안하면 모달 animation이 바로 적용이 안된다.
    setTimeout(() => {
      exitFromModalArr()
    }, 100)
  }, [exitFromModalArr])

  useImperativeHandle(
    ref,
    () => {
      return { close: handleModalClose }
    },
    [handleModalClose],
  )

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return <ModalElement isOpen={isOpen} close={handleModalClose} />
})

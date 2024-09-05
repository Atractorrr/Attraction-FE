import React from 'react'
import { useOverlay } from '../../core'
import ConfirmDialog from './ConfirmDialog'

export default function useConfirm() {
  const overlay = useOverlay()

  return (
    content: string,
    config?: Pick<
      React.ComponentProps<typeof ConfirmDialog>,
      'title' | 'type' | 'cancelButtonTitle' | 'confirmButtonTitle'
    >,
  ) => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => {
        return (
          <ConfirmDialog
            content={content}
            open={isOpen}
            onClose={close}
            onCancel={() => resolve(false)}
            onConfirm={() => resolve(true)}
            {...config}
          />
        )
      })
    })
  }
}

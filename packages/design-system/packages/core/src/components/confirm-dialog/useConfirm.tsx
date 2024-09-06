import React from 'react'
import { useOverlay } from '../../core'
import ConfirmDialog from './ConfirmDialog'

export type ConfirmConfig = Pick<
  React.ComponentProps<typeof ConfirmDialog>,
  'title' | 'type' | 'cancelButtonTitle' | 'confirmButtonTitle'
>

export default function useConfirm(defaultConfig?: ConfirmConfig) {
  const overlay = useOverlay()

  return (content: string, config?: ConfirmConfig) => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => {
        const option = config ?? defaultConfig ?? {}
        return (
          <ConfirmDialog
            content={content}
            open={isOpen}
            onClose={close}
            onCancel={resolve}
            onConfirm={resolve}
            {...option}
          />
        )
      })
    })
  }
}

import React from 'react'
import { useOverlay } from '../../core'
import ConfirmDialog from './ConfirmDialog'

export type ConfirmConfig = Pick<
  React.ComponentProps<typeof ConfirmDialog>,
  'title' | 'type' | 'cancelButtonTitle' | 'confirmButtonTitle'
>

export default function useConfirm(defaultConfig?: ConfirmConfig) {
  const overlay = useOverlay()

  return (content: string, config?: ConfirmConfig) =>
    new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => {
        return (
          <ConfirmDialog
            content={content}
            open={isOpen}
            onClose={close}
            onCancel={resolve}
            onConfirm={resolve}
            title={config?.title || defaultConfig?.title}
            type={config?.type || defaultConfig?.type}
            cancelButtonTitle={
              config?.cancelButtonTitle || defaultConfig?.cancelButtonTitle
            }
            confirmButtonTitle={
              config?.confirmButtonTitle || defaultConfig?.confirmButtonTitle
            }
          />
        )
      })
    })
}

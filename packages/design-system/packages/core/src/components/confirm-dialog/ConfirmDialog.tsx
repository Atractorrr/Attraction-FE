import React from 'react'
import { Dialog } from '../dialog'
import { Button } from '../button'

type ConfirmDialogType = 'danger' | 'warn' | 'info' | 'success' | 'default'

const confirmType: Record<
  ConfirmDialogType,
  React.ComponentProps<typeof Button>['color']
> = {
  danger: 'red',
  warn: 'yellow',
  info: 'blue',
  success: 'green',
  default: 'gray',
}

interface ConfirmDialogProps {
  title?: string
  content: string
  open?: boolean
  onClose?: () => void
  withoutDimmed?: boolean
  type?: ConfirmDialogType
  onCancel?: (status: false) => void
  cancelButtonTitle?: string
  onConfirm?: (status: true) => void
  confirmButtonTitle?: string
}

export default function ConfirmDialog({
  title,
  content,
  type,
  onCancel,
  cancelButtonTitle,
  onConfirm,
  confirmButtonTitle,
  ...props
}: ConfirmDialogProps) {
  const separatedContent = React.useMemo(() => content.split('\n'), [content])
  return (
    <Dialog position="top" cancelWithOutsideClick={false} {...props}>
      <Dialog.Header>
        <Dialog.Title>{title || 'Attraction'}</Dialog.Title>
      </Dialog.Header>
      <Dialog.Content>
        <p>
          {separatedContent.map((separated, i) => (
            <React.Fragment key={separated}>
              {separated}
              {i + 1 !== separatedContent.length && <br />}
            </React.Fragment>
          ))}
        </p>
      </Dialog.Content>
      <Dialog.Footer style={{ padding: 0, border: 'none' }}>
        <Button
          variant="light"
          onClick={() => {
            onCancel?.(false)
            props?.onClose?.()
          }}>
          {cancelButtonTitle || '취소'}
        </Button>
        <Button
          variant="filled"
          color={confirmType[type || 'default']}
          onClick={() => {
            onConfirm?.(true)
            props?.onClose?.()
          }}>
          {confirmButtonTitle || '확인'}
        </Button>
      </Dialog.Footer>
    </Dialog>
  )
}

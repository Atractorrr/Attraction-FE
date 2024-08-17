import React from 'react'
import { useTimeout } from '@attraction/ds-hooks'
import { copy as copyToClipboard } from '@attraction/utils'

interface CopyButtonState {
  status: boolean
  copy: () => Promise<void>
}

interface CopyButtonProps {
  value: string
  children: (params: CopyButtonState) => React.JSX.Element
  delay?: number
  onSuccess?: () => void
  onFailed?: () => void
}

export default function CopyButton({
  value,
  delay = 800,
  children,
  onSuccess,
  onFailed,
}: CopyButtonProps) {
  const { start } = useTimeout()
  const [status, setStatus] = React.useState(false)

  const copy = React.useCallback(async () => {
    try {
      const success = await copyToClipboard(value)
      if (!success) {
        throw new Error('failed to copy')
      }
      start(() => setStatus(false), delay)
      setStatus(true)
      onSuccess?.()
    } catch {
      onFailed?.()
    }
  }, [value, delay, onSuccess, onFailed])

  return children({ status, copy })
}

/* eslint-disable no-plusplus */
import React from 'react'
import { OverlayContext } from './OverlayProvider'
import OverlayController from './OverlayController'
import type { CreateOverlayElement, OverlayControlRef } from './Overlay.type'

let elementId = 1

export default function useOverlay() {
  const context = React.useContext(OverlayContext)

  if (!context) {
    throw new Error('useOverlay is only available within OverlayProvider.')
  }

  const { mount, unmount } = context
  const [id] = React.useState(() => `overlay-${elementId++}`)
  const overlayRef = React.useRef<OverlayControlRef | null>(null)

  React.useEffect(() => {
    return () => unmount(id)
  }, [id, unmount])

  return React.useMemo(() => {
    return {
      open: (overlayElement: CreateOverlayElement) =>
        mount(
          id,
          <OverlayController
            key={Date.now()}
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => unmount(id)}
          />,
        ),
      close: () => overlayRef.current?.close(),
      exit: () => unmount(id),
    }
  }, [id, mount, unmount])
}

import React from 'react'
import { createPortal } from 'react-dom'
import type { OverlayState } from './Overlay.type'

export const OverlayContext = React.createContext<OverlayState | null>(null)

export default function OverlayProvider({ children }: React.PropsWithChildren) {
  const [overlayMap, setOverlayMap] = React.useState(() => {
    return new Map<string, React.ReactNode>()
  })

  const mount = React.useCallback((id: string, element: React.ReactNode) => {
    setOverlayMap((prevOverlay) => {
      const clonedMap = new Map(prevOverlay)
      clonedMap.set(id, element)
      return clonedMap
    })
  }, [])

  const unmount = React.useCallback((id: string) => {
    setOverlayMap((prevOverlay) => {
      const clonedMap = new Map(prevOverlay)
      clonedMap.delete(id)
      return clonedMap
    })
  }, [])

  const context = React.useMemo(() => ({ mount, unmount }), [mount, unmount])

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {createPortal(
        [...overlayMap.entries()].map(([id, element]) => (
          <React.Fragment key={id}>{element}</React.Fragment>
        )),
        document.body,
      )}
    </OverlayContext.Provider>
  )
}

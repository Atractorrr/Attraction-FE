interface OverlayElementState {
  isOpen: boolean
  close: () => void
  exit: () => void
}

export type CreateOverlayElement = (props: OverlayElementState) => JSX.Element

export interface OverlayControllerProps {
  overlayElement: CreateOverlayElement
  onExit: () => void
}

export interface OverlayControlRef {
  close: () => void
}

export interface OverlayState {
  mount(id: string, element: React.ReactNode): void
  unmount(id: string): void
}

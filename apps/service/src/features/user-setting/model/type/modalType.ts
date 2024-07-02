interface ModalComponentPropType {
  onSubmit: (value: unknown) => void
  onClose?: () => void
  initialValue?: unknown
}

interface ModalStateContextType {
  Component: (props: ModalComponentPropType) => JSX.Element
  props: ModalComponentPropType
}

interface ModalDispatchContextType {
  open: (
    Component: (props: ModalComponentPropType) => JSX.Element,
    props: ModalComponentPropType,
  ) => void
  close: (Component: (props: ModalComponentPropType) => JSX.Element) => void
}

export type {
  ModalComponentPropType,
  ModalDispatchContextType,
  ModalStateContextType,
}
